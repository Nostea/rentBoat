import AvailableForRentFeed from "../components/AvaillableForRentFeed";
import BoatsFeed from "../components/BoatsFeed";
import Navbar from "../components/Navbar";
import ReservedBoatsFeed from "../components/ReservedBoatsFeed";

const ReserveBoatPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-8 pl-32 pr-4">
        <AvailableForRentFeed />
      </div>
      <div className="pb-8 pl-32 pr-4">
        <ReservedBoatsFeed />
      </div>
      <div className="pb-8 pl-32 pr-4">
        <BoatsFeed />
      </div>
    </>
  );
};

export default ReserveBoatPage;
