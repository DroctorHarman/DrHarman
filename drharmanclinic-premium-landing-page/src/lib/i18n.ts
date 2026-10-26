export type Lang = "en" | "ar" | "ku";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ku", label: "کوردی" },
  { code: "ar", label: "عربي" },
];

export const isRtl = (lang: Lang) => lang !== "en";

type Dict = {
  nav: { about: string; services: string; hours: string; book: string; contact: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    call: string;
    stat1: string;
    stat1label: string;
    stat2: string;
    stat2label: string;
    stat3: string;
    stat3label: string;
  };
  about: { title: string; lead: string; body: string; creds: string[] };
  services: { title: string; lead: string; items: Record<string, { title: string; desc: string }> };
  hours: { title: string; lead: string; closed: string; address: string; addressValue: string; directions: string };
  book: {
    title: string;
    lead: string;
    name: string;
    phone: string;
    city: string;
    service: string;
    date: string;
    time: string;
    notes: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    emergency: string;
  };
  contact: { title: string; lead: string; name: string; contact: string; message: string; send: string; sent: string };
  footer: { rights: string; disclaimer: string };
};

const services = {
  en: {
    laparoscopy: { title: "Laparoscopic Surgery", desc: "Minimally invasive keyhole surgery with faster recovery and smaller scars." },
    gallbladder: { title: "Gallbladder & Bile Duct", desc: "Gallstones, cholecystitis and laparoscopic cholecystectomy." },
    hernia: { title: "Hernia Repair", desc: "All hernia types repaired openly or laparoscopically with mesh." },
    thyroid: { title: "Thyroid & Parathyroid", desc: "Goitre, nodules, hyperthyroidism, total thyroidectomy and parathyroid surgery." },
    breast: { title: "Breast Surgery", desc: "Early breast-cancer detection, lumps, mastectomy and axillary clearance." },
    colorectal: { title: "Colorectal & Laser Proctology", desc: "Piles, fistula, fissure and pilonidal sinus treated with modern laser techniques." },
    gi: { title: "GI & Oncologic Surgery", desc: "Oesophagus, stomach, bowel, pancreas, colon and liver tumours." },
    bariatric: { title: "Weight-Loss Surgery", desc: "Laparoscopic sleeve gastrectomy and gastric banding for obesity." },
    wounds: { title: "Wound Care", desc: "Acute and chronic wounds, diabetic foot and pressure ulcers." },
    skin: { title: "Skin & Soft Tissue", desc: "Diagnosis and removal of skin lumps, cysts, lipomas and tumours." },
  },
  ku: {
    laparoscopy: { title: "نەشتەرگەری بە نازوور", desc: "نەشتەرگەری کەم ئازار بە کونی بچووک، چاکبوونەوەی خێراتر." },
    gallbladder: { title: "تورەگەی زەرداو", desc: "بەردی زەرداو، هەوکردن و هەڵگرتنی تورەگە بە نازوور." },
    hernia: { title: "چارەسەری فتق", desc: "هەموو جۆرە فتقێک بە نازوور یان بە شێوازی ئاسایی." },
    thyroid: { title: "ڕژێنی دەرەقی", desc: "گرێ، تەمبەڵی و ژەهراویبوون، هەڵگرتنی تەواوی ڕژێنی دەرەقی." },
    breast: { title: "نەشتەرگەری مەمک", desc: "دەستنیشانکردنی زووی شێرپەنجەی مەمک و خاوێنکردنەوەی بن کەوش." },
    colorectal: { title: "چارەسەری ڕیخۆڵەی کۆتایی بە لەیزەر", desc: "بەواسیر، ناسوور، درزی قوون و کیسەی مووینە بە لەیزەر." },
    gi: { title: "نەشتەرگەری گەدە و ڕیخۆڵە", desc: "گرێ و شێرپەنجەی گەدە، ڕیخۆڵە، پانکریاس، کۆڵۆن و جگەر." },
    bariatric: { title: "چارەسەری قەڵەوی", desc: "بچووککردنەوەی گەدە و بەستنی گەدە بە نازوور." },
    wounds: { title: "چاودێری برین", desc: "برینی نوێ و درێژخایەن، پێی شەکرە و برینی سەرجێ." },
    skin: { title: "پێست و شانەی نەرم", desc: "دەستنیشانکردن و لابردنی گرێ، کیسە و شێرپەنجەی پێست." },
  },
  ar: {
    laparoscopy: { title: "الجراحة التنظيرية", desc: "جراحة بالمنظار بجروح صغيرة وشفاء أسرع." },
    gallbladder: { title: "المرارة والقناة الصفراوية", desc: "حصوات المرارة والالتهابات ورفع المرارة بالناظور." },
    hernia: { title: "إصلاح الفتوق", desc: "جميع أنواع الفتوق بالناظور أو بالطريقة المفتوحة." },
    thyroid: { title: "الغدة الدرقية والجنبدرقية", desc: "الأورام، الكسل والانسمام، رفع الغدة كاملة." },
    breast: { title: "جراحة الثدي", desc: "التشخيص المبكر لسرطان الثدي ورفع الثدي وتنظيف الإبط." },
    colorectal: { title: "جراحة الشرج بالليزر", desc: "البواسير، الناسور، الشقوق والناسور العصعصي بالليزر." },
    gi: { title: "جراحة الجهاز الهضمي والأورام", desc: "المريء، المعدة، الأمعاء، البنكرياس، القولون والكبد." },
    bariatric: { title: "علاج السمنة", desc: "تصغير المعدة وربط المعدة بالناظور." },
    wounds: { title: "العناية بالجروح", desc: "الجروح الحادة والمزمنة، القدم السكري وقرحة الفراش." },
    skin: { title: "الجلد والأنسجة الرخوة", desc: "تشخيص ورفع الأورام والأكياس الجلدية." },
  },
};

