import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  CreditCard,
  Facebook,
  Heart,
  HelpCircle,
  Home,
  Mail,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { RegistrationSection } from "../components/registration-section";
import { localizeNode, useLanguage } from "../lib/i18n";
import logoImage from "../assets/online-women-madrasah-logo.png";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "ভর্তি রেজিস্ট্রেশন | অনলাইন মহিলা মাদরাসা" },
      {
        name: "description",
        content:
          "নূর অনলাইন মহিলা মাদরাসায় ভর্তির রেজিস্ট্রেশন ও পেমেন্ট পোর্টাল। ঘরে বসে সহজে ভর্তি সম্পন্ন করুন।",
      },
      { property: "og:title", content: "ভর্তি রেজিস্ট্রেশন | অনলাইন মহিলা মাদরাসা" },
      {
        property: "og:description",
        content: "সহজ ৩ ধাপে ঘরে বসেই ভর্তি রেজিস্ট্রেশন ও পেমেন্ট সম্পন্ন করুন।",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RegistrationPage,
});

function RegistrationPage() {
  const [language, setLanguage] = useLanguage();
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const whatsappNumber =
    (import.meta.env["VITE_WHATSAPP_NUMBER"] as string | undefined) || "01875343476";
  const contactPhone = "+8801875343476";
  const contactEmail =
    (import.meta.env["VITE_EMAIL"] as string | undefined) || "fatemaulfat33@gmail.com";
  const facebookPage =
    (import.meta.env["VITE_FACEBOOK_PAGE"] as string | undefined) ||
    "https://www.facebook.com/share/1DcL1Wxbaz/";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  useEffect(() => {
    document.title =
      language === "bn"
        ? "ভর্তি রেজিস্ট্রেশন | অনলাইন মহিলা মাদরাসা"
        : "Admission Registration | Online Women's Madrasa";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [language]);

  // স্ক্রল করলে হেডারে শ্যাডো
  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return localizeNode(
    <div className="site-shell registration-page-shell" lang={language}>
      {/* উপরের পাতলা স্ট্রিপ */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          <div className="top-strip-contacts">
            <a href={`tel:${contactPhone}`} className="top-strip-link">
              <Phone size={12} /> {contactPhone}
            </a>
            <span className="top-strip-sep">·</span>
            <a
              href={facebookPage}
              target="_blank"
              rel="noreferrer"
              className="top-strip-link top-strip-fb"
            >
              <Facebook size={12} /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* হেডার */}
      <header className={`site-header reg-header ${headerScrolled ? "header-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="হোমপেজে ফিরে যান">
            <img className="brand-logo" src={logoImage} alt="অনলাইন মহিলা মাদরাসার লোগো" />
            <span className="brand-copy">
              <strong>অনলাইন মহিলা মাদরাসা</strong>
              <small>আলোর পথে ইলমের যাত্রা</small>
            </span>
          </Link>

          <div className="header-actions">
            <Link
              to="/"
              className="button button-outline back-home-btn"
              aria-label={language === "bn" ? "হোমে ফিরে যান" : "Back to home"}
              title={language === "bn" ? "হোমে ফিরে যান" : "Back to home"}
            >
              <Home size={15} />
              <span className="back-home-text">
                {language === "bn" ? "হোমে ফিরে যান" : "Back to home"}
              </span>
              <span className="back-home-short">{language === "bn" ? "হোম" : "Home"}</span>
            </Link>
            <div
              className="language-switch"
              role="group"
              aria-label={language === "bn" ? "ভাষা নির্বাচন" : "Select language"}
            >
              <button
                type="button"
                className={language === "bn" ? "active" : ""}
                aria-pressed={language === "bn"}
                onClick={() => setLanguage("bn")}
              >
                বাংলা
              </button>
              <button
                type="button"
                className={language === "en" ? "active" : ""}
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* মূল রেজিস্ট্রেশন কন্টেন্ট */}
      <main className="register-main-page">
        {/* ব্যানার */}

        {/* <section className="reg-hero-banner">
          <div className="container reg-hero-inner">
            <div className="reg-breadcrumbs">
              <Link to="/" className="breadcrumb-link">
                হোম
              </Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">ভর্তি রেজিস্ট্রেশন</span>
            </div>

            <div className="reg-badge-kicker">
              <span className="pulse-dot" />
              <span>অনলাইন ভর্তি চলমান</span>
            </div>

            <h1 className="reg-title">
              অনলাইন ভর্তি <em>রেজিস্ট্রেশন</em>
            </h1>
            <p className="reg-subtitle">
              দ্বীনি শিক্ষার আলোয় জীবনকে সাজাতে সহজ ৩টি ধাপে আপনার ভর্তি সম্পন্ন করুন: তথ্য পূরণ, পেমেন্ট ও
              নিশ্চয়তা।
            </p> */}

        {/* কোর্স হাইলাইটস পিলস */}
        {/* <div className="reg-highlights">
              <div className="highlight-pill">
                <CheckCircle2 size={16} className="pill-icon" />
                <span>২ মাসের পূর্ণাঙ্গ কোর্স</span>
              </div>
              <div className="highlight-pill">
                <Clock3 size={16} className="pill-icon" />
                <span>Zoom লাইভ ক্লাস</span>
              </div>
              <div className="highlight-pill">
                <ShieldCheck size={16} className="pill-icon" />
                <span>কোর্স ফি মাত্র ৳ ২,৫০০</span>
              </div>
            </div>
          </div> */}
        {/* </section> */}

        {/* ৩ ধাপের রেজিস্ট্রেশন ফর্ম কম্পোনেন্ট */}
        <RegistrationSection language={language} />

        {/* ==== সাহায্য ও প্রশ্ন সাপোর্ট সেকশন ====*/}

        {/* <section className="reg-help-section">
          <div className="container">
            <div className="reg-help-card">
              <div className="help-icon-wrap">
                <Heart size={28} />
              </div>
              <h3>ভর্তি সংক্রান্ত যেকোনো প্রয়োজনে আমরা পাশে আছি</h3>
              <p>
                ফর্ম পূরণে বা পেমেন্টে কোনো জিজ্ঞাসা থাকলে সরাসরি আমাদের সঙ্গে যোগাযোগ করতে পারেন। আমাদের
                টিম আপনাকে সার্বিক সহযোগিতা করবে।
              </p>
              <div className="help-actions">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary help-whatsapp-btn"
                >
                  <MessageCircle size={18} /> WhatsApp: {contactPhone}
                </a>
                <a href={`tel:${contactPhone}`} className="button button-outline">
                  <Phone size={18} /> সরাসরি কল: {contactPhone}
                </a>
                <a href={`mailto:${contactEmail}`} className="button button-outline">
                  <Mail size={18} /> {contactEmail}
                </a>
                <a
                  href={facebookPage}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline help-facebook-btn"
                >
                  <Facebook size={18} /> Facebook Page
                </a>
                <Link to="/" className="button button-light">
                  <ArrowLeft size={16} /> হোমপেজে ফিরুন
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* ফুটার */}

      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} নূর অনলাইন মহিলা মাদরাসা। সর্বস্বত্ব সংরক্ষিত।</span>
          <span>
            {language === "bn" ? "নির্মাণ ও পরিচালনায়" : "Designed & Developed by"}{" "}
            <a
              href="https://innovative.com.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Innovative Technology and Engineering
            </a>
          </span>
          <div className="footer-links">
            <Link to="/" className="footer-nav-link">
              <Home size={13} className="footer-icon" />
              <span>হোম</span>
            </Link>
            <Link to="/#courses" className="footer-nav-link">
              <BookOpen size={13} className="footer-icon" />
              <span>কোর্সসমূহ</span>
            </Link>
            <Link to="/#fees" className="footer-nav-link">
              <CreditCard size={13} className="footer-icon" />
              <span>কোর্স ফি</span>
            </Link>
            <Link to="/#faq" className="footer-nav-link">
              <HelpCircle size={13} className="footer-icon" />
              <span>জিজ্ঞাসা</span>
            </Link>
            <Link to="/#contact" className="footer-nav-link">
              <PhoneCall size={13} className="footer-icon" />
              <span>যোগাযোগ</span>
            </Link>
            <a
              href={facebookPage}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link footer-social-facebook"
            >
              <Facebook size={13} className="footer-icon" />
              <span>Facebook Page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>,
    language,
  );
}
