import Button from "../smallComponents/Button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[url(/Fa3ilKhair/assets/media/groupImage.jpg)] bg-cover bg-center bg-no-repeat lg:h-screen">
      <div className="absolute inset-0 bg-gradient-to-br rtl:bg-gradient-to-bl from-black/100 via-black/20 to-transparent"></div>
      <div className="relative mx-24 phone:mx-0 max-w-screen-xl phone:px-8 py-32 lg:flex lg:h-screen lg:items-center lg:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-[5rem] text-white text-start leading-[4.5rem] rtl:leading-[5rem] phone:leading-[3rem] drop-shadow-lg">
            {t("initiative")}
            <strong className="block font-extrabold text-[#4CAF50]"> {t("city")} </strong>
          </h1>
          <p className="mt-6 phone:mt-3 max-w-lg text-start text-white/90 sm:text-xl leading-relaxed drop-shadow-lg">{t("values")}</p>
          <div className="mt-10 phone:mt-6 flex flex-wrap gap-4 text-center">
            <Button content={t("donate_btn")} color="bg-[#4CAF50]" />
            <Button content={t("learn_more")} color="bg-transparent text-white border border-white hover:bg-white hover:text-[#4CAF50]" />
          </div>
        </div>
      </div>
    </section>
  );
}
