const Transparent = () => {
    return (
        <div className="py-20 bg-white">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
                <p className="text-[13px] text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* Pricing Cards */}
            <div className="grid grid-cols-3 gap-10 max-w-5xl mx-auto ">

                {/* Starter Plan */}
                <div className="bg-[#F2F2F2] space-y-4 p-6 rounded-lg mt-6">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-2xl font-bold">Starter</h4>
                            <p className="text-[16px] text-[#627382]">Perfect for getting started</p>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#627382]"><span className="text-3xl font-bold text-black">$0</span>/month</p>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Access to 10 free tools</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Basic templates</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Community support</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> 1 project per month</p>
                        </div>
                    </div>
                    <div className="max-w-full mx-auto text-center mt-20">
                        <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-20">Get Started Free</button>
                    </div>
                </div>

                {/* Pro Plan */}
                <div>
                    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-lg mt-6">
                        <div className="flex justify-center">
                            <h3 className="text-[#BB4D00] bg-[#FEF3C6] rounded-full py-1 px-3 text-center max-w-30 -mt-4">Most Popular</h3>
                        </div>
                    <div className="space-y-4 p-6">
                        <div className="space-y-6">
                        <div>
                            <h4 className="text-2xl font-bold text-white">Pro</h4>
                            <p className="text-[16px] text-white">Best for professionals</p>
                        </div>
                        <div>
                            <p className="text-[16px] text-white"><span className="text-3xl font-bold text-white">$29</span>/month</p>
                        </div>
                        <div>
                            <p className="text-[16px] text-white"><span className="text-white"><i class="fa-solid fa-check"></i></span> Access to all premium tools</p>
                            <p className="text-[16px] text-white"><span className="text-white"><i class="fa-solid fa-check"></i></span> Unlimited templates</p>
                            <p className="text-[16px] text-white"><span className="text-white"><i class="fa-solid fa-check"></i></span> Priority support</p>
                            <p className="text-[16px] text-white"><span className="text-white"><i class="fa-solid fa-check"></i></span> Unlimited projects</p>
                            <p className="text-[16px] text-white"><span className="text-white"><i class="fa-solid fa-check"></i></span> Cloud sync</p>
                            <p className="text-[16px] text-white"><span className="text-white"><i class="fa-solid fa-check"></i></span> Advanced analytics</p>
                        </div>
                    </div>
                    <button className="btn rounded-full px-20 bg-white">
                        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            Start Pro Trial
                        </span>
                    </button>
                    </div>
                </div>
                </div>
                {/* Enterprise */}
                <div className="bg-[#F2F2F2] space-y-4 p-6 rounded-lg mt-6">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-2xl font-bold">Enterprise</h4>
                            <p className="text-[16px] text-[#627382]">For teams and businesses</p>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#627382]"><span className="text-3xl font-bold text-black">$99</span>/month</p>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Everything in Pro</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Team collaboration</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Custom integrations</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Dedicated support</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> SLA guarantee</p>
                            <p className="text-[16px] text-[#627382]"><span className="text-green-600"><i class="fa-solid fa-check"></i></span> Custom branding</p>
                        </div>
                    </div>
                    <div className="max-w-full mx-auto text-center mt-10">
                        <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-20">Contact Sales</button>
                    </div>
                </div>
                

            </div>
        </div>
    );
};
export default Transparent;