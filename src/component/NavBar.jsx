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
        <div>
          <p className="md:display-none">login <i class="fa-solid fa-cart-shopping"></i></p>
        </div>
        <a className="btn bg-[rgb(127,66,255)] rounded-full text-white p-2">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;