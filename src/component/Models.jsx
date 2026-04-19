import React from "react";
import ModelCard from "./ModelCard";
const Models = ({ modelPromise, carts, setCarts }) => {
  const [models, setModels] = React.useState([]);
  React.useEffect(() => {
    modelPromise.then((data) => setModels(data));
  }, [modelPromise]);


  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Choose Your AI Model
        </h2>
        <p className="mt-2 text-zinc-600">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models?.map((model) => (
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