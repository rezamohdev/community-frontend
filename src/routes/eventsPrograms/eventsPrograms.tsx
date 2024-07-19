import React from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faHome, faImage } from "@fortawesome/free-solid-svg-icons";

import Event1 from "../../images/event1.svg";
import Event2 from "../../images/event2.svg";
import Event3 from "../../images/event3.svg";
import { ProgramEvent } from "../../components/programEvent/programEvent";
import { useTranslation } from "react-i18next";

const events = [
  {
    title: "Your Generosity Saves Lives",
    time_date: "2024/08/08 02:20pm",
    image: Event1,
  },
  {
    title: "A Bright Future for Indonesian Children",
    time_date: "2024/08/08 02:20pm",
    image: Event2,
  },
  {
    title: "Care for victims affected by floods",
    time_date: "2024/08/08 02:20pm",
    image: Event3,
  },
  {
    title: "Care for victims affected by floods",
    time_date: "2024/08/08 02:20pm",
    image: Event3,
  },
  {
    title: "Annual Charity Marathon",
    time_date: "2024/09/12 07:00am",
    image: Event3,
  },
  {
    title: "Tech Innovation Summit",
    time_date: "2024/11/20 09:30am",
    image: Event3,
  },
  {
    title: "Local Farmers Market",
    time_date: "2024/07/22 10:00am",
    image: Event3,
  },
  {
    title: "Art Exhibition Opening",
    time_date: "2024/10/15 06:00pm",
    image: Event3,
  },
  {
    title: "Music Festival Weekend",
    time_date: "2024/08/17 04:00pm",
    image: Event3,
  },
  {
    title: "Community Cleanup Day",
    time_date: "2024/09/05 08:00am",
    image: Event3,
  },
  {
    title: "Book Fair and Reading",
    time_date: "2024/12/01 11:00am",
    image: Event3,
  },
  {
    title: "Yoga in the Park",
    time_date: "2024/08/10 07:30am",
    image: Event3,
  },
  {
    title: "Food Truck Festival",
    time_date: "2024/08/25 12:00pm",
    image: Event3,
  },
  {
    title: "Historic Walking Tour",
    time_date: "2024/09/18 03:00pm",
    image: Event3,
  },
  {
    title: "Charity Gala Dinner",
    time_date: "2024/11/05 07:00pm",
    image: Event3,
  },
  {
    title: "Winter Wonderland Ball",
    time_date: "2024/12/24 08:00pm",
    image: Event3,
  },
  {
    title: "Wildlife Conservation Talk",
    time_date: "2024/10/22 01:00pm",
    image: Event3,
  },
  {
    title: "Film Screening: Classics",
    time_date: "2024/08/14 06:30pm",
    image: Event3,
  },
  {
    title: "Science Fair",
    time_date: "2024/11/09 09:00am",
    image: Event3,
  },
  {
    title: "Local Band Concert",
    time_date: "2024/08/30 07:00pm",
    image: Event3,
  },
  {
    title: "Health and Wellness Expo",
    time_date: "2024/09/28 10:00am",
    image: Event3,
  },
  {
    title: "Cultural Dance Show",
    time_date: "2024/10/12 05:00pm",
    image: Event3,
  },
  {
    title: "Gardening Workshop",
    time_date: "2024/09/15 02:00pm",
    image: Event3,
  },
  {
    title: "Startup Pitch Night",
    time_date: "2024/11/18 06:00pm",
    image: Event3,
  },
  {
    title: "Photography Exhibition",
    time_date: "2024/08/21 11:30am",
    image: Event3,
  },
  {
    title: "Community Theatre Play",
    time_date: "2024/10/07 07:30pm",
    image: Event3,
  },
  {
    title: "Meditation and Mindfulness",
    time_date: "2024/08/29 08:00am",
    image: Event3,
  },
  {
    title: "Vintage Car Show",
    time_date: "2024/09/22 09:00am",
    image: Event3,
  },
  {
    title: "Cooking Masterclass",
    time_date: "2024/11/15 02:30pm",
    image: Event3,
  },
  {
    title: "Children's Story Hour",
    time_date: "2024/08/05 10:30am",
    image: Event3,
  },
  {
    title: "Entrepreneurship Workshop",
    time_date: "2024/10/20 01:00pm",
    image: Event3,
  },
  {
    title: "Autumn Harvest Festival",
    time_date: "2024/09/10 11:00am",
    image: Event3,
  },
  {
    title: "New Year's Eve Party",
    time_date: "2024/12/31 09:00pm",
    image: Event3,
  },
];

const EventsPrograms: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-[190px] gap-[25px] justify-center">
      <Header>
        <Button
          onClick={() => navigate("/")}
          className="flex gap-4 items-center"
        >
          <FontAwesomeIcon icon={faHome} className="" />
          Go back to Home
        </Button>
      </Header>
      <div className="flex flex-row justify-between px-[80px]">
        <div>
          <h1 className="text-[40px] font-title w-[600px]">Events&programs</h1>
          <p className="w-[600px] text[24px]">
            Here you can see all events and programs
          </p>
        </div>
        <div>
          <Button variant="selected" disabled>
            <FontAwesomeIcon icon={faGrip} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faImage} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4  gap-[30px] px-[80px]">
        {events.map((event) => (
          <ProgramEvent
            buttonText={t("programs.viewmore_button")}
            date={event.time_date}
            imageSrc={event.image}
            title={event.title}
          />
        ))}
      </div>
    </div>
  );
};
export default EventsPrograms;
