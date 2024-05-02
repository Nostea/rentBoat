import { Boats } from "../models/Boats.js";
import { Reservations } from "../models/Reservations.js";

/* export function addReservation(reservationInfo, boatId) {
  return Boats.findById(boatId).then((foundBoat) => {
    if (!foundBoat) {
      throw new Error("boat with this id doesn't exist");
    } else {
      return Reservations.create({ ...reservationInfo, boatId });
    }
  });
}
 */

export function addReservation(newReserv) {
  return Reservations.find({})
    .then((AllRes) => {
      return AllRes.filter(
        (oldReserv) =>
          (newReserv.startDate > oldReserv.startDate &&
            newReserv.startDate < oldReserv.endDate) ||
          (newReserv.endDate > newReserv.startDate &&
            newReserv.endDate < oldReserv.endDate)
      );
    })
    .then((found) => {
      if (found) {
        throw new Error(
          "Reservierung nicht möglich, bitte anderen Zeitraum oder anderes Boot wählen"
        );
      } else {
        return Reservierung.create(newReservierung);
      }
    });
}
