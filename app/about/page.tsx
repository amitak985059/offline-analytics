"use client";

import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import { logEvent } from "@/utils/logger";
import { usePageDurationLogger } from "@/hooks/usePageDurationLogger";
export default function AboutPage() {
  usePageDurationLogger("About Page");
  useEffect(() => {
      logEvent({
        event: "PAGE_VIEW",
        event_category: "Navigation",
        event_label: "About Page",
        value: 1,
        meta: {
          source: "navbar",
        },
      });
    }, []);

  
  return (
    <div>
      {/* About Section */}
      <section className="px-4 py-12 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-3/4 md:w-full max-w-md"
              src="https://www.creditsea.com/_next/static/media/about-us.9216cacd.svg"
              alt="About CreditSea"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At{" "}
              <span className="font-semibold text-indigo-600">KreditSea</span>,
              we know that your financial reputation matters. That’s why we’re
              on a mission to make borrowing effortless, secure, and stress-free.
              <br />
              <br />
              Backed by our RBI-licensed NBFC partner,{" "}
              <span className="font-semibold">
                Meghdoot Mercantile Private Limited
              </span>
              , we bring you flexible and transparent loan solutions — no hidden
              fees, no fine print, just a seamless lending experience.
              <br />
              <br />
              Whether you need to build credit, manage urgent expenses, or unlock
              better loan offers, we’ve got you covered with fast approvals,
              instant disbursals, and expert support every step of the way.
              <br />
              <br />
              Because when it comes to your finances,{" "}
              <span className="font-semibold text-indigo-600">
                trust and simplicity
              </span>{" "}
              matter.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <p className="text-center md:text-left text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} KreditSea. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/amit-kumar-498214230/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://x.com/amitlaunches"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter (X)"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
