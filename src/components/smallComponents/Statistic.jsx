import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import { useState } from "react";

export default function Statistic({ icon, number, subject }) {
  const [statisticOn, setStatisticOn] = useState(false);
  return (
    <ScrollTrigger
      className="flex w-2/5"
      onEnter={() => {
        setStatisticOn(true);
      }}
      onExit={() => {
        setStatisticOn(false);
      }}
    >
      <span className="w-12 h-12 flex justify-center items-center">
        <FontAwesomeIcon icon={icon} size="2x" className="text-[#4CAF50]" />
      </span>
      <div className="px-3 flex flex-col justify-center">
        {statisticOn && <CountUp className="text-[1.7rem] font-bold leading-5" start={0} end={number} duration={2} delay={0} />}
        <p className="text-[0.8rem]">{subject}</p>
      </div>
    </ScrollTrigger>
  );
}
