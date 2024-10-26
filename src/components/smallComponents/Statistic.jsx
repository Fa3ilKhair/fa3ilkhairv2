import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";

export default function Statistic({ icon, number, subject }) {
  const [statisticOn, setStatisticOn] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatisticOn(true);
        } else {
          setStatisticOn(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="flex w-2/5">
      <span className="w-12 h-12 flex justify-center items-center">
        <FontAwesomeIcon icon={icon} size="2x" className="text-[#4CAF50]" />
      </span>
      <div className="px-3 flex flex-col justify-center">
        {statisticOn && <CountUp className="text-[1.7rem] font-bold leading-5" start={0} end={number} duration={2} delay={0} />}
        <p className="text-[0.8rem]">{subject}</p>
      </div>
    </div>
  );
}
