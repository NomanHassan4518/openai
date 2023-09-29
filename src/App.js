import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Overview from "./Components/Research/Overview";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer";

function App() {
 let navColor = useSelector((state)=>state)
 console.log(navColor);
  return (
    <div className="">
      <BrowserRouter>
        <Navbar nav={navColor}/>
        <Routes>
          <Route path="/"  element={<Home num="1" />}></Route>
          <Route path="/research/overview" element={<Overview/>}></Route>
        </Routes>
        <Footer footer ={navColor}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
