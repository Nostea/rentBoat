import { addBoats } from "./addBoat";
import { addReservation } from "./addReservation";
import { editBoat } from "./editBoat";
import { editReservation } from "./editReservation";
import { removeBoats } from "./removeBoat";
import { showAllBoats } from "./showAllBoats";
import { showAllReservations } from "./showAllReservations";
import { showBoatDetail } from "./showBoatDetail";

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
};
