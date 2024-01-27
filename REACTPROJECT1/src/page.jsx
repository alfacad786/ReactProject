import "./Page.css";
// import "./CardList.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Aboute from "./components/Aboute";
import Contect from "./components/Contect";
import Product from "./components/Product";
import CardDetail from "./CardDetail";


function Page() {
  return (
    <div className="Page">      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboute" element={<Aboute />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/CardDetail" element={<CardDetail  />} />
      </Routes>
    </div>
  );
}
export default Page;
