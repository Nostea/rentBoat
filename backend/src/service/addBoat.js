import { Boats } from "../models/Boats.js";

export function addBoats(boatInfo) {
  return Boats.findOne({ name: boatInfo.name }).then((foundBoat) => {
    if (foundBoat) {
      // Boat mit dem namen exisitert bereits!! (wollen wir nicht)
      // throw ist wie ein "negatives return" (zitat resul) und schickt den wert new Error("...") an das .catch()
      throw new Error("boat with this name already exists");
    } else {
      return Boats.create(boatInfo);
    }
  });
}
