import UserImage from "../assets/user.png";
import PackageImage from "../assets/package.png";
import RocketImage from "../assets/rocket.png";

const Hero = () => {
  return (
    <div className="mt-10 py-20 bg-[#F9FAFC] ">
      <div className="text-center py-5 space-y-2">
        <h2 className="text-4xl font-bold ">Get Started in 3 Steps</h2>
        <p className="text-[#627382] text-[12px]">Start using premium digital tools in minutes, not hours.</p>
      </div>
     {/* card section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto mb-9 mt-5">
      {/* card 1 */}
        <div className="bg-white  shadow px-10 py-15 rounded-lg ">
          <div className="flex justify-end -mt-9 -mr-5">
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 text-center p-1 text-white font-bold ">01</p>
          </div>
          <div className="flex justify-center items-center bg-[#4F39F670] w-16 h-16 rounded-full mx-auto p-2">
            <img src={UserImage} alt="User" />
          </div>
          <div className="text-center space-y-2 ">
            <h3 className="text-[24px] font-bold mt-3">Create Account</h3>
            <p className="text-[16px] text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-white  shadow px-10 py-15 rounded-lg ">
          <div className="flex justify-end -mt-9 -mr-5">
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 text-center p-1 text-white font-bold ">02</p>
          </div>
          <div className="flex justify-center items-center bg-[#4F39F670] w-16 h-16 rounded-full mx-auto p-2">
            <img src={PackageImage} alt="Package" />
          </div>
          <div className="text-center space-y-2 ">
            <h3 className="text-[24px] font-bold mt-3">Choose Products</h3>
            <p className="text-[16px] text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-white  shadow px-10 py-15 rounded-lg ">
          <div className="flex justify-end -mt-9 -mr-5">
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 text-center p-1 text-white font-bold ">03</p>
          </div>
          <div className="flex justify-center items-center bg-[#4F39F670] w-16 h-16 rounded-full mx-auto p-2">
            <img src={RocketImage} alt="Rocket" />
          </div>
          <div className="text-center space-y-2 ">
            <h3 className="text-[24px] font-bold mt-3">Start Creating</h3>
            <p className="text-[16px] text-[#627382]">Download and start using your premium tools immediately.</p>
          </div>
        </div>
       

      </div>
    </div>
  );
};

export default Hero;