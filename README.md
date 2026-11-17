# নূর অনলাইন মহিলা মাদরাসা

নারীদের জন্য অনলাইন কুরআন ও ইসলামী শিক্ষা বিষয়ক responsive ওয়েবসাইট। এটি TanStack Start, React, TypeScript এবং Tailwind CSS v4 দিয়ে তৈরি।

## লোকালি চালু করুন

প্রয়োজন: Node.js 20+ এবং npm।

```sh
npm install
npm run dev
```

ডেভেলপমেন্ট সার্ভার চালু হলে টার্মিনালে দেখানো local URL ব্রাউজারে খুলুন।

## Build ও পরীক্ষা

```sh
npm run build
npm run test
npm run lint
```

## প্রকাশের আগে যা যোগ করতে হবে

- `src/routes/index.tsx`-এর contact অংশে প্রতিষ্ঠানের আসল ইমেইল/ফোন/WhatsApp নম্বর যুক্ত করুন। বর্তমানে ইমেইল CTA-তে প্রাপকের ঠিকানা নির্দিষ্ট করা নেই।
- কোর্সের নাম, ক্লাসের সময়, ফি, শিক্ষিকার পরিচয় ও ভর্তি-সংক্রান্ত তথ্য প্রতিষ্ঠানের নিশ্চিত তথ্য দিয়ে যাচাই করুন।
- `src/assets/online-women-madrasah-logo.png`-এ দেওয়া লোগোটি header ও footer-এ ব্যবহৃত হয়েছে।
- Header-এর ভাষা নির্বাচক দিয়ে পুরো landing page বাংলা ও English-এ দেখা যায়।
- Registration ও payment submission Supabase-এ ডেটা পাঠায়। চালাতে hosting environment-এ প্রয়োজনীয় Supabase environment variables সেট করুন।

## Project structure

- `src/routes/index.tsx` — মূল landing page
- `src/routes/__root.tsx` — app shell, metadata ও favicon
- `src/styles.css` — responsive design system ও page styles
- `src/assets/` — website imagery
- `public/favicon.svg` — website favicon

## PDF অনুযায়ী যুক্ত করা ফিচার ও সেটআপ

- Landing page-এ ১৫টি Section-এর বিষয়বস্তু, কোর্সের পাঠ্যসূচি, প্রত্যাশিত অর্জন, ক্লাসের সময়, ফি, পরীক্ষা/পুরস্কার, শিক্ষিকা ও মতামতের জন্য স্থান যোগ করা হয়েছে। সম্পূর্ণ পেজ বাংলা ও English-এ উপলভ্য।
- Registration form এবং payment reference submission Supabase-এ ডেটা পাঠায়।
- `/admin` পেজে Supabase Auth দিয়ে লগইন করে রেজিস্ট্রেশন, পেমেন্ট ও ভর্তি অবস্থা দেখা/পরিবর্তন করা যায়।
- `drizzle/migrations/0000_create_madrasa_enrollment_records.sql` এবং `0001_admin_dashboard_policies.sql` Supabase SQL Editor-এ ক্রমানুসারে চালাতে হবে।
- `.env.example` কপি করে `.env` বানিয়ে `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_WHATSAPP_NUMBER` এবং `VITE_FACEBOOK_PAGE`-এ আসল তথ্য বসাতে হবে।
- Admin ব্যবহারকারীর Supabase Auth `app_metadata`-তে trusted server/dashboard থেকে `{"role":"admin"}` সেট করতে হবে। Browser থেকে user metadata দিয়ে admin role দেওয়া যাবে না।
- বাস্তব bKash/Nagad merchant number, শিক্ষিকার নাম/যোগ্যতা, প্রতিষ্ঠানের ফোন/WhatsApp, আসল লোগো, Zoom/WhatsApp group link এবং বাস্তব শিক্ষার্থী রিভিউ PDF-এ/প্রজেক্টে দেওয়া নেই। এগুলো নিশ্চিত তথ্য ছাড়া বানিয়ে দেওয়া হয়নি।
- এই সংস্করণে bKash/Nagad gateway auto-charge নেই; শিক্ষার্থী manual payment করে Transaction ID জমা দেয়, admin যাচাই করে status পরিবর্তন করেন। Automated merchant checkout চাইলে merchant gateway credentials/API ও server-side integration লাগবে।
- Confirmation screen রেজিস্ট্রেশন ও payment submission-এর পর দেখানো হয়; payment যাচাইয়ের পর admin dashboard থেকে ভর্তি confirmed করতে হবে।
