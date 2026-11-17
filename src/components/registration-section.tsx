import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "../integrations/supabase/client";
import { localizeNode, type Language } from "../lib/i18n";

export function RegistrationSection({ language }: { language: Language }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const isBn = language === "bn";

  // WhatsApp number to receive applications
  const rawWhatsapp =
    (import.meta.env["VITE_WHATSAPP_NUMBER"] as string | undefined) || "+8801875343476";
  const whatsappNumber = rawWhatsapp.replace(/[^0-9]/g, "");

  async function submitRegistration(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setMessage("");

    try {
      const f = new FormData(e.currentTarget);
      const id = crypto.randomUUID();
      const code = "OWM-" + Date.now().toString().slice(-8);
      const motivationVal = String(
        f.get("motivation") ||
          (isBn ? "অনলাইন মহিলা মাদরাসায় কুরআন শিক্ষা" : "Quran study at Online Women Madrasah"),
      );

      const fullName = String(f.get("full_name") || "");
      const mobilePhone = String(f.get("mobile_phone") || "");
      const whatsappPhone = String(f.get("whatsapp_phone") || mobilePhone);
      const age = Number(f.get("age")) || 0;
      const district = String(f.get("district") || "");
      const address = String(f.get("address") || "");
      const preferredTime = String(f.get("preferred_class_time") || "");
      const quranReading = String(f.get("quran_reading") || "");
      const discoverySource = String(f.get("discovery_source") || "");

      // 1. Supabase-এ সংরক্ষণ করার চেষ্টা করা (যদি সঠিক URL/Key কনফিগার করা থাকে)
      const supabaseUrl = (import.meta.env["VITE_SUPABASE_URL"] as string | undefined) || "";
      const isPlaceholderSupabase =
        !supabaseUrl || supabaseUrl.includes("YOUR_PROJECT") || supabaseUrl.includes("example.com");

      if (!isPlaceholderSupabase) {
        try {
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
            course_fee: 2500,
          });

          if (error) {
            console.warn("Supabase insert notification:", error.message || error);
          }
        } catch (dbErr) {
          console.warn("Database connection issue (proceeding to WhatsApp):", dbErr);
        }
      }

      // 2. লোকাল ব্যাকআপ সংরক্ষণ (যাতে অফলাইন বা লোকালহোস্টে কোনো আবেদন হারিয়ে না যায়)
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
          created_at: new Date().toISOString(),
        });
        localStorage.setItem("owm_student_registrations", JSON.stringify(localList));
      } catch {
        /* ignore localStorage quota/disabled */
      }

      const classTimeLabels: Record<string, string> = {
        night_9_10: "রাত ৯টা–১০টা (প্রধান সময়)",
        afternoon_3_4: "দুপুর ৩টা–৪টা (বিকল্প সময়)",
      };
      const quranLabels: Record<string, string> = {
        beginner: "একদম নতুন (হরফ চিনি না)",
        knows_letters: "হরফ চিনি কিন্তু যুক্তবর্ণে সমস্যা",
        hesitant: "আটকে আটকে পড়তে পারি",
        fluent: "মোটামুটি পড়তে পারি, সহীহ করতে চাই",
      };
      const sourceLabels: Record<string, string> = {
        facebook: "Facebook",
        whatsapp: "WhatsApp",
        friend: "বন্ধু বা আত্মীয়ের মাধ্যমে",
        other: "অন্যান্য মাধ্যম",
      };

      const whatsappLines = [
        "🌸 নতুন শিক্ষার্থী ভর্তি আবেদন 🌸",
        `রেজিস্ট্রেশন কোড: ${code}`,
        `শিক্ষার্থীর নাম: ${fullName}`,
        `মোবাইল নম্বর: ${mobilePhone}`,
        `WhatsApp নম্বর: ${whatsappPhone}`,
        `বয়স: ${age}`,
        `জেলা: ${district}`,
        `ঠিকানা: ${address}`,
        `ক্লাসের সময়: ${classTimeLabels[preferredTime] || preferredTime}`,
        `কুরআন পড়ার স্তর: ${quranLabels[quranReading] || quranReading}`,
        `কোর্স সম্পর্কে জেনেছেন: ${sourceLabels[discoverySource] || discoverySource}`,
        `কেন শিখতে চান: ${motivationVal}`,
      ];

      setSubmittedCode(code);

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappLines.join("\n"))}`;
      window.location.href = whatsappUrl;
    } catch (err) {
      setMessage(
        err instanceof Error
          ? err.message
          : isBn
            ? "রেজিস্ট্রেশন জমা দেওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"
            : "Registration could not be submitted. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  const steps = [isBn ? "ধাপ ১: শিক্ষার্থীর তথ্য" : "Step 1: Student details"];

  return localizeNode(
    <section className="section-pad registration-section" id="registration">
      <span id="payment" className="anchor-offset" />
      <div className="container register-wrap">
        {/* ধাপ সূচক */}
        <ol className="stepper rf-stepper" aria-label="Progress">
          <li className="current" aria-current="step">
            <span className="stepper-dot">01</span>
            <span>{steps[0]}</span>
          </li>
        </ol>

        {submittedCode ? (
          <div className="rf-card">
            <div className="rf-header">
              <div className="rf-badge">✓</div>
              <div className="rf-header-text">
                <h2 className="rf-title">
                  {isBn ? "আবেদন সফলভাবে সম্পন্ন হয়েছে!" : "Application Submitted Successfully!"}
                </h2>
                <p className="rf-subtitle">
                  {isBn
                    ? `আপনার রেজিস্ট্রেশন কোড: ${submittedCode}`
                    : `Your Registration Code: ${submittedCode}`}
                </p>
              </div>
            </div>
            <hr className="rf-divider" />
            <div style={{ padding: "20px 0", textAlign: "center" }}>
              <p style={{ fontSize: "15px", color: "#334155", marginBottom: "16px" }}>
                {isBn
                  ? "আপনার তথ্য ডাটাবেসে সংরক্ষিত হয়েছে এবং WhatsApp চ্যাট খোলা হয়েছে। WhatsApp-এ Send বাটন চেপে আপনার আবেদন পাঠিয়ে দিন।"
                  : "Your details have been saved and WhatsApp chat is opened. Please press Send in WhatsApp to complete your application."}
              </p>
              <button
                type="button"
                className="rf-submit-btn"
                style={{ maxWidth: "300px", margin: "0 auto" }}
                onClick={() => setSubmittedCode(null)}
              >
                <span>{isBn ? "নতুন ফর্ম পূরণ করুন" : "Fill Another Form"}</span>
              </button>
            </div>
          </div>
        ) : (
          /* ধাপ ১: শিক্ষার্থীর তথ্য ফর্ম */
          <div className="rf-card">
            <div className="rf-header">
              <div className="rf-badge">01</div>
              <div className="rf-header-text">
                <h2 className="rf-title">
                  {isBn ? "শিক্ষার্থীর তথ্য (Student details)" : "Student details"}
                </h2>
                <p className="rf-subtitle">
                  {isBn
                    ? "* চিহ্নিত ঘরগুলো পূরণ করা আবশ্যক (Fields marked * are required)"
                    : "Fields marked * are required"}
                </p>
              </div>
            </div>

            <hr className="rf-divider" />

            <form onSubmit={submitRegistration}>
              <div className="rf-grid">
                {/* Row 1: Full name & Mobile number */}
                <div className="rf-field">
                  <label htmlFor="rf-full-name">
                    {isBn ? "শিক্ষার্থীর পূর্ণ নাম *" : "Full name *"}
                  </label>
                  <input
                    id="rf-full-name"
                    name="full_name"
                    required
                    minLength={2}
                    placeholder={isBn ? "আপনার নাম লিখুন (Enter your name)" : "Enter your name"}
                    autoComplete="name"
                  />
                </div>

                <div className="rf-field">
                  <label htmlFor="rf-mobile">{isBn ? "মোবাইল নম্বর *" : "Mobile number *"}</label>
                  <input
                    id="rf-mobile"
                    name="mobile_phone"
                    required
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    autoComplete="tel"
                  />
                </div>

                {/* Row 2: WhatsApp number & Age */}
                <div className="rf-field">
                  <label htmlFor="rf-whatsapp">{isBn ? "WhatsApp নম্বর" : "WhatsApp number"}</label>
                  <input
                    id="rf-whatsapp"
                    name="whatsapp_phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                  />
                </div>

                <div className="rf-field">
                  <label htmlFor="rf-age">{isBn ? "বয়স *" : "Age *"}</label>
                  <input
                    id="rf-age"
                    name="age"
                    required
                    type="number"
                    min="1"
                    max="120"
                    placeholder={isBn ? "বয়স (যেমন: ২৫)" : "Age"}
                  />
                </div>

                {/* Row 3: District & Address */}
                <div className="rf-field">
                  <label htmlFor="rf-district">{isBn ? "জেলা *" : "District *"}</label>
                  <input
                    id="rf-district"
                    name="district"
                    required
                    placeholder={isBn ? "আপনার জেলা (Your district)" : "Your district"}
                  />
                </div>

                <div className="rf-field">
                  <label htmlFor="rf-address">{isBn ? "ঠিকানা *" : "Address *"}</label>
                  <input
                    id="rf-address"
                    name="address"
                    required
                    placeholder={isBn ? "এলাকা / ঠিকানা (Area / address)" : "Area / address"}
                    autoComplete="street-address"
                  />
                </div>

                {/* Row 4: Preferred class time & Quran reading level */}
                <div className="rf-field">
                  <label htmlFor="rf-class-time">
                    {isBn ? "ক্লাসের সময় *" : "Preferred class time *"}
                  </label>
                  <div className="rf-select-wrap">
                    <select id="rf-class-time" name="preferred_class_time" required defaultValue="">
                      <option value="" disabled>
                        {isBn ? "একটি নির্বাচন করুন (Select an option)" : "Select an option"}
                      </option>
                      <option value="night_9_10">
                        {isBn ? "রাত ৯টা–১০টা (প্রধান সময়)" : "9:00 PM – 10:00 PM (Main batch)"}
                      </option>
                      <option value="afternoon_3_4">
                        {isBn ? "দুপুর ৩টা–৪টা (বিকল্প সময়)" : "3:00 PM – 4:00 PM (Alternative)"}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="rf-field">
                  <label htmlFor="rf-quran-level">
                    {isBn ? "আপনার কুরআন পড়ার স্তর *" : "Your Qur'an reading level *"}
                  </label>
                  <div className="rf-select-wrap">
                    <select id="rf-quran-level" name="quran_reading" required defaultValue="">
                      <option value="" disabled>
                        {isBn ? "একটি নির্বাচন করুন (Select an option)" : "Select an option"}
                      </option>
                      <option value="beginner">
                        {isBn
                          ? "একদম নতুন (হরফ চিনি না)"
                          : "Complete beginner (cannot read letters)"}
                      </option>
                      <option value="knows_letters">
                        {isBn
                          ? "হরফ চিনি কিন্তু যুক্তবর্ণে সমস্যা"
                          : "Know letters, struggle with connected words"}
                      </option>
                      <option value="hesitant">
                        {isBn ? "আটকে আটকে পড়তে পারি" : "Can read hesitantly"}
                      </option>
                      <option value="fluent">
                        {isBn
                          ? "মোটামুটি পড়তে পারি, সহীহ করতে চাই"
                          : "Can read, want to learn Tajweed"}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Discovery source & Motivation */}
                <div className="rf-field">
                  <label htmlFor="rf-source">
                    {isBn ? "কোর্স সম্পর্কে কোথায় জেনেছেন? *" : "How did you hear about us? *"}
                  </label>
                  <div className="rf-select-wrap">
                    <select id="rf-source" name="discovery_source" required defaultValue="">
                      <option value="" disabled>
                        {isBn ? "একটি নির্বাচন করুন (Select an option)" : "Select an option"}
                      </option>
                      <option value="facebook">Facebook</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="friend">
                        {isBn ? "বন্ধু বা আত্মীয়ের মাধ্যমে" : "Friend or relative"}
                      </option>
                      <option value="other">{isBn ? "অন্যান্য মাধ্যম" : "Other"}</option>
                    </select>
                  </div>
                </div>

                <div className="rf-field">
                  <label htmlFor="rf-motivation">
                    {isBn ? "কেন শিখতে চান? (ঐচ্ছিক)" : "Why do you want to learn? (Optional)"}
                  </label>
                  <input
                    id="rf-motivation"
                    name="motivation"
                    placeholder={
                      isBn
                        ? "যেমন: শুদ্ধভাবে কুরআন তেলাওয়াত শিখতে চাই"
                        : "e.g. Want to recite Qur'an properly"
                    }
                  />
                </div>
              </div>

              <p className="rf-demo-note">
                {isBn
                  ? "সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন। Submit করলে তথ্য সংরক্ষণ হবে এবং WhatsApp খুলবে। WhatsApp-এ Send চাপলে আবেদনটি আমাদের কাছে যাবে।"
                  : "Submit to save your details and open WhatsApp. Press Send in WhatsApp to send your application."}
              </p>

              <button type="submit" className="rf-submit-btn" disabled={busy}>
                <span>
                  {busy
                    ? isBn
                      ? "জমা হচ্ছে..."
                      : "Submitting..."
                    : isBn
                      ? "আবেদন জমা দিন (Submit)"
                      : "Submit"}
                </span>
                <ArrowRight size={18} />
              </button>

              {message && (
                <p role="alert" className="form-error rf-error">
                  {message}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>,
    language,
  );
}
