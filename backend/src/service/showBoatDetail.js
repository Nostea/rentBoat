import { Reservations } from "../models/Reservations.js";
import { Boats } from "../models/Boats.js";

export function showBoatDetail(boatId) {
  return Promise.all([
    Boats.findById(boatId),
    Reservations.find({ boatId }), // alle reservations zu einem Boat [...]
  ]).then(([foundBoat, reservations]) => {
    // merge boat with reservation
    if (foundBoat) return { ...foundBoat.toObject(), reservations };
    else return null;
  });
}
