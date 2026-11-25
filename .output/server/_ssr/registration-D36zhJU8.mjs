import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-fsrELmQG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as online_women_madrasah_logo_default, r as useLanguage, t as localizeNode } from "./online-women-madrasah-logo-12MzrKEF.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, _ as Facebook, b as CircleQuestionMark, c as PhoneCall, m as House, s as Phone, v as CreditCard, w as BookOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registration-D36zhJU8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegistrationSection({ language }) {
	const [message, setMessage] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [submittedCode, setSubmittedCode] = (0, import_react.useState)(null);
	const isBn = language === "bn";
	const whatsappNumber = ({
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
	}["VITE_WHATSAPP_NUMBER"] || "+8801875343476").replace(/[^0-9]/g, "");
	async function submitRegistration(e) {
		e.preventDefault();
		setBusy(true);
		setMessage("");
		try {
			const f = new FormData(e.currentTarget);
			const id = crypto.randomUUID();
			const code = "OWM-" + Date.now().toString().slice(-8);
			const motivationVal = String(f.get("motivation") || (isBn ? "অনলাইন মহিলা মাদরাসায় কুরআন শিক্ষা" : "Quran study at Online Women Madrasah"));
			const fullName = String(f.get("full_name") || "");
			const mobilePhone = String(f.get("mobile_phone") || "");
			const whatsappPhone = String(f.get("whatsapp_phone") || mobilePhone);
			const age = Number(f.get("age")) || 0;
			const district = String(f.get("district") || "");
			const address = String(f.get("address") || "");
			const preferredTime = String(f.get("preferred_class_time") || "");
			const quranReading = String(f.get("quran_reading") || "");
			const discoverySource = String(f.get("discovery_source") || "");
			const supabaseUrl = {
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
			}["VITE_SUPABASE_URL"] || "";
			if (!(!supabaseUrl || supabaseUrl.includes("YOUR_PROJECT") || supabaseUrl.includes("example.com"))) try {
				const { error } = await supabase.from("student_registrations").insert({
					id,
					registration_code: code,
					full_name: fullName,
					mobile_phone: mobilePhone,
					whatsapp_phone: whatsappPhone,
					age,
					address,
					district,
					preferred_class_time: preferredTime,
					quran_reading: quranReading,
					discovery_source: discoverySource,
					motivation: motivationVal,
					course_fee: 2500
				});
				if (error) console.warn("Supabase insert notification:", error.message || error);
			} catch (dbErr) {
				console.warn("Database connection issue (proceeding to WhatsApp):", dbErr);
			}
			try {
				const localList = JSON.parse(localStorage.getItem("owm_student_registrations") || "[]");
				localList.push({
					id,
					registration_code: code,
					full_name: fullName,
					mobile_phone: mobilePhone,
					whatsapp_phone: whatsappPhone,
					age,
					address,
					district,
					preferred_class_time: preferredTime,
					quran_reading: quranReading,
					discovery_source: discoverySource,
					motivation: motivationVal,
					created_at: (/* @__PURE__ */ new Date()).toISOString()
				});
				localStorage.setItem("owm_student_registrations", JSON.stringify(localList));
			} catch {}
			const whatsappLines = [
				"🌸 নতুন শিক্ষার্থী ভর্তি আবেদন 🌸",
				`রেজিস্ট্রেশন কোড: ${code}`,
				`শিক্ষার্থীর নাম: ${fullName}`,
				`মোবাইল নম্বর: ${mobilePhone}`,
				`WhatsApp নম্বর: ${whatsappPhone}`,
				`বয়স: ${age}`,
				`জেলা: ${district}`,
				`ঠিকানা: ${address}`,
				`ক্লাসের সময়: ${{
					night_9_10: "রাত ৯টা–১০টা (প্রধান সময়)",
					afternoon_3_4: "দুপুর ৩টা–৪টা (বিকল্প সময়)"
				}[preferredTime] || preferredTime}`,
				`কুরআন পড়ার স্তর: ${{
					beginner: "একদম নতুন (হরফ চিনি না)",
					knows_letters: "হরফ চিনি কিন্তু যুক্তবর্ণে সমস্যা",
					hesitant: "আটকে আটকে পড়তে পারি",
					fluent: "মোটামুটি পড়তে পারি, সহীহ করতে চাই"
				}[quranReading] || quranReading}`,
				`কোর্স সম্পর্কে জেনেছেন: ${{
					facebook: "Facebook",
					whatsapp: "WhatsApp",
					friend: "বন্ধু বা আত্মীয়ের মাধ্যমে",
					other: "অন্যান্য মাধ্যম"
				}[discoverySource] || discoverySource}`,
				`কেন শিখতে চান: ${motivationVal}`
			];
			setSubmittedCode(code);
			const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappLines.join("\n"))}`;
			window.location.href = whatsappUrl;
		} catch (err) {
			setMessage(err instanceof Error ? err.message : isBn ? "রেজিস্ট্রেশন জমা দেওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।" : "Registration could not be submitted. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	return localizeNode(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-pad registration-section",
		id: "registration",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			id: "payment",
			className: "anchor-offset"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container register-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "stepper rf-stepper",
				"aria-label": "Progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "current",
					"aria-current": "step",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "stepper-dot",
						children: "01"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: [isBn ? "ধাপ ১: শিক্ষার্থীর তথ্য" : "Step 1: Student details"][0] })]
				})
			}), submittedCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rf-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rf-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rf-badge",
							children: "✓"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rf-header-text",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "rf-title",
								children: isBn ? "আবেদন সফলভাবে সম্পন্ন হয়েছে!" : "Application Submitted Successfully!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rf-subtitle",
								children: isBn ? `আপনার রেজিস্ট্রেশন কোড: ${submittedCode}` : `Your Registration Code: ${submittedCode}`
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "rf-divider" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "20px 0",
							textAlign: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontSize: "15px",
								color: "#334155",
								marginBottom: "16px"
							},
							children: isBn ? "আপনার তথ্য ডাটাবেসে সংরক্ষিত হয়েছে এবং WhatsApp চ্যাট খোলা হয়েছে। WhatsApp-এ Send বাটন চেপে আপনার আবেদন পাঠিয়ে দিন।" : "Your details have been saved and WhatsApp chat is opened. Please press Send in WhatsApp to complete your application."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rf-submit-btn",
							style: {
								maxWidth: "300px",
								margin: "0 auto"
							},
							onClick: () => setSubmittedCode(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isBn ? "নতুন ফর্ম পূরণ করুন" : "Fill Another Form" })
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rf-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rf-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rf-badge",
							children: "01"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rf-header-text",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "rf-title",
								children: isBn ? "শিক্ষার্থীর তথ্য (Student details)" : "Student details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rf-subtitle",
								children: isBn ? "* চিহ্নিত ঘরগুলো পূরণ করা আবশ্যক (Fields marked * are required)" : "Fields marked * are required"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "rf-divider" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submitRegistration,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rf-grid",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-full-name",
											children: isBn ? "শিক্ষার্থীর পূর্ণ নাম *" : "Full name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-full-name",
											name: "full_name",
											required: true,
											minLength: 2,
											placeholder: isBn ? "আপনার নাম লিখুন (Enter your name)" : "Enter your name",
											autoComplete: "name"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-mobile",
											children: isBn ? "মোবাইল নম্বর *" : "Mobile number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-mobile",
											name: "mobile_phone",
											required: true,
											type: "tel",
											placeholder: "01XXXXXXXXX",
											autoComplete: "tel"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-whatsapp",
											children: isBn ? "WhatsApp নম্বর" : "WhatsApp number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-whatsapp",
											name: "whatsapp_phone",
											type: "tel",
											placeholder: "01XXXXXXXXX"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-age",
											children: isBn ? "বয়স *" : "Age *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-age",
											name: "age",
											required: true,
											type: "number",
											min: "1",
											max: "120",
											placeholder: isBn ? "বয়স (যেমন: ২৫)" : "Age"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-district",
											children: isBn ? "জেলা *" : "District *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-district",
											name: "district",
											required: true,
											placeholder: isBn ? "আপনার জেলা (Your district)" : "Your district"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-address",
											children: isBn ? "ঠিকানা *" : "Address *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-address",
											name: "address",
											required: true,
											placeholder: isBn ? "এলাকা / ঠিকানা (Area / address)" : "Area / address",
											autoComplete: "street-address"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-class-time",
											children: isBn ? "ক্লাসের সময় *" : "Preferred class time *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rf-select-wrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "rf-class-time",
												name: "preferred_class_time",
												required: true,
												defaultValue: "",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														disabled: true,
														children: isBn ? "একটি নির্বাচন করুন (Select an option)" : "Select an option"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "night_9_10",
														children: isBn ? "রাত ৯টা–১০টা (প্রধান সময়)" : "9:00 PM – 10:00 PM (Main batch)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "afternoon_3_4",
														children: isBn ? "দুপুর ৩টা–৪টা (বিকল্প সময়)" : "3:00 PM – 4:00 PM (Alternative)"
													})
												]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-quran-level",
											children: isBn ? "আপনার কুরআন পড়ার স্তর *" : "Your Qur'an reading level *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rf-select-wrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "rf-quran-level",
												name: "quran_reading",
												required: true,
												defaultValue: "",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														disabled: true,
														children: isBn ? "একটি নির্বাচন করুন (Select an option)" : "Select an option"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "beginner",
														children: isBn ? "একদম নতুন (হরফ চিনি না)" : "Complete beginner (cannot read letters)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "knows_letters",
														children: isBn ? "হরফ চিনি কিন্তু যুক্তবর্ণে সমস্যা" : "Know letters, struggle with connected words"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "hesitant",
														children: isBn ? "আটকে আটকে পড়তে পারি" : "Can read hesitantly"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "fluent",
														children: isBn ? "মোটামুটি পড়তে পারি, সহীহ করতে চাই" : "Can read, want to learn Tajweed"
													})
												]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-source",
											children: isBn ? "কোর্স সম্পর্কে কোথায় জেনেছেন? *" : "How did you hear about us? *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rf-select-wrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "rf-source",
												name: "discovery_source",
												required: true,
												defaultValue: "",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														disabled: true,
														children: isBn ? "একটি নির্বাচন করুন (Select an option)" : "Select an option"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "facebook",
														children: "Facebook"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "whatsapp",
														children: "WhatsApp"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "friend",
														children: isBn ? "বন্ধু বা আত্মীয়ের মাধ্যমে" : "Friend or relative"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "other",
														children: isBn ? "অন্যান্য মাধ্যম" : "Other"
													})
												]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rf-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "rf-motivation",
											children: isBn ? "কেন শিখতে চান? (ঐচ্ছিক)" : "Why do you want to learn? (Optional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "rf-motivation",
											name: "motivation",
											placeholder: isBn ? "যেমন: শুদ্ধভাবে কুরআন তেলাওয়াত শিখতে চাই" : "e.g. Want to recite Qur'an properly"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rf-demo-note",
								children: isBn ? "সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন। Submit করলে তথ্য সংরক্ষণ হবে এবং WhatsApp খুলবে। WhatsApp-এ Send চাপলে আবেদনটি আমাদের কাছে যাবে।" : "Submit to save your details and open WhatsApp. Press Send in WhatsApp to send your application."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "rf-submit-btn",
								disabled: busy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: busy ? isBn ? "জমা হচ্ছে..." : "Submitting..." : isBn ? "আবেদন জমা দিন (Submit)" : "Submit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							}),
							message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "form-error rf-error",
								children: message
							})
						]
					})
				]
			})]
		})]
	}), language);
}
function RegistrationPage() {
	const [language, setLanguage] = useLanguage();
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
	}["VITE_WHATSAPP_NUMBER"] || "01875343476";
	const contactPhone = "+8801875343476";
	({
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
	})["VITE_EMAIL"];
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
	`${whatsappNumber.replace(/[^0-9]/g, "")}`;
	(0, import_react.useEffect)(() => {
		document.title = language === "bn" ? "ভর্তি রেজিস্ট্রেশন | অনলাইন মহিলা মাদরাসা" : "Admission Registration | Online Women's Madrasa";
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [language]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setHeaderScrolled(window.scrollY > 30);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return localizeNode(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell registration-page-shell",
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
								href: facebookPage,
								target: "_blank",
								rel: "noreferrer",
								className: "top-strip-link top-strip-fb",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 12 }), " Facebook"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: `site-header reg-header ${headerScrolled ? "header-scrolled" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container header-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "brand",
						"aria-label": "হোমপেজে ফিরে যান",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "brand-logo",
							src: online_women_madrasah_logo_default,
							alt: "অনলাইন মহিলা মাদরাসার লোগো"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "brand-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "অনলাইন মহিলা মাদরাসা" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "আলোর পথে ইলমের যাত্রা" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "button button-outline back-home-btn",
							"aria-label": language === "bn" ? "হোমে ফিরে যান" : "Back to home",
							title: language === "bn" ? "হোমে ফিরে যান" : "Back to home",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 15 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "back-home-text",
									children: language === "bn" ? "হোমে ফিরে যান" : "Back to home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "back-home-short",
									children: language === "bn" ? "হোম" : "Home"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "language-switch",
							role: "group",
							"aria-label": language === "bn" ? "ভাষা নির্বাচন" : "Select language",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: language === "bn" ? "active" : "",
								"aria-pressed": language === "bn",
								onClick: () => setLanguage("bn"),
								children: "বাংলা"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: language === "en" ? "active" : "",
								"aria-pressed": language === "en",
								onClick: () => setLanguage("en"),
								children: "English"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "register-main-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationSection, { language })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "site-footer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container footer-bottom",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" নূর অনলাইন মহিলা মাদরাসা। সর্বস্বত্ব সংরক্ষিত।"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							language === "bn" ? "নির্মাণ ও পরিচালনায়" : "Designed & Developed by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://innovative.com.bd/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "font-bold underline underline-offset-4 hover:opacity-80 transition-opacity",
								children: "Innovative Technology and Engineering"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "footer-nav-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
										size: 13,
										className: "footer-icon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "হোম" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/#courses",
									className: "footer-nav-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
										size: 13,
										className: "footer-icon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "কোর্সসমূহ" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/#fees",
									className: "footer-nav-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
										size: 13,
										className: "footer-icon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "কোর্স ফি" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/#faq",
									className: "footer-nav-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
										size: 13,
										className: "footer-icon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "জিজ্ঞাসা" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/#contact",
									className: "footer-nav-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										size: 13,
										className: "footer-icon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "যোগাযোগ" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: facebookPage,
									target: "_blank",
									rel: "noreferrer",
									className: "footer-nav-link footer-social-facebook",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
										size: 13,
										className: "footer-icon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Facebook Page" })]
								})
							]
						})
					]
				})
			})
		]
	}), language);
}
//#endregion
export { RegistrationPage as component };
