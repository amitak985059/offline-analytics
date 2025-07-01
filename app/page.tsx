"use client";

import { logEvent } from "@/utils/logger";
import Link from "next/link";

import { SiQuicktime } from "react-icons/si";

import { MdFlashOn } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { BsShieldLockFill } from "react-icons/bs";
import { useEffect } from "react";
import { usePageDurationLogger } from "@/hooks/usePageDurationLogger";

export default function Home() {
  usePageDurationLogger("Home");
  useEffect(() => {
    logEvent({
      event: "PAGE_VIEW",
      event_category: "Navigation",
      event_label: "Home Page",
      value: 1,
      meta: {
        source: "navbar",
      },
    });
  }, []);
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center text-center  bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/04/27/14/14/240_F_427141456_xbCzEeHOtY9FdaLpQ3a0ARMhgGmD89Bv.jpg')",
        }}
      >
        <div className="bg-black/60 p-6 rounded max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">
            Borrowing Made Easy with KreditSea
          </h3>
          <h1 className="text-4xl font-bold mb-4">
            Digital. Transparent. Prompt.
          </h1>
          <p className="text-lg mb-1">
            Facing unexpected expenses or last-minute financial needs?
          </p>
          <p className="text-lg font-semibold">
            KreditSea is here to help with personalized loan solutions tailored
            just for you.
          </p>
        </div>
      </div>

      <div>
        <img
          className="w-4/5 m-auto"
          src="https://sdmntprwestus.oaiusercontent.com/files/00000000-4d44-6230-a9bf-d9aab61be4b1/raw?se=2025-06-30T21%3A04%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=cf309412-aed3-5c94-aebb-fc500c8bcc5f&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-29T23%3A29%3A22Z&ske=2025-06-30T23%3A29%3A22Z&sks=b&skv=2024-08-04&sig=FZAX9fhwKyjDjOKCl0UgJ%2BhlUK9Zyhfs5qkLeRnToTE%3D"
          alt=""
        />
        <Link href="/check-eligibility">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Eligibility Check
          </button>
        </Link>
      </div>

      <div>
        <div className="flex flex-col items-center text-center py-8">
          <h2 className="font-bold text-2xl mb-4">Why Choose KreditSea?</h2>
          <h2 className="font-bold text-xl text-gray-700">
            Because getting a personal loan shouldn’t feel complicated.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 w-4/5 md:w-3/5 m-auto py-10">
          <div className="flex items-center space-x-3 text-xl font-semibold">
            <SiQuicktime className="text-blue-600 text-3xl" />
            <span>Quick Approval</span>
          </div>
          <div className="flex items-center space-x-3 text-xl font-semibold">
            <MdFlashOn className="text-yellow-500 text-3xl" />
            <span>Instant Dispursal</span>
          </div>
          <div className="flex items-center space-x-3 text-xl font-semibold">
            <BiRefresh className="text-green-500 text-3xl" />
            <span>Flexible Repayment</span>
          </div>
          <div className="flex items-center space-x-3 text-xl font-semibold">
            <BsShieldLockFill className="text-purple-600 text-3xl" />
            <span>Trusted & Secure</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center text-center py-10 px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Steps to Get a Loan
          </h2>
          <ol className="list-decimal w-full max-w-md px-6 text-left space-y-4">
            <li className="p-4 border rounded-md shadow-sm bg-white">
              <span className="font-bold text-blue-700">Step 1: </span>
              <span>Check your eligibility for a loan in just 2 minutes.</span>
            </li>
            <li className="p-4 border rounded-md shadow-sm bg-white">
              <span className="font-bold text-blue-700">Step 2: </span>
              <span>
                Upload the required documents and fill the application form.
              </span>
            </li>
            <li className="p-4 border rounded-md shadow-sm bg-white">
              <span className="font-bold text-blue-700">Step 3: </span>
              <span>Get instant approval and disbursal of your loan.</span>
            </li>
          </ol>
        </div>
      </div>
      <div></div>
    </div>
  );
}
