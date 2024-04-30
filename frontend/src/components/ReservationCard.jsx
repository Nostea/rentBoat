const ReservationCard = ({ startDate, endDate, name }) => {
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
    </article>
  );
};

export default ReservationCard;
