import Button from "../smallComponents/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "../modal/Modal";
import DonateModalContent from "../modal/DonateModalContent";

export default function FooterOne() {
  const { t } = useTranslation();
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

  return (
    <>
      <div className="py-24 flex flex-col justify-center items-center bg-[#F5F7FA] gap-5 px-6 w-full">
        <h1 className="text-[4rem] font-bold text-center text-[#263238] leading-[4rem]">
          {t("support_change")}
          <br />
          {t("offer_hope")}
        </h1>
        <Button content={t("donate_btn")} color="bg-[#4caf4f]" onClick={() => handleOpenModal(t("donate_modal_title"), <DonateModalContent />)} />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </>
  );
}
