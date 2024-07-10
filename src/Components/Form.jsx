import photo from "../assets/student.png";
import Signin from "./Signin";
function Form() {
  return (
    <>
      <div className="bg-blue-100 h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl">
          <div className="w-[900px]  p-6 hidden  sm:flex md:flex">
            <img src={photo} alt="Student" className="max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 lg:w-1/2 w-full p-4">
            <Signin />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Form;
