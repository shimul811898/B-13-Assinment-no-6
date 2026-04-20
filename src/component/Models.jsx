
import { useEffect, useState } from "react";
import ModelCard from "./ModelCard";

const Models = ({ carts, setCarts , data }) => {



  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </section>
  );
};

export default Models;