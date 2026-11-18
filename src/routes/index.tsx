// =====================================================================
// অনলাইন মহিলা মাদরাসা — Home page ("/" route)
// =====================================================================

// ---------- Imports: Router / React / Utilities ----------
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { localizeNode, useLanguage } from "../lib/i18n"; // ভাষা (bn/en) সংক্রান্ত helper
import { useReveal } from "../lib/use-reveal"; // scroll করলে section reveal animation

// ---------- Imports: Icons ----------
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  CreditCard,
  Facebook,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  Info,
  Layers,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
  Video,
  X,
} from "lucide-react";

// ---------- Imports: Images ----------
import heroImage from "../assets/madrasa-quran-hero.jpg";
import classImage from "../assets/online-quran-class.jpg";
import logoImage from "../assets/online-women-madrasah-logo.png";
import quranFlowers from "../assets/photos/quran-flowers.jpg";
import certificatePhoto from "../assets/photos/certificate.jpg";
import onlineClassPhoto from "../assets/photos/online-class.jpg";
import rehalPlants from "../assets/photos/rehal-plants.jpg";
import deskStudy from "../assets/photos/desk-study.jpg";
import thumbNotebook from "../assets/photos/thumb-notebook.jpg";
import thumbTajweed from "../assets/photos/thumb-tajweed.jpg";
import thumbPrayerRoom from "../assets/photos/thumb-prayer-room.jpg";
import thumbRehal from "../assets/photos/thumb-rehal.jpg";
import thumbParenting from "../assets/photos/thumb-parenting.jpg"; 
import dailyRoutine from "../assets/photos/daily-routine.jpg";
import weeklyExam from "../assets/photos/weekly-exam.jpg";

