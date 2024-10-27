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
    <div className="w-full h-full p-6 rounded-lg flex flex-col justify-between bg-white shadow-lg">
      <h4 className="font-bold text-2xl text-gray-800 mb-6 text-center">{t("bank_transfer_fa3il_khair")}</h4>

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
          <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow hover:bg-gray-100 transition">
            <div className="flex flex-wrap gap-2">
              <span className="font-bold text-gray-800">{item.label}:</span>
              <span className="font-medium text-gray-600">{item.value}</span>
            </div>

            <button
              onClick={() => handleCopy(item.value, item.label)}
              aria-label={`Copy ${item.label.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-500 focus:outline-none transition"
            >
              <Icon icon={faCopy} />
            </button>
          </li>
        ))}
      </ul>

      {/* Notification div for copied info */}
      {copiedInfo && (
        <div className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-center">{t(`${copiedInfo.toLowerCase()} ${t("copied")}`)}</div>
      )}

      <p className="text-gray-700 text-base text-center mt-6">{t("soon_add_card_payment")}</p>
    </div>
  );
}
