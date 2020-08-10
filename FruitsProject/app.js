const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "myproject";

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use Connect Method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    insertDocuments(db, () => {
        client.close();
    });
});

const insertDocuments = function(db, callback) {
    const collection = db.collection("fruits");
    // Insert Some Documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great Fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff!"
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    })
}