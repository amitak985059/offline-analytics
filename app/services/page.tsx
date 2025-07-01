"use client";

import { useEffect } from "react";
import { logEvent } from "@/utils/logger";
import { usePageDurationLogger } from "@/hooks/usePageDurationLogger";

export default function Home() {
    usePageDurationLogger("Services Page");
     useEffect(() => {
          logEvent({
            event: "PAGE_VIEW",
            event_category: "Navigation",
            event_label: "Services Page",
            value: 1,
            meta: {
              source: "navbar",
            },
          });
        }, []);
  return <div>
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <section className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://images.pexels.com/photos/32719717/pexels-photo-32719717.jpeg"
          alt="Education Loan"
          className="w-full md:w-1/2 rounded"
        />

        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold mb-2">Education Loan</h2>
          <p>
            At <span className="font-semibold">KreditSea</span>, we understand the importance of education.
            That's why we offer student loans with competitive interest rates and flexible repayment options.
            Whether you're looking to pursue a degree or take courses to enhance your skills, we're here to help you achieve your goals.
            
          </p>
        </div>
      </section>

      <section className="mt-12 flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 text-gray-700 leading-relaxed order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-2">Comprehensive Health Insurance</h2>
          <p>
            At <span className="font-semibold">KreditSea</span>, we understand that health is the greatest wealth.
            That's why we offer comprehensive health insurance with a wide range of benefits and affordable premiums.
            With the ever-increasing cost of medical care, it's essential to have a health insurance policy that safeguards you and your loved ones from financial distress in case of unexpected medical emergencies.
            Our health insurance policy provides coverage for a wide range of medical expenses, including hospitalization, surgical procedures, doctor visits, and prescribed medications.
            Furthermore, our policy offers a range of additional benefits, such as cashless hospitalization, maternity benefits, and coverage for pre-existing conditions.
            With our health insurance policy, you can rest assured that you and your loved ones are protected from the financial burden of medical expenses, and focus on getting the best possible care without worrying about the cost.
            
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg"
          alt="Image"
          className="w-full md:w-1/2 rounded order-1 md:order-2"
        />
      </section>
    </main>
  </div>
}
