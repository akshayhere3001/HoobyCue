import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <>
      <section className=" flex items-center justify-start ">
        <div className="flex flex-col relative space-y-4">
          <div className="flex items-center justify-start">
            <h1 className="text-xl mr-4 text-center text-[#8064A2] font-bold cursor-pointer ">
              SignUp
              <hr className="h-[2px] my-1 bg-gray-200 border-0 rounded-xl dark:bg-[#8064A2]" />
            </h1>
            <h1 className="text-xl text-center text-[#939CA3] cursor-pointer font-bold">
              Join
            </h1>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              className="pr-[350px] py-[12px] pl-[12px] rounded-xl bg-blue-50 self-center border"
              placeholder="Email"
            />

            <input
              type="password"
              className="pr-[350px] py-[12px] pl-[12px] rounded-xl bg-blue-50  self-center border"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex mt-[-200px]">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-1 my-8 bg-[#F7F5F9] border-0 rounded dark:bg-[#CED4DA]" />
            <div className="absolute px-2 font-medium -translate-x-1/2 bg-[#F7F5F9] left-1/2 ">
              Or connect with
            </div>
          </div>

          {/* Google connect  */}
          <div className="w-full h-10 cursor-pointer flex items-center justify-between rounded-xl border">
            <FcGoogle className="ml-3 " />
            <h1 className="font-bold mx-auto tracking-wider text-center">
              Continue with Google
            </h1>
          </div>

          {/* facebook connect  */}
          <div className="w-full h-10 cursor-pointer flex items-center justify-between rounded-xl border">
            <FaFacebook className="ml-3 text-blue-600" />
            <h1 className="font-bold mx-auto tracking-wider text-center">
              Continue with Facebook
            </h1>
          </div>

          <div>
            <p className="text-[#939CA3]">
              By continuing, you agree to our{" "}
              <span className="text-black">Terms of Service</span> and{" "}
              <span className="text-black">Privacy Policy.</span>
            </p>
          </div>

          {/* form button  */}
          <div className="w-full h-10 bg-[#8064A2]  cursor-pointer flex items-center justify-between rounded-xl border">
            <button className="font-bold mx-auto text-white tracking-wider text-center">
              Agree and Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
