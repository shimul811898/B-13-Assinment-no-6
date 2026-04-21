

const Banner = () => {
    return (
        <div className="relative w-11/12 p-4 mx-auto flex items-center overflow-hidden">
            <div className=" max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">


                <div className="space-y-6">

                    <span className="inline-block py-1 px-3 rounded-full bg-[#4F39F670]">
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            <i className="fa-regular fa-circle-dot mr-2"></i>
                            New: AI-Powered Tools Available
                        </span>
                    </span>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                        Supercharge Your <br /> Digital Workflow
                        <br />
                    </h1>

                    <p className="text-lg text-{#627382} max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#4F39F6] flex items-center gap-3 group text-white hover:scale-105 transition duration-300">
                            Explore Products</button>
                        <button className="border-2 border-[#4F39F6] text-[#4F39F6] hover:bg-[#4F39F6] hover:text-white  px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 group hover:scale-105 transition duration-300">
                            <img src="assets/play.png" alt="" /> Watch Demo
                        </button>
                    </div>

                </div>


                <div className="relative flex justify-center lg:justify-end">
                    <img
                        className="h-[520px] w-auto object-contain drop-shadow-2xl rounded-lg animate-pulse"
                        src="assets/banner.png"
                        alt="AI Models Banner"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;