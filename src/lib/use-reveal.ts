import { useEffect } from "react";

// স্ক্রল বা পেজ লোডের সময় সেকশন ও কার্ডগুলো মসৃণ অ্যানিমেশনে দৃশ্যমান হয়
const SELECTOR =
  ".section-heading, .course-card, .benefit-item, .step, .faq-item, .intro-copy, .intro-image, .contact-card, .contact-item-card, .contact-banner-card, .importance-photo, .importance-copy, .photo-frame, .curriculum-extra .course-card, .teacher-card, .reg-help-card, .highlight-pill, .rf-card, .rf-stepper, .register-heading, .why-feature-card, .why-us-visual, .why-us-copy";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll<HTMLElement>(SELECTOR);
    elements.forEach((el, i) => {
      el.classList.add("reveal");
      const delay = (i % 4) * 90;
      el.style.setProperty("--reveal-delay", `${delay}ms`);

      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        // স্ক্রিনে ইতিমধ্যে থাকলে মসৃণ ট্রানজিশনে দেখাও
        setTimeout(() => {
          el.classList.add("is-visible");
        }, delay + 40);
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);
}
