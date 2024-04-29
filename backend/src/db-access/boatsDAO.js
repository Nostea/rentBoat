import { ObjectId } from "mongodb";
import { getDb } from "./getDB.js";

//! ich brauche id von movie und id von favorites.
//wenn es existiert

function findAll() {
  return getDb().then((db) => db.collection("boats").find().toArray());
}

function findById(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) => db.collection("boats").findOne({ _id: idAsObjectId })); //! ein Promise
}

function createOne(documentInfo) {
  return getDb()
    .then((db) => db.collection("boats").insertOne(documentInfo)) // { acknowledged: true, insertedId: ObjectId("...") }
    .then(
      (result) => (result.acknowledged ? { ...documentInfo, _id: result.insertedId } : null) // kopie com dokumnt mit _id (===> gleicher wert wie in der datenbank)
    );
}

export const BoatsDAO = {
  findAll,
  findById,
  createOne,
};
