import { Poppins, Orbitron, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-poppins", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], variable: "--font-orbitron", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-raleway", display: "swap" });

export const viewport = {
  themeColor: "#00448a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com"),
  title: {
    default: "Software Company in Vijayawada | VAWE Global Tech",
    template: "%s | VAWE Global Tech Vijayawada",
  },
  description:
    "VAWE Global Tech is a software development company in Vijayawada, Andhra Pradesh delivering affordable web, mobile, and cloud solutions.",
  keywords: [
    // Primary
    "Software company in Vijayawada",
    "Software development company in Andhra Pradesh",
    "Low budget software company in Vijayawada",
    "Affordable software developers in AP",
    "Best IT company in Vijayawada",
    "VAWE Global Tech Vijayawada",
    "Custom software development company in Vijayawada",
    "App development company in Vijayawada",
    "Web application development in Andhra Pradesh",
    "Software services in Vijayawada",
    // Secondary / Long-tail
    "Low-cost software development services in Vijayawada",
    "Advanced tech stack software developers in Andhra Pradesh",
    "Full-stack development company in Vijayawada",
    "AI and cloud-based software solutions in AP",
    "Affordable SaaS product development in Vijayawada",
    "Best web and mobile app developers in Vijayawada",
    "Small business software development in Andhra Pradesh",
    "Enterprise software solutions in Vijayawada",
    "Custom ERP software in Vijayawada",
    "Offshore software development company in AP",
    // Tech-focused
    "Modern software development with React, Node.js, Python",
    "Cloud-native software solutions in Vijayawada",
    "Scalable application development company in AP",
    "Agile software company in Vijayawada",
    "DevOps and automation experts in Andhra Pradesh",
    "API integration and backend development in Vijayawada",
    // Local SEO
    "IT company near Benz Circle Vijayawada",
    "Software company near Eluru Road",
    "Local software developers in Vijayawada",
    "Software companies in Guntur and Vijayawada",
    "Software training and internship in Vijayawada",
    // Brand + keyword
    "VAWE Global Tech software solutions",
    "VAWE Global Tech Vijayawada software company",
    "VAWE Global Tech low-budget software development",
    "VAWE Global Tech advanced tech software builders",
    // Brand alias (WAWE)
    "VAWE",
    "WAWE Global Tech",
    "WAWE software company in Vijayawada",
    "WAWE Global Tech Vijayawada",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Software Company in Vijayawada | VAWE Global Tech",
    description:
      "Affordable, modern web, mobile, and cloud software development in Vijayawada, Andhra Pradesh.",
    url: "/",
    siteName: "VAWE Global Tech",
    locale: "en_IN",
    type: "website",
    images: [
      { url: "/heroimg3.png", width: 1200, height: 630, alt: "VAWE Global Tech Vijayawada" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company in Vijayawada | VAWE Global Tech",
    description:
      "Affordable, modern web, mobile, and cloud software development in Vijayawada, Andhra Pradesh.",
    images: ["/heroimg3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${orbitron.variable} ${raleway.variable} antialiased min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VAWE Global Tech",
              alternateName: ["VAWE", "WAWE", "WAWE Global Tech"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VAWE Global Tech",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com"),
              potentialAction: {
                "@type": "SearchAction",
                target: `${process.env.NEXT_PUBLIC_SITE_URL || "https://vaweglobaltech.com"}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full grad-mc blur-3xl opacity-20 animate-glow"></div>
          <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full grad-co blur-3xl opacity-20 animate-glow"></div>
          <div className="absolute -bottom-20 left-1/4 w-[640px] h-[640px] rounded-full grad-mo blur-3xl opacity-15"></div>
        </div>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <a
          href="https://wa.me/918142112333"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#25d366] p-4 text-white shadow-xl shadow-[#25d366]/40 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Chat with VAWE Global Tech on WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            role="img"
            aria-hidden="true"
            className="h-6 w-6 fill-current"
          >
            <path d="M16 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.35.612 4.635 1.781 6.655L2.667 29.333l6.919-1.736c1.94 1.062 4.134 1.622 6.414 1.623h.004c7.364 0 13.333-5.97 13.333-13.333 0-3.566-1.388-6.917-3.91-9.44C22.917 4.054 19.566 2.667 16 2.667zm0 24c-1.98-.001-3.917-.523-5.616-1.514l-.402-.234-4.108 1.03 1.097-4.003-.262-.413c-1.07-1.689-1.635-3.638-1.634-5.637 0-5.847 4.756-10.603 10.605-10.603 2.835 0 5.499 1.104 7.503 3.108 2.003 2.003 3.107 4.667 3.107 7.502 0 5.847-4.756 10.664-10.59 10.764h0zm5.847-7.97c-.32-.16-1.894-.93-2.19-1.036-.293-.107-.507-.16-.72.16-.213.32-.827 1.037-1.013 1.25-.187.213-.373.24-.693.08-.32-.16-1.347-.496-2.567-1.584-.95-.848-1.59-1.894-1.777-2.214-.187-.32-.02-.494.14-.653.143-.142.32-.373.48-.56.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.374-.26-.624-.523-.538-.72-.547l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.267 3.467 5.487 4.861.767.33 1.363.53 1.828.678.768.244 1.467.21 2.021.127.617-.092 1.894-.77 2.163-1.513.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
