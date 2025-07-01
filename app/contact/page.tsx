"use client";
import { usePageDurationLogger } from "@/hooks/usePageDurationLogger";
import { use, useEffect } from "react";
import { logEvent } from "@/utils/logger";


export default function Home() {

  function handleOnSubmit(e) {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({ name, email, message });

    logEvent({
      event: "FORM_SUBMIT",
      event_category: "Contact",
      event_label: "Contact Form",
      value: 1,
      meta: {
        name,
        email,
        messageLength: message?.length || 0,
        timestamp: Date.now(),
      },
    });
  }

  usePageDurationLogger("Contact Page");
  useEffect(() => {
    logEvent({
      event: "PAGE_VIEW",
      event_category: "Navigation",
      event_label: "Contact Page",
      value: 1,
      meta: {
        source: "navbar",
      },
    });
  }, []);




  return <div>
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contacts Page</h1>
    <h3 className="text-2xl font-semibold text-indigo-600 text-center">Fill this form to send your contacts to me</h3>


    <form onSubmit={handleOnSubmit} className="max-w-md mx-auto p-4 space-y-4">


      <div>
        <label className="block mb-1 text-sm">Name</label>
        <input

          type="text"
          name="name"
          placeholder="Your name"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          rows="4"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  </div>
}
