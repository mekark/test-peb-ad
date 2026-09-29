"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed
        bottom-[12.5rem]
        right-3
        z-[100]

        flex
        h-11
        w-11
        sm:h-14
        sm:w-14
        items-center
        justify-center

        rounded-full

        bg-[#E40015]
        text-white

        shadow-[0_20px_42px_-20px_rgba(228,0,21,0.72)]

        transition-transform
        duration-300

        hover:bg-red-700
        hover:scale-105
        focus:outline-none
        focus:ring-4
        focus:ring-[#E40015]/30

        sm:bottom-[15.5rem]
        sm:right-6
      "
    >
      <ArrowUp className="h-5 w-5 stroke-[2.5] sm:h-6 sm:w-6" />
    </button>
  );
}
