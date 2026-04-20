const NavBar = () => {
  return (
    <div className="navbar justify-between mx-auto max-w-5xl">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="text-3xl font-bold text-[rgb(127,66,255)]" >DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 grid  lg:grid-cols-2">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <p className="md:display-none">login </p>
          <img src="\assets\shopping-cart.png" />
          {/* {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {carts.length}
            </span>
          )} */}
        </div>
        <a className="btn bg-[rgb(127,66,255)] rounded-full text-white p-2">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;