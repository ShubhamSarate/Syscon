import type { Metadata } from "next";
import "./globals.css";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "SYSCON - We Keep Your Business Running",
  description:
    "Syscon Computer Systems provides complete IT infrastructure, technology solutions and support for businesses.",
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
