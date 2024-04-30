import { useEffect, useState } from "react";
import AvailableForRentFeed from "../components/AvaillableForRentFeed";
import BoatsFeed from "../components/BoatsFeed";
import Navbar from "../components/Navbar";
import ReservationBoatForm from "../components/ReservationBoatForm";
import ReservedBoatsFeed from "../components/ReservedBoatsFeed";
import { backendUrl } from "../api/api";
import ReservationCard from "../components/ReservationCard";

const ReserveBoatPage = () => {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/reservations`)
      .then((res) => res.json())
      .then((data) => setReservation(data))
      .catch((err) => console.error("Error while fetching", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="py-8 pl-32 pr-4 pb-8">
        <ReservationBoatForm />
      </div>
      <h2 className=" pl-32 pb-4 text-2xl font-bold">Current Reservations</h2>
      <div className="pl-32 pr-4 pb-8 grid grid-cols-1 gap-2 w-2/3">
        {reservation.map((reservationItem) => (
          <ReservationCard
            startDate={reservationItem.startDate}
            endDate={reservationItem.endDate}
            name={reservationItem.name}
            key={reservationItem._id}
            setReservations={setReservation}
            reservationId={reservationItem._id}
            reservations={reservation}
          />
        ))}
      </div>

      <div className="py-8 pl-32 pr-4 pb-8">
        <AvailableForRentFeed />
      </div>
      <div className="pb-8 pl-32 pr-4">
        <BoatsFeed />
      </div>
    </>
  );
};

export default ReserveBoatPage;
