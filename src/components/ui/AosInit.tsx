"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    // Dynamic import library AOS hanya di sisi client
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        once: true,
        easing: "ease-out-cubic",
      });
    });

    return () => {
      import("aos").then((AOS) => {
        AOS.default.refresh();
      });
    };
  }, []);

  return null;
}
