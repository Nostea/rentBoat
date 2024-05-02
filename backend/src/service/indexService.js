import { addBoats } from "./addBoat.js";
import { addReservation } from "./addReservation.js";
import { editBoat } from "./editBoat.js";
import { editReservation } from "./editReservation.js";
import { removeBoats } from "./removeBoat.js";
import { removeReservation } from "./removeReservation.js";
import { showAllBoats } from "./showAllBoats.js";
import { showAllReservations } from "./showAllReservations.js";
import { showBoatDetail } from "./showBoatDetail.js";
import { showReservationDetail } from "./showReservationDetail.js";

//BoatsService mit den service func zu den Boats
export const BoatsService = {
  showBoatDetail,
  showAllBoats,
  addBoats,
  editBoat,
  removeBoats,
};

//ReservationService mit den service func der Reservations

export const ReservationsService = {
  showAllReservations,
  addReservation,
  editReservation,
  showReservationDetail,
  removeReservation,
};
