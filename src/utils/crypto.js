import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse("abcdef7890123456");
const iv = CryptoJS.enc.Utf8.parse("1234567890abcdef");

export const encrypt = (plaintText) => {
    const encryptedData = CryptoJS.AES.encrypt(`${plaintText}`, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        // padding: CryptoJS.pad.Pkcs7
    })
    return encryptedData.ciphertext.toString();
}

export const decrypt = (encryptedData) => {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedData)
    const encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        // padding: CryptoJS.pad.Pkcs7
    })
    return decryptedData.toString(CryptoJS.enc.Utf8)
}
