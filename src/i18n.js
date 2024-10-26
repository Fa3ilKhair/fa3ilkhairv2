import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // automatic language detection
import translationFR from "./locales/fr.json";
import translationAR from "./locales/ar.json";

const resources = {
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector) // detect language automatically
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "fr", // Default language
    fallbackLng: "fr", // Fallback language if the current one is missing translations
    detection: {
      // Options for language detection
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["cookie"], // Use cookie to cache the language
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    debug: true, // Enable debug mode
  });

// Log the detected language after initialization
i18n.on("initialized", (options) => {
  console.log("Detected language:", options.lng);
});

export default i18n;
