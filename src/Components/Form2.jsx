import photo from "../assets/student.png";
import SignUp from "./Signup";
function Form2() {
  return (
    <>
      <div className="bg-blue-100 h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl">
          <div className="w-[900px]  p-6 hidden  sm:hidden md:hidden lg:flex">
            <img src={photo} alt="Student" className="max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 lg:w-1/2 w-full py-1 px-4">
            <SignUp />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Form2;
