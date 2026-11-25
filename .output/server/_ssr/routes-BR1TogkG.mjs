import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as online_women_madrasah_logo_default, r as useLanguage, t as localizeNode } from "./online-women-madrasah-logo-12MzrKEF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ChevronDown, D as ArrowLeft, E as ArrowRight, S as ChevronRight, T as Award, _ as Facebook, a as Sparkles, b as CircleQuestionMark, c as PhoneCall, d as Mail, f as Layers, g as GraduationCap, h as Heart, i as UserPlus, l as MessageCircle, m as House, n as Video, o as ShieldCheck, p as Info, r as Users, s as Phone, t as X, u as Menu, v as CreditCard, w as BookOpen, x as CircleCheck, y as Clock3 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BR1TogkG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SELECTOR = ".section-heading, .course-card, .benefit-item, .step, .faq-item, .intro-copy, .intro-image, .contact-card, .contact-item-card, .contact-banner-card, .importance-photo, .importance-copy, .photo-frame, .curriculum-extra .course-card, .teacher-card, .reg-help-card, .highlight-pill, .rf-card, .rf-stepper, .register-heading, .why-feature-card, .why-us-visual, .why-us-copy";
function useReveal() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (!("IntersectionObserver" in window)) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.classList.add("is-visible");
				io.unobserve(e.target);
			}
		}, {
			threshold: .08,
			rootMargin: "0px 0px -40px 0px"
		});
		document.querySelectorAll(SELECTOR).forEach((el, i) => {
			el.classList.add("reveal");
			const delay = i % 4 * 90;
			el.style.setProperty("--reveal-delay", `${delay}ms`);
			if (el.getBoundingClientRect().top < window.innerHeight * .95) setTimeout(() => {
				el.classList.add("is-visible");
			}, delay + 40);
			else io.observe(el);
		});
		return () => io.disconnect();
	}, []);
}
var madrasa_quran_hero_default = "/assets/madrasa-quran-hero-BQ6KXBuQ.jpg";
var online_quran_class_default = "/assets/online-quran-class-DxBPoV4y.png";
var quran_flowers_default = "/assets/quran-flowers-DwWxpjW5.jpg";
var certificate_default = "/assets/certificate-DBbHq0N6.jpg";
var online_class_default = "/assets/online-class-DePOnqz7.jpg";
var rehal_plants_default = "/assets/rehal-plants-s5HS6Ryk.jpg";
var desk_study_default = "/assets/desk-study-DwAv5bWB.jpg";
var thumb_notebook_default = "/assets/thumb-notebook-BedexdTz.jpg";
var thumb_tajweed_default = "/assets/thumb-tajweed-DLYMk_CJ.jpg";
var thumb_prayer_room_default = "/assets/thumb-prayer-room-CG8AlpLn.jpg";
var thumb_rehal_default = "/assets/thumb-rehal-BYhdEhEs.jpg";
var thumb_parenting_default = "/assets/thumb-parenting-D2abTVmy.jpg";
var daily_routine_default = "/assets/daily-routine-Tc7Ak-eo.jpg";
var weekly_exam_default = "/assets/weekly-exam-ClfNsBS1.jpg";
var why_us_student_default = "/assets/why-us-student-EY5ooZu0.png";
var courses = [
	{
		icon: BookOpen,
		photo: thumb_notebook_default,
		number_bn: "০১",
		number_en: "01",
		title_bn: "নূরানী ও কুরআন শিক্ষা",
		title_en: "Noorani & Quran Basics",
		text_bn: "একদম শুরু থেকে শুদ্ধভাবে আরবি হরফ চেনা, পড়া ও কুরআন তিলাওয়াত শেখা।",
		text_en: "Learn Arabic letters, accurate pronunciation, and Quran recitation from the very beginning.",
		tag_bn: "নতুন শিক্ষার্থীদের জন্য",
		tag_en: "For beginners"
	},
	{
		icon: Sparkles,
		photo: thumb_tajweed_default,
		number_bn: "০২",
		number_en: "02",
		title_bn: "কুরআন তিলাওয়াত ও তাজবিদ",
		title_en: "Quran Recitation & Tajweed",
		text_bn: "মাখরাজ, সিফাত ও তাজবিদের নিয়ম মেনে সুন্দর ও শুদ্ধ তিলাওয়াতের অনুশীলন।",
		text_en: "Practice beautiful, accurate recitation observing Makharij, Sifat, and Tajweed rules.",
		tag_bn: "শুদ্ধ তিলাওয়াত",
		tag_en: "Fluent recitation"
	},
	{
		icon: Heart,
		photo: thumb_prayer_room_default,
		number_bn: "০৩",
		number_en: "03",
		title_bn: "দৈনন্দিন মাসআলা ও দোয়া",
		title_en: "Daily Masail & Supplications",
		text_bn: "দৈনন্দিন জীবনের প্রয়োজনীয় মাসআলা, মাসনূন দোয়া ও আমল সম্পর্কে শেখা।",
		text_en: "Learn essential daily Islamic rulings, Masnoon duas, and wholesome daily practices.",
		tag_bn: "প্রয়োজনীয় ইসলামী জ্ঞান",
		tag_en: "Essential knowledge"
	},
	{
		icon: GraduationCap,
		photo: thumb_rehal_default,
		number_bn: "০৪",
		number_en: "04",
		title_bn: "ইসলামের মৌলিক জ্ঞান",
		title_en: "Fundamental Islamic Knowledge",
		text_bn: "ইসলামের মৌলিক জ্ঞান এবং প্রকৃত মুসলিম হওয়ার স্বপ্ন বাস্তবায়নে সহায়তা করা হবে ইংশাআল্লাহ্।",
		text_en: "Helping learners gain fundamental Islamic knowledge and fulfill their dream of becoming true Muslims, In Sha Allah.",
		tag_bn: "ধাপে ধাপে অগ্রগতি",
		tag_en: "Step-by-step progress"
	}
];
var benefits = [
	{
		icon: Video,
		theme: "blue",
		title_bn: "সর্বাধুনিক অনলাইন ক্লাস",
		title_en: "Live Online Classes",
		text_bn: "শিক্ষিকার সঙ্গে লাইভ ক্লাসে পড়া ও অনুশীলনের সুযোগ।",
		text_en: "Interactive live sessions with the teacher for recitation and practice."
	},
	{
		icon: Clock3,
		theme: "green",
		title_bn: "দুটি সময়ের মধ্যে পছন্দের সময় নির্বাচন",
		title_en: "Choice of Two Convenient Batches",
		text_bn: "যেকোনো একটি বেছে নেওয়ার সুবিধা—দুপুর ৩টা থেকে ৪টা অথবা রাত ৯টা থেকে ১০টা।",
		text_en: "Choose the slot that fits your schedule: 3:00 PM – 4:00 PM or 9:00 PM – 10:00 PM."
	},
	{
		icon: Users,
		theme: "emerald",
		title_bn: "নারীদের জন্য",
		title_en: "Exclusively for Women",
		text_bn: "নারী শিক্ষার্থীদের উপযোগী ও স্বাচ্ছন্দ্যপূর্ণ শেখার পরিবেশ।",
		text_en: "A comfortable, modest, and dedicated learning environment for women."
	},
	{
		icon: ShieldCheck,
		theme: "amber",
		title_bn: "যত্নসহকারে পাঠদান",
		title_en: "Supportive Teaching",
		text_bn: "শিক্ষার্থীর সর্বোচ্চ দক্ষতা বুঝে ধাপে ধাপে শেখানোর ব্যবস্থা।",
		text_en: "Step-by-step guidance tailored to understand each student's current level."
	}
];
var navItems = [
	{
		label_bn: "হোম",
		label_en: "Home",
		href: "#home",
		icon: House
	},
	{
		label_bn: "আমাদের সম্পর্কে",
		label_en: "About us",
		href: "#about",
		icon: Info
	},
	{
		label_bn: "কোর্সসমূহ",
		label_en: "Courses",
		href: "#courses",
		icon: BookOpen
	},
	{
		label_bn: "কোর্সের বিস্তারিত",
		label_en: "Course details",
		href: "#course-details",
		icon: Layers
	},
	{
		label_bn: "ক্লাস পরিচালনা",
		label_en: "How classes work",
		href: "#class",
		icon: Video
	},
	{
		label_bn: "আমাদের শিক্ষিকা",
		label_en: "Our teacher",
		href: "#teacher",
		icon: GraduationCap
	},
	{
		label_bn: "পরীক্ষা ও পুরস্কার",
		label_en: "Exams & awards",
		href: "#exam",
		icon: Award
	},
	{
		label_bn: "ফি",
		label_en: "Fees",
		href: "#fees",
		icon: CreditCard
	},
	{
		label_bn: "কেন আমরা",
		label_en: "Why choose us",
		href: "#why-us",
		icon: ShieldCheck
	},
	{
		label_bn: "জিজ্ঞাসা",
		label_en: "FAQ",
		href: "#faq",
		icon: CircleQuestionMark
	},
	{
		label_bn: "যোগাযোগ",
		label_en: "Contact",
		href: "#contact",
		icon: PhoneCall
	}
];
var observedSectionIds = [
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
	"contact"
];
var faqs = [
	{
		q_bn: "ক্লাস কি অনলাইনে হবে?",
		q_en: "Are classes conducted online?",
		a_bn: "হ্যাঁ, ক্লাস অনলাইনে পরিচালিত হবে। প্রয়োজনীয় ডিভাইস ও ইন্টারনেট সংযোগ থাকলে ঘরে বসেই অংশ নিতে পারবেন।",
		a_en: "Yes, classes are held live online via Zoom. You can join from home with any smartphone, tablet, or computer with an internet connection."
	},
	{
		q_bn: "একদম নতুন শিক্ষার্থীরা কি ভর্তি হতে পারবেন?",
		q_en: "Can absolute beginners enroll?",
		a_bn: "অবশ্যই। প্রাথমিক স্তর থেকে শেখার জন্য নূরানী ও কুরআন শিক্ষা কোর্স দিয়ে শুরু করার সুযোগ রয়েছে।",
		a_en: "Absolutely. We offer foundational courses designed specifically for beginners who are starting from scratch."
	},
	{
		q_bn: "ক্লাসের সময় কীভাবে নির্ধারণ হবে?",
		q_en: "How are class times scheduled?",
		a_bn: "দুটি সুবিধাজনক শিফট রয়েছে (দুপুর ৩টা–৪টা অথবা রাত ৯টা–১০টা), যেখান থেকে আপনার সুবিধাজনক সময় বেছে নিতে পারবেন।",
		a_en: "We offer two convenient batches: 3:00 PM – 4:00 PM or 9:00 PM – 10:00 PM. You can choose the slot that best fits your daily routine."
	},
	{
		q_bn: "ভর্তি ও কোর্স ফি কত?",
		q_en: "What is the admission and course fee?",
		a_bn: "সম্পূর্ণ দুই মাসের কোর্স ফি মাত্র ২,০০০ টাকা (বিশেষ অফার)। রেজিস্ট্রেশন ও পেমেন্ট যাচাইয়ের পর ভর্তি নিশ্চিত হবে।",
		a_en: "The full two-month course fee is currently BDT 2,000 (special offer). Admission is confirmed upon registration and verification."
	},
	{
		q_bn: "কুরআন পড়তে না জানলেও কি ভর্তি হওয়া যাবে?",
		q_en: "Can I join if I do not know how to read Arabic at all?",
		a_bn: "হ্যাঁ, শূন্য থেকে আরবি হরফ ও সহীহ উচ্চারণ শেখার মাধ্যমে কোর্সটি শুরু হয়।",
		a_en: "Yes, our curriculum starts from the basics—recognizing letters, proper articulation, and step-by-step recitation."
	},
	{
		q_bn: "আগে থেকে অভিজ্ঞতা প্রয়োজন?",
		q_en: "Is prior experience required?",
		a_bn: "না। ফর্মে বর্তমান কুরআন পড়ার দক্ষতা জানালে সে অনুযায়ী আলোচনা করা যাবে।",
		a_en: "No prior experience is necessary. You can note your current level in the registration form and we will guide you accordingly."
	},
	{
		q_bn: "ক্লাস মিস হলে কী হবে?",
		q_en: "What happens if I miss a class?",
		a_bn: "ক্লাস মিস হলে শিক্ষিকা পরবর্তী ক্লাসে প্রয়োজনীয় পাঠ পুষিয়ে নিতে আন্তরিকভাবে সহায়তা করবেন।",
		a_en: "If you miss a class, the teacher will supportively guide you to catch up on missed topics during subsequent sessions."
	},
	{
		q_bn: "ফি কি একবারেই দিতে হবে?",
		q_en: "Must the fee be paid all at once?",
		a_bn: "ভর্তির সময় সম্পূর্ণ ফি এককালীন পরিশোধ করতে হয়। বিশেষ কোনো প্রয়োজনে ভর্তি কর্তৃপক্ষের সঙ্গে সরাসরি কথা বলে জেনে নিতে পারেন।",
		a_en: "The course fee is paid as a one-time payment upon enrollment. For special arrangements, you may discuss directly with admission support."
	},
	{
		q_bn: "শুধু মহিলারাই কি অংশ নিতে পারবেন?",
		q_en: "Is this course exclusively for women?",
		a_bn: "হ্যাঁ, এই মাদরাসার প্রতিটি কোর্স সম্পূর্ণভাবে নারী শিক্ষার্থীদের জন্য নিবেদিত।",
		a_en: "Yes, all our courses and classes are strictly dedicated to female students only."
	},
	{
		q_bn: "ক্লাসের লিংক কোথায় পাব?",
		q_en: "Where will I receive the class link?",
		a_bn: "ভর্তি নিশ্চিত হওয়ার পর WhatsApp গ্রুপ/নির্দেশনার মাধ্যমে Zoom ক্লাসের লিংক ও শিডিউল দেওয়া হবে।",
		a_en: "Once enrollment is confirmed, Zoom class links and schedule notifications are shared directly in the dedicated WhatsApp group."
	}
];
function Index() {
	const [language, setLanguage] = useLanguage();
	useReveal();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [faqOpen, setFaqOpen] = (0, import_react.useState)(0);
	const [activeId, setActiveId] = (0, import_react.useState)("home");
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	const [topBarHidden, setTopBarHidden] = (0, import_react.useState)(false);
	const [headerScrolled, setHeaderScrolled] = (0, import_react.useState)(false);
	const whatsappNumber = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAIL": "fatemaulfat33@gmail.com",
		"VITE_FACEBOOK_PAGE": "https://www.facebook.com/share/1DcL1Wxbaz/",
		"VITE_PAYMENT_NUMBER": "+8801875343476",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "YOUR_SUPABASE_PUBLISHABLE_KEY",
		"VITE_SUPABASE_URL": "https://YOUR_PROJECT.supabase.co",
		"VITE_WHATSAPP_NUMBER": "+8801875343476"
	}["VITE_WHATSAPP_NUMBER"] || "+8801875343476";
	const contactPhone = "+8801875343476";
	const contactEmail = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAIL": "fatemaulfat33@gmail.com",
		"VITE_FACEBOOK_PAGE": "https://www.facebook.com/share/1DcL1Wxbaz/",
		"VITE_PAYMENT_NUMBER": "+8801875343476",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "YOUR_SUPABASE_PUBLISHABLE_KEY",
		"VITE_SUPABASE_URL": "https://YOUR_PROJECT.supabase.co",
		"VITE_WHATSAPP_NUMBER": "+8801875343476"
	}["VITE_EMAIL"] || "fatemaulfat33@gmail.com";
	const facebookPage = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAIL": "fatemaulfat33@gmail.com",
		"VITE_FACEBOOK_PAGE": "https://www.facebook.com/share/1DcL1Wxbaz/",
		"VITE_PAYMENT_NUMBER": "+8801875343476",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "YOUR_SUPABASE_PUBLISHABLE_KEY",
		"VITE_SUPABASE_URL": "https://YOUR_PROJECT.supabase.co",
		"VITE_WHATSAPP_NUMBER": "+8801875343476"
	}["VITE_FACEBOOK_PAGE"] || "https://www.facebook.com/share/1DcL1Wxbaz/";
	const closeMenu = () => setMenuOpen(false);
	const footerItems = navItems;
	const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;
	(0, import_react.useEffect)(() => {
		document.title = language === "bn" ? "অনলাইন মহিলা মাদরাসা | ঘরে বসে কুরআন শিক্ষা" : "Online Women's Madrasa | Quran Learning from Home";
	}, [language]);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			if (window.scrollY <= 150) {
				setActiveId("home");
				return;
			}
			const visibleEntries = entries.filter((e) => e.isIntersecting);
			if (visibleEntries.length > 0) {
				visibleEntries.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
				setActiveId(visibleEntries[0].target.id);
			}
		}, { rootMargin: "-20% 0px -55% 0px" });
		observedSectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
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
				if (currentScrollY <= 160) {
					setActiveId("home");
					setTopBarHidden(false);
					accumulatedDelta = 0;
					lastScrollY = currentScrollY;
					ticking = false;
					return;
				}
				const diff = currentScrollY - lastScrollY;
				if (diff > 0 && accumulatedDelta < 0 || diff < 0 && accumulatedDelta > 0) accumulatedDelta = 0;
				accumulatedDelta += diff;
				if (accumulatedDelta > 50) setTopBarHidden(true);
				else if (accumulatedDelta < -45) setTopBarHidden(false);
				lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
				ticking = false;
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, [menuOpen]);
	return localizeNode(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell",
		lang: language,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "top-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container top-strip-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "top-strip-contacts",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${contactPhone}`,
								className: "top-strip-link",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 12 }),
									" ",
									contactPhone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "top-strip-sep",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${contactEmail}`,
								className: "top-strip-link",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 12 }),
									" ",
									contactEmail
								]
							}),
							facebookPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "top-strip-sep",
								children: "·"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: facebookPage,
								target: "_blank",
								rel: "noreferrer",
								className: "top-strip-link top-strip-fb",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 12 }), " Facebook"]
							})] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `site-header ${topBarHidden ? "topbar-hidden" : ""} ${headerScrolled ? "header-scrolled" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "site-header-top",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container header-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "brand",
								href: "#home",
								onClick: closeMenu,
								"aria-label": language === "bn" ? "অনলাইন মহিলা মাদরাসা হোম" : "Online Women's Madrasa home",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "brand-logo",
									src: online_women_madrasah_logo_default,
									alt: language === "bn" ? "অনলাইন মহিলা মাদরাসার লোগো" : "Online Women's Madrasa logo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "brand-copy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: language === "bn" ? "অনলাইন মহিলা মাদরাসা" : "Online Women's Madrasa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: language === "bn" ? "আলোর পথে ইলমের যাত্রা" : "A journey of learning and light" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "header-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/registration",
									className: "nav-cta header-cta",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 16 }),
										" ",
										language === "bn" ? "ভর্তি হোন" : "Enroll now",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "language-switch",
									role: "group",
									"aria-label": language === "bn" ? "ভাষা নির্বাচন" : "Select language",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: language === "bn" ? "active" : "",
										"aria-pressed": language === "bn",
										onClick: () => {
											setLanguage("bn");
											setTopBarHidden(false);
										},
										children: "বাংলা"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: language === "en" ? "active" : "",
										"aria-pressed": language === "en",
										onClick: () => {
											setLanguage("en");
											setTopBarHidden(false);
										},
										children: "English"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mobile-menu",
								type: "button",
								onClick: () => setMenuOpen(!menuOpen),
								"aria-label": menuOpen ? language === "bn" ? "মেনু বন্ধ করুন" : "Close menu" : language === "bn" ? "মেনু খুলুন" : "Open menu",
								"aria-expanded": menuOpen,
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: menuOpen ? "main-nav is-open" : "main-nav",
					"aria-label": language === "bn" ? "প্রধান নেভিগেশন" : "Main navigation",
					children: [navItems.map((item) => {
						const Icon = item.icon;
						const isRoute = item.href.startsWith("/");
						const isActive = !isRoute && activeId === item.href.slice(1);
						const label = language === "bn" ? item.label_bn : item.label_en;
						if (isRoute) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.href,
							onClick: closeMenu,
							className: "nav-route-link",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 14,
								className: "nav-icon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
						}, item.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							onClick: closeMenu,
							className: isActive ? "active" : "",
							"aria-current": isActive ? "location" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 14,
								className: "nav-icon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
						}, item.href);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/registration",
						className: "nav-cta menu-cta",
						onClick: closeMenu,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 16 }),
							" ",
							language === "bn" ? "ভর্তি হোন" : "Enroll now",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero-section",
					id: "home",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-pattern" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "container hero-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "eyebrow",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
											" ",
											language === "bn" ? "নারীদের জন্য অনলাইন ইসলামী শিক্ষা" : "Online Islamic education for women"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"শুদ্ধ কুরআন শিক্ষার",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "সুন্দর যাত্রা" }),
										" শুরু হোক",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"আজ থেকেই"
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"Begin your journey",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "to correct Quran recitation" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"today"
									] }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-description",
										children: language === "bn" ? "ঘরে বসেই শিখুন পবিত্র কুরআন, তাজবিদ ও প্রয়োজনীয় ইসলামী জ্ঞান। সহজ পাঠদান, আন্তরিক পরিচর্যা আর আপনার সুবিধামতো সময়ে।" : "Learn the Holy Quran, Tajweed, and essential Islamic knowledge from home—with supportive teaching at a time that works for you."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/registration",
											className: "button button-primary hero-enroll-btn",
											children: [
												language === "bn" ? "ভর্তি হোন" : "Enroll now",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "button button-outline",
											href: "#courses",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 18 }),
												" ",
												language === "bn" ? "কোর্সগুলো দেখুন" : "Explore courses"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-trust",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "trust-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 18 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "bn" ? "শেখার প্রতিটি ধাপে আন্তরিক সহযোগিতা" : "Support at every step of your learning journey" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "trust-divider" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "bn" ? "অনলাইন ক্লাস" : "Online classes" })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-visual",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-image-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: madrasa_quran_hero_default,
											alt: language === "bn" ? "রেহালে রাখা খোলা পবিত্র কুরআন" : "The Holy Quran open on a wooden stand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "image-caption",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "caption-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 20 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: language === "bn" ? "ইলম হোক জীবনের আলো" : "Let knowledge illuminate your life" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: language === "bn" ? "শিখুন, বুঝুন, আমল করুন" : "Learn, understand, and practice" })] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "floating-note",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "floating-star",
											children: "✦"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: language === "bn" ? "প্রতিদিন একটু একটু করে" : "A little progress every day" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: language === "bn" ? "শুদ্ধতার পথে এগিয়ে চলুন" : "Move forward towards excellence" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-dots" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-bottom container",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "وَقُل رَّبِّ زِدْنِي عِلْمًا" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "bn" ? "“হে আমার রব, আমার জ্ঞান বৃদ্ধি করে দিন।” — সূরা ত্ব-হা: ১১৪" : "“My Lord, increase me in knowledge.” — Surah Ta-Ha: 114" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "intro-section section-pad",
					id: "about",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container intro-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: online_quran_class_default,
								alt: language === "bn" ? "অনলাইনে কুরআন শিক্ষা নিচ্ছেন একজন ছাত্রী" : "A student learning the Quran online",
								width: 1280,
								height: 853,
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "intro-image-label rounded-sm ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نُور" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: language === "bn" ? "জ্ঞান অর্জনের পথে" : "On the path of knowledge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: language === "bn" ? "আপনার পাশে আমরা" : "We are by your side" })] })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "আমাদের পরিচয়" : "Who We Are"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"ইলম অর্জন হোক",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "সহজ ও আনন্দময়" })
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"Make learning",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "easy & fulfilling" })
								] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "অনলাইন মহিলা মাদরাসার লক্ষ্য হলো নারীদের জন্য ঘরে বসে কুরআন ও প্রয়োজনীয় দ্বীনি শিক্ষা অর্জনের একটি সহজ ও যত্নশীল সুযোগ তৈরি করা।" : "Online Women's Madrasa is dedicated to providing women with a caring, accessible opportunity to learn the Quran and essential Islamic teachings from home." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "শিক্ষার্থীর শেখার স্তর ও প্রয়োজন অনুযায়ী পাঠ সাজানোর মাধ্যমে আমরা শুদ্ধভাবে শেখার অভ্যাস গড়ে তুলতে সহায়তা করতে চাই।" : "By tailoring lessons to each student's current proficiency, we help cultivate consistent and accurate learning habits." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "text-link",
									href: "#contact",
									children: [
										language === "bn" ? "আমাদের সঙ্গে কথা বলুন" : "Talk to us",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 })
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad",
					id: "course-importance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container importance-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "কেন এই কোর্সটি আপনার জন্য গুরুত্বপূর্ণ?" : "Why is this course important for you?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["দ্বীনি শিক্ষার পথে ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "আপনার পাশে" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Your partner in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Islamic learning" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "কুরআন পড়তে গিয়ে উচ্চারণে ভুল হচ্ছে? সন্তানকে ইসলামী আদর্শে গড়ে তুলতে চান? ইসলামের মৌলিক বিষয়গুলো ভালোভাবে জানতে চান? সংসার ও সন্তান সামলাতে গিয়ে নিজের দ্বীনি শিক্ষার জন্য সময় বের করতে পারছেন না?" : "Struggling with Quran pronunciation? Want to raise your children with Islamic values? Wish to understand the essentials of Islam? Finding it difficult to balance family duties and personal religious learning?" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "তাহলে Online Women Madrasah হতে পারে আপনার দ্বীনি শিক্ষার সুন্দর একটি যাত্রার শুরু।" : "Then Online Women's Madrasa can be the beginning of a beautiful journey in your Islamic education." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "importance-photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: thumb_parenting_default,
								alt: language === "bn" ? "সন্তানকে কুরআন শেখাচ্ছেন একজন মা" : "A mother teaching her child the Quran",
								loading: "lazy"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "courses-section section-pad",
					id: "courses",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "আমাদের পাঠ্যক্রম" : "Our Curriculum"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["আপনার শেখার জন্য ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "যে কোর্সগুলো" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Courses designed ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "for your learning" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "নিজের বর্তমান অবস্থান থেকে শুরু করুন, ধীরে ধীরে এগিয়ে যান শুদ্ধতার পথে।" : "Start from where you are and steadily advance towards proper recitation." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "course-grid",
							children: courses.map((course) => {
								const Icon = course.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "course-card-top",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "course-photo",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: course.photo,
													alt: "",
													loading: "lazy"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "course-icon",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														size: 15,
														strokeWidth: 2
													})
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "course-number",
												children: language === "bn" ? course.number_bn : course.number_en
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-tag",
											children: language === "bn" ? course.tag_bn : course.tag_en
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? course.title_bn : course.title_en }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? course.text_bn : course.text_en }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "course-card-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/registration",
												className: "course-enroll-btn",
												children: [
													language === "bn" ? "ভর্তি হোন" : "Enroll now",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 })
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#course-details",
												"aria-label": `${language === "bn" ? course.title_bn : course.title_en} ${language === "bn" ? "সম্পর্কে জানুন" : "details"}`,
												className: "course-link",
												children: language === "bn" ? "বিস্তারিত জানুন" : "Learn more"
											})]
										})
									]
								}, course.number_bn);
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad curriculum-extra",
					id: "course-details",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "কোর্সের বিস্তারিত" : "Course details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["কী কী ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "শেখানো হবে" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["What you will ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "learn" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আমাদের সুনির্দিষ্ট ও সমৃদ্ধ পাঠ্যবিষয়গুলো সাজানো হলো।" : "Our structured and comprehensive curriculum topics." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "course-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-photo detail-photo",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: quran_flowers_default,
												alt: "",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "সহীহ-শুদ্ধ কুরআন শিক্ষা" : "Correct Quran Recitation" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আরবি হরফ, ১৭টি মাখরাজের পরিচিতি, মাদ, গুন্নাহ, কলকলাহ এবং নামাজে পঠিত ১২টি ছোট সূরা অর্থসহ শেখার লক্ষ্য।" : "Study Arabic letters, the 17 articulation points, madd, ghunnah, qalqalah, and the meanings of 12 short surahs commonly recited in prayer." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-photo detail-photo",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: daily_routine_default,
												alt: "দৈনন্দিন রুটিন",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "দৈনন্দিন রুটিনের মাধ্যমে ভালো অভ্যাস তৈরি করা" : "Building Good Habits Through Daily Routine" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "নিয়মিত নামাজ, কুরআন তিলাওয়াত, পড়াশোনা, সময়মতো ঘুম ও দৈনন্দিন কাজের মাধ্যমে সুন্দর জীবনযাপন এবং ভালো অভ্যাস গড়ে তোলা।" : "Build a disciplined, meaningful lifestyle through regular prayers, Quran recitation, timely studies, sleep routine, and wholesome daily habits." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-photo detail-photo",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: rehal_plants_default,
												alt: "",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "ইসলামের মৌলিক জ্ঞান ও হাদিস" : "Islamic Foundations and Hadith" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "ঈমান ও ইসলামের পরিচয়, শিরক, কুফর, বিদআত, গুনাহ ও নেক আমল এবং গুরুত্বপূর্ণ সহীহ হাদিসের শিক্ষা।" : "Explore the foundations of faith and Islam, avoid shirk, kufr, and bid'ah, understand sins and good deeds, and learn essential authentic hadiths." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-photo detail-photo",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: thumb_parenting_default,
												alt: "",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "ইসলামিক প্যারেন্টিং" : "Islamic Parenting" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "সন্তানকে ইসলামী আদর্শে গড়ে তোলা, নামাজ ও কুরআনের প্রতি আগ্রহী করা এবং সুন্দর আচরণ ও পারিবারিক শিক্ষা।" : "Raise children with Islamic moral guidance, inspire love for prayer and the Quran, and nurture courteous conduct and family values." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-photo detail-photo",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: weekly_exam_default,
												alt: "সাপ্তাহিক পরীক্ষা",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "সাপ্তাহিক পরীক্ষার মাধ্যমে পড়ার অগ্রগতি" : "Tracking Progress with Weekly Assessments" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "নিয়মিত সাপ্তাহিক পরীক্ষা নেওয়ার মাধ্যমে শিক্ষার্থীদের পড়ার অগ্রগতি যাচাই, দুর্বলতা চিহ্নিতকরণ এবং শেখার দক্ষতা উন্নত করে পড়াশোনাকে আরও সহজ ও কার্যকর করা।" : "Assess learning progress through regular weekly exams, identify weak areas, and enhance study skills to make learning effortless and effective." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "course-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "course-photo detail-photo",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: desk_study_default,
												alt: "",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "দৈনন্দিন জীবন ও আমল" : "Everyday Life and Practice" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "জিন-শয়তানের ফিতনা ও বদনজর বিষয়ে কুরআন-হাদিসের নির্দেশনা, কুসংস্কার থেকে বেঁচে থাকা, মোবাইল আসক্তি নিয়ন্ত্রণ ও সময়ের সঠিক ব্যবহার।" : "Learn prophetic protection against evil eye and harm, avoid superstitions, manage phone addiction, and utilize time meaningfully." })
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad",
					id: "outcomes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container intro-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "কোর্স শেষে প্রত্যাশিত অর্জন" : "Expected Learning Outcomes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["জ্ঞান ও আমলে ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "এগিয়ে চলুন" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Grow in knowledge ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "and practice" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "এই কোর্সের লক্ষ্য হলো শিক্ষার্থীদের দ্বীনি জ্ঞান অর্জনে সহায়তা করা। ফলাফল শিক্ষার্থীর অনুশীলন ও অংশগ্রহণের ওপর নির্ভরশীল; নির্দিষ্ট দক্ষতার নিশ্চয়তা নয়।" : "This course aims to help students acquire Islamic knowledge. Progress depends on individual dedication and practice; specific outcomes are not guaranteed." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "নামাজে পড়া সূরাগুলোর অর্থ ও শিক্ষা জানা" : "Understand the meanings and lessons of surahs recited in prayer" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "ইসলামের মৌলিক বিষয় সম্পর্কে পরিষ্কার ধারণা" : "Build a clear understanding of the core foundations of Islam" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "সন্তান প্রতিপালনে ইসলামী দিকনির্দেশনা" : "Gain Islamic guidance on thoughtful parenting" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "দৈনন্দিন জীবনে দ্বীনি আমল প্রতিষ্ঠার অনুপ্রেরণা" : "Find inspiration to implement Islamic practices in daily life" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "নিজের জীবন ও সময় সুন্দরভাবে পরিচালনার শিক্ষা" : "Learn to organize your life and manage time purposefully" })
								] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-copy",
							id: "class",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "photo-frame",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: online_class_default,
										alt: language === "bn" ? "ল্যাপটপে অনলাইন কুরআন ক্লাসে অংশ নিচ্ছেন একজন শিক্ষার্থী" : "A student attending an online Quran class on a laptop",
										loading: "lazy"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "ক্লাস পরিচালনা" : "How Classes Work"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["ঘরে বসেই ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "লাইভ শেখা" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Learn live ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "from home" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "Zoom-এর মাধ্যমে একদিন পর পর শিক্ষিকার সঙ্গে সরাসরি ক্লাস, প্রশ্ন করার সুযোগ এবং প্রয়োজনীয় বিষয় বুঝে নেওয়ার ব্যবস্থা।" : "Live online classes via Zoom every other day, with direct interaction with the teacher, Q&A opportunities, and personal attention." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "প্রধান সময়: রাত ৯টা–১০টা" : "Main batch: 9:00 PM – 10:00 PM" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "বিকল্প সময়: দুপুর ৩টা–৪টা" : "Alternative batch: 3:00 PM – 4:00 PM" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "কোর্সের মেয়াদ: ডিসেম্বর–জানুয়ারি (২ মাস)" : "Course duration: December–January (2 months)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: language === "bn" ? "পরবর্তী ব্যাচ প্রতি দুই মাস পরপর শুরু হবে ইংশাআল্লাহ্।" : "The next batch will start every two months, In Sha Allah." })
								] })
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad",
					id: "teacher",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-kicker",
								children: language === "bn" ? "আমাদের শিক্ষিকা" : "Our Teacher"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["অভিজ্ঞ শিক্ষিকার ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "সঙ্গে শেখার সুযোগ" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Learn with an ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "experienced female teacher" })] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আমাদের অভিজ্ঞ ও যোগ্য নারী শিক্ষিকা অত্যন্ত যত্ন, ধৈর্য ও স্নেহের সাথে প্রতিটি শিক্ষার্থীকে কুরআন তিলাওয়াত, সহীহ মাখরাজ ও তাজবিদ শিক্ষা প্রদান করেন। নারী শিক্ষার্থীদের জন্য এটি সম্পূর্ণ নিরাপদ, মার্জিত ও পর্দাশীল পরিবেশ।" : "Our experienced and qualified female teacher provides careful, patient, and affectionate guidance in Quran recitation, proper articulation, and Tajweed. A safe, modest, and dedicated environment tailored for women." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "teacher-profile-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "teacher-info-grid",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "teacher-info-item",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-label",
												children: language === "bn" ? "শিক্ষিকার নাম" : "Teacher's Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-value",
												children: language === "bn" ? "ফাতেমা উলফাত" : "Fatema Ulfat"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "teacher-info-item",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-label",
												children: language === "bn" ? "শিক্ষাগত যোগ্যতা" : "Educational Qualification"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-value",
												children: language === "bn" ? "আলেমা, দাওরায়ে হাদীস (মাষ্টার সম্মাননা)" : "Alema, Dawra-e-Hadith (Master's Equivalent)"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "teacher-info-item",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-label",
												children: language === "bn" ? "প্রতিষ্ঠানের নাম" : "Institution"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-value",
												children: language === "bn" ? "জামিয়া ইসলামিয়া আশরাফুল উলুম ছনটেক মহিলা মাদরাসা, যাত্রাবাড়ী, ঢাকা" : "Jamia Islamia Ashraful Ulum Chhontek Mohila Madrasah, Jatrabari, Dhaka"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "teacher-info-item",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-label",
												children: language === "bn" ? "জেলা" : "District"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "teacher-info-value",
												children: language === "bn" ? "নারায়ণগঞ্জ" : "Narayanganj"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "teacher-closing-note",
									children: language === "bn" ? "দ্বীনি খেদমতে দীর্ঘদিনের অভিজ্ঞতাসম্পন্ন, আপনার শেখার এই নতুন যাত্রায় পাশে থাকবেন ইংশাআল্লাহ্।" : "With years of experience in Islamic service and teaching, she will guide and support you on this new journey of learning, In Sha Allah."
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad",
					id: "exam",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "পরীক্ষা ও পুরস্কার" : "Exams & Awards"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["শেখার অগ্রগতি ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "যাচাই" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Track your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "learning progress" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "কোর্স শেষে পরীক্ষা ও মেধা যাচাই হবে। প্রথম, দ্বিতীয় ও তৃতীয় স্থান অর্জনকারীদের জন্য বিশেষ আকর্ষণীয় পুরস্কারের ব্যবস্থা থাকবে।" : "Examinations and evaluations are conducted at the end of the course. Special prizes and certificates are awarded to 1st, 2nd, and 3rd place achievers." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "photo-frame exam-photo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: certificate_default,
								alt: language === "bn" ? "সনদের নমুনা চিত্র" : "Illustrative certificate",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: language === "bn" ? "নমুনা চিত্র" : "Sample Certificate" })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad",
					id: "testimonials",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-kicker",
								children: language === "bn" ? "শিক্ষার্থীদের মতামত" : "Student Feedback"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["বাস্তব অভিজ্ঞতা ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ও প্রেরণা" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Real experiences ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "& inspiration" })] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আলহামদুলিল্লাহ, আমাদের সম্মানিত নারী শিক্ষার্থীরা অত্যন্ত স্বাচ্ছন্দ্যে ঘরে বসে সহীহভাবে কুরআন তিলাওয়াত ও প্রয়োজনীয় দ্বীনি বিষয় শিখেছেন। নিয়মিত অনুশীলন ও আন্তরিক পরিচর্যার মাধ্যমে তাঁরা প্রতিটি পাঠ আত্মস্থ করেছেন।" : "Alhamdulillah, our respected female students have comfortably learned proper Quran recitation and essential Islamic knowledge from home, advancing with confidence through attentive guidance." })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-pad",
					id: "fees",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-kicker",
								children: language === "bn" ? "কোর্স ফি ও ভর্তি অফার" : "Course Fee & Admission Offer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? "সম্পূর্ণ দুই মাসের কোর্স ফি" : "Full 2-Month Course Fee" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: { margin: "15px 0" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "25px",
											color: "#888",
											textDecoration: "line-through",
											marginRight: "12px"
										},
										children: language === "bn" ? "৳ ২,৫০০" : "BDT 2,500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "40px",
											fontWeight: 700,
											color: "orange"
										},
										children: language === "bn" ? "৳ ২,০০০" : "BDT 2,000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											color: "green",
											fontWeight: 600,
											marginTop: "5px"
										},
										children: language === "bn" ? "বিশেষ অফার মূল্য" : "Special Offer Price"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "মেয়াদ: ২ মাস · Zoom অনলাইন ক্লাস · একদিন পর পর ক্লাস · পরীক্ষা ও মেধা যাচাই · প্রথম তিনজনের জন্য বিশেষ পুরস্কার।" : "Duration: 2 Months · Zoom Live Classes · Classes Every Other Day · Evaluation & Exams · Special Prizes for Top 3." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/registration",
								className: "button button-primary fee-enroll-btn",
								children: [
									language === "bn" ? "এখনই রেজিস্ট্রেশন করুন" : "Register Now",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "why-us-modern-section",
					id: "why-us",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "why-us-decorations",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "why-us-wave-top" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "why-us-wave-bottom" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "why-us-leaves-left" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "why-us-leaves-right" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container why-us-container",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "why-us-visual",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "why-us-photo-frame",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: why_us_student_default,
										alt: language === "bn" ? "কুরআন পাঠরত ছাত্রী" : "Female student studying Quran",
										className: "why-us-student-img",
										loading: "lazy"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "why-us-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "why-us-pill-badge",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "bn" ? "কেন আমাদের বেছে নেবেন" : "Why Choose Us" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "why-us-heading",
										children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "why-us-title-dark",
											children: "শেখার পথে থাকুক"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "why-us-title-green",
											children: ["আস্থা ও আন্তরিকতা", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "why-title-underline",
												viewBox: "0 0 200 12",
												fill: "none",
												xmlns: "http://www.w3.org/2000/svg",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M2 9.5C45 3.5 130 1.5 198 8",
													stroke: "currentColor",
													strokeWidth: "3.5",
													strokeLinecap: "round"
												})
											})]
										})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "why-us-title-dark",
											children: "Learn with"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "why-us-title-green",
											children: ["trust & sincerity", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "why-title-underline",
												viewBox: "0 0 200 12",
												fill: "none",
												xmlns: "http://www.w3.org/2000/svg",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M2 9.5C45 3.5 130 1.5 198 8",
													stroke: "currentColor",
													strokeWidth: "3.5",
													strokeLinecap: "round"
												})
											})]
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "why-us-description",
										children: language === "bn" ? "আমরা বিশ্বাস করি, সঠিক দিকনির্দেশনা ও নিয়মিত অনুশীলনের মাধ্যমে সবার জন্য জ্ঞানের দ্বার খুলে যাবে। তাই প্রতিটি ক্লাসে শিক্ষার্থীর মেধা ও বোঝাপড়াকে গুরুত্ব দেওয়ার চেষ্টা করি।" : "We believe proper guidance and consistent practice make learning effortless. We prioritize each student's personal understanding in every session."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/registration",
										className: "why-us-action-btn",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "bn" ? "ভর্তি বিষয়ে কথা বলুন" : "Inquire about admission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "why-us-btn-arrow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "why-us-cards-grid",
								children: benefits.map((item) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `why-feature-card card-${item.theme}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `why-feature-icon-box icon-${item.theme}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "why-feature-content",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? item.title_bn : item.title_en }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? item.text_bn : item.text_en })]
										})]
									}, item.title_bn);
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "steps-section section-pad",
					id: "how-to-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: language === "bn" ? "শুরু করবেন যেভাবে" : "How to Get Started"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["মাত্র তিনটি ধাপে ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "শেখা শুরু" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Start learning in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "three simple steps" })] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আপনার শেখার যাত্রা শুরু করতে প্রক্রিয়াটি সহজ রাখা হয়েছে।" : "A simple and straightforward process to begin your learning journey." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "steps-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "০১" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "যোগাযোগ করুন" : "Get in Touch" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আপনার শেখার আগ্রহ ও প্রয়োজন আমাদের জানান।" : "Share your learning interest and preferred schedule with us." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "step-arrow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "০২" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "কোর্স বেছে নিন" : "Choose Your Course" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "আপনার বর্তমান দক্ষতা অনুযায়ী উপযুক্ত কোর্স জানুন।" : "Select the course best suited to your current proficiency." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "step-arrow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "০৩" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "ক্লাস শুরু করুন" : "Start Classes" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "সময় ঠিক করে অনলাইন ক্লাসে শেখা শুরু করুন।" : "Confirm your schedule and begin attending live online classes." })
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "faq-section section-pad",
					id: "faq",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container faq-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-kicker",
								children: language === "bn" ? "সাধারণ জিজ্ঞাসা" : "Frequently Asked Questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"আপনার মনে থাকা",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "কিছু প্রশ্ন" })
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Questions you",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "might have" })
							] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "ভর্তি বা ক্লাস সম্পর্কে আরও কিছু জানতে চাইলে আমাদের সঙ্গে যোগাযোগ করুন।" : "Have questions about admission or classes? Feel free to contact us." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "text-link",
								children: [
									language === "bn" ? "যোগাযোগ করুন" : "Contact us",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "faq-list",
							children: faqs.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: faqOpen === i ? "faq-item active" : "faq-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setFaqOpen(faqOpen === i ? null : i),
									"aria-expanded": faqOpen === i,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "bn" ? item.q_bn : item.q_en }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 19 })]
								}), faqOpen === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "faq-answer",
									children: language === "bn" ? item.a_bn : item.a_en
								})]
							}, item.q_bn))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "contact-section section-pad",
					id: "contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-heading contact-heading",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "section-kicker",
										children: language === "bn" ? "যোগাযোগ ও তথ্য সহায়তা" : "Contact & Support"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["আমাদের সাথে ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "সরাসরি যোগাযোগ করুন" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "with us directly" })] }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "ভর্তি প্রক্রিয়া, ক্লাসের সময়সূচি বা যেকোনো তথ্যের জন্য আমাদের সঙ্গে ফোন, WhatsApp বা ইমেইলে যোগাযোগ করতে পারেন।" : "For admission inquiries, class schedules, or any assistance, feel free to contact us via Phone, WhatsApp, or Email." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-grid-modern",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-item-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-icon-bubble phone",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { size: 26 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "সরাসরি কল করুন" : "Direct Phone Call" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "contact-card-sub",
												children: language === "bn" ? "ভর্তি ও ক্লাসের যেকোনো তথ্যে" : "For admission & class inquiries"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-card-val",
												children: contactPhone
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "contact-card-time",
												children: language === "bn" ? "সকাল ৯:০০টা – রাত ১০:০০টা" : "9:00 AM – 10:00 PM"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `tel:${contactPhone}`,
												className: "contact-action-btn phone",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }),
													" ",
													language === "bn" ? "কল করুন" : "Call Now"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-item-card featured",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "contact-card-badge",
												children: language === "bn" ? "দ্রুত সেবা" : "Fast Support"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-icon-bubble whatsapp",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 26 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "WhatsApp চ্যাট" : "WhatsApp Chat" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "contact-card-sub",
												children: language === "bn" ? "মেসেজ পাঠিয়ে বিস্তারিত তথ্য জানুন" : "Message us for quick assistance"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-card-val",
												children: contactPhone
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "contact-card-time",
												children: language === "bn" ? "যেকোনো সময় বার্তা পাঠাতে পারেন" : "Available anytime"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: whatsappLink,
												target: "_blank",
												rel: "noreferrer",
												className: "contact-action-btn whatsapp",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }),
													" ",
													language === "bn" ? "WhatsApp চ্যাট শুরু করুন" : "Chat on WhatsApp"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-item-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-icon-bubble email",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 26 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "ইমেইল ঠিকানা" : "Email Address" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "contact-card-sub",
												children: language === "bn" ? "যেকোনো আনুষ্ঠানিক তথ্যের জন্য" : "For official communications"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-card-val email-val",
												children: contactEmail
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "contact-card-time",
												children: language === "bn" ? "২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়" : "Response within 24 hours"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `mailto:${contactEmail}`,
												className: "contact-action-btn email",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }),
													" ",
													language === "bn" ? "ইমেইল লিখুন" : "Send Email"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-item-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "contact-icon-bubble admission",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 26 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "bn" ? "অনলাইন ভর্তি" : "Online Admission" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "contact-card-sub",
												children: language === "bn" ? "ঘরে বসেই সহজ ৩ ধাপে রেজিস্ট্রেশন" : "Simple 3-step online registration"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													color: "#3b537c",
													fontSize: 15,
													fontWeight: 600,
													marginTop: "3px"
												},
												children: language === "bn" ? "বিশেষ অফার মূল্য" : "Special Offer Price"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: "15px",
													color: "#888",
													textDecoration: "line-through",
													marginRight: "8px"
												},
												children: language === "bn" ? "৳ ২,৫০০" : "BDT 2,500"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: "25px",
													fontWeight: 700,
													color: "#5475ad"
												},
												children: language === "bn" ? "৳ ২,০০০" : "BDT 2,000"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "contact-card-time",
												children: language === "bn" ? "২ মাসের পূর্ণাঙ্গ অনলাইন কোর্স" : "Complete 2-month online course"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/registration",
												className: "contact-action-btn admission",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }),
													" ",
													language === "bn" ? "ভর্তি রেজিস্ট্রেশন" : "Register Now"
												]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-banner-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "contact-ornament",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "section-kicker",
										children: language === "bn" ? "নারী শিক্ষার্থীদের জন্য বিশেষ আয়োজন" : "Dedicated program for female students"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: language === "bn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"আজই শুরু হোক",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ইলমের পথে আপনার যাত্রা" })
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"Begin today",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "your journey in Islamic learning" })
									] }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "নারী শিক্ষিকার আন্তরিক পাঠদান, নিয়মিত তত্ত্বাবধান ও সময়োপযোগী পাঠ্যক্রম। আসন সংখ্যা সীমিত, আজই আপনার ভর্তি নিশ্চিত করুন।" : "Caring instruction by qualified female teachers, regular supervision, and modern curriculum. Limited seats available—secure your admission today." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-actions",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/registration",
												className: "button button-primary contact-enroll-btn",
												children: [
													language === "bn" ? "এখনই রেজিস্ট্রেশন করুন" : "Register Now",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "button button-outline-light",
												href: whatsappLink,
												target: "_blank",
												rel: "noreferrer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }),
													" ",
													language === "bn" ? "WhatsApp-এ যোগাযোগ" : "WhatsApp"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "button button-outline-light",
												href: `tel:${contactPhone}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }),
													" ",
													contactPhone
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "button button-outline-light",
												href: `mailto:${contactEmail}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }),
													" ",
													language === "bn" ? "ইমেইল পাঠান" : "Send Email"
												]
											}),
											facebookPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "button button-outline-light",
												href: facebookPage,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 18 }), " Facebook Page"]
											})
										]
									})
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "site-footer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-main",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-intro-block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "footer-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: online_women_madrasah_logo_default,
											alt: language === "bn" ? "মাদরাসার লোগো" : "Madrasa Logo",
											className: "brand-logo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: language === "bn" ? "অনলাইন মহিলা মাদরাসা" : "Online Women's Madrasa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: language === "bn" ? "Online Women's Madrasa" : "A journey of learning and light" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "ইসলামিক শিক্ষার আলো ছড়িয়ে দিতে আমাদের এই অনলাইন শিক্ষা প্রতিষ্ঠান। কুরআন ও সুন্নাহর আলোকে নারীদের জন্য মানসম্মত শিক্ষার সুযোগ।" : "Our online educational institution is dedicated to spreading Islamic knowledge and providing quality education for women through the Quran and Sunnah." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "footer-direct-contacts",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `tel:${contactPhone}`,
												className: "footer-contact-badge",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactPhone })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `mailto:${contactEmail}`,
												className: "footer-contact-badge",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactEmail })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: whatsappLink,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "footer-contact-badge",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-navigation",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "footer-heading",
									children: language === "bn" ? "গুরুত্বপূর্ণ লিংক" : "Quick Links"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "footer-links",
									children: footerItems.map((item, index) => {
										const label = language === "bn" ? item.label_bn : item.label_en;
										return item.href.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: item.href,
											className: "footer-nav-link",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												size: 14,
												className: "footer-nav-arrow"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
										}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: item.href,
											className: "footer-nav-link",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												size: 14,
												className: "footer-nav-arrow"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
										}, index);
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-social-block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "footer-heading",
										children: language === "bn" ? "যোগাযোগ করুন" : "Contact Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "bn" ? "ভর্তি ও কোর্স সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন।" : "Contact us for admission and course-related information." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "footer-social-links",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: whatsappLink,
												target: "_blank",
												rel: "noopener noreferrer",
												"aria-label": "WhatsApp",
												className: "footer-social-btn footer-social-wa",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${contactPhone}`,
												"aria-label": "Phone",
												className: "footer-social-btn footer-social-phone",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${contactEmail}`,
												"aria-label": "Email",
												className: "footer-social-btn footer-social-email",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
											}),
											facebookPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: facebookPage,
												target: "_blank",
												rel: "noopener noreferrer",
												"aria-label": "Facebook",
												className: "footer-social-btn footer-social-fb",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 18 })
											})
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-bottom",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "footer-credit",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "footer-credit-sep",
									children: "|"
								}),
								" ",
								language === "bn" ? "নির্মাণ ও পরিচালনায়" : "Designed & Developed by",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://innovative.com.bd/",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Innovative Technology and Engineering"
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#home",
				className: showTop ? "back-to-top show" : "back-to-top",
				"aria-label": language === "bn" ? "উপরে ফিরে যান" : "Back to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: whatsappLink,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "float-wa",
				"aria-label": language === "bn" ? "হোয়াটসঅ্যাপে যোগাযোগ করুন" : "Chat on WhatsApp",
				title: language === "bn" ? "হোয়াটসঅ্যাপে যোগাযোগ করুন" : "Chat on WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 25 })
			})
		]
	}), language);
}
//#endregion
export { Index as component };
