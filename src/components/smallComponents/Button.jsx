import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";

export default function Button({ arrow, content, color, ...props }) {
  const { t, i18n } = useTranslation();

  return (
    <button className={`${color} px-7 py-3 text-white font-bold rounded hover:bg-[#409443] text-[1.1rem] flex items-center gap-2`} {...props}>
      {content}
      {arrow ? i18n.language === "ar" ? <Icon icon={faArrowLeft} /> : <Icon icon={faArrowRight} /> : null}
    </button>
  );
}
