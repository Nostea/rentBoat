import { Link } from "react-router-dom";

const BoatCard = ({ boatname, description, price }) => {
  return (
    <article className=" overflow-hidden rounded-lg bg-white shadow">
      <Link to={"/"}>
        <img src="/img/placeholder-boat.jpg" alt="Boat" />
        <div className="flex flex-col p-4">
          <h3 className=" font-bold text-xl pb-2">Speedy</h3>
          <p className="pb-8">A short description of the boat</p>
          <p className=" text-right">100eur/day</p>
        </div>
      </Link>
    </article>
  );
};

export default BoatCard;
