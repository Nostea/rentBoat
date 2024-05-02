import { Reservations } from "../models/Reservations.js";

export function editReservation(reservationId, reservationUpdateInfo) {
  return Reservations.findByIdAndUpdate(
    reservationId,
    { $set: reservationUpdateInfo },
    { new: true }
  );
}
