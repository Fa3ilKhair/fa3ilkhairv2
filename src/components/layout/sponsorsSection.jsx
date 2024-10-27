import SponsorsLogoContainer from "./sponsorsLogoContainer";
import { useTranslation } from "react-i18next";

export default function SponsorsSection() {
  const { t } = useTranslation();
  const sponsorLogos = [
    [
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/sitel.png", alt: "Sitel" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/signal.png", alt: "Signal" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/norDar.png", alt: "Nor dar" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/hespress.png", alt: "Hespress" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/dari.png", alt: "Dari" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/chaouiBois.png", alt: "Chaoui Bois" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/arcol.png", alt: "Arcol" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/assoHelp.png", alt: "AssoHelp" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/darAmane.png", alt: "Dar Amane" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/seed.png", alt: "Seed" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/sidiAli.png", alt: "Sidi Ali" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/speedArtStudio.jpg", alt: "Speed Art Studio" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/tiryaq.svg", alt: "Tiryaq" },
    ],
    [
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/2MRadio.png", alt: "2M Radio" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/achour.png", alt: "Achour" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/al3omq.png", alt: "Al 3omq" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/futures.png", alt: "Futures Infinity" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/legion.png", alt: "Legion" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/medi1TV.png", alt: "Medi1 TV" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/net3awno.png", alt: "Net3awno" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/oula.png", alt: "Al oula" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/redal.png", alt: "Redal" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/sahifa24.png", alt: "Sahifa 24" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/snrt.png", alt: "SNRT" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/mobadirone.png", alt: "Mobadirone" },
      { src: "/fa3ilkhairv2/assets/sponsorsLogos/ux.png", alt: "UX Centers" },
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
