const {Storage} = require('@google-cloud/storage');
const storage = new Storage();



async function getFile(bucketName, fileName) {
    const contents = await storage.bucket(bucketName).file(fileName).download();
    return contents;
}



module.exports = {
    getFile
}