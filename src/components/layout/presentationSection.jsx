import { useTranslation } from "react-i18next";
import Button from "../smallComponents/Button";

export default function PresentationSection() {
  const { t } = useTranslation();

  return (
    <section className="p-24 py-32 mb-10 bg-white flex justify-center w-full gap-24" id="quiSommesNous">
      <div className="relative flex flex-col items-center rtl:justify-end lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-[70%] lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src="/Fa3ilKhair/assets/media/groupImage.jpg"
            alt="Image representing our association's mission"
          />
        </div>

        <div className="bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:-top-8 md:mt-48 lg:w-3/5 lg:-left-72 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 rtl:top-5 rtl:left-100">
          <div className="flex flex-col p-12 phone:p-6 md:px-16 phone:px-3">
            <h2 className="uppercase text-green-800 font-bold text-4xl">{t("about")}</h2>
            <p className="mt-4 text-lg text-justify font-light">{t("aboutContent")}</p>
            <div className="mt-8">
              <Button content={t("learn_more")} color="bg-[#4CAF4F]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
