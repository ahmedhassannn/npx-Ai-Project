//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

const services = {
  en: [
    "Add and manage unlimited social media accounts",
    "Download and upload videos with captions from all supported platforms",
    "Download Shorts and videos from YouTube",
    "Download Reels and videos from Instagram and Facebook",
    "Download videos from TikTok",
    "Download Spotlight and Stories from Snapchat",
    "Upload videos directly to Facebook, TikTok, and Instagram",
    "Enable full synchronization between unlimited accounts",
    "Schedule video uploads across all platforms with advanced timing control",
  ],
  ar: [
    "إضافة وإدارة عدد غير محدود من حسابات التواصل الاجتماعي",
    "تحميل ورفع الفيديوهات مع الترجمة أو النصوص المصاحبة من جميع المنصات المدعومة",
    "تحميل الشورتس والفيديوهات من يوتيوب",
    "تحميل الريلز والفيديوهات من إنستجرام وفيسبوك",
    "تحميل الفيديوهات من تيك توك",
    "تحميل سبوت لايت والقصص من سناب شات",
    "رفع الفيديوهات مباشرة على فيسبوك، تيك توك، وإنستجرام",
    "مزامنة كاملة بين عدد غير محدود من الحسابات",
    "جدولة رفع الفيديوهات على جميع المنصات مع تحكم متقدم في التوقيت",
  ],
};

const translations = {
  en: {
    aboutTitle: "About Us",
    aboutDesc:
      "MPX – The ultimate solution for social media managers to organize and track videos across all platforms.\nSave time and level up your strategy with MPX.",
    servicesTitle: "Our Services",
  },
  ar: {
    aboutTitle: "من نحن",
    aboutDesc:
      "MPX – الحل الأمثل لمديري وسائل التواصل الاجتماعي لتنظيم وتتبع الفيديوهات عبر جميع المنصات.\nوفر وقتك وطور استراتيجيتك مع MPX.",
    servicesTitle: "خدماتنا",
  },
};

function App() {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <AboutUs
        title={translations[language].aboutTitle}
        desc={translations[language].aboutDesc}
      />
      <Services
        title={translations[language].servicesTitle}
        services={services[language]}
      />
    </div>
  );
}

export default App;
