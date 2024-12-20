import { Outlet } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import "./index.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="md:px-20">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
