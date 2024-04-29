import BoatsFeed from "../components/BoatsFeed";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" pl-32 pr-4 py-8 flex flex-col">
        <h1>Dashboard</h1>
        <BoatsFeed />
      </div>
    </>
  );
};

export default Home;
