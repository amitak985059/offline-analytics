"use client";
import { useEffect } from "react";
import { logEvent } from "@/utils/logger";

import { usePageDurationLogger } from "@/hooks/usePageDurationLogger";
export default function Home() {
  usePageDurationLogger("blog");
  useEffect(() => {
        logEvent({
          event: "PAGE_VIEW",
          event_category: "Navigation",
          event_label: "Blog Page",
          value: 1,
          meta: {
            source: "navbar",
          },
        });
      }, []);
  return   <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        KreditSea Blog
      </h1>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">

        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-indigo-600">
            How Credit Works
          </h2>
          <p className="text-gray-700 mt-3">
            Understanding your credit score is key to unlocking better financial products.
            In this article, we’ll explain how credit scores are calculated, why they matter,
            and how you can improve yours step by step.
          </p>
          <p className="text-sm text-gray-500 mt-4">Posted on June 20, 2025</p>
        </article>


        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-indigo-600">
            5 Tips to Get Approved Faster
          </h2>
          <p className="text-gray-700 mt-3">
            Want a faster loan approval? Start by checking your eligibility, organizing your
            documents, and avoiding these common application mistakes.
            Learn how preparation can reduce delays and improve approval chances.
          </p>
          <p className="text-sm text-gray-500 mt-4">Posted on June 18, 2025</p>
        </article>


        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Loan Myths You Should Stop Believing
          </h2>
          <p className="text-gray-700 mt-3">
            Many people think loans are only for emergencies or that applying hurts your credit.
            In this post, we bust some common myths and help you borrow smarter.
          </p>
          <p className="text-sm text-gray-500 mt-4">Posted on June 15, 2025</p>
        </article>


        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Choosing the Right Loan for Your Needs
          </h2>
          <p className="text-gray-700 mt-3">
            Whether you're funding a wedding, business, or emergency, selecting the right loan
            is crucial. We break down loan types and guide you through comparing them.
          </p>
          <p className="text-sm text-gray-500 mt-4">Posted on June 10, 2025</p>
        </article>
      </div>
    </div>
}
