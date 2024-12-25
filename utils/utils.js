import CryptoJS from 'crypto-js';

// 从环境变量中读取密钥和初始化向量
const secretKey = process.env.SECRET_KEY || 'zexishuhua123456'; // 请使用强密码替换
const iv = CryptoJS.enc.Utf8.parse(process.env.IV || '1234567890abcdef'); // 确保iv函数与block size相同，相对于AES为16字节
const mode = CryptoJS.mode.CBC; // 选择CBC模式
const padding = CryptoJS.pad.Pkcs7; // 选择PKCS7填充

// AES CBC模式加密函数
export const aesEncrypt = (data) => {
  if (!data) {
    return ''; // 处理空字符串
  }
  try {
    const encrypted = CryptoJS.AES.encrypt(
      data,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: iv,
        mode: mode,
        padding: padding,
      }
    );
    return encrypted.toString(); // 返回加密后的字符串
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Encryption failed');
  }
};

// AES CBC模式解密函数
export const aesDecrypt = (cipherText) => {
  if (!cipherText) {
    return ''; // 处理空字符串
  }
  try {
    const decrypted = CryptoJS.AES.decrypt(
      cipherText,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: iv,
        mode: mode,
        padding: padding,
      }
    );
    return decrypted.toString(CryptoJS.enc.Utf8); // 返回解密后的明文
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Decryption failed');
  }
};
