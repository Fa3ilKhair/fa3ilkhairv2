import Button from "../smallComponents/Button";
import { useTranslation } from "react-i18next";

export default function FooterOne() {
  const { t } = useTranslation();

  return (
    <div className="py-24 flex flex-col justify-center items-center bg-[#F5F7FA] gap-5 px-6 w-full">
      <h1 className="text-[4rem] font-bold text-center text-[#263238] leading-[4rem]">
        {t("support_change")}<br />
        {t("offer_hope")}
      </h1>
      <Button content={t("donate_btn")} color="bg-[#4caf4f]" />
    </div>
  );
}
