import { IoIosAddCircle } from "react-icons/io";

const Testimonial = () => {
  return (
    <div className="px-24 py-20 mx-auto flex flex-row items-center justify-center bg-[#F7FDFF]">
      <div className="flex flex-col space-y-4 items-start w-[90%] rounded-md border px-10 py-12">
        {/* Head  */}
        <div className="flex items-center space-x-2 font-bold">
          <li className="list-none">
            <IoIosAddCircle className="text-3xl text-blue-500 " />
          </li>
          <h1 className="text-2xl">Add your own</h1>
        </div>

        {/* description  */}
        <div>
          <p className="tracking-wideing">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
        </div>

        {/* Button  */}
        <button className="border-2 border-[#8064A2] w-[110px] h-[40px] rounded-lg">
          Add New
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
