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
  ArrowRight,
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
import whyUsStudent from "../assets/photos/why-us-student.png";

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
    number_bn: "০১",
    number_en: "01",
    title_bn: "নূরানী ও কুরআন শিক্ষা",
    title_en: "Noorani & Quran Basics",
    text_bn: "একদম শুরু থেকে শুদ্ধভাবে আরবি হরফ চেনা, পড়া ও কুরআন তিলাওয়াত শেখা।",
    text_en:
      "Learn Arabic letters, accurate pronunciation, and Quran recitation from the very beginning.",
    tag_bn: "নতুন শিক্ষার্থীদের জন্য",
    tag_en: "For beginners",
  },
  {
    icon: Sparkles,
    photo: thumbTajweed,
    number_bn: "০২",
    number_en: "02",
    title_bn: "কুরআন তিলাওয়াত ও তাজবিদ",
    title_en: "Quran Recitation & Tajweed",
    text_bn: "মাখরাজ, সিফাত ও তাজবিদের নিয়ম মেনে সুন্দর ও শুদ্ধ তিলাওয়াতের অনুশীলন।",
    text_en:
      "Practice beautiful, accurate recitation observing Makharij, Sifat, and Tajweed rules.",
    tag_bn: "শুদ্ধ তিলাওয়াত",
    tag_en: "Fluent recitation",
  },
  {
    icon: Heart,
    photo: thumbPrayerRoom,
    number_bn: "০৩",
    number_en: "03",
    title_bn: "দৈনন্দিন মাসআলা ও দোয়া",
    title_en: "Daily Masail & Supplications",
    text_bn: "দৈনন্দিন জীবনের প্রয়োজনীয় মাসআলা, মাসনূন দোয়া ও আমল সম্পর্কে শেখা।",
    text_en: "Learn essential daily Islamic rulings, Masnoon duas, and wholesome daily practices.",
    tag_bn: "প্রয়োজনীয় ইসলামী জ্ঞান",
    tag_en: "Essential knowledge",
  },
  {
    icon: GraduationCap,
    photo: thumbRehal,
    number_bn: "০৪",
    number_en: "04",
    title_bn: "হিফজ ও আমপারা",
    title_en: "Hifz & Ampara Memorization",
    text_bn: "পরিকল্পিত অনুশীলন ও নিয়মিত পুনরাবৃত্তির মাধ্যমে মুখস্থ করার সহায়তা।",
    text_en: "Memorize Surahs systematically through planned practice and consistent revision.",
    tag_bn: "ধাপে ধাপে অগ্রগতি",
    tag_en: "Step-by-step progress",
  },
];

// ---- "কেন আমাদের বেছে নেবেন" section-এর ৪টি সুবিধা ----
const benefits = [
  {
    icon: Video,
    theme: "blue",
    title_bn: "সর্বাধুনিক অনলাইন ক্লাস",
    title_en: "Live Online Classes",
    text_bn: "শিক্ষিকার সঙ্গে লাইভ ক্লাসে পড়া ও অনুশীলনের সুযোগ।",
    text_en: "Interactive live sessions with the teacher for recitation and practice.",
  },
  {
    icon: Clock3,
    theme: "green",
    title_bn: "দুটি সময়ের মধ্যে পছন্দের সময় নির্বাচন",
    title_en: "Choice of Two Convenient Batches",
    text_bn: "যেকোনো একটি বেছে নেওয়ার সুবিধা—দুপুর ৩টা থেকে ৪টা অথবা রাত ৯টা থেকে ১০টা।",
    text_en: "Choose the slot that fits your schedule: 3:00 PM – 4:00 PM or 9:00 PM – 10:00 PM.",
  },
  {
    icon: Users,
    theme: "emerald",
    title_bn: "নারীদের জন্য",
    title_en: "Exclusively for Women",
    text_bn: "নারী শিক্ষার্থীদের উপযোগী ও স্বাচ্ছন্দ্যপূর্ণ শেখার পরিবেশ।",
    text_en: "A comfortable, modest, and dedicated learning environment for women.",
  },
  {
    icon: ShieldCheck,
    theme: "amber",
    title_bn: "যত্নসহকারে পাঠদান",
    title_en: "Supportive Teaching",
    text_bn: "শিক্ষার্থীর সর্বোচ্চ দক্ষতা বুঝে ধাপে ধাপে শেখানোর ব্যবস্থা।",
    text_en: "Step-by-step guidance tailored to understand each student's current level.",
  },
];

type NavItem = {
  label_bn: string;
  label_en: string;
  href: string;
  icon: typeof Home;
};

