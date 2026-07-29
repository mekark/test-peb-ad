"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    id: "01",
    question: "Why choose Mekark over other PEB Contractors?",
    answer:
      "Unlike many PEB Contractors, Mekark is a fully integrated PEB Manufacturer with in-house design, manufacturing, and erection. This ensures better quality, faster delivery, and complete project accountability.",
  },
  {
    id: "02",
    question: "What makes Mekark a trusted Industrial EPC Contractor?",
    answer:
      "Mekark delivers complete Industrial EPC Solutions, including engineering, procurement, civil construction, PEB manufacturing, and project execution. Our turnkey approach ensures seamless coordination and timely project completion.",
  },
  {
    id: "03",
    question: "Does Mekark manufacture Pre Engineered Buildings in-house?",
    answer:
      "Yes. Mekark is a leading Pre Engineered Building Manufacturer with an advanced in-house manufacturing facility. Every steel component is precision-engineered and quality-checked before delivery.",
  },
  {
    id: "04",
    question:
      "Can Mekark handle large Factory Construction and Warehouse Construction projects?",
    answer:
      "Yes. As an experienced Factory Building Contractor and Warehouse Building Contractor, Mekark delivers turnkey projects for manufacturing, logistics, FMCG, pharmaceutical, and industrial sectors.",
  },
  {
    id: "05",
    question: "How does PEB Construction reduce project timelines?",
    answer:
      "PEB Construction uses factory-manufactured steel components, reducing on-site work and construction delays. This enables faster project completion with consistent quality and lower overall costs.",
  },
  {
    id: "06",
    question:
      "What quality standards does Mekark follow for Industrial Steel Building Construction?",
    answer:
      "As a trusted Steel Building Manufacturer, Mekark follows strict quality control from design to fabrication and erection. Every project is executed using high-quality materials and proven engineering practices.",
  },
  {
    id: "07",
    question: "Can Mekark customize Pre Engineered Building solutions?",
    answer:
      "Yes. Every Pre Engineered Building is custom-designed to match your span, height, crane capacity, production process, and future expansion requirements for maximum operational efficiency.",
  },
  {
    id: "08",
    question: "Does Mekark provide complete Turnkey Industrial EPC solutions?",
    answer:
      "Yes. Mekark offers complete Turnkey Industrial EPC Solutions, including design, manufacturing, civil works, MEP, steel erection, and final project handover through a single expert team.",
  },
  {
    id: "09",
    question:
      "Which industries does Mekark serve as an Industrial Building Contractor?",
    answer:
      "Mekark serves manufacturing, logistics, automotive, FMCG, food processing, pharmaceutical, engineering, textile, and commercial industries with customized industrial building solutions.",
  },
  {
    id: "10",
    question:
      "Why is Mekark a preferred Pre Engineered Building Company in Chennai?",
    answer:
      "Mekark is a trusted Pre Engineered Building Company in Chennai known for in-house manufacturing, turnkey execution, and 500+ successfully completed industrial projects with on-time delivery and superior quality.",
  },
];

export default function PEBFaqSection() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(
      activeIndex === index ? -1 : index
    );
  };

  return (
    <section className="w-full bg-[#F4F4F4] overflow-hidden py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-[440px_1fr]
            xl:grid-cols-[500px_1fr]

            gap-10
            sm:gap-12
            lg:gap-16
            xl:gap-20

            items-start
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                justify-center

                px-[14px]
                py-[6px]

                rounded-full

                border
                border-[#FCD5D0]

                bg-[#FEEAE7]

                mb-6
              "
            >
              <span className="text-[13px] font-semibold leading-[19.5px] text-[#CC000A]">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[64px]

                leading-[0.95]

                font-bold

                tracking-[-2px]

                text-black

                max-w-[520px]
              "
            >
              Frequently asked{" "}
              <span className="text-[#CC000A]">
                questions.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6

                text-[16px]
                sm:text-[18px]

                leading-[28px]

                font-medium

                text-[#070506A6]

                max-w-[420px]
              "
            >
              Everything you need to know
              about PEB construction and our
              manufacturing capability.
            </p>

            {/* FAQ IMAGE - DESKTOP ONLY */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="
                relative

                hidden
                lg:flex

                mt-24
                xl:mt-28

                w-full

                justify-start

                lg:pl-2
              "
            >
              <div
                className="
                  relative

                  w-full

                  max-w-[580px]
                  xl:max-w-[620px]
                "
              >
                <Image
                  src="/Images/faq.png"
                  alt="Industrial Building"
                  width={620}
                  height={920}
                  priority
                  className="
                    w-full
                    h-auto

                    object-contain

                    scale-[1.66]

                    origin-center

                    drop-shadow-[0_35px_70px_rgba(0,0,0,0.16)]
                  "
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT FAQ */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="border-t border-[#DDDDDD]">
              {faqData.map((faq, index) => {
                const isOpen =
                  activeIndex === index;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="border-b border-[#DDDDDD]"
                  >
                    <button
                      onClick={() =>
                        toggleFAQ(index)
                      }
                      className="
                        w-full

                        flex
                        items-start

                        gap-4

                        py-6

                        text-left

                        group
                      "
                    >
                      {/* Number */}
                      <span
                        className="
                          text-[14px]
                          sm:text-[15px]

                          font-semibold

                          text-[#CC000A]

                          min-w-[34px]

                          pt-[2px]
                        "
                      >
                        {faq.id}
                      </span>

                      {/* Content */}
                      <div className="flex-1 pr-4">
                        <h3
                          className="
                            text-[17px]
                            sm:text-[19px]

                            leading-[30px]

                            font-semibold

                            text-black

                            transition-all
                            duration-300

                            group-hover:text-[#CC000A]
                          "
                        >
                          {faq.question}
                        </h3>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height:
                                  "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="overflow-hidden"
                            >
                              <p
                                className="
                                  pt-4

                                  text-[15px]
                                  sm:text-[16px]

                                  leading-[28px]

                                  text-[#6B6B6B]

                                  max-w-[900px]
                                "
                              >
                                {
                                  faq.answer
                                }
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Icon */}
                      <div
                        className={`
                          min-w-[30px]
                          h-[30px]

                          rounded-full

                          flex
                          items-center
                          justify-center

                          transition-all
                          duration-300

                          mt-1

                          ${
                            isOpen
                              ? "bg-[#CC000A] text-white"
                              : "bg-[#ECECEC] text-[#8D8D8D]"
                          }
                        `}
                      >
                        {isOpen ? (
                          <X
                            size={14}
                            strokeWidth={
                              2.5
                            }
                          />
                        ) : (
                          <Plus
                            size={14}
                            strokeWidth={
                              2.5
                            }
                          />
                        )}
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}