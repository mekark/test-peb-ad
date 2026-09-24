"use client";

import Image from "next/image";

const clientLogos = [
  "/Images/Logos/lt.webp",
  "/Images/Logos/tvs.webp",
  "/Images/Logos/tata.webp",
  "/Images/Logos/stetter.webp",
  "/Images/Logos/srf.webp",
  "/Images/Logos/orbittal.webp",
  "/Images/Logos/sarvam.webp",
  "/Images/Logos/sanmar.webp",
  "/Images/Logos/sanmar1.webp",
  "/Images/Logos/reliance.webp",
  "/Images/Logos/voltas.webp",
  "/Images/Logos/vwu.webp",
];

export default function TrustedClientsSection() {
  return (
<section
  className="
    relative
    bg-white

    py-14
    lg:py-20

    overflow-hidden
  "
>      <div className="max-w-[1600px] mx-auto px-5 lg:px-10">
        {/* TOP TEXT */}
        <p
          className="
            text-[#E40015]
            uppercase
            tracking-[2px]
            text-[18px]
            font-bold
            mb-8
          "
        >
          Trusted Across India
        </p>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden w-full">
          <div className="flex items-center gap-20 animate-marquee whitespace-nowrap">
            {/* FIRST */}
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={130}
                  height={60}
                  className="
                    h-[65px]
                    w-auto
                    object-contain
                  "
                />
              </div>
            ))}

            {/* DUPLICATE */}
            {clientLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="
                  flex-shrink-0
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={130}
                  height={60}
                  className="
                    h-[45px]
                    w-auto
                    object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}