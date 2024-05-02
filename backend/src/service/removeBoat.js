import { Boats } from "../models/Boats.js";

export function removeBoats(boatId) {
  return Boats.findByIdAndDelete(boatId).then((removedBoat) => {
    if (!removedBoat) throw new Error(" boat with this id doesn't exist!");
    else return removedBoat;
  });
}
