import BoatCard from "./BoatCard";

const BoatsFeed = () => {
  return (
    <div className="px-4 py-8">
      <section className="flex flex-col bg-secondary h-full">
        <h2 className=" text-2xl font-bold pb-4">All boats</h2>
        <div className="grid grid-cols-4 gap-8">
          <BoatCard />
          <BoatCard />
          <BoatCard />
          <BoatCard />
          <BoatCard />
          <BoatCard />
          <BoatCard />
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
    </div>
  );
};

export default BoatsFeed;
