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

    db.collection("users")
      .deleteMany({ age: 23 })
      .then((res) => console.log("Success"))
      .catch((err) => console.log("fail"));
  }
);
