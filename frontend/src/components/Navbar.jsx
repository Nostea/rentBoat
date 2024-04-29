import { NavLink, Link } from "react-router-dom";
import BoatLogoIcon from "./icons/BoatLogoIcon";
import ReserveBoatIcon from "./icons/ReserveBoatIcon";

const Navbar = () => {
  return (
    <>
      <div className=" text-sm bg-skyblue flex flex-col w-20 h-screen py-8 px-2 fixed">
        <Link to={"/"}>
          <div className="flex flex-col justify-center content-center pb-8">
            <BoatLogoIcon />
            <p>Overview</p>
          </div>
        </Link>
        <Link to={"/boats/reserveBoat"}>
          <ReserveBoatIcon />
          <p>Reserve</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
