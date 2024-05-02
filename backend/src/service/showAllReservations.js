import { Reservations } from "../models/Reservations.js";

export function showAllReservations() {
  return Reservations.find({});
}
