import "./App.css";
import "./Center.css";
import Top from "./Top.jsx";
import Nabar from "./Navbar.jsx";
import Page from "./page.jsx";
import CardList from "./CardList.jsx";
import React from "react";


function App() {
  return (
    <>
     
      <Top />
      <div  className="Center">
      <Nabar/>
      <Page/>
     <CardList/>
     </div>
    </>
  );
}

export default App;
