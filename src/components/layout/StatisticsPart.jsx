import Statistic from "../smallComponents/Statistic";
import { useTranslation } from "react-i18next";
import { faCheck, faCoins, faHandsHolding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function StatictPart() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F5F7FA] phone:flex-col flex justify-evenly py-20 phone:gap-5 phone:py-15">
      <div className="w-1/2 px-32 phone:px-20 text-4xl phone:w-full">
        <p className="font-semibold leading-10">{t("help_community")}</p>
        <p className="font-semibold text-[#4CAF50] leading-10">{t("prosper")}</p>
        <p className="text-[1rem]">{t("succeed_through_work")}</p>
      </div>
      <div className="flex flex-wrap gap-8 phone:justify-end">
        <Statistic icon={faUserGroup} number={"2341"} subject={t("members")} />
        <Statistic icon={faHandsHolding} number={"39328"} subject={t("beneficiaries")} />
        <Statistic icon={faCheck} number={"829"} subject={t("projects_completed")} />
        <Statistic icon={faCoins} number={"926536"} subject={t("dhs_received")} />
      </div>
    </div>
  );
}
