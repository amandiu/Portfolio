import { Outlet } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import "./index.css";

function App() {
  return (
    <div className="px-20">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