// =====================================================================
// Route definition — page title ও SEO/OpenGraph meta tag
// =====================================================================
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: " অনলাইন মহিলা মাদরাসা | ঘরে বসে কুরআন শিক্ষা" },
      {
        name: "description",
        content:
          "নারীদের জন্য অনলাইন কুরআন, তাজবিদ ও ইসলামী শিক্ষার যত্নশীল আয়োজন। নিজের সুবিধামতো সময়ে ঘরে বসেই শিখুন।",
      },
      { property: "og:title", content: " অনলাইন মহিলা মাদরাসা" },
      {
        property: "og:description",
        content: "ঘরে বসে শিখুন পবিত্র কুরআন ও প্রয়োজনীয় ইসলামী জ্ঞান।",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

// =====================================================================
// Static data (কম্পোনেন্টের বাইরে রাখা হয়েছে যাতে প্রতি render-এ নতুন করে তৈরি না হয়)
// =====================================================================

// ---- "আমাদের পাঠ্যক্রম" section-এর ৪টি কোর্স কার্ড ----
const courses = [
  {
    icon: BookOpen,
    photo: thumbNotebook,
    number: "০১",
    title: "নূরানী ও কুরআন শিক্ষা",
    text: "একদম শুরু থেকে শুদ্ধভাবে আরবি হরফ চেনা, পড়া ও কুরআন তিলাওয়াত শেখা।",
    tag: "নতুন শিক্ষার্থীদের জন্য",
  },
  {
    icon: Sparkles,
    photo: thumbTajweed,
    number: "০২",
    title: "কুরআন তিলাওয়াত ও তাজবিদ",
    text: "মাখরাজ, সিফাত ও তাজবিদের নিয়ম মেনে সুন্দর ও শুদ্ধ তিলাওয়াতের অনুশীলন।",
    tag: "শুদ্ধ তিলাওয়াত",
  },
  {
    icon: Heart,
    photo: thumbPrayerRoom,
    number: "০৩",
    title: "দৈনন্দিন মাসআলা ও দোয়া",
    text: "দৈনন্দিন জীবনের প্রয়োজনীয় মাসআলা, মাসনূন দোয়া ও আমল সম্পর্কে শেখা।",
    tag: "প্রয়োজনীয় ইসলামী জ্ঞান",
  },
  {
    icon: GraduationCap,
    photo: thumbRehal,
    number: "০৪",
    title: "হিফজ ও আমপারা",
    text: "পরিকল্পিত অনুশীলন ও নিয়মিত পুনরাবৃত্তির মাধ্যমে মুখস্থ করার সহায়তা।",
    tag: "ধাপে ধাপে অগ্রগতি",
  },
];

// ---- "কেন আমাদের বেছে নেবেন" section-এর ৪টি সুবিধা ----
const benefits = [
  {
    icon: Video,
    title: "সরাসরি অনলাইন ক্লাস",
    text: "শিক্ষিকার সঙ্গে লাইভ ক্লাসে পড়া ও অনুশীলনের সুযোগ।",
  },
  {
  icon: Clock3,
  title: "দুইটি সময়ের মধ্যে পছন্দের সময় নির্বাচন",
  text: "যেকোনো একটি বেছে নেওয়ার সুবিধা—দুপুর ৩টা থেকে ৪টা অথবা রাত ৯টা থেকে ১০টা।",
},
  {
    icon: Users,
    title: "নারীদের জন্য",
    text: "নারী শিক্ষার্থীদের উপযোগী ও স্বাচ্ছন্দ্যপূর্ণ শেখার পরিবেশ।",
  },
  {
    icon: ShieldCheck,
    title: "যত্নসহকারে পাঠদান",
    text: "শিক্ষার্থীর বর্তমান দক্ষতা বুঝে ধাপে ধাপে শেখানোর লক্ষ্য।",
  },
];

type NavItem = {
  label: string;
  href: string;
  icon: typeof Home;
};

// ---- হেডার নেভিগেশন ও ফুটার লিংক: [লেবেল, section id, আইকন] ----
const navItems: NavItem[] = [
  { label: "হোম", href: "#home", icon: Home },
  { label: "আমাদের সম্পর্কে", href: "#about", icon: Info },
  { label: "কোর্সসমূহ", href: "#courses", icon: BookOpen },
  { label: "কোর্সের বিস্তারিত", href: "#course-details", icon: Layers },
  { label: "ক্লাস পরিচালনা", href: "#class", icon: Video },
  { label: "আমাদের শিক্ষিকা", href: "#teacher", icon: GraduationCap },
  { label: "পরীক্ষা ও পুরস্কার", href: "#exam", icon: Award },
  { label: "ফি", href: "#fees", icon: CreditCard },
  { label: "কেন আমরা", href: "#why-us", icon: ShieldCheck },
  { label: "জিজ্ঞাসা", href: "#faq", icon: HelpCircle },
  { label: "যোগাযোগ", href: "#contact", icon: PhoneCall },
];

// ---- Scroll করার সময় যে section-গুলো observe করে active nav link ঠিক করা হয় ----
const observedSectionIds = [
  "home",
  "about",
  "courses",
  "course-details",
  "class",
  "teacher",
  "exam",
  "fees",
  "why-us",
  "faq",
  "contact",
];

// ---- FAQ (প্রশ্ন ও উত্তর) ----
const faqs = [
  {
    q: "ক্লাস কি অনলাইনে হবে?",
    a: "হ্যাঁ, ক্লাস অনলাইনে পরিচালিত হবে। প্রয়োজনীয় ডিভাইস ও ইন্টারনেট সংযোগ থাকলে ঘরে বসেই অংশ নিতে পারবেন।",
  },
  {
    q: "একদম নতুন শিক্ষার্থীরা কি ভর্তি হতে পারবেন?",
    a: "অবশ্যই। প্রাথমিক স্তর থেকে শেখার জন্য নূরানী ও কুরআন শিক্ষা কোর্স দিয়ে শুরু করার সুযোগ রয়েছে।",
  },
  {
    q: "ক্লাসের সময় কীভাবে নির্ধারণ হবে?",
    a: "আপনার সুবিধাজনক সময় ও শিক্ষিকার সময় মিলিয়ে ক্লাসের সময় সম্পর্কে আলোচনা করে নেওয়া যাবে।",
  },
  {
    q: "ভর্তি ও কোর্স ফি কীভাবে জানব?",
    a: "দুই মাসের কোর্স ফি ২,৫০০ টাকা। রেজিস্ট্রেশন ও পেমেন্ট যাচাইয়ের পর ভর্তি নিশ্চিত হবে।",
  },
  {
    q: "কুরআন পড়তে না জানলেও কি ভর্তি হওয়া যাবে?",
    a: "হ্যাঁ, প্রাথমিক স্তর থেকে শেখার আগ্রহী শিক্ষার্থীরা রেজিস্ট্রেশন করতে পারবেন।",
  },
  {
    q: "আগে থেকে অভিজ্ঞতা প্রয়োজন?",
    a: "না। ফর্মে বর্তমান কুরআন পড়ার দক্ষতা জানালে সে অনুযায়ী আলোচনা করা যাবে।",
  },
  {
    q: "ক্লাস মিস হলে কী হবে?",
    a: "ক্লাস মিস হলে করণীয় কর্তৃপক্ষের কাছ থেকে নিশ্চিত করে জানানো হবে।",
  },
  {
    q: "ফি কি একবারেই দিতে হবে?",
    a: "ভর্তির সময় সম্পূর্ণ ফি এককালীন পরিশোধ করতে হয়। বিশেষ কোনো প্রয়োজনে ভর্তি কর্তৃপক্ষের সঙ্গে সরাসরি কথা বলে জেনে নিতে পারেন।",
  },
  {
    q: "শুধু মহিলারাই কি অংশ নিতে পারবেন?",
    a: "এই মাদরাসার কোর্স নারীদের জন্য নির্ধারিত।",
  },
  {
    q: "ক্লাসের লিংক কোথায় পাব?",
    a: "ভর্তি নিশ্চিত হওয়ার পর WhatsApp গ্রুপ/নির্দেশনার মাধ্যমে Zoom ক্লাসের তথ্য দেওয়া হবে।",
  },
];

// =====================================================================
// Main page component
// =====================================================================
function Index() {
  // ---------- State & hooks ----------
  const [language, setLanguage] = useLanguage(); // "bn" | "en"
  useReveal(); // scroll reveal animation চালু করে

  const [menuOpen, setMenuOpen] = useState(false); // মোবাইল মেনু খোলা/বন্ধ
  const [faqOpen, setFaqOpen] = useState<number | null>(0); // কোন FAQ খোলা (প্রথমটা ডিফল্ট খোলা)
  const [activeId, setActiveId] = useState("home"); // এখন কোন section স্ক্রিনে (nav highlight-এর জন্য)
  const [showTop, setShowTop] = useState(false); // "উপরে যান" বাটন দেখাবে কি না
  const [topBarHidden, setTopBarHidden] = useState(false); // নিচে স্ক্রল করলে শুধু উপরের লোগো/ভর্তি বার লুকানো (নেভবার সব সময় থাকবে)
  const [headerScrolled, setHeaderScrolled] = useState(false); // স্ক্রল করলে হেডারে শ্যাডো ও ব্লার

  // ---------- Contact Information (.env ও নিশ্চিত ডিফল্ট মান) ----------
  const whatsappNumber =
    (import.meta.env["VITE_WHATSAPP_NUMBER"] as string | undefined) || "+8801875343476";
  const contactPhone = "+8801875343476";
  const contactEmail =
    (import.meta.env["VITE_EMAIL"] as string | undefined) || "fatemaulfat33@gmail.com";
  const facebookPage =
    (import.meta.env["VITE_FACEBOOK_PAGE"] as string | undefined) ||
    "https://www.facebook.com/share/1DcL1Wxbaz/";

  // ---------- Helpers ----------
  const closeMenu = () => setMenuOpen(false);
  const footerItems = navItems; // ফুটারেও একই লিংক
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  // ---------- Effect 1: ভাষা বদলালে browser tab-এর title আপডেট ----------
  useEffect(() => {
    document.title =
      language === "bn"
        ? "অনলাইন মহিলা মাদরাসা | ঘরে বসে কুরআন শিক্ষা"
        : "Online Women's Madrasa | Quran Learning from Home";
  }, [language]);

  // ---------- Effect 2: scroll-spy (কোন section দেখা যাচ্ছে) + "উপরে যান" বাটন ----------
  useEffect(() => {
    // Section স্ক্রিনের মাঝামাঝি এলে সেটিকে active ধরা হয় (কোনো ঝাঁকুনি ছাড়া শান্তভাবে)
    const observer = new IntersectionObserver(
      (entries) => {
        // পৃষ্ঠার ওপরের অংশে (১৫০px পর্যন্ত) সর্বদা Home active থাকবে
        if (window.scrollY <= 150) {
          setActiveId("home");
          return;
        }

        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // একাধিক সেকশন দৃশ্যমান হলে স্ক্রিনের সবচেয়ে কাছাকাছি থাকা সেকশনটিকে অগ্রাধিকার দেওয়া হবে
          visibleEntries.sort(
            (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
          );
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    observedSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // স্ক্রল ট্র্যাকিং: back-to-top বাটন এবং নিচে স্ক্রল করলে শুধু ওপরের বার সরানো / উপরে উঠলে দেখানো
    let lastScrollY = window.scrollY;
    let accumulatedDelta = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setShowTop(currentScrollY > 700);
        setHeaderScrolled(currentScrollY > 25);

        if (menuOpen) {
          setTopBarHidden(false);
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        // পৃষ্ঠার ওপরের অংশে (১৬০px পর্যন্ত) সব সময় সম্পূর্ণ হেডার স্থির থাকবে এবং Home সক্রিয় থাকবে
        if (currentScrollY <= 160) {
          setActiveId("home");
          setTopBarHidden(false);
          accumulatedDelta = 0;
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        const diff = currentScrollY - lastScrollY;

        // স্ক্রলের দিক পরিবর্তন হলে ডেল্টা রিসেট
        if ((diff > 0 && accumulatedDelta < 0) || (diff < 0 && accumulatedDelta > 0)) {
          accumulatedDelta = 0;
        }
        accumulatedDelta += diff;

        // নিচে স্ক্রল করলে (৫০px এর বেশি হলে) শুধু ওপরের বার উপরে উঠবে
        if (accumulatedDelta > 50) {
          setTopBarHidden(true);
        }
        // উপরে স্ক্রল করলে (৪৫px এর বেশি হলে) ওপরের বার মসৃণভাবে ফিরে আসবে
        else if (accumulatedDelta < -45) {
          setTopBarHidden(false);
        }

        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  // ===================================================================
  // JSX — পুরো পেজ localizeNode দিয়ে মোড়ানো (ভাষা অনুযায়ী টেক্সট অনুবাদের জন্য)
  // ===================================================================
  return localizeNode(
    <div className="site-shell" lang={language}>
      {/* ===== উপরের পাতলা স্ট্রিপ: বিসমিল্লাহ ও কন্টাক্ট লিঙ্ক ===== */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          <div className="top-strip-contacts">
            <a href={`tel:${contactPhone}`} className="top-strip-link">
              <Phone size={12} /> {contactPhone}
            </a>
            <span className="top-strip-sep">·</span>
            <a href={`mailto:${contactEmail}`} className="top-strip-link">
              <Mail size={12} /> {contactEmail}
            </a>
            {facebookPage && (
              <>
                <span className="top-strip-sep">·</span>
                <a
                  href={facebookPage}
                  target="_blank"
                  rel="noreferrer"
                  className="top-strip-link top-strip-fb"
                >
                  <Facebook size={12} /> Facebook
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ===== Header: লোগো, ভর্তি বাটন, ভাষা পরিবর্তন, মোবাইল মেনু, নেভিগেশন ===== */}
      <header
        className={`site-header ${topBarHidden ? "topbar-hidden" : ""} ${headerScrolled ? "header-scrolled" : ""}`}
      >
        <div className="site-header-top">
          <div className="container header-inner">
            {/* লোগো ও প্রতিষ্ঠানের নাম */}
            <a
              className="brand"
              href="#home"
              onClick={closeMenu}
              aria-label={
                language === "bn" ? "অনলাইন মহিলা মাদরাসা হোম" : "Online Women's Madrasa home"
              }
            >
              <img
                className="brand-logo"
                src={logoImage}
                alt={
                  language === "bn" ? "অনলাইন মহিলা মাদরাসার লোগো" : "Online Women's Madrasa logo"
                }
              />
              <span className="brand-copy">
                <strong>অনলাইন মহিলা মাদরাসা</strong>
                <small>আলোর পথে ইলমের যাত্রা</small>
              </span>
            </a>

            {/* ভর্তি বাটন + ভাষা পরিবর্তন (বাংলা / English) */}
            <div className="header-actions">
              <Link to="/registration" className="nav-cta header-cta">
                <UserPlus size={16} /> ভর্তি হোন <ArrowLeft size={16} />
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
                  onClick={() => {
                    setLanguage("bn");
                    setTopBarHidden(false);
                  }}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  className={language === "en" ? "active" : ""}
                  aria-pressed={language === "en"}
                  onClick={() => {
                    setLanguage("en");
                    setTopBarHidden(false);
                  }}
                >
                  English
                </button>
              </div>
            </div>

            {/* মোবাইল হ্যামবার্গার মেনু বাটন */}
            <button
              className="mobile-menu"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? language === "bn"
                    ? "মেনু বন্ধ করুন"
                    : "Close menu"
                  : language === "bn"
                    ? "মেনু খুলুন"
                    : "Open menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* প্রধান নেভিগেশন (active section হাইলাইট হয়) */}
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label={language === "bn" ? "প্রধান নেভিগেশন" : "Main navigation"}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isRoute = item.href.startsWith("/");
            const isActive = !isRoute && activeId === item.href.slice(1);
            if (isRoute) {
              return (
                <Link key={item.href} to={item.href} onClick={closeMenu} className="nav-route-link">
                  <Icon size={14} className="nav-icon" />
                  <span>{item.label}</span>
                </Link>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "location" : undefined}
              >
                <Icon size={14} className="nav-icon" />
                <span>{item.label}</span>
              </a>
            );
          })}
          <Link to="/registration" className="nav-cta menu-cta" onClick={closeMenu}>
            <UserPlus size={16} /> ভর্তি হোন <ArrowLeft size={16} />
          </Link>
        </nav>
      </header>

      <main>
        {/* ============================================================
            1. HERO — প্রধান ব্যানার
           ============================================================ */}
        <section className="hero-section" id="home">
          <div className="hero-pattern" />
          <div className="container hero-grid">
            {/* বাম পাশ: শিরোনাম, বর্ণনা ও বাটন */}
            <div className="hero-copy">
              <span className="eyebrow">
                <span /> নারীদের জন্য অনলাইন ইসলামী শিক্ষা
              </span>

              {/* শিরোনাম ভাষা অনুযায়ী আলাদা */}
              <h1>
                {language === "bn" ? (
                  <>
                    শুদ্ধ কুরআন শিক্ষার
                    <br />
                    <em>সুন্দর যাত্রা</em> শুরু হোক
                    <br />
                    আজ থেকেই
                  </>
                ) : (
                  <>
                    Begin your journey
                    <br />
                    <em>to correct Quran recitation</em>
                    <br />
                    today
                  </>
                )}
              </h1>

              <p className="hero-description">
                ঘরে বসেই শিখুন পবিত্র কুরআন, তাজবিদ ও প্রয়োজনীয় ইসলামী জ্ঞান। সহজ পাঠদান, আন্তরিক পরিচর্যা
                আর আপনার সুবিধামতো সময়ে।
              </p>

              <div className="hero-actions">
                <Link to="/registration" className="button button-primary hero-enroll-btn">
                  ভর্তি হোন <ArrowLeft size={18} />
                </Link>
                <a className="button button-outline" href="#courses">
                  <BookOpen size={18} /> কোর্সগুলো দেখুন
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-icon">
                  <CheckCircle2 size={18} />
                </div>
                <span>শেখার প্রতিটি ধাপে আন্তরিক সহযোগিতা</span>
                <span className="trust-divider" />
                <span>অনলাইন ক্লাস</span>
              </div>
            </div>

            {/* ডান পাশ: ছবি ও ভাসমান নোট */}
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src={heroImage}
                  alt={
                    language === "bn"
                      ? "রেহালে রাখা খোলা পবিত্র কুরআন"
                      : "The Holy Quran open on a wooden stand"
                  }
                />
                <div className="image-caption">
                  <span className="caption-icon">
                    <BookOpen size={20} />
                  </span>
                  <span>
                    <strong>ইলম হোক জীবনের আলো</strong>
                    <small>শিখুন, বুঝুন, আমল করুন</small>
                  </span>
                </div>
              </div>
              <div className="floating-note">
                <span className="floating-star">✦</span>
                <span>
                  <strong>প্রতিদিন একটু একটু করে</strong>
                  <small>শুদ্ধতার পথে এগিয়ে চলুন</small>
                </span>
              </div>
              <div className="hero-dots" />
            </div>
          </div>

          {/* Hero-র নিচে কুরআনের আয়াত */}
          <div className="hero-bottom container">
            <span>وَقُل رَّبِّ زِدْنِي عِلْمًا</span>
            <span>“হে আমার রব, আমার জ্ঞান বৃদ্ধি করে দিন।” — সূরা ত্ব-হা: ১১৪</span>
          </div>
        </section>

        {/* ============================================================
            2. ABOUT — আমাদের পরিচয়
           ============================================================ */}
        <section className="intro-section section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-image">
              <img
                src={classImage}
                alt={
                  language === "bn"
                    ? "অনলাইনে কুরআন শিক্ষা নিচ্ছেন একজন ছাত্রী"
                    : "A student learning the Quran online"
                }
              />
              <div className="intro-image-label rounded-sm">
                <span>نُور</span>
                <div>
                  <strong>জ্ঞান অর্জনের পথে</strong>
                  <small>আপনার পাশে আমরা</small>
                </div>
              </div>
            </div>

            <div className="intro-copy">
              <span className="section-kicker">আমাদের পরিচয়</span>
              <h2>
                ইলম অর্জন হোক
                <br />
                <em>সহজ ও আনন্দময়</em>
              </h2>
              <p>
                অনলাইন মহিলা মাদরাসার লক্ষ্য হলো নারীদের জন্য ঘরে বসে কুরআন ও প্রয়োজনীয় দ্বীনি শিক্ষা
                অর্জনের একটি সহজ ও যত্নশীল সুযোগ তৈরি করা।
              </p>
              <p>
                শিক্ষার্থীর শেখার স্তর ও প্রয়োজন অনুযায়ী পাঠ সাজানোর মাধ্যমে আমরা শুদ্ধভাবে শেখার অভ্যাস গড়ে
                তুলতে সহায়তা করতে চাই।
              </p>
              <a className="text-link" href="#contact">
                আমাদের সঙ্গে কথা বলুন <ArrowLeft size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. COURSE IMPORTANCE — কোর্সটি কেন গুরুত্বপূর্ণ
           ============================================================ */}
        <section className="section-pad" id="course-importance">
          <div className="container importance-grid">
            <div className="intro-copy">
              <span className="section-kicker">কেন এই কোর্সটি আপনার জন্য গুরুত্বপূর্ণ?</span>
              <h2>
                দ্বীনি শিক্ষার পথে <em>আপনার পাশে</em>
              </h2>
              <p>
                কুরআন পড়তে গিয়ে উচ্চারণে ভুল হচ্ছে? সন্তানকে ইসলামী আদর্শে গড়ে তুলতে চান? ইসলামের মৌলিক
                বিষয়গুলো ভালোভাবে জানতে চান? সংসার ও সন্তান সামলাতে গিয়ে নিজের দ্বীনি শিক্ষার জন্য সময়
                বের করতে পারছেন না?
              </p>
              <p>তাহলে Online Women Madrasah হতে পারে আপনার দ্বীনি শিক্ষার সুন্দর একটি যাত্রার শুরু।</p>
            </div>
            <figure className="importance-photo">
              <img
                src={thumbParenting}
                alt={
                  language === "bn"
                    ? "সন্তানকে কুরআন শেখাচ্ছেন একজন মা"
                    : "A mother teaching her child the Quran"
                }
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* ============================================================
            4. COURSES — ৪টি কোর্স কার্ড (courses array থেকে)
           ============================================================ */}
        <section className="courses-section section-pad" id="courses">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">আমাদের পাঠ্যক্রম</span>
              <h2>
                আপনার শেখার জন্য <em>যে কোর্সগুলো</em>
              </h2>
              <p>নিজের বর্তমান অবস্থান থেকে শুরু করুন, ধীরে ধীরে এগিয়ে যান শুদ্ধতার পথে।</p>
            </div>

            <div className="course-grid">
              {courses.map((course) => {
                const Icon = course.icon;
                return (
                  <article className="course-card" key={course.number}>
                    <div className="course-card-top">
                      <span className="course-photo">
                        <img src={course.photo} alt="" loading="lazy" />
                        <span className="course-icon">
                          <Icon size={15} strokeWidth={2} />
                        </span>
                      </span>
                      <span className="course-number">{course.number}</span>
                    </div>
                    <span className="course-tag">{course.tag}</span>
                    <h3>{course.title}</h3>
                    <p>{course.text}</p>
                    <div className="course-card-actions">
                      <Link to="/registration" className="course-enroll-btn">
                        ভর্তি হোন <ArrowLeft size={14} />
                      </Link>
                      <a
                        href="#course-details"
                        aria-label={`${course.title} সম্পর্কে জানুন`}
                        className="course-link"
                      >
                        বিস্তারিত জানুন
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            5. COURSE DETAILS — কী কী শেখানো হবে
           ============================================================ */}
        <section className="section-pad curriculum-extra" id="course-details">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">কোর্সের বিস্তারিত</span>
              <h2>
                কী কী <em>শেখানো হবে</em>
              </h2>
              <p>আমাদের সুনির্দিষ্ট ও সমৃদ্ধ পাঠ্যবিষয়গুলো সাজানো হলো।</p>
            </div>

            <div className="course-grid">
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={quranFlowers} alt="" loading="lazy" />
                </span>
                <h3>সহীহ-শুদ্ধ কুরআন শিক্ষা</h3>
                <p>
                  আরবি হরফ, ১৭টি মাখরাজের পরিচিতি, মাদ, গুন্নাহ, কলকলাহ এবং নামাজে পঠিত ১২টি ছোট সূরা
                  অর্থসহ শেখার লক্ষ্য।
                </p>
              </article> 
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={dailyRoutine} alt="দৈনন্দিন রুটিন" loading="lazy" />
                </span>
                <h3>দৈনন্দিন রুটিনের মাধ্যমে ভালো অভ্যাস তৈরি করা</h3>
                <p>
                  নিয়মিত নামাজ, কুরআন তিলাওয়াত, পড়াশোনা, সময়মতো ঘুম ও দৈনন্দিন কাজের মাধ্যমে সুন্দর জীবনযাপন এবং ভালো অভ্যাস গড়ে তোলা।
                </p>
              </article>
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={rehalPlants} alt="" loading="lazy" />
                </span>
                <h3>ইসলামের মৌলিক জ্ঞান ও হাদিস</h3>
                <p>
                  ঈমান ও ইসলামের পরিচয়, শিরক, কুফর, বিদআত, গুনাহ ও নেক আমল এবং গুরুত্বপূর্ণ সহীহ হাদিসের
                  শিক্ষা।
                </p>
              </article>

              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={thumbParenting} alt="" loading="lazy" />
                </span>
                <h3>ইসলামিক প্যারেন্টিং</h3>
                <p>
                  সন্তানকে ইসলামী আদর্শে গড়ে তোলা, নামাজ ও কুরআনের প্রতি আগ্রহী করা এবং সুন্দর আচরণ ও
                  পারিবারিক শিক্ষা।
                </p>
              </article>
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={weeklyExam} alt="সাপ্তাহিক পরীক্ষা" loading="lazy" />
                </span>
                <h3>সাপ্তাহিক পরীক্ষার মাধ্যমে পড়ার অগ্রগতি</h3>
                <p>নিয়মিত সাপ্তাহিক পরীক্ষা নেওয়ার মাধ্যমে শিক্ষার্থীদের পড়ার অগ্রগতি যাচাই, দুর্বলতা চিহ্নিতকরণ এবং শেখার দক্ষতা উন্নত করে পড়াশোনাকে আরও সহজ ও কার্যকর করা। </p>
              </article>
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={deskStudy} alt="" loading="lazy" />
                </span>
                <h3>দৈনন্দিন জীবন ও আমল</h3>
                <p>
                  জিন-শয়তানের ফিতনা ও বদনজর বিষয়ে কুরআন-হাদিসের নির্দেশনা, কুসংস্কার থেকে বেঁচে থাকা,
                  মোবাইল আসক্তি নিয়ন্ত্রণ ও সময়ের সঠিক ব্যবহার।
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. OUTCOMES + CLASS — প্রত্যাশিত অর্জন (বাম) ও ক্লাস পরিচালনা (ডান)
           ============================================================ */}
        <section className="section-pad" id="outcomes">
          <div className="container intro-grid">
            {/* বাম: কোর্স শেষে প্রত্যাশিত অর্জন */}
            <div className="intro-copy">
              <span className="section-kicker">কোর্স শেষে প্রত্যাশিত অর্জন</span>
              <h2>
                জ্ঞান ও আমলে <em>এগিয়ে চলুন</em>
              </h2>
              <p>
                এই কোর্সের লক্ষ্য হলো শিক্ষার্থীদের দ্বীনি জ্ঞান অর্জনে সহায়তা করা। ফলাফল শিক্ষার্থীর অনুশীলন ও
                অংশগ্রহণের ওপর নির্ভরশীল; নির্দিষ্ট দক্ষতার নিশ্চয়তা নয়।
              </p>
              <ul>
                <li>নামাজে পড়া সূরাগুলোর অর্থ ও শিক্ষা জানা</li>
                <li>ইসলামের মৌলিক বিষয় সম্পর্কে পরিষ্কার ধারণা</li>
                <li>সন্তান প্রতিপালনে ইসলামী দিকনির্দেশনা</li>
                <li>দৈনন্দিন জীবনে দ্বীনি আমল প্রতিষ্ঠার অনুপ্রেরণা</li>
                <li>নিজের জীবন ও সময় সুন্দরভাবে পরিচালনার শিক্ষা</li>
              </ul>
            </div>

            {/* ডান: ক্লাস পরিচালনা (nav-এর "#class" এখানে লিংক করে) */}
            <div className="intro-copy" id="class">
              <figure className="photo-frame">
                <img
                  src={onlineClassPhoto}
                  alt={
                    language === "bn"
                      ? "ল্যাপটপে অনলাইন কুরআন ক্লাসে অংশ নিচ্ছেন একজন শিক্ষার্থী"
                      : "A student attending an online Quran class on a laptop"
                  }
                  loading="lazy"
                />
              </figure>
              <span className="section-kicker">ক্লাস পরিচালনা</span>
              <h2>
                ঘরে বসেই <em>লাইভ শেখা</em>
              </h2>
              <p>
                Zoom-এর মাধ্যমে একদিন পর পর শিক্ষিকার সঙ্গে সরাসরি ক্লাস, প্রশ্ন করার সুযোগ এবং প্রয়োজনীয়
                বিষয় বুঝে নেওয়ার ব্যবস্থা।
              </p>
              <ul>
                <li>প্রধান সময়: রাত ৯টা–১০টা</li>
                <li>বিকল্প সময়: দুপুর ৩টা–৪টা</li>
                <li>কোর্সের মেয়াদ: ডিসেম্বর–জানুয়ারি (২ মাস)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. TEACHER — শিক্ষিকার তথ্য
           ============================================================ */}
        <section className="section-pad" id="teacher">
          <div className="container contact-card">
            <span className="section-kicker">আমাদের শিক্ষিকা</span>
            <h2>
              অভিজ্ঞ শিক্ষিকার <em>সঙ্গে শেখার সুযোগ</em>
            </h2>
            <p>
              আমাদের অভিজ্ঞ ও যোগ্য নারী শিক্ষিকাগণ অত্যন্ত যত্ন, ধৈর্য ও স্নেহের সাথে প্রতিটি শিক্ষার্থীকে
              কুরআন তিলাওয়াত, সহীহ মাখরাজ ও তাজবিদ শিক্ষা প্রদান করেন। নারী শিক্ষার্থীদের জন্য এটি সম্পূর্ণ
              নিরাপদ, মার্জিত ও পর্দাশীল পরিবেশ।
            </p>
          </div>
        </section>

        {/* ============================================================
            8. EXAM — পরীক্ষা ও পুরস্কার
           ============================================================ */}
        <section className="section-pad" id="exam">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">পরীক্ষা ও পুরস্কার</span>
              <h2>
                শেখার অগ্রগতি <em>যাচাই</em>
              </h2>
              <p>
                কোর্স শেষে পরীক্ষা ও মেধা যাচাই হবে। প্রথম, দ্বিতীয় ও তৃতীয় স্থান অর্জনকারীদের জন্য বিশেষ
                আকর্ষণীয় পুরস্কারের ব্যবস্থা থাকবে।
              </p>
            </div>
            <figure className="photo-frame exam-photo">
              <img
                src={certificatePhoto}
                alt={language === "bn" ? "সনদের নমুনা চিত্র" : "Illustrative certificate"}
                loading="lazy"
              />
              <figcaption>নমুনা চিত্র</figcaption>
            </figure>
          </div>
        </section>

        {/* ============================================================
            9. TESTIMONIALS — শিক্ষার্থীদের প্রতিক্রিয়া
           ============================================================ */}
        <section className="section-pad" id="testimonials">
          <div className="container contact-card">
            <span className="section-kicker">শিক্ষার্থীদের মতামত</span>
            <h2>
              বাস্তব অভিজ্ঞতা <em>ও প্রেরণা</em>
            </h2>
            <p>
              আলহামদুলিল্লাহ, আমাদের সম্মানিত নারী শিক্ষার্থীরা অত্যন্ত স্বাচ্ছন্দ্যে ঘরে বসে সহীহভাবে কুরআন
              তিলাওয়াত ও প্রয়োজনীয় দ্বীনি বিষয় শিখেছেন। নিয়মিত অনুশীলন ও আন্তরিক পরিচর্যার মাধ্যমে তাঁরা
              প্রতিটি পাঠ আত্মস্থ করেছেন।
            </p>
          </div>
        </section>

        {/* ============================================================
            10. FEES — কোর্স ফি
           ============================================================ */}

          <section className="section-pad" id="fees">
            <div className="container contact-card">
              <span className="section-kicker">কোর্স ফি ও ভর্তি অফার</span>
              <h2>সম্পূর্ণ দুই মাসের কোর্স ফি</h2>
            <div style={{ margin: "15px 0" }}>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#888",
                    textDecoration: "line-through",
                    marginRight: "12px",
                  }}
                >
                  ৳ ২,৫০০
                </span>
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "orange",
                  }}
                >
                  ৳ ২,০০০
                </span>
                <div style={{ color: "green", fontWeight: 600, marginTop: "5px" }}>
                  বিশেষ অফার মূল্য
                </div>
              </div>
              <p>
                মেয়াদ: ২ মাস · Zoom অনলাইন ক্লাস · একদিন পর পর ক্লাস · পরীক্ষা ও
                মেধা যাচাই · প্রথম তিনজনের জন্য বিশেষ পুরস্কার।
              </p>
              <Link to="/registration" className="button button-primary fee-enroll-btn">
                এখনই রেজিস্ট্রেশন করুন <ArrowLeft size={18} />
              </Link>
            </div>
          </section>
        {/* <section className="section-pad" id="fees">
          <div className="container contact-card">
            <span className="section-kicker">কোর্স ফি ও ভর্তি অফার</span>
            <h2>সম্পূর্ণ দুই মাসের কোর্স ফি</h2>
            <div style={{ fontSize: "40px", fontWeight: 650, color: "orange" }}>৳ ২,৫০০</div>
            <p>
              মেয়াদ: ২ মাস · Zoom অনলাইন ক্লাস · একদিন পর পর ক্লাস · পরীক্ষা ও মেধা যাচাই · প্রথম
              তিনজনের জন্য বিশেষ পুরস্কার।
            </p>
            <Link to="/registration" className="button button-primary fee-enroll-btn">
              এখনই রেজিস্ট্রেশন করুন <ArrowLeft size={18} />
            </Link>
          </div>
        </section> */}

        {/* ============================================================
            12. WHY US — কেন আমাদের বেছে নেবেন (benefits array থেকে)
           ============================================================ */}
        <section className="section-pad" id="why-us">
          <div className="container why-grid">
            <div className="why-copy">
              <span className="section-kicker">কেন আমাদের বেছে নেবেন</span>
              <h2>
                শেখার পথে থাকুক
                <br />
                <em>আস্থা ও আন্তরিকতা</em>
              </h2>
              <p>
                আমরা বিশ্বাস করি, সঠিক দিকনির্দেশনা ও নিয়মিত অনুশীলন শেখার পথকে সহজ করে তোলে। তাই
                প্রতিটি ক্লাসে শিক্ষার্থীর বোঝাপড়াকে গুরুত্ব দেওয়ার চেষ্টা করি।
              </p>
              <a href="#contact" className="button button-light">
                ভর্তি বিষয়ে কথা বলুন <ArrowLeft size={18} />
              </a>
            </div>

            <div className="benefit-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="benefit-item" key={item.title}>
                    <span className="benefit-icon">
                      <Icon size={23} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            13. HOW TO START — তিন ধাপে শুরু
           ============================================================ */}
        <section className="steps-section section-pad" id="how-to-start">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">শুরু করবেন যেভাবে</span>
              <h2>
                মাত্র তিনটি ধাপে <em>শেখা শুরু</em>
              </h2>
              <p>আপনার শেখার যাত্রা শুরু করতে প্রক্রিয়াটি সহজ রাখা হয়েছে।</p>
            </div>

            <div className="steps-grid">
              <div className="step">
                <span>০১</span>
                <h3>যোগাযোগ করুন</h3>
                <p>আপনার শেখার আগ্রহ ও প্রয়োজন আমাদের জানান।</p>
              </div>
              <div className="step-arrow">
                <ArrowLeft />
              </div>
              <div className="step">
                <span>০২</span>
                <h3>কোর্স বেছে নিন</h3>
                <p>আপনার বর্তমান দক্ষতা অনুযায়ী উপযুক্ত কোর্স জানুন।</p>
              </div>
              <div className="step-arrow">
                <ArrowLeft />
              </div>
              <div className="step">
                <span>০৩</span>
                <h3>ক্লাস শুরু করুন</h3>
                <p>সময় ঠিক করে অনলাইন ক্লাসে শেখা শুরু করুন।</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            14. FAQ — accordion (faqs array থেকে; একবারে একটাই খোলা থাকে)
           ============================================================ */}
        <section className="faq-section section-pad" id="faq">
          <div className="container faq-grid">
            <div>
              <span className="section-kicker">সাধারণ জিজ্ঞাসা</span>
              <h2>
                আপনার মনে থাকা
                <br />
                <em>কিছু প্রশ্ন</em>
              </h2>
              <p>ভর্তি বা ক্লাস সম্পর্কে আরও কিছু জানতে চাইলে আমাদের সঙ্গে যোগাযোগ করুন।</p>
              <a href="#contact" className="text-link">
                যোগাযোগ করুন <ArrowLeft size={17} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((item, i) => (
                <div className={faqOpen === i ? "faq-item active" : "faq-item"} key={item.q}>
                  <button
                    type="button"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)} // আবার ক্লিক করলে বন্ধ হবে
                    aria-expanded={faqOpen === i}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={19} />
                  </button>
                  {faqOpen === i && <p className="faq-answer">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            15. CONTACT — যোগাযোগ ও তথ্য সহায়তা
           ============================================================ */}
        <section className="contact-section section-pad" id="contact">
          <div className="container">
            {/* সেকশন হেডিং */}
            <div className="section-heading contact-heading">
              <span className="section-kicker">যোগাযোগ ও তথ্য সহায়তা</span>
              <h2>
                আমাদের সাথে <em>সরাসরি যোগাযোগ করুন</em>
              </h2>
              <p>
                ভর্তি প্রক্রিয়া, ক্লাসের সময়সূচি বা যেকোনো তথ্যের জন্য আমাদের সঙ্গে ফোন, WhatsApp বা ইমেইলে
                যোগাযোগ করতে পারেন।
              </p>
            </div>

            {/* ৪টি আধুনিক কন্টাক্ট কার্ড */}
            <div className="contact-grid-modern">
              {/* কার্ড ১: ফোন কল */}
              <div className="contact-item-card">
                <div className="contact-icon-bubble phone">
                  <PhoneCall size={26} />
                </div>
                <h3>সরাসরি কল করুন</h3>
                <p className="contact-card-sub">ভর্তি ও ক্লাসের যেকোনো তথ্যে</p>
                <div className="contact-card-val">{contactPhone}</div>
                <span className="contact-card-time">সকাল ৯:০০টা – রাত ১০:০০টা</span>
                <a href={`tel:${contactPhone}`} className="contact-action-btn phone">
                  <Phone size={14} /> কল করুন
                </a>
              </div>

              {/* কার্ড ২: WhatsApp */}
              <div className="contact-item-card featured">
                <span className="contact-card-badge">দ্রুত সেবা</span>
                <div className="contact-icon-bubble whatsapp">
                  <MessageCircle size={26} />
                </div>
                <h3>WhatsApp চ্যাট</h3>
                <p className="contact-card-sub">মেসেজ পাঠিয়ে বিস্তারিত তথ্য জানুন</p>
                <div className="contact-card-val">{contactPhone}</div>
                <span className="contact-card-time">যেকোনো সময় বার্তা পাঠাতে পারেন</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action-btn whatsapp"
                >
                  <MessageCircle size={14} /> WhatsApp চ্যাট শুরু করুন
                </a>
              </div>

              {/* কার্ড ৩: ইমেইল */}
              <div className="contact-item-card">
                <div className="contact-icon-bubble email">
                  <Mail size={26} />
                </div>
                <h3>ইমেইল ঠিকানা</h3>
                <p className="contact-card-sub">যেকোনো আনুষ্ঠানিক তথ্যের জন্য</p>
                <div className="contact-card-val email-val">{contactEmail}</div>
                <span className="contact-card-time">২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়</span>
                <a href={`mailto:${contactEmail}`} className="contact-action-btn email">
                  <Mail size={14} /> ইমেইল লিখুন
                </a>
              </div>

              {/* কার্ড ৪: অনলাইন ভর্তি */}
              <div className="contact-item-card">
                <div className="contact-icon-bubble admission">
                  <GraduationCap size={26} />
                </div>
                <h3>অনলাইন ভর্তি</h3>
                <p className="contact-card-sub">ঘরে বসেই সহজ ৩ ধাপে রেজিস্ট্রেশন</p>
                <div className="contact-card-val">কোর্স ফি মাত্র ৳ ২,৫০০</div>
                <span className="contact-card-time">২ মাসের পূর্ণাঙ্গ অনলাইন কোর্স</span>
                <Link to="/registration" className="contact-action-btn admission">
                  <ArrowLeft size={14} /> ভর্তি রেজিস্ট্রেশন
                </Link>
              </div>
            </div>

            {/* নিচের গর্জিয়াস কল-টু-অ্যাকশন ব্যানার */}
            <div className="contact-banner-card">
              <div className="contact-ornament">✦</div>
              <span className="section-kicker">নারী শিক্ষার্থীদের জন্য বিশেষ আয়োজন</span>
              <h2>
                আজই শুরু হোক
                <br />
                <em>ইলমের পথে আপনার যাত্রা</em>
              </h2>
              <p>
                নারী শিক্ষিকার আন্তরিক পাঠদান, নিয়মিত তত্ত্বাবধান ও সময়োপযোগী পাঠ্যক্রম। আসন সংখ্যা সীমিত,
                আজই আপনার ভর্তি নিশ্চিত করুন।
              </p>

              <div className="contact-actions">
                <Link to="/registration" className="button button-primary contact-enroll-btn">
                  এখনই রেজিস্ট্রেশন করুন <ArrowLeft size={18} />
                </Link>
                <a
                  className="button button-outline-light"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> WhatsApp-এ যোগাযোগ
                </a>
                <a className="button button-outline-light" href={`tel:${contactPhone}`}>
                  <Phone size={18} /> {contactPhone}
                </a>
                <a className="button button-outline-light" href={`mailto:${contactEmail}`}>
                  <Mail size={18} /> ইমেইল পাঠান
                </a>
                {facebookPage && (
                  <a
                    className="button button-outline-light"
                    href={facebookPage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook size={18} /> Facebook Page
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================
          Footer
         ================================================================ */}

<footer className="site-footer">
  <div className="container">
    <div className="footer-main">

      {/* ১. লোগো ও পরিচিতি */}
      <div className="footer-intro-block">
        <Link to="/" className="footer-brand">
          <img
            src={logoImage}
            alt="মাদরাসার লোগো"
            className="brand-logo"
          />
          <span>
            <strong>অনলাইন মহিলা মাদরাসা</strong>
            <small>Online Women's Madrasa</small>
          </span>
        </Link>

        <p>
          {language === "bn"
            ? "ইসলামিক শিক্ষার আলো ছড়িয়ে দিতে আমাদের এই অনলাইন শিক্ষা প্রতিষ্ঠান। কুরআন ও সুন্নাহর আলোকে নারীদের জন্য মানসম্মত শিক্ষার সুযোগ।"
            : "Our online educational institution is dedicated to spreading Islamic knowledge and providing quality education for women through the Quran and Sunnah."}
        </p>

        <div className="footer-direct-contacts">
          <a href={`tel:${contactPhone}`} className="footer-contact-badge">
            <Phone size={17} />
            <span>{contactPhone}</span>
          </a>

          <a href={`mailto:${contactEmail}`} className="footer-contact-badge">
            <Mail size={17} />
            <span>{contactEmail}</span>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-badge"
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ২. গুরুত্বপূর্ণ লিংক */}
      <div className="footer-navigation">
        <h3 className="footer-heading">
          {language === "bn" ? "গুরুত্বপূর্ণ লিংক" : "Quick Links"}
        </h3>

        <div className="footer-links">
          {footerItems.map((item, index) => (
            item.href.startsWith("/") ? (
              <Link
                to={item.href}
                key={index}
                className="footer-nav-link"
              >
                <ChevronRight size={14} className="footer-nav-arrow" />
                <span>{item.label}</span>
              </Link>
            ) : (
              <a
                href={item.href}
                key={index}
                className="footer-nav-link"
              >
                <ChevronRight size={14} className="footer-nav-arrow" />
                <span>{item.label}</span>
              </a>
            )
          ))}
        </div>
      </div>

      {/* ৩. যোগাযোগ ও সামাজিক মাধ্যম */}
      <div className="footer-social-block">
        <h3 className="footer-heading">
          {language === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
        </h3>

        <p>
          {language === "bn"
            ? "ভর্তি ও কোর্স সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
            : "Contact us for admission and course-related information."}
        </p>

        <div className="footer-social-links">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="footer-social-btn footer-social-wa"
          >
            <MessageCircle size={18} />
          </a>

          <a
            href={`tel:${contactPhone}`}
            aria-label="Phone"
            className="footer-social-btn footer-social-phone"
          >
            <Phone size={18} />
          </a>

          <a
            href={`mailto:${contactEmail}`}
            aria-label="Email"
            className="footer-social-btn footer-social-email"
          >
            <Mail size={18} />
          </a>

          {facebookPage && (
            <a
              href={facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-btn footer-social-fb"
            >
              <Facebook size={18} />
            </a>
          )}
        </div>
      </div>

    </div>

    {/* ৪. কপিরাইট */}
    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} অনলাইন মহিলা মাদরাসা।
        {language === "bn" ? " সর্বস্বত্ব সংরক্ষিত।" : " All rights reserved."}
      </p>

      <p className="footer-credit">
        {language === "bn" ? "নির্মাণ ও পরিচালনায়" : "Designed & Developed by"}{" "}
        <a
          href="https://innovative.com.bd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Innovative Technology and Engineering
        </a>
      </p>
    </div>

  </div>
</footer>


      {/* ===== Floating "উপরে ফিরে যান" বাটন (৭০০px স্ক্রল করলে দেখা যায়) ===== */}
      <a
        href="#home"
        className={showTop ? "back-to-top show" : "back-to-top"}
        aria-label={language === "bn" ? "উপরে ফিরে যান" : "Back to top"}
      >
        <ArrowLeft size={20} />
      </a>
    </div>,
    language,
  );
}
