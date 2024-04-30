import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";
import BoatCard from "./BoatCard";
import { useParams } from "react-router-dom";

const BoatsFeed = () => {
  const [boat, setBoat] = useState([]);
  const { boatId } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/boats`)
      .then((res) => res.json())
      .then((data) => setBoat(data))
      .catch((err) => console.error("Error while fetching", err));
  }, []);
  console.log(boat);

  return (
    <div className="px-4 py-8">
      <section className="flex flex-col bg-secondary h-full">
        <h2 className=" text-2xl font-bold pb-4">All boats</h2>
        <div className="grid grid-cols-3 gap-8">
          {boat?.map((boatItem) => (
            <BoatCard
              thisBoat={boatItem?._id}
              name={boatItem?.name}
              serialnumber={boatItem?.serialnumber}
              type={boatItem?.type}
              material={boatItem?.material}
              builtYear={boatItem?.builtYear}
              capacity={boatItem?.capacity}
              key={boatItem?._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BoatsFeed;
