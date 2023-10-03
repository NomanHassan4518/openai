import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Overview from "./Components/Research/Overview";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer";
import Research from "./Components/Research/Research";
import GPT4 from "./Components/Research/GPT4";

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
          <Route path="/research" element={<Research/>}></Route>
          <Route path="/gpt-4" element={<GPT4/>}></Route>
        </Routes>
        <Footer footer ={navColor}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
