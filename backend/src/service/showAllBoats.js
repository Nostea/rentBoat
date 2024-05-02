import { Boats } from "../models/Boats.js";

export function showAllBoats() {
  return Boats.find({});
}
