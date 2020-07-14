// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to database");
    }

    console.log("MongoDB Connected...");
    const db = client.db(databaseName);

    db.collection("tasks").findOne(
      {
        _id: new ObjectID("5f0c7cc07a3c770954471111"),
      },
      (err, res) => {
        console.log(res);
      }
    );

    db.collection("tasks")
      .find({ completed: true })
      .toArray((err, res) => {
        console.log(res);
      });
  }
);
