
import Banner from "./component/Banner";
import Navbar from "./component/NavBar";
import Transparent from "./component/Transparent";


import { useState } from "react";
import Status from "./component/Status";
import Hero from "./component/Hero";
const App = () => {
  return (
    <>
      <Navbar />

      <Banner />  

      <Status />

      <Hero />  

      <Transparent />

    
    </>
  );
};

export default App;