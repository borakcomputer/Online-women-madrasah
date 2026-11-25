import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-fsrELmQG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DlRw2Rks.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [user, setUser] = (0, import_react.useState)("");
	const [rows, setRows] = (0, import_react.useState)([]);
	const [payments, setPayments] = (0, import_react.useState)([]);
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function load() {
		setLoading(true);
		setMessage("");
		try {
			const { data: { user } } = await supabase.auth.getUser();
			if (!user) {
				setUser("");
				return;
			}
			setUser(user.email || "admin");
			const [{ data: students, error: e1 }, { data: paymentRows, error: e2 }] = await Promise.all([supabase.from("student_registrations").select("*").order("created_at", { ascending: false }), supabase.from("payment_submissions").select("*").order("created_at", { ascending: false })]);
			if (e1) throw e1;
			if (e2) throw e2;
			setRows(students || []);
			setPayments(paymentRows || []);
		} catch (e) {
			setMessage(e instanceof Error ? e.message : "ড্যাশবোর্ড লোড করা যায়নি। Admin role/RLS পরীক্ষা করুন।");
		} finally {
			setLoading(false);
		}
	}
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	async function signIn(e) {
		e.preventDefault();
		setLoading(true);
		setMessage("");
		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) throw error;
			await load();
		} catch (e) {
			setMessage(e instanceof Error ? e.message : "লগইন ব্যর্থ হয়েছে।");
		} finally {
			setLoading(false);
		}
	}
	async function update(id, field, value) {
		setMessage("");
		const { error } = await supabase.from("student_registrations").update({ [field]: value }).eq("id", id);
		if (error) {
			setMessage(error.message);
			return;
		}
		await load();
	}
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "admin-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "registration-form",
			onSubmit: signIn,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Admin Dashboard Login" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					required: true
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					value: password,
					onChange: (e) => setPassword(e.target.value),
					required: true
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "button button-primary",
					disabled: loading,
					children: "লগইন করুন"
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					children: message
				})
			]
		})
	});
	const paid = rows.filter((r) => r.payment_status === "paid").length;
	const pending = rows.filter((r) => r.payment_status !== "paid").length;
	const confirmed = rows.filter((r) => r.enrollment_status === "confirmed").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "admin-page container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "section-kicker",
						children: "Online Women Madrasah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Admin Dashboard" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: user })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "button button-outline",
					onClick: async () => {
						await supabase.auth.signOut();
						setUser("");
					},
					children: "Logout"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: rows.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "মোট রেজিস্ট্রেশন" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: paid }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "পেমেন্ট সম্পন্ন" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: pending }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "পেমেন্ট বাকি/যাচাই" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: confirmed }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ভর্তি নিশ্চিত" })] })
				]
			}),
			message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				children: message
			}),
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "লোড হচ্ছে…" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "শিক্ষার্থীদের তালিকা" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-table-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "admin-table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "রেজি. নম্বর" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "নাম ও যোগাযোগ" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "জেলা" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "পেমেন্ট" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "ভর্তি" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.registration_code }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [r.full_name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
							r.mobile_phone,
							" · WhatsApp ",
							r.whatsapp_phone
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.district }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: r.payment_status,
							onChange: (e) => void update(r.id, "payment_status", e.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "awaiting_payment",
									children: "পেমেন্ট বাকি"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "under_review",
									children: "যাচাই চলছে"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "paid",
									children: "পরিশোধিত"
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: r.enrollment_status,
							onChange: (e) => void update(r.id, "enrollment_status", e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pending",
								children: "অপেক্ষমাণ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "confirmed",
								children: "নিশ্চিত"
							})]
						}) })
					] }, r.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "জমা দেওয়া পেমেন্ট" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-table-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "admin-table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "মাধ্যম" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "প্রেরকের নম্বর" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Transaction ID" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "টাকা" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "সময়" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: payments.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.payment_method }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.sender_mobile }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.transaction_id }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: ["৳", p.amount] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: new Date(p.created_at).toLocaleString("bn-BD") })
					] }, p.id)) })]
				})
			})
		]
	});
}
//#endregion
export { AdminPage as component };
