"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    id: "01",
    title: "In-House PEB Manufacturing",
    desc: "Every steel component is engineered and fabricated in our advanced manufacturing facility by experienced PEB manufacturers, PEB contractors and steel structure specialists",
  },
  {
    id: "02",
    title: "Complete Turnkey PEB & Industrial EPC Services",
    desc: "One trusted PEB contractor and industrial EPC company for engineering, procurement, PEB manufacturing, steel fabrication, construction, erection and project handover",
  },
  {
    id: "03",
    title: "Transparent Pricing. Guaranteed Timelines.",
    desc: "Fixed-cost proposals and milestone-driven execution from a trusted industrial construction company, delivering quality PEB solutions with predictable project timelines.",
  },
  {
    id: "04",
    title: "200+ Industrial Projects Delivered",
    desc: "Trusted factory building contractor, warehouse construction contractor and industrial steel building contractor delivering PEB solutions across manufacturing, logistics, FMCG, pharmaceutical and commercial sectors.",
  },
];

export default function WhyMekark() {
  return (
    <section className="bg-[#E31E24] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="section-container lg:px-16">
        <div
          className="
            grid
            grid-cols-1
            gap-16

            lg:grid-cols-[1fr_720px]
            lg:gap-24
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <p
              className="
                font-manrope
                text-[12px]
                font-bold
                uppercase
                tracking-[1.2px]
                text-[#FFD7D7]
              "
            >
              Why Leading Manufacturers Choose Mekark
            </p>

            {/* HEADING */}
            <h2
              className="
                mt-7
                max-w-[860px]
                font-manrope
                text-[28px]
                font-bold
                leading-[34px]
                tracking-[-1px]
                text-white

                sm:text-[40px]
                sm:leading-[46px]

                lg:text-[40px]
                lg:leading-[46px]

                xl:text-[40px]
                xl:leading-[46px]

                2xl:text-[52px]
                2xl:leading-[60px]
                2xl:tracking-[-1.5px]
              "
            >
              Your Project Deserves a Manufacturer,
              <br />
              <span className="text-black">Not a Middleman.</span>
            </h2>

            {/* DESCRIPTION */}
            <div
              className="
                mt-10
                max-w-[620px]
                space-y-8
              "
            >
              <p
                className="
                  font-inter
                  text-[17px]
                  font-normal
                  leading-[32px]
                  text-white/95
                "
              >
                Unlike many PEB contractors, Mekark manages the complete
                process—from engineering and PEB manufacturing to steel
                fabrication, site erection and project delivery. As a trusted
                Pre Engineered Building Manufacturer and Industrial EPC
                Contractor, we eliminate third-party dependencies to deliver
                consistent quality, faster execution and complete
                accountability. Whether you're planning factory construction,
                warehouse construction or an industrial steel building, our
                integrated design-build approach provides a single point of
                responsibility from concept to commissioning.
              </p>

              <p
                className="
                  font-inter
                  text-[17px]
                  font-normal
                  leading-[32px]
                  text-white/95
                "
              >
                With 200+ completed industrial projects, Mekark is a trusted PEB
                manufacturer, industrial building contractor and warehouse
                construction company for manufacturers, logistics companies,
                food processing industries, pharmaceutical companies and
                commercial developers across South India.
              </p>
            </div>

            {/* BUTTON */}
            <motion.a
              href="#quote-form"
              onClick={(event) => {
                const target = document.getElementById("quote-form");
                if (!target) return;

                event.preventDefault();

                if (window.location.hash !== "#quote-form") {
                  window.history.pushState(null, "", "#quote-form");
                }

                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
    group
    mt-10

    inline-flex
    items-center
    gap-4

    rounded-[8px]

    bg-white

    px-6
    py-4

    font-manrope
    text-[18px]
    font-bold

    text-[#CC000A]

    transition-all
    duration-300

    hover:bg-[#FFF4F4]
  "
            >
              Start an Export Enquiry
              <ArrowUpRight
                className="
      h-5
      w-5

      transition-transform
      duration-300

      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
              />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
    flex
    flex-col

    lg:pl-35
  "
          >
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 10,
                }}
                className="
        group
        relative
        py-7
      "
              >
                {/* LINE */}
                {index !== 0 && (
                  <div
                    className="
            absolute
            left-0
            right-0
            top-0
            h-[1px]
            bg-white/20
          "
                  />
                )}

                <div
                  className="
          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-start
        "
                >
                  {/* NUMBER */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="
            font-manrope
            text-[36px]
            font-bold
            leading-none
            text-white/15

            sm:text-[48px]
            lg:text-[64px]
          "
                  >
                    {item.id}
                  </motion.div>

                  {/* CONTENT */}
                  <div className="flex-1 pt-1">
                    <h3
                      className="
              font-manrope
              text-[28px]
              font-bold
              leading-[1.2]
              text-white

              transition-all
              duration-300

              group-hover:translate-x-1

              sm:text-[32px]
            "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
              mt-3
              max-w-[520px]
              font-manrope
              text-[16px]
              font-medium
              leading-[28px]
              text-white/85

              transition-all
              duration-300

              group-hover:translate-x-1
            "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
