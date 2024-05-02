import { Boats } from "../models/Boats.js";

export function editBoat(boatId, boatUpdateInfo) {
  return Boats.findByIdAndUpdate(
    boatId,
    { $set: boatUpdateInfo },
    { new: true }
  );
}
