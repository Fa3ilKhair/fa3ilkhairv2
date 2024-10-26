import { faGift, faHandshakeAngle, faOilWell } from "@fortawesome/free-solid-svg-icons";
import ActionCard from "../smallComponents/ActionCard";
import { useTranslation } from "react-i18next";

export default function PprincipaleProject() {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex flex-col items-center py-24 mb-12">
      <h1 className="text-[3rem] font-extrabold text-center leading-[3rem]">
        {t("discover_actions")}
        <br />
        {t("change_lives")}
      </h1>
      <p className="mt-5">{t("what_are_actions")}</p>
      <div className="flex justify-evenly mt-24 w-full phone:flex-col phone:items-center phone:gap-12">
        <ActionCard title={t("well_drilling_project")} content={t("well_drilling_content")} icon={faOilWell} />
        <ActionCard title={t("aid_adha_projects")} content={t("aid_adha_content")} icon={faGift} />
        <ActionCard title={t("al_haouz_earthquake")} content={t("al_haouz_content")} icon={faHandshakeAngle} />
      </div>
    </section>
  );
}
