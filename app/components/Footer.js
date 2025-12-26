"use client";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 w-full bg-[#7ea9ad] text-slate-900 footer-container">
      <div className="flex w-full flex-col items-start gap-10 px-4 py-10 sm:flex-row sm:flex-wrap sm:justify-between sm:px-6 lg:flex-nowrap lg:items-center lg:gap-20 lg:px-12 lg:py-14 footer-main">
        <div className="flex w-full flex-col items-center gap-5 sm:w-[45%] lg:w-1/3 footer-logo-section">
          <Link href="/" className="flex flex-col items-center gap-4">
            <div className="flex h-28 items-center justify-center">
              <img
                src="/logo1.png"
                alt="VAWE logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-2xl font-semibold tracking-wide text-slate-900">
              VAWE GlobalTech
            </span>
          </Link>
          <p className="text-center text-sm leading-relaxed text-slate-800/80">
            Building future-ready digital products, intelligent platforms, and memorable
            customer experiences for ambitious brands across the globe.
          </p>
        </div>

        <div className="flex w-full flex-col gap-8 sm:w-[50%] lg:w-2/3 footer-content-section">
          <div className="flex flex-col gap-2 footer-heading">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-800/70">
              Crafted For Forward Thinkers
            </p>
            <h3 className="text-3xl font-semibold text-slate-900">VAWE GlobalTech</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 footer-links-grid">
            <div className="col-span-1 space-y-3">
              <h5 className="text-base font-semibold">Navigation</h5>
              <ul className="space-y-2 text-sm text-slate-800/80">
                <li>
                  <Link href="/" className="transition hover:text-slate-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="transition hover:text-slate-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="transition hover:text-slate-900">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-slate-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 space-y-3">
              <h5 className="text-base font-semibold">Support</h5>
              <ul className="space-y-2 text-sm text-slate-800/80">
                <li>
                  <span className="block">Help Center</span>
                </li>
                <li>
                  <span className="block">Refund Policy</span>
                </li>
                <li>
                  <span className="block">FAQ&#39;s</span>
                </li>
                <li>
                  <span className="block">Privacy Policy</span>
                </li>
              </ul>
            </div>

            <div className="col-span-1 space-y-3">
              <h5 className="text-base font-semibold">Social</h5>
              <ul className="space-y-3 text-sm text-slate-800/80">
                <li>
                  <Link
                    href="https://www.facebook.com"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <Facebook className="h-4 w-4 text-[#1877F2]" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <Instagram className="h-4 w-4 text-[#DD2A7B]" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/918885103333"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900/20 bg-[#779ea3] footer-bottom">
        <div className="flex w-full flex-col gap-4 px-4 py-6 text-xs text-slate-800/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-12 footer-bottom-content">
          <p>Copyright © {year} VAWE GlobalTech</p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
            <Link href="#top" className="inline-flex items-center gap-1 transition hover:text-slate-900">
              Back to top
              <span aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-container {
            width: 100% !important;
          }
          .footer-main {
            width: 100% !important;
            flex-direction: column !important;
            align-items: center !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            gap: 2.5rem !important;
          }
          .footer-logo-section {
            width: 100% !important;
            max-width: 100% !important;
          }
          .footer-content-section {
            width: 100% !important;
            max-width: 100% !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-heading {
            text-align: center !important;
            width: 100% !important;
          }
          .footer-heading h3 {
            font-size: 2rem !important;
          }
          .footer-links-grid {
            width: 100% !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem !important;
            justify-items: center !important;
          }
          .footer-links-grid > div {
            width: 100% !important;
            text-align: center !important;
          }
          .footer-links-grid ul {
            align-items: center !important;
          }
          .footer-links-grid li {
            justify-content: center !important;
          }
          .footer-bottom {
            width: 100% !important;
          }
          .footer-bottom-content {
            width: 100% !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1rem !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}