"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    id: "01",
    question:
      "What are PEB steel structure contractors and what advantages do PEB buildings offer?",
    answer:
      "PEB steel structure contractors design, manufacture, and erect engineered steel building systems for industrial applications. PEB buildings offer faster construction, large clear spans, structural efficiency, and flexibility for future expansion.",
  },
  {
    id: "02",
    question: "What should I look for in pre engineered building manufacturers?",
    answer:
      "Choose pre engineered building manufacturers with strong engineering capabilities, advanced fabrication facilities, quality systems, and proven industrial experience. Mekark integrates engineering and in-house manufacturing to maintain better control over structural quality.",
  },
  {
    id: "03",
    question:
      "How do I choose the right pre engineered building company for my project?",
    answer:
      "A reliable pre engineered building company should have experienced engineers, manufacturing capabilities, quality control, and project execution expertise. Mekark provides an integrated approach from structural design and fabrication to erection and completion.",
  },
  {
    id: "04",
    question:
      "What is the difference between PEB contractors and a PEB building manufacturer?",
    answer:
      "PEB contractors typically manage site execution and erection, while a PEB building manufacturer focuses on engineering and fabrication of structural components. Mekark combines manufacturing and project execution to provide an integrated PEB solution.",
  },
  {
    id: "05",
    question:
      "Why choose a turnkey industrial construction company for an industrial project?",
    answer:
      "A turnkey industrial construction company manages multiple project requirements through a single coordinated execution process. This can include engineering, procurement, civil construction, PEB, MEP, utilities, and project handover.",
  },
  {
    id: "06",
    question:
      "What services do industrial building contractors and an EPC contractor provide?",
    answer:
      "Industrial building contractors can handle structural and civil construction for factories, warehouses, and industrial facilities. An EPC contractor can additionally coordinate engineering, procurement, construction, MEP, utilities, and complete project execution.",
  },
  {
    id: "07",
    question:
      "Can PEB contractors in Chennai handle large industrial steel building construction projects?",
    answer:
      "Yes. Experienced PEB contractors in Chennai can design and execute large industrial steel building construction projects based on span, height, loading, crane requirements, wind conditions, and site-specific structural requirements.",
  },
  {
    id: "08",
    question:
      "Are PEB manufacturers in Chennai suitable for customized industrial buildings?",
    answer:
      "Yes. PEB manufacturers in Chennai can engineer customized structures for manufacturing plants, warehouses, logistics facilities, and other industrial applications. Building dimensions, equipment loads, mezzanines, openings, and future expansion can be incorporated into the design.",
  },
  {
    id: "09",
    question:
      "Can PEB manufacturers in Coimbatore and PEB contractors in Coimbatore handle industrial projects?",
    answer:
      "Yes. PEB manufacturers in Coimbatore and PEB contractors in Coimbatore can deliver engineered steel solutions for factories, warehouses, and large-span industrial facilities, subject to the project's design, site, and execution requirements.",
  },
  {
    id: "10",
    question:
      "Why choose Mekark as an industrial construction company and industrial project contractor?",
    answer:
      "Mekark combines engineering expertise, in-house manufacturing, PEB construction, civil works, and integrated project execution. As an industrial construction company and industrial project contractor, Mekark provides a coordinated approach from design and procurement through construction and handover.",
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
                text-[28px]
                sm:text-[40px]
                lg:text-[56px]

                leading-[1.05]
                sm:leading-[0.95]

                font-bold

                tracking-[-1px]
                sm:tracking-[-2px]

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
                  src="/Images/faq.webp"
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