import BoatCard from "./BoatCard";

const ReservedBoatsFeed = () => {
  return (
    <section className="flex flex-col">
      <h2 className=" text-2xl pb-4 font-bold">Unavailable</h2>
      <div className="grid grid-cols-4 gap-8 grayscale">
        <BoatCard />
        <BoatCard />
        <BoatCard />
        <BoatCard />
        <BoatCard />
        <BoatCard />
        <BoatCard />
        <BoatCard />
      </div>
    </section>
  );
};

export default ReservedBoatsFeed;
