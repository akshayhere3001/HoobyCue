import PropTypes from "prop-types";

const Card = ({ icon: Icon, title, description, btnName }) => {
  return (
    <div className="flex flex-col space-y-4 items-start w-[45%] rounded-md border px-10 py-12">
      {/* Head  */}
      <div className="flex items-center space-x-2 font-bold">
        <li className="list-none">
          <Icon className="text-2xl text-[#8064A2]" />
        </li>
        <h1 className="text-2xl">{title}</h1>
      </div>

      {/* description  */}
      <div>
        <p className="tracking-wideing">{description}</p>
      </div>

      {/* Button  */}
      <button className="border-2 border-[#8064A2] w-[110px] h-[40px] rounded-lg">
        {btnName}
      </button>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Card;
