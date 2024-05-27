import { FaQuoteLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import img from "./testimonial-img.png";
const Testimonials = () => {
  return (
    <>
      {/* Main container  */}
      <div className="px-24 py-20 mx-auto flex flex-row items-center justify-center ">
        {/* flex container  */}
        <div className="flex flex-col w-[90%] border p-8 space-y-10 bg-[#F7F5F9] rounded-md">
          {/* header  */}
          <div className="flex items-center">
            <li className="list-none">
              {" "}
              <FaQuoteLeft className="text-3xl mr-2 text-[#8064A2]  " />
            </li>
            <h1 className="text-3xl font-bold tracking-wide">Testimonials</h1>
          </div>

          {/* description  */}
          <div>
            <p className="text-[#6D747A]">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
          </div>

          {/* footer flex  */}
          <div className="flex items-center justify-between">
            <div className="flex items-center rounded-md justify-between px-4 py-2 w-[60%] bg-[#CCC1DA]">
              <li className="list-none">
                <FaPlay className="text-xl cursor-pointer" />
              </li>

              <div className="w-2/3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#8064A2] h-2.5 rounded-full"></div>
              </div>
              <span>0:00</span>
              <img src={img} alt="Testimonial Image" />
            </div>

            <div className="flex items-center gap-3">
              <img src={img} alt="" />
              <div>
                <h1 className="text-[18px] font-semibold text-[#8064A2]">
                  Subha Nagarajan
                </h1>
                <p className="text-[#0096C8]">Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
