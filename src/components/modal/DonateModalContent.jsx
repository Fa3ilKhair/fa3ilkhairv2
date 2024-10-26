import { useTranslation } from "react-i18next";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Icon from "../smallComponents/Icon";
import { useState } from "react";

export default function DonateModalContent() {
  const { t } = useTranslation();
  const [copiedInfo, setCopiedInfo] = useState("");

  const handleCopy = (text, infoType) => {
    navigator.clipboard.writeText(text);
    setCopiedInfo(infoType);
    setTimeout(() => setCopiedInfo(""), 2000);
  };

  return (
    <div className="w-full h-full p-6 rounded-lg flex flex-col justify-between">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex-grow overflow-auto">
        <h4 className="font-bold text-lg text-gray-800 mb-4">{t("bank_transfer_fa3il_khair")}</h4>

        <ul className="space-y-4">
          {[
            {
              label: t("beneficiary_name"),
              value: t("initiative"),
            },
            {
              label: t("transfer_object"),
              value: t("money_transfer_reason"),
            },
            {
              label: t("iban"),
              value: "MA64 001 810 00 780 002 011 062 03 18",
            },
            {
              label: t("rib"),
              value: "350810000000000872218644",
            },
            {
              label: t("beneficiary_bank"),
              value: "Bank Al-Maghrib",
            },
            {
              label: t("swift_code"),
              value: "BIG ABBMMAMC",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-sm shadow hover:bg-gray-200 transition">
              <div className="flex flex-wrap gap-3">
                <span className="font-bold text-gray-800 w-full sm:w-auto">{item.label}:</span>
                <span className="font-medium text-gray-800 w-full sm:w-auto">{item.value}</span>
              </div>

              <button
                onClick={() => handleCopy(item.value, item.label)}
                aria-label={`Copy ${item.label.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-500 focus:outline-none transition sm:ml-4 mt-2 sm:mt-0"
              >
                <Icon icon={faCopy} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Notification div for copied info */}
      <div className="h-6 flex justify-center">
        {copiedInfo && (
          <div className="px-4 py-2 flex items-center justify-center bg-blue-100 text-blue-700 rounded-md text-center">
            {t(`${copiedInfo.toLowerCase()} ${t("copied")}`)}
          </div>
        )}
      </div>

      <p className="text-gray-700 text-base text-center mt-4">{t("soon_add_card_payment")}</p>
    </div>
  );
}
