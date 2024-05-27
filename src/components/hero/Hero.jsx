import hero from "./hero.png";
import SignIn from "../forms/SignIn";

const Hero = () => {
  return (
    <>
      {/* main container */}
      <div className="px-24 py-20 flex flex-row gap-20 bg-[#F7F5F9] ">
        {/* left side container  */}
        <div className="space-y-20 w-[60%]">
          <div className="space-y-7">
            {/* headline  */}
            <div>
              <h1 className="text-3xl font-bold tracking-wide italic">
                Explore your <span className="text-[#0096C8]">hobby</span> or
                &nbsp;
                <span className="text-[#8064A2]">passion</span>
              </h1>
            </div>

            {/* description */}
            <div className="space-y-4">
              <p className="tracking-wide">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p className="tracking-wide">
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
          </div>

          {/* img  */}
          <div>
            <img src={hero} alt="Hero Image" className="h-[300px]" />
          </div>
        </div>

        {/* right side container  */}
        <div className="w-[40%]">
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default Hero;
