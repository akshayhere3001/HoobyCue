import { IoIosPeople } from "react-icons/io";
import { FaLocationDot, FaBagShopping } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      {/* Main Container  */}
      <div className="px-24 py-20 mx-auto flex flex-row items-center justify-center flex-wrap gap-10">
        {/* card 1  */}
        <Card
          icon={IoIosPeople}
          title="People"
          description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
          btnName="Connect"
        />

        {/* card 2 */}
        <Card
          icon={FaLocationDot}
          title="Place"
          description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
          btnName="Meet up"
        />

        {/* card 3  */}
        <Card
          icon={FaBagShopping}
          title="Product"
          description="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
          btnName="Get it"
        />

        {/* card 4  */}
        <Card
          icon={FaCalendarCheck}
          title="Program"
          description="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
          btnName="Attend"
        />
      </div>
    </>
  );
};

export default Cards;
