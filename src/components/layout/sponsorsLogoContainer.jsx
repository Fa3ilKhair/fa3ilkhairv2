import SponsorLogo from "../smallComponents/SponsorLogo";

export default function SponsorsLogosContainer({ sponsorLogos }) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex overflow-hidden space-x-16 phone:space-x-5 group">
        {/* First loop */}
        <div className="flex space-x-16 phone:space-x-5 animate-loop-scroll rtl:animate-loop-scroll-rtl group-hover:paused">
          {sponsorLogos[0].map((item, index) => (
            <SponsorLogo key={index} link={"#"} src={item.src} alt={item.alt} />
          ))}
        </div>

        {/* Second loop (hidden aria) */}
        <div className="flex space-x-16 phone:space-x-5 animate-loop-scroll rtl:animate-loop-scroll-rtl group-hover:paused" aria-hidden="true">
          {sponsorLogos[0].map((item, index) => (
            <SponsorLogo key={index} link={"#"} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
      {/* group 2 */}
      <div className="flex overflow-hidden space-x-16 phone:space-x-5 group">
        {/* First loop */}
        <div className="flex space-x-16 phone:space-x-5 animate-loop-scroll-right rtl:animate-loop-scroll-right-rtl group-hover:paused">
          {sponsorLogos[1].map((item, index) => (
            <SponsorLogo key={index} link={"#"} src={item.src} alt={item.alt} />
          ))}
        </div>

        {/* Second loop (hidden aria) */}
        <div
          className="flex space-x-16 phone:space-x-5 animate-loop-scroll-right rtl:animate-loop-scroll-right-rtl group-hover:paused"
          aria-hidden="true"
        >
          {sponsorLogos[1].map((item, index) => (
            <SponsorLogo key={index} link={"#"} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
