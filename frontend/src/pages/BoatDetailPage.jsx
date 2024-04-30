import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backendUrl } from "../api/api";
import Navbar from "../components/Navbar";

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
    <>
      <Navbar />
      <section className=" flex flex-col pl-20 justify-start">
        <div className="">
          <div className=" bg-[url('/img/placeholder-boat.jpg')] h-60 bg-center bg-cover bg-no-repeat flex flex-row justify-center place-items-center">
            <h2 className=" text-8xl text-white">{boatDetails.name}</h2>
          </div>
          <div className=" pl-10 pt-8 pb-2 text-pink">
            <Link to={"/"}>
              <p>back</p>
            </Link>
          </div>
          <div className="mx-8 mb-8 p-4 bg-white rounded-lg w-1/2">
            <h3 className=" text-3xl font-bold pb-2">{boatDetails.name}</h3>
            <div className="flex flex-row justify-between">
              <p className=" pr-4">BuiltYear:</p>
              <p>{boatDetails.builtYear}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className=" pr-4">Serialnumber:</p>
              <p>{boatDetails.serialnumber}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className=" pr-4">Material:</p>
              <p>{boatDetails.material}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className=" pr-4">Type:</p>
              <p>{boatDetails.type}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className=" pr-4">Capacity:</p>
              <p>{boatDetails.capacity}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoatDetailPage;
