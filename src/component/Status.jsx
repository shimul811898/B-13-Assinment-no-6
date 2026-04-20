const Status = () => {
  return (
   <div className="space-y-20">
     <div className="bg-linear-to-r p-10 md:p-15 from-[#4F39F6] to-[#9514FA] flex justify-center items-center mt-10">
      <div className="max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-40 text-center text-white ">
        <div className="border-b md:border-b-0 md:border-r border-white/30 pb-8 md:pb-0 md:px-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">50K+</h1>
          <p className="text-xl md:text-2xl font-medium opacity-80">
            Active Users
          </p>
        </div>

        <div className="border-b md:border-b-0 md:border-r border-white/30 pb-8 md:pb-0 md:px-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">
            200+
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white opacity-80">
            Premium Tools
          </p>
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-bold pb-2">4.9</h1>
          <p className="text-xl md:text-2xl font-medium opacity-80">Rating</p>
        </div>
      </div>

      <div>
        
      </div>
      
    </div>
    <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>
        <p className="mt-2 text-zinc-600 text-[16px]">
          Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
        </p>
      </div>
   </div>
  );
};

export default Status;