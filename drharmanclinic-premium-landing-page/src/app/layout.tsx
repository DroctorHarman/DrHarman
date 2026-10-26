import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Harman Saber Nanekeli's Clinic | General & Laparoscopic Surgeon, Erbil",
  description:
    "Specialist general and laparoscopic surgeon in Erbil, Kurdistan Region of Iraq. Gallbladder, hernia, thyroid, breast, colorectal laser surgery and weight-loss surgery. Book an appointment online.",
  openGraph: {
    title: "Dr. Harman Saber Nanekeli's Clinic — Erbil",
    description: "Specialist General & Laparoscopic Surgeon, CMC Private Hospital, Erbil.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
