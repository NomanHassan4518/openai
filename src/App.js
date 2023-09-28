import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Overview from "./Components/Research/Overview";
import { useSelector } from "react-redux";

function App() {
 let navColor = useSelector((state)=>state)
 console.log(navColor);
  return (
    <div className="">
      <BrowserRouter>
        <Navbar nav={navColor}/>
        <Routes>
          <Route path="/"  element={<Home num="1" />}></Route>
          <Route path="/overview" element={<Overview/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
