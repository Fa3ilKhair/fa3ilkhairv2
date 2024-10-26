import SponsorsLogoContainer from "./sponsorsLogoContainer";
import { useTranslation } from "react-i18next";

export default function SponsorsSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-12 flex flex-col gap-12 items-center">
      <div>
        <h1 className="text-center text-[2.5rem] font-extrabold">{t("our_sponsors")}</h1>
        <p className="text-center text-[1rem] font-italic">{t("join_sponsors")}</p>
      </div>
      <SponsorsLogoContainer />
    </section>
  );
}
