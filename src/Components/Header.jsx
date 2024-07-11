import { Link } from "react-router-dom";
import photo from "../assets/image.png";
import Navbar from "./Navbar";
export const Header = () => {
  return (
    <>
      <header className=" flex items-center justify-around bg-CustomBlueHead  w-full lg:w-full md:w-full h-px-99 ">
        <img src={photo} alt="image" className="photo" />
        <div className="searchnav w-4/5 md:w-1/2 ">
          <Navbar className="nav" />
          <input
            type="search"
            className="nav search w-full text-end text-xs lg:text-2xl min-[400px]:text-center lg:text-center md:text-center sm:text-center  lg:w-[458px] md:w-[427px] sm:w-full "
            placeholder="Who do You Wish To Learn"
          />
        </div>

        <div className="buttons hidden md:flex">
          <Link className="button-style" to={"/form"}>
            Login
          </Link>
          <button className="button-style">Register</button>
        </div>
      </header>
    </>
  );
};
