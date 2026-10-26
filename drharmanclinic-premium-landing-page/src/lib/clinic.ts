export const clinic = {
  doctor: {
    en: "Dr. Harman Saber Nanekeli",
    ar: "د. هەرمان صابر نانەکەلی",
    ku: "د. هەرمان صابر نانەکەلی",
  },
  phone: "+964 750 357 7951",
  phoneHref: "+9647503577951",
  instagram: "doctorharman",
  instagramUrl: "https://instagram.com/doctorharman",
  facebookUrl: "https://www.facebook.com/DrHarmanClinic/",
  orcid: "0009-0005-2460-2297",
  orcidUrl: "https://orcid.org/0009-0005-2460-2297",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=CMC+Private+Hospital+Koya+Street+Erbil",
  hours: [
    { day: "Saturday", open: "16:00", close: "19:30" },
    { day: "Sunday", open: "16:00", close: "19:30" },
    { day: "Monday", open: "16:00", close: "19:30" },
    { day: "Tuesday", open: "16:00", close: "19:30" },
    { day: "Wednesday", open: "16:00", close: "19:30" },
    { day: "Thursday", open: "16:00", close: "19:30" },
    { day: "Friday", open: null, close: null },
  ],
};

export const SERVICE_KEYS = [
  "laparoscopy",
  "gallbladder",
  "hernia",
  "thyroid",
  "breast",
  "colorectal",
  "gi",
  "bariatric",
  "wounds",
  "skin",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];
