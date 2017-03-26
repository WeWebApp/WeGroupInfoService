import crypto from 'crypto';

class WxCryptLib{
    constructor(appId,sessionKey){
        this.appId = appId;
        this.sessionKey = sessionKey;
    }
    decryptData(encryptedData,iv){
        let cSessionKey = new Buffer(this.sessionKey, 'base64');
        let cEncryptedData = new Buffer(encryptedData, 'base64');
        let cIv = new Buffer(iv, 'base64');
        let decoded;
        try {
            let decipher = crypto.createDecipheriv('aes-128-cbc', cSessionKey, cIv);
            decipher.setAutoPadding(true);
            decoded = decipher.update(encryptedData, 'binary', 'utf8');
            decoded += decipher.final('utf8');
            decoded = JSON.parse(decoded);
        } catch (err) {
            throw new Error('Illegal Buffer');
        }
        if (decoded.watermark.appid !== this.appId) {
            throw new Error('Illegal Buffer');
        }
        return decoded;
    }
}

export default WxCryptLib;
