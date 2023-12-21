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



async function getJSONFile(filename) {
    const contents = await getFile(filename);
    return JSON.parse(contents.toString());
}



async function saveFile(fileName, contents) {
    await storage.bucket(bucketName).file(fileName).save(contents);
}



module.exports = {
    setBucketName,
    getFile,
    getJSONFile,
    saveFile
}