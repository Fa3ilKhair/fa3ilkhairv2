import { useTranslation } from "react-i18next";
import DernierProjectCard from "../smallComponents/DernierProjetCard";

export default function DernierProjets() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="text-[3rem] font-extrabold text-center leading-[3rem]">{t("latest_projects")}</h1>
      <p className="mt-5 w-2/4 text-center">{t("latest_projects_desc")}</p>
      <div className="flex justify-evenly mt-24 w-full phone:flex-col phone:items-center phone:gap-6">
        <DernierProjectCard text={t("project1_desc")} img="assets/media/dernierProjets.jpg" />
        <DernierProjectCard text={t("project2_desc")} img="assets/media/dernierProjets2.jpg" />
        <DernierProjectCard text={t("project3_desc")} img="assets/media/dernierProjets3.jpg" />
      </div>
    </section>
  );
}
