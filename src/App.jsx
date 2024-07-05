import "./App.css";
import photo from "./assets/student.png";
import Signin from "./Signin";

function App() {
  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl">
        <div className="w-1/2 flex items-center justify-center p-6">
          <img src={photo} alt="Student" className="max-w-full h-auto" />
        </div>
        <div className="w-1/2 p-8">
          <Signin />
        </div>
      </div>
    </div>
  );
}

export default App;
