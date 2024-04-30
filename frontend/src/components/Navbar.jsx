import { NavLink, Link } from "react-router-dom";
import BoatLogoIcon from "./icons/BoatLogoIcon";
import ReserveBoatIcon from "./icons/ReserveBoatIcon";
import AddBoatIcon from "./icons/AddBoatIcon";

const Navbar = () => {
  return (
    <>
      <div className=" text-sm bg-skyblue flex flex-col justify-center w-20 h-screen py-8 px-2 fixed">
        <NavLink to={"/"}>
          <div className="flex flex-col justify-center content-center pb-8">
            <BoatLogoIcon />
            <p>Overview</p>
          </div>
        </NavLink>
        <NavLink to={"/boats/reserveBoat"}>
          <div className=" active:text-pink active:fill-pink pb-8">
            <ReserveBoatIcon />
            <p>Reserve</p>
          </div>
        </NavLink>
        <NavLink to={"/boats/addBoat"}>
          <div className=" active:text-pink active:fill-pink pb-8">
            <AddBoatIcon />
            <p>Add Boat</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
