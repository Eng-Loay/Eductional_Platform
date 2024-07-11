import { Link } from "react-router-dom";
import { Header } from "./Header";
import teacher from "../assets/teacher.png";
import avatar from "../assets/Avatar.png";
import { Fotter } from "./Fotter";
const Landing = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col  sm:flex-row sm:mt-[50px]">
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
        <div className="">
          <img src={teacher} alt="teacher" className="w-full sm:w-full" />
        </div>
      </div>
      {/* Subjects Section  */}
      <div className="bg-CustomBlueHead font-bold px-20 w-screen  sm:h-[378px] md:h-[378px] lg:h-[378px] ">
        <h2 className="text-white  mb-[20px] pt-[20px]   sm:mb-[50px] sm:pt-[50px]  text-xl text-center sm:text-left">
          Subjects
        </h2>
        <div className="justify-evenly flex flex-col items-center sm:flex-row gap-4">
          <div className="w-[325px] bg-white rounded-[8px]  py-3  pl-[15px] pt-[15px]">
            <h2 className="">Subject</h2>
            <h3 className="font-normal">Review body</h3>
            <div className="flex pt-3">
              <img src={avatar} alt="" />
              <div className="flex flex-column justify-center pl-5">
                <h4 className="font-normal text-sm">+20 teacher</h4>
                <h5 className="font-light text-sm">explore teachers</h5>
              </div>
            </div>
          </div>

          <div className="w-[325px] bg-white rounded-[8px] py-3 pl-[15px] pt-[15px]">
            <h2>Subject</h2>
            <h3 className="font-normal">Review body</h3>
            <div className="flex pt-3">
              <img src={avatar} alt="" />
              <div className="flex flex-column justify-center pl-5">
                <h4 className="font-normal text-sm">+20 teacher</h4>
                <h5 className="font-light text-sm">explore teachers</h5>
              </div>
            </div>
          </div>

          <div className="w-[325px] bg-white rounded-[8px] py-3 pl-[15px] pt-[15px]">
            <h2>Subject</h2>
            <h3 className="font-normal">Review body</h3>
            <div className="flex pt-3">
              <img src={avatar} alt="" />
              <div className="flex flex-column justify-center pl-5">
                <h4 className="font-normal text-sm">+20 teacher</h4>
                <h5 className="font-light text-sm">explore teachers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Subjects Section */}
      {/* Teachers Section */}
      <div className="w-screen bg-white sm:h-[579px] md:h-[579px] lg:h-[579px] sm:px-20 ">
        <h3 className="pt-[50px]  text-xl text-center  font-bold text-center lg:text-left">
          Our Teachers
        </h3>
        <h4 className="mb-6 text-center lg:text-left ">View All Teachers</h4>
        <div className="flex justify-evenly">
          <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            <div className="w-[325px] lg:w-[325px]  min-[640px]:w-[200px] border-2 border-gray-300 py-3 pl-[15px] pt-[15px] ">
              <div className="">
                <h2 className="font-bold">“Science is Fun”</h2>
                <div className="flex pt-3">
                  <img src={avatar} alt="" />
                  <div className="flex flex-column justify-center pl-5">
                    <h4 className="font-normal text-sm">Name</h4>
                    <h5 className="font-light text-sm">Description</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[325px] lg:w-[325px] min-[640px]:w-[200px] border-2 border-gray-300 py-3 pl-[15px] pt-[15px]">
              <div className="">
                <h2 className="font-bold">“Math can be easy”</h2>
                <div className="flex pt-3">
                  <img src={avatar} alt="" />
                  <div className="flex flex-column justify-center pl-5">
                    <h4 className="font-normal text-sm">Name</h4>
                    <h5 className="font-light text-sm">Description</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[325px] lg:w-[325px] min-[640px]:w-[200px] border-2 border-gray-300 py-3 pl-[15px] pt-[15px]">
              <div className="">
                <h2 className="font-bold">“Physics is not hard”</h2>
                <div className="flex pt-3">
                  <img src={avatar} alt="" />
                  <div className="flex flex-column justify-center pl-5">
                    <h4 className="font-normal text-sm">Name</h4>
                    <h5 className="font-light text-sm">Description</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[325px] lg:w-[325px] min-[640px]:w-[200px] border-2 border-gray-300 py-3 pl-[15px] pt-[15px]">
              <div className="">
                <h2 className="font-bold">“Quote 4”</h2>
                <div className="flex pt-3">
                  <img src={avatar} alt="" />
                  <div className="flex flex-column justify-center pl-5">
                    <h4 className="font-normal text-sm">Name</h4>
                    <h5 className="font-light text-sm">Description</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[325px] lg:w-[325px] min-[640px]:w-[200px] border-2 border-gray-300 py-3 pl-[15px] pt-[15px]">
              <div className="">
                <h2 className="font-bold">“Quote 5”</h2>
                <div className="flex pt-3">
                  <img src={avatar} alt="" />
                  <div className="flex flex-column justify-center pl-5">
                    <h4 className="font-normal text-sm">Name</h4>
                    <h5 className="font-light text-sm">Description</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[325px] lg:w-[325px] min-[640px]:w-[200px] border-2 border-gray-300 py-3 pl-[15px] pt-[15px]">
              <div className="">
                <h2 className="font-bold">“Quote 6”</h2>
                <div className="flex pt-3">
                  <img src={avatar} alt="" />
                  <div className="flex flex-column justify-center pl-5">
                    <h4 className="font-normal text-sm">Name</h4>
                    <h5 className="font-light text-sm">Description</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Teachers Section */}
      <Fotter />
    </>
  );
};

export default Landing;
