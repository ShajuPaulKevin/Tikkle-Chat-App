import { Route, Routes } from "react-router-dom";
import Login from "../src/pages/login/Login";
import SignUp from "../src/pages/signup/Signup";
import "./App.css";
import Home from "./pages/home/home";
function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
