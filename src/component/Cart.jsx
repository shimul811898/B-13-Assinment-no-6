import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout completed!");
  };

  const removeCart = (id) => {
    setCarts(carts.filter(item => item.id !== id));
    toast.info("Item removed");
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {carts.length === 0 ? (
        <div className="text-center py-20 bg-zinc-100 rounded-2xl text-zinc-400 font-bold">
          Your cart is empty!
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold">${item.price}</span>
                  <button onClick={() => removeCart(item.id)} className="btn btn-circle btn-sm btn-error">✕</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between bg-zinc-900 text-white p-6 mt-10 rounded-xl text-2xl font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button onClick={handleCheckout} className="btn w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-xl py-4 h-auto rounded-xl border-none">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;