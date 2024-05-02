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
        setReservations(updateReservation);
      });
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
    <article className=" bg-white flex flex-col p-6">
      <div className="flex flex-row justify-between pb-4 border-b-2 border-lightpink">
        <p>Start Date</p> <p>{`${startDate}`}</p>
      </div>
      <div className="flex flex-row justify-between pb-4 border-b-2 border-lightpink">
        <p>End Date</p> <p>{`${endDate}`}</p>
      </div>
      <div className="flex flex-row justify-between pb-4 border-b-2 border-lightpink">
        <p>Boat Name</p> <p>{`${name}`}</p>
      </div>
      <div className="py-4">
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
