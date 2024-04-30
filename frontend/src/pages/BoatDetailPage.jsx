import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../api/api";

const BoatDetailPage = () => {
  const [boatDetails, setBoatDetails] = useState([]);
  const { boatId } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/boats/${boatId}`)
      .then((res) => res.json())
      .then((data) => setBoatDetails(data))
      .catch((err) => console.log("Fail to fetch BoatDetails", err));
  }, []);

  console.log(boatDetails.name);
  return (
    <section className=" flex flex-col">
      <h1>Boat Detailpage</h1>
      <div>
        <img src="/img/placeholder-boat.jpg" alt="boat" />
        <h2>{boatDetails.name}</h2>
        <p>BuiltYear:{boatDetails.builtYear}</p>
        <p>Serialnumber:{boatDetails.serialnumber}</p>
        <p>Material:{boatDetails.material}</p>
        <p>Type:{boatDetails.type}</p>
        <p>Capacity:{boatDetails.capacity}</p>
      </div>
    </section>
  );
};

export default BoatDetailPage;
