import BoatCard from "./BoatCard";
import ReservationCard from "./ReservationCard";

const ReservedBoatsFeed = (reservation) => {
  return (
    <section className="flex flex-col">
      <h2 className=" text-2xl pb-4 font-bold">Reserved Boads</h2>
      <div className="py-8 pl-32 pr-4 pb-8 grid grid-cols-1 gap-2">
        {reservation?.map((reservationItem) => (
          <ReservationCard startDate={reservationItem.startDate} endDate={reservationItem.endDate} name={reservationItem.name} key={reservationItem._id} />
        ))}
      </div>
    </section>
  );
};

export default ReservedBoatsFeed;
