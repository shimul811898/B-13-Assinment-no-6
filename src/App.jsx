import { useState } from "react";

import Banner from "./component/Banner";
import Navbar from "./component/NavBar";
import Transparent from "./component/Transparent";
import Status from "./component/Status";
import Hero from "./component/Hero";
import Workflow from "./component/Workflow";
import Footer from "./component/Footer";
import Models from "./component/Models";
import Cart from "./component/Cart";
import ModelCard from "./component/ModelCard";


const data = await fetch("/Models.json").then(res => res.json());


const App = () => {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Status />


      <div className="tabs  justify-center bg-transparent  ">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 hover:scale-90 transition duration-500 ${activeTab === "model"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-gray-200 text-black"
            }`}
          aria-label="Products"
          onClick={() => setActiveTab("model")}
          defaultChecked />
        <input
          type="radio"
          name="my_tabs_1"

          className={`tab rounded-full w-40 hover:scale-90 transition duration-500 ${activeTab === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white"
              : "bg-gray-200 text-black"
            }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>


      {activeTab === "model" && (<Models data={data} carts={carts} setCarts={setCarts} />)}
      {activeTab === "cart" && (<Cart carts={carts} setCarts={setCarts} />)}

      <Hero />
      <Transparent />
      <Workflow />
      <Footer />
    </>
  );
};

export default App;