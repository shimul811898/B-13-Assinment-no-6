const Workflow = () => {
    return (
        <div className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-center py-16 px-4 ">
            <div className="max-w-5xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Ready to Transform Your Workflow?</h1>
                <p className="text-[16px]">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
                <div className="flex gap-3 justify-center">
                    <button className="btn rounded-full px-6 bg-white">
                        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            Explore Products
                        </span>
                    </button>
                    <button className="btn rounded-full px-6 bg-transparent border-white text-white">View Pricing</button>
                </div>
                <p className="text-[14px] opacity-80">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    )
}

export default Workflow;
