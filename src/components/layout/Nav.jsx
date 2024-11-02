import { useState } from "react";
import { useTranslation } from "react-i18next";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Button from "../smallComponents/Button";
import Icon from "../smallComponents/Icon";
import Tag from "../smallComponents/Tag";
import DonateModalContent from "../modal/DonateModalContent";
import Modal from "../modal/Modal";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (pageKey, e) => {
    if (pageKey === "contact") {
      e.preventDefault();
      toggleMenu();
      const footer = document.getElementById("footer");
      if (footer) footer.scrollIntoView({ behavior: "smooth" });
    } else if (pageKey === "about") {
      e.preventDefault();
      toggleMenu();
      const aboutSection = document.getElementById("quiSommesNous");
      if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      setActivePage(pageKey);
      toggleMenu();
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        {modalContent}
      </Modal>

      <nav className="flex items-center relative">
        <button type="button" className="hidden phone:inline" onClick={toggleMenu}>
          <Icon icon={faBarsStaggered} className="text-[#4D4D4D] hover:text-gray-400" size="3x" />
        </button>

        {isMenuOpen && <div className="hidden phone:block fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu} />}

        <div className={`w-full fixed top-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out phone:w-[50vw] phone:h-screen phone:overflow-y-auto z-20 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} hidden phone:block`}>
          <ul className="flex flex-col items-start gap-10 p-12">
            <div className="flex space-x-2">
              <button onClick={() => changeLanguage("fr")} className="px-2 py-1 border rounded hover:bg-gray-200">
                FR
              </button>
              <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded hover:bg-gray-200">
                عربية
              </button>
            </div>
            {["home", "projects", "gallery", "contact", "about"].map((pageKey) => (
              <li key={pageKey}>
                <Tag content={t(pageKey)} route={`/${pageKey === "home" ? "fa3ilkhairv2/" : `fa3ilkhairv2/${pageKey}`}`} color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === pageKey ? "border-b-2 border-[#4caf4f]" : ""}`} onClick={(e) => handlePageClick(pageKey, e)} />
              </li>
            ))}
            <li>
              <Button content={t("donate")} color="bg-[#4caf4f]" arrow={true} onClick={() => handleOpenModal(t("donate_modal_title"), <DonateModalContent />)} />
            </li>
          </ul>
        </div>

        {/* Desktop version */}
        <ul className="flex items-center gap-10 phone:hidden">
          {["home", "projects", "gallery", "contact", "about"].map((pageKey) => (
            <li key={pageKey}>
              <Tag content={t(pageKey)} route={`/${pageKey === "home" ? "fa3ilkhairv2/" : `fa3ilkhairv2/${pageKey}`}`} color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === pageKey ? "border-b-2 border-[#4caf4f]" : ""}`} onClick={(e) => handlePageClick(pageKey, e)} />
            </li>
          ))}
          <li>
            <Button content={t("donate")} color="bg-[#4caf4f]" arrow={true} onClick={() => handleOpenModal(t("donate_modal_title"), <DonateModalContent />)} />
          </li>
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage("fr")} className="px-2 py-1 border rounded hover:bg-gray-200">
              FR
            </button>
            <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded hover:bg-gray-200">
              عربية
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
}
