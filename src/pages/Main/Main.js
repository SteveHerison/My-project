import "./styles.css";
import SingIn from "../SignIn";
import SingUp from "../SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/index";

function Main() {
  return (
    <div className="container-main">
      <Navbar />
      <Routes>
        <Route path="/SingIn" element={<SingIn />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default Main;
