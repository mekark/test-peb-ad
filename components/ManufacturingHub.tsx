"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss my PEB industrial construction project.";

const factoryImages = [
  "/Images/new/i1.webp",
  "/Images/new/i2.webp",
  "/Images/new/i3.webp",
  "/Images/new/i4.webp",
  "/Images/new/i5.webp",
  "/Images/new/i6.webp",
];

export default function ManufacturingHub() {
  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="section-container">
        <div
          className="
            grid
            grid-cols-1
            gap-14

            lg:grid-cols-[560px_1fr]
            lg:items-center
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
      relative
      overflow-hidden
      rounded-[8px]
    "
            >
              {/* CAROUSEL */}
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000, // HOLD IMAGE BEFORE NEXT
                  disableOnInteraction: false,
                }}
                speed={2200} // SLOW TRANSITION
                loop
                allowTouchMove={true}
                className="h-full w-full"
              >
                {factoryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    {/* FIXED HEIGHT */}
                    <div
                      className="
              relative

              h-[520px]

              sm:h-[650px]

              lg:h-[820px]
            "
                    >
                      <Image
                        src={img}
                        alt={`Factory ${index + 1}`}
                        fill
                        /* IMAGE FILLS FULL CARD */
                        className="
                object-cover
              "
                        priority
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* FLOATING BOX */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: true }}
                className="
        absolute
        bottom-5
        left-5
        right-5
        z-20

        rounded-[6px]
        border
        border-[#E8E3E4]
        bg-white/90
        p-5
        backdrop-blur-[8px]

        sm:right-auto
        sm:w-[497px]
      "
              >
                <p
                  className="
          font-manrope
          text-[11px]
          uppercase
          tracking-[1.1px]
          text-[#E50818]
        "
                >
                  Inside the Factory
                </p>

                <h4
                  className="
          mt-1
          font-manrope
          text-[15px]
          font-bold
          leading-[22px]
          text-black
        "
                >
                  6,00,000 Sq. Ft. Integrated Hub
                </h4>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* TOP LABEL */}
            <p
              className="
                font-manrope
                type-eyebrow
                text-[#E50818]
              "
            >
              Manufacturing Excellence
            </p>

            {/* HEADING */}
            <h2
              className="
                mt-4
                max-w-[760px]
                font-manrope
                text-[28px]
                font-bold
                leading-[34px]
                tracking-[-1px]
                text-black

                sm:text-[40px]
                sm:leading-[46px]

                lg:text-[40px]
                lg:leading-[46px]

                xl:text-[40px]
                xl:leading-[46px]

                2xl:text-[52px]
                2xl:leading-[56px]
                2xl:tracking-[-1.02px]
              "
            >
              Tamil Nadu’s High-Capacity{" "}
              <span className="text-[#E50818]">PEB Manufacturing Hub</span>
            </h2>

            {/* SUB HEADING */}
            <h3
              className="
                mt-8
                font-manrope
                text-[20px]
                font-bold
                leading-[28px]
                tracking-[-0.41px]
                text-[#040303]
                lg:text-[20px]
                2xl:text-[26px]
                2xl:leading-[34px]
              "
            >
              Inside Mekark's Manufacturing Excellence
            </h3>

            {/* PARAGRAPHS */}
            <div className="mt-5 space-y-5">
              <p
                className="
                  type-body
                  text-[#322C2E]
                "
              >
                India’s industrial leaders trust Mekark as a Pre Engineered
                Building (PEB) manufacturer, PEB building manufacturer and
                industrial EPC contractor, delivering large-scale industrial
                infrastructure with precision, speed and engineering excellence.
              </p>

              <p
                className="
                  type-body
                  text-[#322C2E]
                "
              >
                Operating from a 6,00,000 sq. ft. integrated manufacturing
                facility, Mekark is among Tamil Nadu’s leading pre engineered
                building manufacturers and PEB manufacturers in Chennai,
                delivering high-quality steel structures with consistency,
                quality and engineering accuracy.
              </p>

              <p
                className="
                  type-body
                  text-[#322C2E]
                "
              >
                Our advanced manufacturing facility supports PEB warehouse
                construction, industrial warehouse construction, industrial
                steel building construction and customized steel fabrication for
                complex industrial projects. Every component is manufactured to
                exact specifications—reducing delays, improving execution
                quality and accelerating project timelines.
              </p>

              <p
                className="
                  type-body
                  text-[#322C2E]
                "
              >
                Backed by ISO-certified processes and a 400+ strong engineering
                team, Mekark delivers integrated design-and-build and turnkey
                industrial construction solutions for businesses seeking
                reliable industrial building contractors, factory construction
                company expertise and end-to-end project execution under one
                roof.
              </p>
            </div>

            {/* RED CTA BOX */}
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{ duration: 0.3 }}
              className="
    mt-8
    max-w-[560px]
    rounded-[8px]
    bg-[#E50818]

    px-5
    py-5

    sm:px-6
    sm:py-6
  "
            >
              <h4
                className="
      font-manrope
      text-[22px]
      font-bold
      leading-[1.25]
      text-white

      sm:text-[24px]
    "
              >
                Build Faster. Scale Smarter. Perform Better.
              </h4>

              <p
                className="
      mt-3
      max-w-[430px]
      text-[14px]
      leading-[24px]
      text-white/90

      sm:text-[15px]
    "
              >
                Partner with a top pre engineering building company delivering
                turnkey excellence across India.
              </p>

              {/* BUTTON */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
      mt-5
      inline-flex
      items-center
      gap-2
      rounded-[5px]
      bg-[#EEEEEE]

      px-5
      py-2.5

      text-[13px]
      font-semibold
      text-black
      transition-all
      duration-300
    "
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
