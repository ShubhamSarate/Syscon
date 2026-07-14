import type { Metadata } from "next";
import "./globals.css";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "SYSCON - Technology Solutions That Power Progress",
  description:
    "SYSCON provides comprehensive IT solutions including infrastructure, security, and services across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <ContactModal />
      </body>
    </html>
  );
}