export const dict: Record<Lang, Dict> = {
  en: {
    nav: { about: "About", services: "Services", hours: "Hours", book: "Book", contact: "Contact" },
    hero: {
      badge: "Specialist General & Laparoscopic Surgeon — Erbil",
      title: "Dr. Harman Saber Nanekeli's Clinic",
      subtitle:
        "Board-certified general surgery with a focus on minimally invasive (keyhole) procedures, thyroid, breast, hernia and laser proctology care in Erbil, Kurdistan Region of Iraq.",
      cta: "Book an appointment",
      call: "Call the clinic",
      stat1: "15+",
      stat1label: "Years of surgical practice",
      stat2: "10",
      stat2label: "Core surgical services",
      stat3: "6",
      stat3label: "Clinic days per week",
    },
    about: {
      title: "About the doctor",
      lead: "Dr. Harman Saber Nanekeli — Specialist General Surgeon",
      body:
        "Dr. Harman holds a Bachelor of Medicine and Surgery from Erbil and an Iraqi Board (doctorate) in General Surgery from Baghdad. He is a fellow of the Iraqi Council for Medical Specialties and practises the full spectrum of general surgery, with particular expertise in laparoscopic procedures, endocrine surgery and laser treatment of anorectal disease. He continues to train internationally, most recently completing a course on the use of laser in rectal disease and surgery in Egypt.",
      creds: [
        "MBChB — Medicine & General Surgery, Erbil",
        "Iraqi Board (Doctorate) in General Surgery, Baghdad",
        "Fellow, Iraqi Council for Medical Specialties",
        "Advanced laser proctology training (Egypt)",
      ],
    },
    services: { title: "Surgical services", lead: "Diagnosis, consultation and surgery across general and laparoscopic surgery.", items: services.en },
    hours: {
      title: "Clinic hours & location",
      lead: "Walk-in consultations are available, but booking ahead reduces waiting.",
      closed: "Closed",
      address: "Address",
      addressValue: "Erbil, Koya Street — inside CMC Private Hospital, Kurdistan Region, Iraq",
      directions: "Open in Google Maps",
    },
    book: {
      title: "Request an appointment",
      lead: "Fill the form and the clinic will confirm your slot by phone.",
      name: "Full name",
      phone: "Phone number",
      city: "City",
      service: "Service needed",
      date: "Preferred date",
      time: "Preferred time",
      notes: "Describe your condition (optional)",
      submit: "Send request",
      sending: "Sending…",
      success: "Thank you. Your request was received — the clinic will call you to confirm.",
      error: "Something went wrong. Please call the clinic instead.",
      required: "Please fill in your name, phone and service.",
      emergency: "For emergencies, go to the nearest hospital or call the clinic directly.",
    },
    contact: { title: "Send a message", lead: "Questions about a procedure, report or follow-up?", name: "Your name", contact: "Phone or email", message: "Message", send: "Send message", sent: "Message sent. Thank you!" },
    footer: { rights: "All rights reserved.", disclaimer: "This website is for information only and does not replace a medical consultation." },
  },
  ku: {
    nav: { about: "دەربارە", services: "خزمەتگوزاری", hours: "کاتژمێر", book: "نۆرە", contact: "پەیوەندی" },
    hero: {
      badge: "پسپۆڕی نەشتەرگەری گشتی و نازووری — هەولێر",
      title: "نۆرینگەی د. هەرمان صابر نانەکەلی",
      subtitle:
        "پسپۆڕی نەشتەرگەری گشتی و نەشتەرگەری بە نازوور، ڕژێنی دەرەقی، مەمک، فتق و چارەسەری بە لەیزەر لە هەولێر، هەرێمی کوردستان.",
      cta: "نۆرە بگرە",
      call: "پەیوەندی بە نۆرینگە",
      stat1: "+١٥",
      stat1label: "ساڵ ئەزموونی نەشتەرگەری",
      stat2: "١٠",
      stat2label: "خزمەتگوزاری سەرەکی",
      stat3: "٦",
      stat3label: "ڕۆژی کارکردن لە هەفتەدا",
    },
    about: {
      title: "دەربارەی دکتۆر",
      lead: "د. هەرمان صابر نانەکەلی — پسپۆڕی نەشتەرگەری گشتی",
      body:
        "بەکالۆریۆس لە پزیشکی و نەشتەرگەری گشتی - هەولێر، بۆرد (دکتۆرا) لە نەشتەرگەری گشتی - بەغداد، هاوەڵی ئەنجوومەنی عێراقی بۆ پسپۆڕییە پزیشکییەکان. پسپۆڕ لە نەشتەرگەری بە نازوور، ڕژێنەکان و چارەسەری نەخۆشییەکانی قوون بە لەیزەر.",
      creds: [
        "بەکالۆریۆس لە پزیشکی و نەشتەرگەری - هەولێر",
        "بۆرد (دکتۆرا) لە نەشتەرگەری گشتی - بەغداد",
        "هاوەڵی ئەنجوومەنی عێراقی بۆ پسپۆڕییە پزیشکییەکان",
        "خولی بەکارهێنانی لەیزەر لە نەشتەرگەری ڕیخۆڵەی کۆتایی - میسر",
      ],
    },
    services: { title: "خزمەتگوزارییەکان", lead: "پشکنین، ڕاوێژ و نەشتەرگەری لە بواری نەشتەرگەری گشتی و نازووری.", items: services.ku },
    hours: {
      title: "کاتژمێری کارکردن و شوێن",
      lead: "دەتوانیت ڕاستەوخۆ سەردانمان بکەیت، بەڵام گرتنی نۆرە چاوەڕوانی کەم دەکاتەوە.",
      closed: "داخراوە",
      address: "ناونیشان",
      addressValue: "هەولێر، شەقامی کۆیە — لەناو نەخۆشخانەی تایبەتی CMC",
      directions: "کردنەوە لە گووگڵ مەپ",
    },
    book: {
      title: "داواکردنی نۆرە",
      lead: "فۆڕمەکە پڕ بکەرەوە، نۆرینگە پەیوەندیت پێوە دەکات بۆ دڵنیاکردنەوە.",
      name: "ناوی تەواو",
      phone: "ژمارەی مۆبایل",
      city: "شار",
      service: "جۆری خزمەتگوزاری",
      date: "ڕێکەوتی دڵخواز",
      time: "کاتی دڵخواز",
      notes: "باسی دۆخەکەت بکە (ئارەزوومەندانە)",
      submit: "ناردن",
      sending: "دەنێردرێت…",
      success: "سوپاس. داواکارییەکەت وەرگیرا — پەیوەندیت پێوە دەکەین.",
      error: "هەڵەیەک ڕوویدا. تکایە پەیوەندی بە نۆرینگە بکە.",
      required: "تکایە ناو، ژمارە و خزمەتگوزاری پڕ بکەرەوە.",
      emergency: "لە کاتی فریاگوزاریدا ڕاستەوخۆ سەردانی نزیکترین نەخۆشخانە بکە.",
    },
    contact: { title: "نامە بنێرە", lead: "پرسیارت هەیە دەربارەی نەشتەرگەری یان ئەنجامی تاقیگە؟", name: "ناو", contact: "ژمارە یان ئیمەیل", message: "نامە", send: "ناردنی نامە", sent: "نامەکەت نێردرا. سوپاس!" },
    footer: { rights: "هەموو مافەکان پارێزراون.", disclaimer: "ئەم ماڵپەڕە تەنها بۆ زانیارییە و جێگرەوەی پشکنینی پزیشکی نییە." },
  },
  ar: {
    nav: { about: "عن الطبيب", services: "الخدمات", hours: "الأوقات", book: "حجز", contact: "اتصل" },
    hero: {
      badge: "اخصائي الجراحة العامة والتنظيرية — أربيل",
      title: "عيادة د. هەرمان صابر نانەکەلی",
      subtitle:
        "اختصاصي الجراحة العامة والجراحة بالمنظار، الغدة الدرقية، الثدي، الفتوق وعلاج أمراض الشرج بالليزر في أربيل، إقليم كوردستان العراق.",
      cta: "احجز موعداً",
      call: "اتصل بالعيادة",
      stat1: "+١٥",
      stat1label: "سنة من الممارسة الجراحية",
      stat2: "١٠",
      stat2label: "خدمات جراحية أساسية",
      stat3: "٦",
      stat3label: "أيام عمل أسبوعياً",
    },
    about: {
      title: "عن الطبيب",
      lead: "د. هەرمان صابر نانەکەلی — اختصاصي الجراحة العامة",
      body:
        "بكالوريوس في الطب والجراحة العامة - أربيل، بورد (دكتوراه) في الجراحة العامة - بغداد، زميل المجلس العراقي للاختصاصات الطبية. خبرة واسعة في الجراحة التنظيرية وجراحة الغدد وعلاج أمراض الشرج والمستقيم بالليزر.",
      creds: [
        "بكالوريوس في الطب والجراحة العامة - أربيل",
        "بورد (دكتوراه) في الجراحة العامة - بغداد",
        "زميل المجلس العراقي للاختصاصات الطبية",
        "دورة استخدام الليزر في أمراض وجراحة المستقيم - مصر",
      ],
    },
    services: { title: "الخدمات الجراحية", lead: "تشخيص واستشارة وعمليات في الجراحة العامة والتنظيرية.", items: services.ar },
    hours: {
      title: "أوقات الدوام والموقع",
      lead: "المراجعة المباشرة متاحة، لكن الحجز المسبق يقلل الانتظار.",
      closed: "مغلق",
      address: "العنوان",
      addressValue: "أربيل، شارع كويه — داخل مستشفى CMC الأهلي",
      directions: "افتح في خرائط جوجل",
    },
    book: {
      title: "طلب موعد",
      lead: "املأ النموذج وسيتم الاتصال بك لتأكيد الموعد.",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      city: "المدينة",
      service: "الخدمة المطلوبة",
      date: "التاريخ المفضل",
      time: "الوقت المفضل",
      notes: "صف حالتك (اختياري)",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال…",
      success: "شكراً لك. تم استلام طلبك وسنتصل بك للتأكيد.",
      error: "حدث خطأ. يرجى الاتصال بالعيادة.",
      required: "يرجى إدخال الاسم والهاتف والخدمة.",
      emergency: "في الحالات الطارئة توجه إلى أقرب مستشفى.",
    },
    contact: { title: "أرسل رسالة", lead: "لديك سؤال عن عملية أو تقرير أو متابعة؟", name: "الاسم", contact: "هاتف أو بريد", message: "الرسالة", send: "إرسال", sent: "تم إرسال الرسالة. شكراً!" },
    footer: { rights: "جميع الحقوق محفوظة.", disclaimer: "هذا الموقع للمعلومات فقط ولا يغني عن الاستشارة الطبية." },
  },
};

export const dayNames: Record<Lang, Record<string, string>> = {
  en: { Saturday: "Saturday", Sunday: "Sunday", Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday", Thursday: "Thursday", Friday: "Friday" },
  ku: { Saturday: "شەممە", Sunday: "یەکشەممە", Monday: "دووشەممە", Tuesday: "سێشەممە", Wednesday: "چوارشەممە", Thursday: "پێنجشەممە", Friday: "هەینی" },
  ar: { Saturday: "السبت", Sunday: "الأحد", Monday: "الاثنين", Tuesday: "الثلاثاء", Wednesday: "الأربعاء", Thursday: "الخميس", Friday: "الجمعة" },
};
