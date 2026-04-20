import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [buyNow, setBuyNow] = useState(false);



  const handleAddToCart = () => {
    setBuyNow(true);

    const isExist = carts.find((item) => item.id === model.id);

    if (isExist) {
      return toast.error("Item already in cart!");
    }

    setCarts([...carts, model]);
    toast.success("Item added to cart!");
    return;

  };

  return (
    <div className="bg-[#F2F2F2] p-6 rounded-xl flex flex-col justify-between h-full shadow-sm border border-zinc-200 hover:scale-105 transition duration-300 hover:shadow-[rgb(127,66,255)]">
      <div className="h-fit">
        <div className="flex justify-end">
          <div>
            <div
              className={`${model.tag === "best-seller"
                  ? "bg-[#FEF3C6]"
                  : model.tag === "popular"
                    ? " bg-[#9514FA70]"
                    : " bg-green-300"
                } rounded-full px-3 py-1 flex items-center justify-center`}
            >
              <span
                className={`${model.tag === "best-seller"
                    ? "text-[#BB4D00] "
                    : model.tag.trim().toLowerCase() === "popular"
                      ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
                      : "text-green-600 "
                  } `}
              >
                {model.tag}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-4xl">
          <img src={model.icon} alt={model.name} />
        </div>
        <div>
          <h4 className="text-2xl font-bold">{model.name}</h4>
          <p className="text-zinc-500 text-sm mt-1">{model.description}</p>
        </div>

        <div className="text-zinc-600">
          <span className="text-3xl font-bold text-black">${model.price}</span>/month
        </div>

        <div className="space-y-2">
          {model.features.map((feature, idx) => (
            <p key={idx} className="flex items-center gap-2 text-zinc-600">
              <span className="text-green-600">✔</span> {feature}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`btn rounded-full mt-8 border-none hover:scale-105 transition-transform 
    ${buyNow
            ? "bg-green-600 text-white"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
          }`}
      >
        <span>{buyNow ? "Added to Cart!" : "Buy Now"}</span>
      </button>
    </div>
  );
};

export default ModelCard;