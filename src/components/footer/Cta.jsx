import cta from "./cta.png";

const Cta = () => {
  return (
    <>
      {/* main container  */}
      <div className="px-24 py-20 mx-auto flex  flex-col space-y-28 bg-[#F7FDFF]">
        {/* flex container  */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl font-bold tracking-wide ">
            Your <span className="text-[#0096C8]">hobby</span>, Your &nbsp;
            <span className="text-[#8064A2]">Community...</span>
          </h1>
          <div className="w-[15%] h-10 cursor-pointer bg-[#8064A2]  flex items-center justify-between rounded-xl border">
            <button className="font-semibold mx-auto text-white tracking-wider text-center">
              Get Started
            </button>
          </div>
        </div>

        {/* img  */}
        <div>
          <img src={cta} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cta;
