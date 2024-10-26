import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function Email() {
  const { t } = useTranslation();

  return (
    <div className="w-96">
      <div className="relative mb-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[1.4rem]">
          <Icon icon={faEnvelope} color="grey" />
        </div>
        <input
          type="email"
          id="email"
          className="outline-none block w-full p-4 ps-10 text-[1rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#367e38] focus:border-[#367e38]"
          placeholder={t("email_placeholder")}
          required
        />
        <button
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#4caf4f] hover:bg-[#409443] focus:ring-4 focus:outline-none focus:bg-[#367e38] font-medium rounded-lg text-[1rem] px-4 py-2"
        >
          <Icon icon={faPaperPlane} />
        </button>
      </div>
      <p>
        {t("stay_informed")} <br /> {t("dont_miss_events")}
      </p>
    </div>
  );
}