// ---- হেডার নেভিগেশন ও ফুটার লিংক: [লেবেল, section id, আইকন] ----
const navItems: NavItem[] = [
  { label_bn: "হোম", label_en: "Home", href: "#home", icon: Home },
  { label_bn: "আমাদের সম্পর্কে", label_en: "About us", href: "#about", icon: Info },
  { label_bn: "কোর্সসমূহ", label_en: "Courses", href: "#courses", icon: BookOpen },
  {
    label_bn: "কোর্সের বিস্তারিত",
    label_en: "Course details",
    href: "#course-details",
    icon: Layers,
  },
  { label_bn: "ক্লাস পরিচালনা", label_en: "How classes work", href: "#class", icon: Video },
  { label_bn: "আমাদের শিক্ষিকা", label_en: "Our teacher", href: "#teacher", icon: GraduationCap },
  { label_bn: "পরীক্ষা ও পুরস্কার", label_en: "Exams & awards", href: "#exam", icon: Award },
  { label_bn: "ফি", label_en: "Fees", href: "#fees", icon: CreditCard },
  { label_bn: "কেন আমরা", label_en: "Why choose us", href: "#why-us", icon: ShieldCheck },
  { label_bn: "জিজ্ঞাসা", label_en: "FAQ", href: "#faq", icon: HelpCircle },
  { label_bn: "যোগাযোগ", label_en: "Contact", href: "#contact", icon: PhoneCall },
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
    q_bn: "ক্লাস কি অনলাইনে হবে?",
    q_en: "Are classes conducted online?",
    a_bn: "হ্যাঁ, ক্লাস অনলাইনে পরিচালিত হবে। প্রয়োজনীয় ডিভাইস ও ইন্টারনেট সংযোগ থাকলে ঘরে বসেই অংশ নিতে পারবেন।",
    a_en: "Yes, classes are held live online via Zoom. You can join from home with any smartphone, tablet, or computer with an internet connection.",
  },
  {
    q_bn: "একদম নতুন শিক্ষার্থীরা কি ভর্তি হতে পারবেন?",
    q_en: "Can absolute beginners enroll?",
    a_bn: "অবশ্যই। প্রাথমিক স্তর থেকে শেখার জন্য নূরানী ও কুরআন শিক্ষা কোর্স দিয়ে শুরু করার সুযোগ রয়েছে।",
    a_en: "Absolutely. We offer foundational courses designed specifically for beginners who are starting from scratch.",
  },
  {
    q_bn: "ক্লাসের সময় কীভাবে নির্ধারণ হবে?",
    q_en: "How are class times scheduled?",
    a_bn: "দুটি সুবিধাজনক শিফট রয়েছে (দুপুর ৩টা–৪টা অথবা রাত ৯টা–১০টা), যেখান থেকে আপনার সুবিধাজনক সময় বেছে নিতে পারবেন।",
    a_en: "We offer two convenient batches: 3:00 PM – 4:00 PM or 9:00 PM – 10:00 PM. You can choose the slot that best fits your daily routine.",
  },
  {
    q_bn: "ভর্তি ও কোর্স ফি কত?",
    q_en: "What is the admission and course fee?",
    a_bn: "সম্পূর্ণ দুই মাসের কোর্স ফি মাত্র ২,০০০ টাকা (বিশেষ অফার)। রেজিস্ট্রেশন ও পেমেন্ট যাচাইয়ের পর ভর্তি নিশ্চিত হবে।",
    a_en: "The full two-month course fee is currently BDT 2,000 (special offer). Admission is confirmed upon registration and verification.",
  },
  {
    q_bn: "কুরআন পড়তে না জানলেও কি ভর্তি হওয়া যাবে?",
    q_en: "Can I join if I do not know how to read Arabic at all?",
    a_bn: "হ্যাঁ, শূন্য থেকে আরবি হরফ ও সহীহ উচ্চারণ শেখার মাধ্যমে কোর্সটি শুরু হয়।",
    a_en: "Yes, our curriculum starts from the basics—recognizing letters, proper articulation, and step-by-step recitation.",
  },
  {
    q_bn: "আগে থেকে অভিজ্ঞতা প্রয়োজন?",
    q_en: "Is prior experience required?",
    a_bn: "না। ফর্মে বর্তমান কুরআন পড়ার দক্ষতা জানালে সে অনুযায়ী আলোচনা করা যাবে।",
    a_en: "No prior experience is necessary. You can note your current level in the registration form and we will guide you accordingly.",
  },
  {
    q_bn: "ক্লাস মিস হলে কী হবে?",
    q_en: "What happens if I miss a class?",
    a_bn: "ক্লাস মিস হলে শিক্ষিকা পরবর্তী ক্লাসে প্রয়োজনীয় পাঠ পুষিয়ে নিতে আন্তরিকভাবে সহায়তা করবেন।",
    a_en: "If you miss a class, the teacher will supportively guide you to catch up on missed topics during subsequent sessions.",
  },
  {
    q_bn: "ফি কি একবারেই দিতে হবে?",
    q_en: "Must the fee be paid all at once?",
    a_bn: "ভর্তির সময় সম্পূর্ণ ফি এককালীন পরিশোধ করতে হয়। বিশেষ কোনো প্রয়োজনে ভর্তি কর্তৃপক্ষের সঙ্গে সরাসরি কথা বলে জেনে নিতে পারেন।",
    a_en: "The course fee is paid as a one-time payment upon enrollment. For special arrangements, you may discuss directly with admission support.",
  },
  {
    q_bn: "শুধু মহিলারাই কি অংশ নিতে পারবেন?",
    q_en: "Is this course exclusively for women?",
    a_bn: "হ্যাঁ, এই মাদরাসার প্রতিটি কোর্স সম্পূর্ণভাবে নারী শিক্ষার্থীদের জন্য নিবেদিত।",
    a_en: "Yes, all our courses and classes are strictly dedicated to female students only.",
  },
  {
    q_bn: "ক্লাসের লিংক কোথায় পাব?",
    q_en: "Where will I receive the class link?",
    a_bn: "ভর্তি নিশ্চিত হওয়ার পর WhatsApp গ্রুপ/নির্দেশনার মাধ্যমে Zoom ক্লাসের লিংক ও শিডিউল দেওয়া হবে।",
    a_en: "Once enrollment is confirmed, Zoom class links and schedule notifications are shared directly in the dedicated WhatsApp group.",
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
                <strong>
                  {language === "bn" ? "অনলাইন মহিলা মাদরাসা" : "Online Women's Madrasa"}
                </strong>
                <small>
                  {language === "bn" ? "আলোর পথে ইলমের যাত্রা" : "A journey of learning and light"}
                </small>
              </span>
            </a>

            {/* ভর্তি বাটন + ভাষা পরিবর্তন (বাংলা / English) */}
            <div className="header-actions">
              <Link to="/registration" className="nav-cta header-cta">
                <UserPlus size={16} /> {language === "bn" ? "ভর্তি হোন" : "Enroll now"}{" "}
                <ArrowLeft size={16} />
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
            const label = language === "bn" ? item.label_bn : item.label_en;
            if (isRoute) {
              return (
                <Link key={item.href} to={item.href} onClick={closeMenu} className="nav-route-link">
                  <Icon size={14} className="nav-icon" />
                  <span>{label}</span>
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
                <span>{label}</span>
              </a>
            );
          })}
          <Link to="/registration" className="nav-cta menu-cta" onClick={closeMenu}>
            <UserPlus size={16} /> {language === "bn" ? "ভর্তি হোন" : "Enroll now"}{" "}
            <ArrowLeft size={16} />
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
                <span />{" "}
                {language === "bn"
                  ? "নারীদের জন্য অনলাইন ইসলামী শিক্ষা"
                  : "Online Islamic education for women"}
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
                {language === "bn"
                  ? "ঘরে বসেই শিখুন পবিত্র কুরআন, তাজবিদ ও প্রয়োজনীয় ইসলামী জ্ঞান। সহজ পাঠদান, আন্তরিক পরিচর্যা আর আপনার সুবিধামতো সময়ে।"
                  : "Learn the Holy Quran, Tajweed, and essential Islamic knowledge from home—with supportive teaching at a time that works for you."}
              </p>

              <div className="hero-actions">
                <Link to="/registration" className="button button-primary hero-enroll-btn">
                  {language === "bn" ? "ভর্তি হোন" : "Enroll now"} <ArrowLeft size={18} />
                </Link>
                <a className="button button-outline" href="#courses">
                  <BookOpen size={18} /> {language === "bn" ? "কোর্সগুলো দেখুন" : "Explore courses"}
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-icon">
                  <CheckCircle2 size={18} />
                </div>
                <span>
                  {language === "bn"
                    ? "শেখার প্রতিটি ধাপে আন্তরিক সহযোগিতা"
                    : "Support at every step of your learning journey"}
                </span>
                <span className="trust-divider" />
                <span>{language === "bn" ? "অনলাইন ক্লাস" : "Online classes"}</span>
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
                    <strong>
                      {language === "bn"
                        ? "ইলম হোক জীবনের আলো"
                        : "Let knowledge illuminate your life"}
                    </strong>
                    <small>
                      {language === "bn" ? "শিখুন, বুঝুন, আমল করুন" : "Learn, understand, and practice"}
                    </small>
                  </span>
                </div>
              </div>
              <div className="floating-note">
                <span className="floating-star">✦</span>
                <span>
                  <strong>
                    {language === "bn" ? "প্রতিদিন একটু একটু করে" : "A little progress every day"}
                  </strong>
                  <small>
                    {language === "bn" ? "শুদ্ধতার পথে এগিয়ে চলুন" : "Move forward towards excellence"}
                  </small>
                </span>
              </div>
              <div className="hero-dots" />
            </div>
          </div>

          {/* Hero-র নিচে কুরআনের আয়াত */}
          <div className="hero-bottom container">
            <span>وَقُل رَّبِّ زِدْنِي عِلْمًا</span>
            <span>
              {language === "bn"
                ? "“হে আমার রব, আমার জ্ঞান বৃদ্ধি করে দিন।” — সূরা ত্ব-হা: ১১৪"
                : "“My Lord, increase me in knowledge.” — Surah Ta-Ha: 114"}
            </span>
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
                  <strong>
                    {language === "bn" ? "জ্ঞান অর্জনের পথে" : "On the path of knowledge"}
                  </strong>
                  <small>{language === "bn" ? "আপনার পাশে আমরা" : "We are by your side"}</small>
                </div>
              </div>
            </div>

            <div className="intro-copy">
              <span className="section-kicker">
                {language === "bn" ? "আমাদের পরিচয়" : "Who We Are"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    ইলম অর্জন হোক
                    <br />
                    <em>সহজ ও আনন্দময়</em>
                  </>
                ) : (
                  <>
                    Make learning
                    <br />
                    <em>easy & fulfilling</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "অনলাইন মহিলা মাদরাসার লক্ষ্য হলো নারীদের জন্য ঘরে বসে কুরআন ও প্রয়োজনীয় দ্বীনি শিক্ষা অর্জনের একটি সহজ ও যত্নশীল সুযোগ তৈরি করা।"
                  : "Online Women's Madrasa is dedicated to providing women with a caring, accessible opportunity to learn the Quran and essential Islamic teachings from home."}
              </p>
              <p>
                {language === "bn"
                  ? "শিক্ষার্থীর শেখার স্তর ও প্রয়োজন অনুযায়ী পাঠ সাজানোর মাধ্যমে আমরা শুদ্ধভাবে শেখার অভ্যাস গড়ে তুলতে সহায়তা করতে চাই।"
                  : "By tailoring lessons to each student's current proficiency, we help cultivate consistent and accurate learning habits."}
              </p>
              <a className="text-link" href="#contact">
                {language === "bn" ? "আমাদের সঙ্গে কথা বলুন" : "Talk to us"} <ArrowLeft size={17} />
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
              <span className="section-kicker">
                {language === "bn"
                  ? "কেন এই কোর্সটি আপনার জন্য গুরুত্বপূর্ণ?"
                  : "Why is this course important for you?"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    দ্বীনি শিক্ষার পথে <em>আপনার পাশে</em>
                  </>
                ) : (
                  <>
                    Your partner in <em>Islamic learning</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "কুরআন পড়তে গিয়ে উচ্চারণে ভুল হচ্ছে? সন্তানকে ইসলামী আদর্শে গড়ে তুলতে চান? ইসলামের মৌলিক বিষয়গুলো ভালোভাবে জানতে চান? সংসার ও সন্তান সামলাতে গিয়ে নিজের দ্বীনি শিক্ষার জন্য সময় বের করতে পারছেন না?"
                  : "Struggling with Quran pronunciation? Want to raise your children with Islamic values? Wish to understand the essentials of Islam? Finding it difficult to balance family duties and personal religious learning?"}
              </p>
              <p>
                {language === "bn"
                  ? "তাহলে Online Women Madrasah হতে পারে আপনার দ্বীনি শিক্ষার সুন্দর একটি যাত্রার শুরু।"
                  : "Then Online Women's Madrasa can be the beginning of a beautiful journey in your Islamic education."}
              </p>
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
              <span className="section-kicker">
                {language === "bn" ? "আমাদের পাঠ্যক্রম" : "Our Curriculum"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    আপনার শেখার জন্য <em>যে কোর্সগুলো</em>
                  </>
                ) : (
                  <>
                    Courses designed <em>for your learning</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "নিজের বর্তমান অবস্থান থেকে শুরু করুন, ধীরে ধীরে এগিয়ে যান শুদ্ধতার পথে।"
                  : "Start from where you are and steadily advance towards proper recitation."}
              </p>
            </div>

            <div className="course-grid">
              {courses.map((course) => {
                const Icon = course.icon;
                return (
                  <article className="course-card" key={course.number_bn}>
                    <div className="course-card-top">
                      <span className="course-photo">
                        <img src={course.photo} alt="" loading="lazy" />
                        <span className="course-icon">
                          <Icon size={15} strokeWidth={2} />
                        </span>
                      </span>
                      <span className="course-number">
                        {language === "bn" ? course.number_bn : course.number_en}
                      </span>
                    </div>
                    <span className="course-tag">
                      {language === "bn" ? course.tag_bn : course.tag_en}
                    </span>
                    <h3>{language === "bn" ? course.title_bn : course.title_en}</h3>
                    <p>{language === "bn" ? course.text_bn : course.text_en}</p>
                    <div className="course-card-actions">
                      <Link to="/registration" className="course-enroll-btn">
                        {language === "bn" ? "ভর্তি হোন" : "Enroll now"} <ArrowLeft size={14} />
                      </Link>
                      <a
                        href="#course-details"
                        aria-label={`${language === "bn" ? course.title_bn : course.title_en} ${language === "bn" ? "সম্পর্কে জানুন" : "details"}`}
                        className="course-link"
                      >
                        {language === "bn" ? "বিস্তারিত জানুন" : "Learn more"}
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
              <span className="section-kicker">
                {language === "bn" ? "কোর্সের বিস্তারিত" : "Course details"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    কী কী <em>শেখানো হবে</em>
                  </>
                ) : (
                  <>
                    What you will <em>learn</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "আমাদের সুনির্দিষ্ট ও সমৃদ্ধ পাঠ্যবিষয়গুলো সাজানো হলো।"
                  : "Our structured and comprehensive curriculum topics."}
              </p>
            </div>

            <div className="course-grid">
              {/* Card 1 */}
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={quranFlowers} alt="" loading="lazy" />
                </span>
                <h3>{language === "bn" ? "সহীহ-শুদ্ধ কুরআন শিক্ষা" : "Correct Quran Recitation"}</h3>
                <p>
                  {language === "bn"
                    ? "আরবি হরফ, ১৭টি মাখরাজের পরিচিতি, মাদ, গুন্নাহ, কলকলাহ এবং নামাজে পঠিত ১২টি ছোট সূরা অর্থসহ শেখার লক্ষ্য।"
                    : "Study Arabic letters, the 17 articulation points, madd, ghunnah, qalqalah, and the meanings of 12 short surahs commonly recited in prayer."}
                </p>
              </article>

              {/* Card 2 */}
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={dailyRoutine} alt="দৈনন্দিন রুটিন" loading="lazy" />
                </span>
                <h3>
                  {language === "bn"
                    ? "দৈনন্দিন রুটিনের মাধ্যমে ভালো অভ্যাস তৈরি করা"
                    : "Building Good Habits Through Daily Routine"}
                </h3>
                <p>
                  {language === "bn"
                    ? "নিয়মিত নামাজ, কুরআন তিলাওয়াত, পড়াশোনা, সময়মতো ঘুম ও দৈনন্দিন কাজের মাধ্যমে সুন্দর জীবনযাপন এবং ভালো অভ্যাস গড়ে তোলা।"
                    : "Build a disciplined, meaningful lifestyle through regular prayers, Quran recitation, timely studies, sleep routine, and wholesome daily habits."}
                </p>
              </article>

              {/* Card 3 */}
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={rehalPlants} alt="" loading="lazy" />
                </span>
                <h3>
                  {language === "bn"
                    ? "ইসলামের মৌলিক জ্ঞান ও হাদিস"
                    : "Islamic Foundations and Hadith"}
                </h3>
                <p>
                  {language === "bn"
                    ? "ঈমান ও ইসলামের পরিচয়, শিরক, কুফর, বিদআত, গুনাহ ও নেক আমল এবং গুরুত্বপূর্ণ সহীহ হাদিসের শিক্ষা।"
                    : "Explore the foundations of faith and Islam, avoid shirk, kufr, and bid'ah, understand sins and good deeds, and learn essential authentic hadiths."}
                </p>
              </article>

              {/* Card 4 */}
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={thumbParenting} alt="" loading="lazy" />
                </span>
                <h3>{language === "bn" ? "ইসলামিক প্যারেন্টিং" : "Islamic Parenting"}</h3>
                <p>
                  {language === "bn"
                    ? "সন্তানকে ইসলামী আদর্শে গড়ে তোলা, নামাজ ও কুরআনের প্রতি আগ্রহী করা এবং সুন্দর আচরণ ও পারিবারিক শিক্ষা।"
                    : "Raise children with Islamic moral guidance, inspire love for prayer and the Quran, and nurture courteous conduct and family values."}
                </p>
              </article>

              {/* Card 5 */}
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={weeklyExam} alt="সাপ্তাহিক পরীক্ষা" loading="lazy" />
                </span>
                <h3>
                  {language === "bn"
                    ? "সাপ্তাহিক পরীক্ষার মাধ্যমে পড়ার অগ্রগতি"
                    : "Tracking Progress with Weekly Assessments"}
                </h3>
                <p>
                  {language === "bn"
                    ? "নিয়মিত সাপ্তাহিক পরীক্ষা নেওয়ার মাধ্যমে শিক্ষার্থীদের পড়ার অগ্রগতি যাচাই, দুর্বলতা চিহ্নিতকরণ এবং শেখার দক্ষতা উন্নত করে পড়াশোনাকে আরও সহজ ও কার্যকর করা।"
                    : "Assess learning progress through regular weekly exams, identify weak areas, and enhance study skills to make learning effortless and effective."}
                </p>
              </article>

              {/* Card 6 */}
              <article className="course-card">
                <span className="course-photo detail-photo">
                  <img src={deskStudy} alt="" loading="lazy" />
                </span>
                <h3>{language === "bn" ? "দৈনন্দিন জীবন ও আমল" : "Everyday Life and Practice"}</h3>
                <p>
                  {language === "bn"
                    ? "জিন-শয়তানের ফিতনা ও বদনজর বিষয়ে কুরআন-হাদিসের নির্দেশনা, কুসংস্কার থেকে বেঁচে থাকা, মোবাইল আসক্তি নিয়ন্ত্রণ ও সময়ের সঠিক ব্যবহার।"
                    : "Learn prophetic protection against evil eye and harm, avoid superstitions, manage phone addiction, and utilize time meaningfully."}
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
              <span className="section-kicker">
                {language === "bn" ? "কোর্স শেষে প্রত্যাশিত অর্জন" : "Expected Learning Outcomes"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    জ্ঞান ও আমলে <em>এগিয়ে চলুন</em>
                  </>
                ) : (
                  <>
                    Grow in knowledge <em>and practice</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "এই কোর্সের লক্ষ্য হলো শিক্ষার্থীদের দ্বীনি জ্ঞান অর্জনে সহায়তা করা। ফলাফল শিক্ষার্থীর অনুশীলন ও অংশগ্রহণের ওপর নির্ভরশীল; নির্দিষ্ট দক্ষতার নিশ্চয়তা নয়।"
                  : "This course aims to help students acquire Islamic knowledge. Progress depends on individual dedication and practice; specific outcomes are not guaranteed."}
              </p>
              <ul>
                <li>
                  {language === "bn"
                    ? "নামাজে পড়া সূরাগুলোর অর্থ ও শিক্ষা জানা"
                    : "Understand the meanings and lessons of surahs recited in prayer"}
                </li>
                <li>
                  {language === "bn"
                    ? "ইসলামের মৌলিক বিষয় সম্পর্কে পরিষ্কার ধারণা"
                    : "Build a clear understanding of the core foundations of Islam"}
                </li>
                <li>
                  {language === "bn"
                    ? "সন্তান প্রতিপালনে ইসলামী দিকনির্দেশনা"
                    : "Gain Islamic guidance on thoughtful parenting"}
                </li>
                <li>
                  {language === "bn"
                    ? "দৈনন্দিন জীবনে দ্বীনি আমল প্রতিষ্ঠার অনুপ্রেরণা"
                    : "Find inspiration to implement Islamic practices in daily life"}
                </li>
                <li>
                  {language === "bn"
                    ? "নিজের জীবন ও সময় সুন্দরভাবে পরিচালনার শিক্ষা"
                    : "Learn to organize your life and manage time purposefully"}
                </li>
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
              <span className="section-kicker">
                {language === "bn" ? "ক্লাস পরিচালনা" : "How Classes Work"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    ঘরে বসেই <em>লাইভ শেখা</em>
                  </>
                ) : (
                  <>
                    Learn live <em>from home</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "Zoom-এর মাধ্যমে একদিন পর পর শিক্ষিকার সঙ্গে সরাসরি ক্লাস, প্রশ্ন করার সুযোগ এবং প্রয়োজনীয় বিষয় বুঝে নেওয়ার ব্যবস্থা।"
                  : "Live online classes via Zoom every other day, with direct interaction with the teacher, Q&A opportunities, and personal attention."}
              </p>
              <ul>
                <li>
                  {language === "bn" ? "প্রধান সময়: রাত ৯টা–১০টা" : "Main batch: 9:00 PM – 10:00 PM"}
                </li>
                <li>
                  {language === "bn"
                    ? "বিকল্প সময়: দুপুর ৩টা–৪টা"
                    : "Alternative batch: 3:00 PM – 4:00 PM"}
                </li>
                <li>
                  {language === "bn"
                    ? "কোর্সের মেয়াদ: ডিসেম্বর–জানুয়ারি (২ মাস)"
                    : "Course duration: December–January (2 months)"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. TEACHER — শিক্ষিকার তথ্য
           ============================================================ */}
        <section className="section-pad" id="teacher">
          <div className="container contact-card">
            <span className="section-kicker">
              {language === "bn" ? "আমাদের শিক্ষিকা" : "Our Teacher"}
            </span>
            <h2>
              {language === "bn" ? (
                <>
                  অভিজ্ঞ শিক্ষিকার <em>সঙ্গে শেখার সুযোগ</em>
                </>
              ) : (
                <>
                  Learn with an <em>experienced female teacher</em>
                </>
              )}
            </h2>
            <p>
              {language === "bn"
                ? "আমাদের অভিজ্ঞ ও যোগ্য নারী শিক্ষিকাগণ অত্যন্ত যত্ন, ধৈর্য ও স্নেহের সাথে প্রতিটি শিক্ষার্থীকে কুরআন তিলাওয়াত, সহীহ মাখরাজ ও তাজবিদ শিক্ষা প্রদান করেন। নারী শিক্ষার্থীদের জন্য এটি সম্পূর্ণ নিরাপদ, মার্জিত ও পর্দাশীল পরিবেশ।"
                : "Our experienced and qualified female teachers provide careful, patient, and affectionate guidance in Quran recitation, proper articulation, and Tajweed. A safe, modest, and dedicated environment tailored for women."}
            </p>
          </div>
        </section>

        {/* ============================================================
            8. EXAM — পরীক্ষা ও পুরস্কার
           ============================================================ */}
        <section className="section-pad" id="exam">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">
                {language === "bn" ? "পরীক্ষা ও পুরস্কার" : "Exams & Awards"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    শেখার অগ্রগতি <em>যাচাই</em>
                  </>
                ) : (
                  <>
                    Track your <em>learning progress</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "কোর্স শেষে পরীক্ষা ও মেধা যাচাই হবে। প্রথম, দ্বিতীয় ও তৃতীয় স্থান অর্জনকারীদের জন্য বিশেষ আকর্ষণীয় পুরস্কারের ব্যবস্থা থাকবে।"
                  : "Examinations and evaluations are conducted at the end of the course. Special prizes and certificates are awarded to 1st, 2nd, and 3rd place achievers."}
              </p>
            </div>
            <figure className="photo-frame exam-photo">
              <img
                src={certificatePhoto}
                alt={language === "bn" ? "সনদের নমুনা চিত্র" : "Illustrative certificate"}
                loading="lazy"
              />
              <figcaption>{language === "bn" ? "নমুনা চিত্র" : "Sample Certificate"}</figcaption>
            </figure>
          </div>
        </section>

        {/* ============================================================
            9. TESTIMONIALS — শিক্ষার্থীদের প্রতিক্রিয়া
           ============================================================ */}
        <section className="section-pad" id="testimonials">
          <div className="container contact-card">
            <span className="section-kicker">
              {language === "bn" ? "শিক্ষার্থীদের মতামত" : "Student Feedback"}
            </span>
            <h2>
              {language === "bn" ? (
                <>
                  বাস্তব অভিজ্ঞতা <em>ও প্রেরণা</em>
                </>
              ) : (
                <>
                  Real experiences <em>& inspiration</em>
                </>
              )}
            </h2>
            <p>
              {language === "bn"
                ? "আলহামদুলিল্লাহ, আমাদের সম্মানিত নারী শিক্ষার্থীরা অত্যন্ত স্বাচ্ছন্দ্যে ঘরে বসে সহীহভাবে কুরআন তিলাওয়াত ও প্রয়োজনীয় দ্বীনি বিষয় শিখেছেন। নিয়মিত অনুশীলন ও আন্তরিক পরিচর্যার মাধ্যমে তাঁরা প্রতিটি পাঠ আত্মস্থ করেছেন।"
                : "Alhamdulillah, our respected female students have comfortably learned proper Quran recitation and essential Islamic knowledge from home, advancing with confidence through attentive guidance."}
            </p>
          </div>
        </section>

        {/* ============================================================
            10. FEES — কোর্স ফি
           ============================================================ */}
        <section className="section-pad" id="fees">
          <div className="container contact-card">
            <span className="section-kicker">
              {language === "bn" ? "কোর্স ফি ও ভর্তি অফার" : "Course Fee & Admission Offer"}
            </span>
            <h2>{language === "bn" ? "সম্পূর্ণ দুই মাসের কোর্স ফি" : "Full 2-Month Course Fee"}</h2>
            <div style={{ margin: "15px 0" }}>
              <span
                style={{
                  fontSize: "25px",
                  color: "#888",
                  textDecoration: "line-through",
                  marginRight: "12px",
                }}
              >
                {language === "bn" ? "৳ ২,৫০০" : "BDT 2,500"}
              </span>
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "orange",
                }}
              >
                {language === "bn" ? "৳ ২,০০০" : "BDT 2,000"}
              </span>
              <div style={{ color: "green", fontWeight: 600, marginTop: "5px" }}>
                {language === "bn" ? "বিশেষ অফার মূল্য" : "Special Offer Price"}
              </div>
            </div>
            <p>
              {language === "bn"
                ? "মেয়াদ: ২ মাস · Zoom অনলাইন ক্লাস · একদিন পর পর ক্লাস · পরীক্ষা ও মেধা যাচাই · প্রথম তিনজনের জন্য বিশেষ পুরস্কার।"
                : "Duration: 2 Months · Zoom Live Classes · Classes Every Other Day · Evaluation & Exams · Special Prizes for Top 3."}
            </p>
            <Link to="/registration" className="button button-primary fee-enroll-btn">
              {language === "bn" ? "এখনই রেজিস্ট্রেশন করুন" : "Register Now"} <ArrowLeft size={18} />
            </Link>
          </div>
        </section>

        {/* ============================================================
            12. WHY US — কেন আমাদের বেছে নেবেন (Mockup Banner Design)
           ============================================================ */}
        <section className="why-us-modern-section" id="why-us">
          {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ উপাদান */}
          <div className="why-us-decorations" aria-hidden="true">
            <div className="why-us-wave-top" />
            <div className="why-us-wave-bottom" />
            <div className="why-us-leaves-left" />
            <div className="why-us-leaves-right" />
          </div>

          <div className="container why-us-container">
            {/* বাম পাশ: কুরআন পাঠরত ছাত্রী ও সার্কুলার ফ্রেম */}
            <div className="why-us-visual">
              <div className="why-us-photo-frame">
                <img
                  src={whyUsStudent}
                  alt={language === "bn" ? "কুরআন পাঠরত ছাত্রী" : "Female student studying Quran"}
                  className="why-us-student-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* মধ্যম অংশ: ব্যাজ, টাইটেল (ব্রাশ আন্ডারলাইনসহ), বর্ণনা ও ভর্তি বাটন */}
            <div className="why-us-copy">
              <span className="why-us-pill-badge">
                <GraduationCap size={16} />
                <span>{language === "bn" ? "কেন আমাদের বেছে নেবেন" : "Why Choose Us"}</span>
              </span>

              <h2 className="why-us-heading">
                {language === "bn" ? (
                  <>
                    <span className="why-us-title-dark">শেখার পথে থাকুক</span>
                    <span className="why-us-title-green">
                      আস্থা ও আন্তরিকতা
                      <svg
                        className="why-title-underline"
                        viewBox="0 0 200 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9.5C45 3.5 130 1.5 198 8"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="why-us-title-dark">Learn with</span>
                    <span className="why-us-title-green">
                      trust & sincerity
                      <svg
                        className="why-title-underline"
                        viewBox="0 0 200 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9.5C45 3.5 130 1.5 198 8"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </>
                )}
              </h2>

              <p className="why-us-description">
                {language === "bn"
                  ? "আমরা বিশ্বাস করি, সঠিক দিকনির্দেশনা ও নিয়মিত অনুশীলনের মাধ্যমে সবার জন্য জ্ঞানের দ্বার খুলে যাবে। তাই প্রতিটি ক্লাসে শিক্ষার্থীর মেধা ও বোঝাপড়াকে গুরুত্ব দেওয়ার চেষ্টা করি।"
                  : "We believe proper guidance and consistent practice make learning effortless. We prioritize each student's personal understanding in every session."}
              </p>

              <Link to="/registration" className="why-us-action-btn">
                <span>{language === "bn" ? "ভর্তি বিষয়ে কথা বলুন" : "Inquire about admission"}</span>
                <span className="why-us-btn-arrow">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            {/* ডান পাশ: ৪টি আকর্ষণীয় ফিচার কার্ড (2x2 গ্রিড) */}
            <div className="why-us-cards-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div className={`why-feature-card card-${item.theme}`} key={item.title_bn}>
                    <div className={`why-feature-icon-box icon-${item.theme}`}>
                      <Icon size={22} />
                    </div>
                    <div className="why-feature-content">
                      <h3>{language === "bn" ? item.title_bn : item.title_en}</h3>
                      <p>{language === "bn" ? item.text_bn : item.text_en}</p>
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
              <span className="section-kicker">
                {language === "bn" ? "শুরু করবেন যেভাবে" : "How to Get Started"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    মাত্র তিনটি ধাপে <em>শেখা শুরু</em>
                  </>
                ) : (
                  <>
                    Start learning in <em>three simple steps</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "আপনার শেখার যাত্রা শুরু করতে প্রক্রিয়াটি সহজ রাখা হয়েছে।"
                  : "A simple and straightforward process to begin your learning journey."}
              </p>
            </div>

            <div className="steps-grid">
              <div className="step">
                <span>০১</span>
                <h3>{language === "bn" ? "যোগাযোগ করুন" : "Get in Touch"}</h3>
                <p>
                  {language === "bn"
                    ? "আপনার শেখার আগ্রহ ও প্রয়োজন আমাদের জানান।"
                    : "Share your learning interest and preferred schedule with us."}
                </p>
              </div>
              <div className="step-arrow">
                <ArrowLeft />
              </div>
              <div className="step">
                <span>০২</span>
                <h3>{language === "bn" ? "কোর্স বেছে নিন" : "Choose Your Course"}</h3>
                <p>
                  {language === "bn"
                    ? "আপনার বর্তমান দক্ষতা অনুযায়ী উপযুক্ত কোর্স জানুন।"
                    : "Select the course best suited to your current proficiency."}
                </p>
              </div>
              <div className="step-arrow">
                <ArrowLeft />
              </div>
              <div className="step">
                <span>০৩</span>
                <h3>{language === "bn" ? "ক্লাস শুরু করুন" : "Start Classes"}</h3>
                <p>
                  {language === "bn"
                    ? "সময় ঠিক করে অনলাইন ক্লাসে শেখা শুরু করুন।"
                    : "Confirm your schedule and begin attending live online classes."}
                </p>
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
              <span className="section-kicker">
                {language === "bn" ? "সাধারণ জিজ্ঞাসা" : "Frequently Asked Questions"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    আপনার মনে থাকা
                    <br />
                    <em>কিছু প্রশ্ন</em>
                  </>
                ) : (
                  <>
                    Questions you
                    <br />
                    <em>might have</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "ভর্তি বা ক্লাস সম্পর্কে আরও কিছু জানতে চাইলে আমাদের সঙ্গে যোগাযোগ করুন।"
                  : "Have questions about admission or classes? Feel free to contact us."}
              </p>
              <a href="#contact" className="text-link">
                {language === "bn" ? "যোগাযোগ করুন" : "Contact us"} <ArrowLeft size={17} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((item, i) => (
                <div className={faqOpen === i ? "faq-item active" : "faq-item"} key={item.q_bn}>
                  <button
                    type="button"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                  >
                    <span>{language === "bn" ? item.q_bn : item.q_en}</span>
                    <ChevronDown size={19} />
                  </button>
                  {faqOpen === i && (
                    <p className="faq-answer">{language === "bn" ? item.a_bn : item.a_en}</p>
                  )}
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
              <span className="section-kicker">
                {language === "bn" ? "যোগাযোগ ও তথ্য সহায়তা" : "Contact & Support"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    আমাদের সাথে <em>সরাসরি যোগাযোগ করুন</em>
                  </>
                ) : (
                  <>
                    Get in touch <em>with us directly</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "ভর্তি প্রক্রিয়া, ক্লাসের সময়সূচি বা যেকোনো তথ্যের জন্য আমাদের সঙ্গে ফোন, WhatsApp বা ইমেইলে যোগাযোগ করতে পারেন।"
                  : "For admission inquiries, class schedules, or any assistance, feel free to contact us via Phone, WhatsApp, or Email."}
              </p>
            </div>

            {/* ৪টি আধুনিক কন্টাক্ট কার্ড */}
            <div className="contact-grid-modern">
              {/* কার্ড ১: ফোন কল */}
              <div className="contact-item-card">
                <div className="contact-icon-bubble phone">
                  <PhoneCall size={26} />
                </div>
                <h3>{language === "bn" ? "সরাসরি কল করুন" : "Direct Phone Call"}</h3>
                <p className="contact-card-sub">
                  {language === "bn"
                    ? "ভর্তি ও ক্লাসের যেকোনো তথ্যে"
                    : "For admission & class inquiries"}
                </p>
                <div className="contact-card-val">{contactPhone}</div>
                <span className="contact-card-time">
                  {language === "bn" ? "সকাল ৯:০০টা – রাত ১০:০০টা" : "9:00 AM – 10:00 PM"}
                </span>
                <a href={`tel:${contactPhone}`} className="contact-action-btn phone">
                  <Phone size={14} /> {language === "bn" ? "কল করুন" : "Call Now"}
                </a>
              </div>

              {/* কার্ড ২: WhatsApp */}
              <div className="contact-item-card featured">
                <span className="contact-card-badge">
                  {language === "bn" ? "দ্রুত সেবা" : "Fast Support"}
                </span>
                <div className="contact-icon-bubble whatsapp">
                  <MessageCircle size={26} />
                </div>
                <h3>{language === "bn" ? "WhatsApp চ্যাট" : "WhatsApp Chat"}</h3>
                <p className="contact-card-sub">
                  {language === "bn"
                    ? "মেসেজ পাঠিয়ে বিস্তারিত তথ্য জানুন"
                    : "Message us for quick assistance"}
                </p>
                <div className="contact-card-val">{contactPhone}</div>
                <span className="contact-card-time">
                  {language === "bn" ? "যেকোনো সময় বার্তা পাঠাতে পারেন" : "Available anytime"}
                </span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action-btn whatsapp"
                >
                  <MessageCircle size={14} />{" "}
                  {language === "bn" ? "WhatsApp চ্যাট শুরু করুন" : "Chat on WhatsApp"}
                </a>
              </div>

              {/* কার্ড ৩: ইমেইল */}
              <div className="contact-item-card">
                <div className="contact-icon-bubble email">
                  <Mail size={26} />
                </div>
                <h3>{language === "bn" ? "ইমেইল ঠিকানা" : "Email Address"}</h3>
                <p className="contact-card-sub">
                  {language === "bn" ? "যেকোনো আনুষ্ঠানিক তথ্যের জন্য" : "For official communications"}
                </p>
                <div className="contact-card-val email-val">{contactEmail}</div>
                <span className="contact-card-time">
                  {language === "bn" ? "২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়" : "Response within 24 hours"}
                </span>
                <a href={`mailto:${contactEmail}`} className="contact-action-btn email">
                  <Mail size={14} /> {language === "bn" ? "ইমেইল লিখুন" : "Send Email"}
                </a>
              </div>

              {/* কার্ড ৪: অনলাইন ভর্তি */}
              <div className="contact-item-card">
                <div className="contact-icon-bubble admission">
                  <GraduationCap size={26} />
                </div>
                <h3>{language === "bn" ? "অনলাইন ভর্তি" : "Online Admission"}</h3>
                <p className="contact-card-sub">
                  {language === "bn"
                    ? "ঘরে বসেই সহজ ৩ ধাপে রেজিস্ট্রেশন"
                    : "Simple 3-step online registration"}
                </p>
                <div className="contact-card-val">
                  {language === "bn" ? "কোর্স ফি মাত্র ৳ ২,০০০" : "Course fee only BDT 2,000"}
                </div>
                <span className="contact-card-time">
                  {language === "bn"
                    ? "২ মাসের পূর্ণাঙ্গ অনলাইন কোর্স"
                    : "Complete 2-month online course"}
                </span>
                <Link to="/registration" className="contact-action-btn admission">
                  <ArrowLeft size={14} /> {language === "bn" ? "ভর্তি রেজিস্ট্রেশন" : "Register Now"}
                </Link>
              </div>
            </div>

            {/* নিচের গর্জিয়াস কল-টু-অ্যাকশন ব্যানার */}
            <div className="contact-banner-card">
              <div className="contact-ornament">✦</div>
              <span className="section-kicker">
                {language === "bn"
                  ? "নারী শিক্ষার্থীদের জন্য বিশেষ আয়োজন"
                  : "Dedicated program for female students"}
              </span>
              <h2>
                {language === "bn" ? (
                  <>
                    আজই শুরু হোক
                    <br />
                    <em>ইলমের পথে আপনার যাত্রা</em>
                  </>
                ) : (
                  <>
                    Begin today
                    <br />
                    <em>your journey in Islamic learning</em>
                  </>
                )}
              </h2>
              <p>
                {language === "bn"
                  ? "নারী শিক্ষিকার আন্তরিক পাঠদান, নিয়মিত তত্ত্বাবধান ও সময়োপযোগী পাঠ্যক্রম। আসন সংখ্যা সীমিত, আজই আপনার ভর্তি নিশ্চিত করুন।"
                  : "Caring instruction by qualified female teachers, regular supervision, and modern curriculum. Limited seats available—secure your admission today."}
              </p>

              <div className="contact-actions">
                <Link to="/registration" className="button button-primary contact-enroll-btn">
                  {language === "bn" ? "এখনই রেজিস্ট্রেশন করুন" : "Register Now"}{" "}
                  <ArrowLeft size={18} />
                </Link>
                <a
                  className="button button-outline-light"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />{" "}
                  {language === "bn" ? "WhatsApp-এ যোগাযোগ" : "WhatsApp"}
                </a>
                <a className="button button-outline-light" href={`tel:${contactPhone}`}>
                  <Phone size={18} /> {contactPhone}
                </a>
                <a className="button button-outline-light" href={`mailto:${contactEmail}`}>
                  <Mail size={18} /> {language === "bn" ? "ইমেইল পাঠান" : "Send Email"}
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
                  alt={language === "bn" ? "মাদরাসার লোগো" : "Madrasa Logo"}
                  className="brand-logo"
                />
                <span>
                  <strong>
                    {language === "bn" ? "অনলাইন মহিলা মাদরাসা" : "Online Women's Madrasa"}
                  </strong>
                  <small>
                    {language === "bn"
                      ? "Online Women's Madrasa"
                      : "A journey of learning and light"}
                  </small>
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
                {footerItems.map((item, index) => {
                  const label = language === "bn" ? item.label_bn : item.label_en;
                  return item.href.startsWith("/") ? (
                    <Link to={item.href} key={index} className="footer-nav-link">
                      <ChevronRight size={14} className="footer-nav-arrow" />
                      <span>{label}</span>
                    </Link>
                  ) : (
                    <a href={item.href} key={index} className="footer-nav-link">
                      <ChevronRight size={14} className="footer-nav-arrow" />
                      <span>{label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ৩. যোগাযোগ ও সামাজিক মাধ্যম */}
            <div className="footer-social-block">
              <h3 className="footer-heading">{language === "bn" ? "যোগাযোগ করুন" : "Contact Us"}</h3>

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
            <p className="footer-credit">
              © {new Date().getFullYear()} <span className="footer-credit-sep">|</span>{" "}
              {language === "bn" ? "নির্মাণ ও পরিচালনায়" : "Designed & Developed by"}{" "}
              <a href="https://innovative.com.bd/" target="_blank" rel="noopener noreferrer">
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
