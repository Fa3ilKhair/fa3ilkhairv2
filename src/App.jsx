import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Galerie from "./pages/Galerie";
import Projects from "./pages/Projects";

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    document.title = i18n.language === "ar" ? "فاعل خير" : "Fa3il Khair";
  }, [i18n.language]);

  const location = useLocation();

  const isNotFound =
    location.pathname !== "/fa3ilkhairv2/" && location.pathname !== "/fa3ilkhairv2/gallery" && location.pathname !== "/fa3ilkhairv2/projects";
  console.log(isNotFound);
  console.log(location.pathname);

  return (
    <>
      {!isNotFound && <Header />}
      <Routes>
        <Route path="/fa3ilkhairv2" element={<Index />} />
        <Route path="/fa3ilkhairv2/gallery" element={<Galerie />} />
        <Route path="/fa3ilkhairv2/projects" element={<Projects />} />
        <Route path="/fa3ilkhairv2/*" element={<NotFoundPage />} />
      </Routes>
      {!isNotFound && <Footer />}
    </>
  );
}
