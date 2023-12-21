const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

let bucketName = null;



async function setBucketName(bucket) {
    return new Promise((resolve) => {
        bucketName = bucket;
        resolve(bucket);
    });
}



async function getFile(fileName) {
    const contents = await storage.bucket(bucketName).file(fileName).download();
    return contents;
}



module.exports = {
    setBucketName,
    getFile
}