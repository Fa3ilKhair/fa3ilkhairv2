import SponsorsLogoContainer from "./sponsorsLogoContainer";
import { useTranslation } from "react-i18next";

export default function SponsorsSection() {
  const { t } = useTranslation();
  const sponsorLogos = [
    [
      { src: "./assets/sponsorsLogos/sitel.png", alt: "Sitel" },
      { src: "./assets/sponsorsLogos/signal.png", alt: "Signal" },
      { src: "./assets/sponsorsLogos/norDar.png", alt: "Nor dar" },
      { src: "./assets/sponsorsLogos/hespress.png", alt: "Hespress" },
      { src: "./assets/sponsorsLogos/dari.png", alt: "Dari" },
      { src: "./assets/sponsorsLogos/chaouiBois.png", alt: "Chaoui Bois" },
      { src: "./assets/sponsorsLogos/arcol.png", alt: "Arcol" },
      { src: "./assets/sponsorsLogos/assoHelp.png", alt: "AssoHelp" },
      { src: "./assets/sponsorsLogos/darAmane.png", alt: "Dar Amane" },
      { src: "./assets/sponsorsLogos/seed.png", alt: "Seed" },
      { src: "./assets/sponsorsLogos/sidiAli.png", alt: "Sidi Ali" },
      { src: "./assets/sponsorsLogos/speedArtStudio.jpg", alt: "Speed Art Studio" },
      { src: "./assets/sponsorsLogos/tiryaq.svg", alt: "Tiryaq" },
    ],
    [
      { src: "./assets/sponsorsLogos/2MRadio.png", alt: "2M Radio" },
      { src: "./assets/sponsorsLogos/achour.png", alt: "Achour" },
      { src: "./assets/sponsorsLogos/al3omq.png", alt: "Al 3omq" },
      { src: "./assets/sponsorsLogos/futures.png", alt: "Futures Infinity" },
      { src: "./assets/sponsorsLogos/legion.png", alt: "Legion" },
      { src: "./assets/sponsorsLogos/medi1TV.png", alt: "Medi1 TV" },
      { src: "./assets/sponsorsLogos/net3awno.png", alt: "Net3awno" },
      { src: "./assets/sponsorsLogos/oula.png", alt: "Al oula" },
      { src: "./assets/sponsorsLogos/redal.png", alt: "Redal" },
      { src: "./assets/sponsorsLogos/sahifa24.png", alt: "Sahifa 24" },
      { src: "./assets/sponsorsLogos/snrt.png", alt: "SNRT" },
      { src: "./assets/sponsorsLogos/mobadirone.png", alt: "Mobadirone" },
      { src: "./assets/sponsorsLogos/ux.png", alt: "UX Centers" },
    ],
  ];

  return (
    <section className="w-full py-12 flex flex-col gap-12 items-center">
      <div>
        <h1 className="text-center text-[2.5rem] font-extrabold">{t("our_sponsors")}</h1>
        <p className="text-center text-[1rem] font-italic">{t("join_sponsors")}</p>
      </div>
      <SponsorsLogoContainer sponsorLogos={sponsorLogos} />
    </section>
  );
}
