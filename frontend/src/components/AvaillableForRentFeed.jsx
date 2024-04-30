import BoatCard from "./BoatCard";

const AvailableForRentFeed = () => {
  return (
    <section className="flex flex-col">
      <h2 className=" text-2xl pb-4 font-bold">Available for rent</h2>
      <div className="grid grid-cols-3 gap-8">
        <BoatCard />
      </div>
    </section>
  );
};

export default AvailableForRentFeed;
