document.addEventListener('DOMContentLoaded', () => {
  const Q = (s) => document.querySelector(s)
  const QC = (s, click) => {
    const d = document.querySelector(s)
    d.addEventListener('click', click)
    return d
  }
  const openFiles = async () => {
    return new Promise((resolve) => {
      const input = document.createElement('input')
      input.type = 'file'
      input.multiple = true // 允许选择多个文件
      input.accept = '.txt,.pdf,.docx' // 允许的文件类型，可以根据需要调整
      input.addEventListener('change', () => {
        resolve(input.files)
      })
      input.click()
    })
  }

  function prepareHDCanvas(canvas, w, h) {
    const ratio = window.devicePixelRatio || 1
    canvas.width = w * ratio
    canvas.height = h * ratio
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    const ctx = canvas.getContext('2d')
    ctx.scale(ratio, ratio)
    return canvas
  }

  const ipt_image = Q('#ipt_image')
  const resultsContainer = Q('#resultsContainer')

  const serverSelector = Q('#server')
  let SERVER = serverSelector.value
  serverSelector.addEventListener('change', () => {
    SERVER = serverSelector.value
  })

  let files = []
  let DATA = {
    login_url: '',
    process_url: '',
    process_single_url: '',
    token: '',
    single: false,
    font: 0,
    isCheckExamNum: true,
    lowMark: 70,
  }

  const singleSelector = Q('#single')
  DATA.single = singleSelector.value
  singleSelector.addEventListener('change', () => {
    DATA.single = singleSelector.value
  })

  const fontSelector = Q('#font')
  DATA.font = fontSelector.value
  fontSelector.addEventListener('change', () => {
    DATA.font = fontSelector.value
  })

  const examNumSelector = Q('#exam_num')
  DATA.isCheckExamNum = examNumSelector.value
  examNumSelector.addEventListener('change', () => {
    DATA.isCheckExamNum = examNumSelector.value
  })

  ipt_image.addEventListener('change', async function (e) {
    files = Array.from(e.target.files)
    resultsContainer.innerHTML = '' // 清空之前的结果
    for (const f of files) {
      await handleChooseFile(f)
    }
  })

  QC('#login', () => {
    handleLogin()
  })

  function handleLogin() {
    let user = Q('#ipt_user').value
    let pass = Q('#ipt_pass').value

    const jsonParams = {
      apiKey: user,
      apiSecret: pass,
    }

    fetch(SERVER + '/sdkMgr/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonParams),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((response) => {
        console.log('login response', response)
        if (response.code === 0) {
          let token = response.data.accessToken
          DATA.token = token
          Q('#login_result').textContent = '登录成功'
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function handleChooseFile(file) {
    let blob = await compressImageFile(file)
    let imageData = await file2ImageData(blob)
    let data = await evaluationImageData(imageData)
    data.filename = file.name
    await displayResults(data)
    console.log('测评结束', data)
  }

  function file2ImageData(blob) {
    return new Promise((r, j) => {
      const compressFile = new File([blob], 'tmp.jpg', { type: blob.type })
      const reader = new FileReader()

      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          r({
            img,
            file: compressFile,
            filesize_str: `${(compressFile.size / 1024).toFixed(2)}KB`,
          })
        }
        img.src = event.target.result
      }

      reader.readAsDataURL(compressFile)
    })
  }

  async function evaluationImageData(imgData) {
    return new Promise(async (r, j) => {
      const startTime = performance.now()

      let ipt_user = Q('#ipt_user')
      console.log('file size ', imgData.file.size)

      const formData = new FormData()
      formData.append('sdk', 'WordEvaluation')
      formData.append('device_id', 'test_device_id')
      formData.append('w', imgData.img.width)
      formData.append('h', imgData.img.height)
      formData.append('rotation', 0)
      formData.append('jpgSize', imgData.file.size)
      formData.append('isCheckExamNum', DATA.isCheckExamNum)
      formData.append('font', DATA.font)
      formData.append('userId', ipt_user.value)
      formData.append('file', imgData.file)

      let headers = {
        'X-SW-Auth-Token': DATA.token,
      }

      let url = ''
      if (DATA.single == 'true') {
        url = SERVER + '/sdkMgr/sdk/sdkConcentrationDetectSingle'
      } else {
        url = SERVER + '/sdkMgr/sdk/sdkConcentrationDetect'
      }

      let response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: formData,
      })

      let data = await response.json()
      const endTime = performance.now()
      const elapsedTime = endTime - startTime
      r({ imgData, data: data, elapsedTime: elapsedTime })
    })
  }

  async function displayResults({ imgData, data, elapsedTime, filename }) {
    console.log(displayResults, imgData, data, elapsedTime)
    const img = imgData.img

    const resultDiv = document.createElement('div')
    resultDiv.className = 'horizontal-container'
    resultDiv.style.border = '1px solid black'
    const rightDiv = document.createElement('div')
    rightDiv.className = 'vertical-container'

    let mouseX = 0
    let mouseY = 0
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const maxWidth = 1000

    const scale = img.width > maxWidth ? maxWidth / img.width : 1
    canvas.width = img.width * scale
    canvas.height = img.height * scale
    prepareHDCanvas(canvas, canvas.width, canvas.height)
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height
    )

    const wordDetail = document.createElement('pre')
    wordDetail.className = 'word-detail'

    const base64Mask = document.createElement('canvas')
    base64Mask.width = 128
    base64Mask.height = 128
    base64Mask.className = 'base64Mask'

    function genPageInfoEl() {
      let pageInfo = '卷面分：' + data.data.pageMark
      let p = document.createElement('p')
      p.textContent = pageInfo
      p.style.color = 'red'
      return p
    }
    rightDiv.appendChild(genPageInfoEl())

    function genExtraInfoEl() {
      let extraInfo =
        '测评耗时（包含网络请求）' + `${elapsedTime.toFixed(2)} ms`
      let p = document.createElement('p')
      p.textContent = extraInfo
      return p
    }

    resultDiv.appendChild(canvas)
    rightDiv.appendChild(base64Mask)
    rightDiv.appendChild(wordDetail)
    rightDiv.appendChild(
      (() => {
        let p = document.createElement('p')
        p.textContent = '学号测评 ' + data.data.examNum
        p.style.color = 'red'
        return p
      })()
    )
    rightDiv.appendChild(genExtraInfoEl())
    rightDiv.appendChild(
      (() => {
        let p = document.createElement('p')
        p.textContent = '文件名 ' + filename
        return p
      })()
    )
    resultDiv.appendChild(rightDiv)

    resultsContainer.appendChild(resultDiv)

    const ocrResults = data.data.ocrResults
    const wordMarks = data.data.wordMarks

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        imgData.img,
        0,
        0,
        imgData.img.width,
        imgData.img.height,
        0,
        0,
        canvas.width,
        canvas.height
      )

      ocrResults.forEach((ocr, i) => {
        const word = wordMarks[i]
        let x = ocr.points[0] * scale
        let y = ocr.points[1] * scale
        let width = (ocr.points[4] - ocr.points[0]) * scale
        let height = (ocr.points[5] - ocr.points[1]) * scale

        if (
          mouseX >= x &&
          mouseX <= x + width &&
          mouseY >= y &&
          mouseY <= y + height
        ) {
          ctx.strokeStyle = 'blue'
          ctx.fillStyle = 'blue'
          ctx.lineWidth = 2
          ctx.font = `${width / 3}px Arial`
          ctx.strokeRect(x, y, width, height)
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5)

          let wordInfo = showWordsInfo(ocr, word)
          wordDetail.textContent = wordInfo

          drawMask(base64Mask, ocr.label, word.base64Mark)
        } else {
          ctx.lineWidth = 2
          ctx.font = '18px Arial'
          if (word.mark < DATA.lowMark) {
            ctx.strokeStyle = 'red'
            ctx.fillStyle = 'red'
          } else {
            ctx.strokeStyle = '#2e8b57'
            ctx.fillStyle = '#2e8b57'
          }

          ctx.strokeRect(x, y, width, height)
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5)
        }
      })
      if (mouseX == 0 && mouseY == 0 && ocrResults.length > 0) {
        drawMask(base64Mask, ocrResults[0].label, wordMarks[0].base64Mark)
        let wordInfo = showWordsInfo(ocrResults[0], wordMarks[0])
        wordDetail.textContent = wordInfo
      }
    }

    canvas.addEventListener('click', function (event) {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
      draw()
    })

    let drawMask = function (canvas, label, base64String) {
      canvas.width = 128
      canvas.height = 128
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 标准字
      const x = canvas.width / 2
      const y = canvas.height / 2
      ctx.fillStyle = '#FF5733'
      if (DATA.font == 0) {
        ctx.font = '106px kaiti'
      } else {
        ctx.font = '80px sijie'
      }

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(label, x, y)

      var binaryData = atob(base64String)
      var byteArray = new Uint8Array(binaryData.length)
      for (var i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i)
      }

      function draw() {
        function drawBinaryImage(bits) {
          for (let i = 0; i < 128; ++i) {
            for (let j = 0; j < 128; ++j) {
              let bit = bits[128 * i + j]

              if (bit === 0) {
                const colorValue = bit === 0 ? 0 : 255
                ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`
                ctx.fillRect(j, i, 1, 1)
              }
            }
          }
        }
        let bits = displayBits(byteArray)
        drawBinaryImage(bits)

        function displayBits(uint8Array) {
          function getBitValues(data) {
            const bitValues = []

            for (let i = 0; i < data.length; i++) {
              for (let j = 7; j >= 0; j--) {
                const bit = (data[i] >> j) & 1
                bitValues.push(bit)
              }
            }

            return bitValues
          }

          const bits = getBitValues(uint8Array)
          return bits
        }
      }
      draw()
    }

    let showWordsInfo = function (ocrResult, wordMark) {
      // 构建文本信息
      let sb = []
      sb.push(ocrResult.label + '\n')
      if (wordMark.mark <= 0) {
        sb.push('暂无识别字的评测数据\n')
      }
      sb.push('综合得分 ' + wordMark.mark + '\n')
      sb.push('重心得分 ' + wordMark.centerMark)

      if (wordMark.centerInfo === 0) {
        sb.push('良好')
      } else if (wordMark.centerInfo === 1) {
        sb.push('偏上')
      } else if (wordMark.centerInfo === 2) {
        sb.push('偏下')
      } else if (wordMark.centerInfo === 3) {
        sb.push('偏左')
      } else if (wordMark.centerInfo === 4) {
        sb.push('偏右')
      }
      sb.push('\n')

      sb.push('形态得分 ' + wordMark.rateMark)
      if (wordMark.rateInfo === 0) {
        sb.push('良好')
      } else if (wordMark.rateInfo === 1) {
        sb.push('太宽')
      } else if (wordMark.rateInfo === 2) {
        sb.push('太瘦')
      }
      sb.push('\n')

      sb.push('大小得分 ' + wordMark.areaMark)
      if (wordMark.areaInfo === 0) {
        sb.push('良好')
      } else if (wordMark.areaInfo === 1) {
        sb.push('太小')
      } else if (wordMark.areaInfo === 2) {
        sb.push('太大')
      }
      sb.push('\n')

      sb.push('位置得分 ' + wordMark.posMark)
      if (wordMark.posInfo === 0) {
        sb.push('良好')
      } else if (wordMark.posInfo === 1) {
        sb.push('偏上')
      } else if (wordMark.posInfo === 2) {
        sb.push('偏下')
      } else if (wordMark.posInfo === 3) {
        sb.push('偏左')
      } else if (wordMark.posInfo === 4) {
        sb.push('偏右')
      }
      sb.push('\n')

      sb.push('笔画得分 ' + wordMark.conFMark)
      if (wordMark.conFInfo === 0) {
        sb.push('良好')
      } else if (wordMark.conFInfo === 1) {
        sb.push('不良')
      }
      sb.push('\n')

      return sb.join('')
    }
    draw()
  }

  function compressImageFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function (event) {
        const img = new Image()
        img.onload = function () {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)
          canvas.toBlob(
            function (blob) {
              resolve(blob)
            },
            'image/jpeg',
            0.8
          )
        }
        img.src = event.target.result
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }
})
