const NavBar = ({ carts }) => {
  return (
    <div className="navbar justify-between mx-auto max-w-5xl px-4">

      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-[rgb(127,66,255)]">
            DigiTools
          </h1>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>


      <div className="navbar-end flex items-center gap-3 md:gap-5">


        <div className="flex items-center gap-3 md:gap-5">

          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span
              className={`badge badge-sm indicator-item bg-red-500 ${carts.length === 0 && "hidden"
                }`}
            >
              {carts.length}
            </span>
          </div>

          <p className="hidden md:block">login</p>
        </div>

        <a className="btn bg-[rgb(127,66,255)] rounded-full text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;