import { useState } from "react";
import { backendUrl } from "../api/api";
import { useParams } from "react-router-dom";

const ReservationCard = ({
  reservationId,
  startDate,
  endDate,
  name,
  reservations,
  setReservations,
}) => {
  const editReservation = () => {
    if (new Date() > startDate || startDate > endDate) {
      return console.log("please give a valid date");
    }

    const updateReservation = {
      startDate,
      endDate,
      name,
    };

    fetch(`${backendUrl}/api/v1/reservations/${reservationId}`, {
      method: "PATCH",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateReservation),
    })
      .then((res) => res.json())
      .then((editedReservation) => {
        const filter = reservations.filter(
          (singleRes) => singleRes._id !== editedReservation._id
        );

        setReservations([editedReservation, ...filter]);
      })
      .catch((err) => console.log(err));
  };

  const deleteReservation = () => {
    fetch(`${backendUrl}/api/v1/reservations/${reservationId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedReservation) => {
        setReservations(
          reservations.filter(
            (singleRes) => singleRes._id !== deletedReservation._id
          )
        );
      })
      .catch((err) => console.log(err, " cannot delete reservation"));
  };

  return (
    <article className=" bg-white flex flex-col">
      <div className="flex flex-row justify-between pb-4">
        <p>Start Date</p> <p>{`${startDate}`}</p>
      </div>
      <div className="flex flex-row justify-between pb-4">
        <p>End Date</p> <p>{`${endDate}`}</p>
      </div>
      <div className="flex flex-row justify-between pb-4">
        <p>Boat Name</p> <p>{`${name}`}</p>
      </div>
      <div>
        {" "}
        <button
          type="button"
          className="bg-pink px-4 py-2 rounded-lg hover:bg-skyblue"
          onClick={deleteReservation}
        >
          Delete
        </button>
        <button
          type="button"
          className="bg-lightpink px-4 py-2 rounded-lg hover:bg-skyblue"
          onClick={editReservation}
        >
          Edit
        </button>
      </div>
    </article>
  );
};

export default ReservationCard;
