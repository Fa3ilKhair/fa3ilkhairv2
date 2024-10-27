import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function MainContent() {
  const location = useLocation();

  const isNotFound = location.pathname !== "/fa3ilkhairv2" && !location.pathname.startsWith("/fa3ilkhairv2/");
  console.log(isNotFound);

  return (
    <>
      {!isNotFound && <Header />}
      <Routes>
        <Route path="/fa3ilkhairv2" element={<Index />} />
        <Route path="/fa3ilkhairv2/*" element={<NotFoundPage />} />
      </Routes>
      {!isNotFound && <Footer />}
    </>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    document.title = i18n.language === "ar" ? "فاعل خير" : "Fa3il Khair";
  }, [i18n.language]);

  return (
    <Router>
      <MainContent />
    </Router>
  );
}
