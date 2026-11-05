import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteLoader from "@/components/SiteLoader";
import RouteLoader from "@/components/RouteLoader";
import ScrollReveal from "@/components/ScrollReveal";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Dalera Properties | Invest in Dubai from Pakistan",
  description:
    "Explore Dubai real estate opportunities from Pakistan with Dalera Properties. Discover projects by Emaar, Danube, DAMAC, Binghatti, Imtiaz and Azizi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript><style>{`.site-loader,.route-loader{display:none!important}`}</style></noscript>
        <SiteLoader />
        <RouteLoader />
        <ScrollReveal />
        <a href="#content" className="skip-link">Skip to content</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
