import { Link } from "react-router-dom";
import { Header } from "./Header";
import teacher from "../assets/teacher.png";
const Landing = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col mt-[50px] sm:flex-row">
        <div className="textacadmy">
          <h1 className="text-CustomBlueHead text-3xl font-bold mb-[15px] sm:text-7xl ">
            Acedify
          </h1>
          <h2 className="font-normal text-xl mb-[30px] sm:3xl">
            Education Without Boundaries
          </h2>
          <Link className="sub-button" to={"/form"}>
            Subscribe
          </Link>
          <Link className="exp-button">Explore</Link>
        </div>
        <div>
          <img src={teacher} alt="teacher" className="w-1/2 sm:w-full" />
        </div>
      </div>
    </>
  );
};

export default Landing;
