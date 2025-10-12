const { MongoClient } = require("mongodb");


const url =
 "mongodb+srv://himanshudev:btM4GSQA8PsCPCoX@namastenode.zfrrlvt.mongodb.net/";

const client = new MongoClient(url);
const dbName = "HelloWorld";


async function main() {

  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection('User');

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>" , findResult)


  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());