import InstagramImage from "../assets/instagram.png";
import FacebookImage from "../assets/facebook.png";
import TwitterImage from "../assets/twitter.png";


const Footer = () => {
    return (
        <div className="bg-[#101727] text-white ">
            <div className="max-w-5xl mx-auto py-16 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">DigiTools</h1>
                    <p className="text-gray-400 text-[11px] ">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Product</h3>
                    <p className="text-gray-400 text-[16px]">Features</p>
                    <p className="text-gray-400 text-[16px]">Pricing</p>
                    <p className="text-gray-400 text-[16px]">Templates</p>
                    <p className="text-gray-400 text-[16px]">Integrations</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Company</h3>
                    <p className="text-gray-400 text-[16px]">About</p>
                    <p className="text-gray-400 text-[16px]">Blog</p>
                    <p className="text-gray-400 text-[16px]">Careers</p>
                    <p className="text-gray-400 text-[16px]">Press</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Resources</h3>
                    <p className="text-gray-400 text-[16px]">Documentation</p>
                    <p className="text-gray-400 text-[16px]">Help Center</p>
                    <p className="text-gray-400 text-[16px]">Community</p>
                    <p className="text-gray-400 text-[16px]">Contact</p>
                </div>

                <div className="space-y-2">
                    <p className="text-lg font-semibold">Social Links</p>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                            <img className="w-6 h-6" src={InstagramImage} alt="Instagram" />
                        </div>


                        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                            <img className="w-6 h-6" src={FacebookImage} alt="Facebook" />
                        </div>


                        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                            <img className="w-6 h-6" src={TwitterImage} alt="Twitter" />
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <div className="max-w-5xl mx-auto px-4">
                    <hr className="border-t border-gray-700" />
                </div>
                <div className="grid grid-cols-2 p-3 gap-60 mx-auto max-w-5xl text-gray-400 text-[16px]">
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 justify-end">
                        <div>Privacy Policy </div>
                        <div>Terms of Service</div>
                        <div>Cookies</div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Footer