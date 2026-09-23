"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export const industryOptions = [
  "Warehouse, Logistics",
  "Factories, Industries, Plants, Manufacturing Units",
  "Commercial - Malls, Theatres, IT Parks",
  "Schools, Colleges, Hospitals",
  "Auditoriums, Convention Halls",
  "Multistorey Steel Buildings",
  "Cold Storage, Data Centre",
];

type IndustryTypeSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  placeholder?: string;
};

export default function IndustryTypeSelect({
  value,
  onChange,
  options = industryOptions,
  placeholder = "Select Industry Type*",
}: IndustryTypeSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const items = ["", ...options];

  return (
    <div ref={rootRef} className={`relative min-w-0 max-w-full ${open ? "z-30" : ""}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className="
          flex
          w-full
          h-[54px]
          items-center
          justify-between
          gap-3
          rounded-[10px]
          border
          border-[#E5E5E5]
          bg-[#ECECEC]
          px-4
          text-left
          text-[15px]
          font-medium
          text-black
          outline-none
          transition-all
          duration-300
          focus:border-[#D90916]
          focus:bg-white
        "
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="
            absolute
            left-0
            right-0
            top-[calc(100%+6px)]
            z-50
            w-full
            max-w-full
            overflow-hidden
            rounded-[10px]
            border
            border-[#E5E5E5]
            bg-white
            py-1
            shadow-[0_12px_40px_rgba(0,0,0,0.16)]
            sm:right-auto
            sm:w-max
            sm:min-w-[calc(100%+72px)]
            sm:max-w-[calc(100vw-3rem)]
          "
        >
          {items.map((option) => {
            const label = option || placeholder;
            const selected = value === option;

            return (
              <li key={label} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`
                    block
                    w-full
                    whitespace-normal
                    break-words
                    px-4
                    py-2.5
                    text-left
                    text-[15px]
                    font-medium
                    sm:whitespace-nowrap
                    sm:pr-8
                    transition-colors
                    duration-150
                    ${
                      selected
                        ? "bg-[#D90916] text-white"
                        : "text-black hover:bg-[#F3F3F3]"
                    }
                  `}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
