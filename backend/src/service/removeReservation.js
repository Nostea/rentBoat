import { Reservations } from "../models/Reservations.js";

export function removeReservation(reservationId) {
  return Reservations.findByIdAndDelete(reservationId).then((removedReserv) => {
    if (!removedReserv)
      throw new Error(" reservation with this id doesn't exist!");
    else return removedReserv;
  });
}
