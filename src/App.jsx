import { useState } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/NavBar";
import Transparent from "./component/Transparent";
import Status from "./component/Status";
import Hero from "./component/Hero";
import Workflow from "./component/Workflow";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Navbar />

      <Banner />  

      <Status />

      <Hero />  

      <Transparent />

      <Workflow />

      <Footer />


    
    </>
  );
};

export default App;