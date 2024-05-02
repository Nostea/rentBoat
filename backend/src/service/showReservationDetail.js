import { Reservations } from "../models/Reservations.js";
import { Boats } from "../models/Boats.js";

export function showReservationDetail(reservationId) {
  return Promise.all([
    Boats.findById(reservationId),
    Reservations.find({ reservationId }), // alle reservations zu einem Boat [...]
  ]).then(([foundReservation, reservations]) => {
    // merge boat with reservation
    if (foundReservation)
      return { ...foundReservation.toObject(), reservations };
    else return null;
  });
}
