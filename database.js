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

    // Create a new user.

    const data = {
        firstname: "Himanshu",
        lastname: "Mawari",
        city: "delhi",
        phoneNumber: "9874652831",
        rollNo: 3
    };

    // CRUD operation.

    // Create operation

    // const insertResult = await collection.insertOne(data);
    // console.log(`Result of the insertion : ${insertResult}`)

    // Update operation 
    // Update one data
    // const updateResult = await collection.updateOne(
    //     { phoneNumber: "9874652831" },
    //     {  $set: { city: "delhi" } }
    // );

    // update multiple data 
    // const updateResult = await collection.updateMany( { phoneNumber: "9874652831" } , { $set: { city : "Uttrakhand"} });

    // Delete operation

    // const deleteResult = await collection.deleteMany({lastname : "Sharma"})
    // const deleteResult = await collection.deleteOne({lastname : "Sharma"})

    // const deleteResult = await collection.deleteOne({lastname : "Mawari"})

    // Read operation

    // Read all users

    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult)

    const countUser = await collection.countDocuments({});
    console.log("Number of users : ", countUser)

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

