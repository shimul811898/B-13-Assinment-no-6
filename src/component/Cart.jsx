import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout completed!");
  };

  const removeCart = (id) => {
    setCarts(carts.filter(item => item.id !== id));
    toast.success("Card removed");
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="text-center py-20 bg-zinc-100 rounded-2xl text-zinc-400 font-bold">
          Your cart is empty!
        </div>
      ) : (
        <>
         <div className="border border-zinc-200 p-4 rounded-lg">
           <div className="space-y-4">
            {carts.map((item) => (
              <div key={item.id} className="flex items-center justify-between  p-4 rounded-lg bg-zinc-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt={item.name} className="w-16 h-16 object-contain" />
                  <h2 className="text-xl font-bold">{item.name}</h2>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold">${item.price}</span>
                  <button onClick={() => removeCart(item.id)} className="btn text-red-500 hover:text-red-700 border-none bg-transparent hover:bg-transparent">
                    Remove
                    </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between  text-zinc-600 p-6 mt-5 rounded-xl text-xl font-bold">
            <span>Total</span>
            <span className="text-black">${totalPrice.toFixed(2)}</span>
          </div>

          <button onClick={handleCheckout} className="btn w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mt-2 border-none hover:scale-105 transition-transform">
            Proceed to Checkout
          </button>
         </div>
        </>
      )}
    </div>
  );
};

export default Cart;