import Icon from "../smallComponents/Icon";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Modal = ({ isOpen, onClose, title, children }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-[#00000050]"
      aria-hidden="true"
    >
      <div className="relative p-4 w-5/6 phone:w-[90%]">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg flex flex-col justify-between">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <Icon icon={faClose} className="p-2" size={"2x"} />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 space-y-4">{children}</div>
          {/* Modal footer */}
          <div className="flex items-center p-4 border-t">
            <button
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-bold text-red-800 focus:outline-none bg-white border border-red-700 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={onClose}
            >
              {t("close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
