import express from "express";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import { ObjectId } from "mongodb";
import { body, param, validationResult } from "express-validator";
import { BoatsDAO } from "./db-access/boatsDAO.js";

const PORT = 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ hello: "world" })); //el trash

// ! eigentlich müsste man die bilder nach mongoDB hochladen
const upload = multer({ dest: "./uploads" });
app.post("/api/v1/files/upload", upload.single("attachment"), (request, response) => {
  response.json({ attachmentFile: request.file.filename });
});

app.get("/api/v1/boats", (req, res) => {
  BoatsDAO.findAll()
    .then((boats) => res.json(boats))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all boats" });
    });
});

app.get("/api/v1/boats/:boatId", (req, res) => {
  const boatId = req.params.boatId;

  BoatsDAO.findById(boatId)
    .then(
      (foundBoat) => res.json(foundBoat ? { ...foundBoat } : {}) // { result: foundRecipe } | { error, message }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find boat " + boatId });
    });
});

app.post("/api/v1/boats", (req, res) => {
  const newBoat = req.body;

  BoatsDAO.createOne(newBoat)
    .then((addedBoat) => res.json(addedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new boat" });
    });
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
