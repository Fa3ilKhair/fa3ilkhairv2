import PresentationSection from "../components/layout/presentationSection";
import SponsorsSection from "../components/layout/sponsorsSection";
import Hero from "../components/layout/Hero";
import PprincipaleProject from "../components/layout/PprincipaleProject";
import MapsSection from "../components/layout/MapsSection";
import DernierProjets from "../components/layout/DernierProjets";
import StatictPart from "../components/layout/StatisticsPart";

export default function Main() {
  return (
    <main className="w-full">
      <Hero />
      <PprincipaleProject />
      <StatictPart />
      <PresentationSection />
      <MapsSection />
      <DernierProjets />
      <SponsorsSection />
    </main>
  );
}
