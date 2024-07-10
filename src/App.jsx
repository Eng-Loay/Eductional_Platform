import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import { NotFound } from "./Components/NotFound";
import { Header } from "./Components/Header";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Landing from "./Components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/form" element={<Form />} />
      <Route path="/header" element={<Header />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
