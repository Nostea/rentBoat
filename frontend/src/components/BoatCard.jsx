import { Link, useParams } from "react-router-dom";

const BoatCard = ({ thisBoat, name, serialnumber, type, material, img, builtYear, capacity, _id }) => {
  return (
    <article className=" overflow-hidden rounded-lg bg-white shadow">
      <Link to={`/boats/${thisBoat}`}>
        <img src="/img/placeholder-boat.jpg" alt="Boat" />
        <div className="flex flex-col p-4">
          <h3 className=" font-bold text-xl pb-2 h-20">{`${name}`}</h3>
          <p className="pb-3">{`${serialnumber}`}</p>
          <p className="pb-3">{`${type}`}</p>
          <p className="pb-3">{`${material}`}</p>
          <p className="pb-3">{`${builtYear}`}</p>
          <p className=" text-right">{`${capacity}`}</p>
        </div>
      </Link>
    </article>
  );
};

export default BoatCard;
