import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL; // conenction url from mongodb atlas

const client = new MongoClient(url);

//* singleton (nach dem singleton pattern)
let dbRef = null; // Datenbank zu der wir uns verbinden werden

export function getDb() {
  return new Promise((resolve, reject) => {
    if (dbRef) {
      return resolve(dbRef);
    }
   
    client
      .connect()
      .then((connectedClient) => {
        const dbName = "boatsDB";
        const db = connectedClient.db(dbName);
        dbRef = db; // datenbank referenz zwischenspeichern, damit wir beim nächsten aufruf von getDb direkt in das if gelangen
        resolve(db);
      })
      .catch((err) => reject(err));
  });
}
