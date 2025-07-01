"use client";

import { useEffect, useRef } from "react";
import { logEvent } from "@/utils/logger";
import { usePathname } from "next/navigation";

export function usePageDurationLogger(pageName: string) {
  const startTimeRef = useRef<number>(Date.now());
  const pathname = usePathname();

  useEffect(() => {
    const handleBeforeUnload = () => {
      const duration = Date.now() - startTimeRef.current;

      logEvent({
        event: "PAGE_DURATION",
        event_category: "Engagement",
        event_label: pageName,
        value: duration, // in ms
        meta: {
          pathname: pathname ?? "",
          seconds: (duration / 1000).toFixed(2),
        },
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      handleBeforeUnload(); // capture on route change/unmount
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pageName, pathname]);
}
