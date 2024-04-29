import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <p className=" uppercase text-2xl">SiteLogo</p>
      </Link>
    </>
  );
};

export default Logo;
