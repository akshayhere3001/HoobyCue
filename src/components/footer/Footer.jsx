import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaGoogle,
  FaTelegram,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container flex flex-col-reverse  justify-evenly px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-[#08090A]">
              <p className="font-bold">Hoobycue</p>
              <div className="flex flex-col">
                <a href="#" className="hover:text-[#8064A2]">
                  About us
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Our Services
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Work with us
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  FAQ
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Contact us
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-3 text-[#08090A]">
              <p className="font-bold">How do I</p>
              <div className="flex flex-col">
                <a href="#" className="hover:text-[#8064A2]">
                  Sign up
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Add a Listing
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Claim Listing
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Post a Query
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Add a Blog Post
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-3 text-[#08090A]">
              <p className="font-bold">Quick Links</p>
              <div className="flex flex-col">
                <a href="#" className="hover:text-[#8064A2]">
                  Listings
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Blog Posts
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Shop / Store
                </a>
                <a href="#" className="hover:text-[#8064A2]">
                  Community
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <p className="font-semibold">Social Media</p>

            <div className="flex justify-center space-x-6 text-2xl text-[#6D747A] list-none">
              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaFacebook />
              </li>

              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaYoutube />
              </li>

              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaInstagram />
              </li>

              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaLinkedinIn />
              </li>

              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaPinterest />
              </li>

              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaGoogle />
              </li>
              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaTelegram />
              </li>
              <li className="hover:text-[#8064A2] cursor-pointer">
                <FaMailBulk />
              </li>
            </div>

            <div className="flex flex-col justify-between">
              <form>
                <div className="flex flex-col">
                  <p className="font-semibold">Invite Friends</p>
                  <div>
                    <input
                      type="text"
                      className="flex-1 px-4 py-2 rounded-l-md border"
                      placeholder="Email Id"
                    />
                    <button className="px-4 py-2 text-white rounded-r-md bg-[#8064A2] hover:bg-red-500 focus:outline-none">
                      Invite
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F5F9] py-5 w-full text-center">
          © Purple Cues Private Limited
        </div>
      </footer>
    </>
  );
};

export default Footer;
