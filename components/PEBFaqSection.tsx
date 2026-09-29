"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "Why choose MEKARK as a PEB contractor?",
    answer:
      "As a PEB building contractor, MEKARK manages the execution of projects of pre-engineered steel building contractor, including structural coordination with PEB steel structure contractor, erection, installation and site activities. MEKARK combines engineering, in-house manufacturing and on-site execution to provide PEB steel building contractor with solutions for PEB industrial and commercial building projects.",
  },
  {
    question: "How to choose the right turnkey PEB contractor?",
    answer:
      "While choosing turnkey PEB contractor & turnkey PEB constructor, consider engineering capability, manufacturing infrastructure, quality systems, pre-fabricated building constructor erection capability. MEKARK provides end to end responsibility with a single pre-fabricated building constructor team for delivering wide range of custom steel buildings, pre manufactured steel buildings & steel fabricated buildings.",
  },
  {
    question: "What types of projects can PEB contractors handle?",
    answer:
      "PEB contractors and PEB steel building contractors can execute commercial steel building and engineered steel building projects such as factories, warehouses, logistics facilities, manufacturing units, plants, cold storages, PEB industrial and commercial buildings. MEKARK undertakes PEB construction company projects for a wide range of PEB industrial and commercial building applications for pre-fabricated building constructors & pre engineered building contractors.",
  },
  {
    question: "What does a PEB construction company provide?",
    answer:
      "A PEB construction company and PEB construction contractor provides engineering and pre-fabricated building constructor services required to deliver pre-engineered steel buildings. Depending on the project scope, this can include PEB steel structure design, PEB manufacturing, procurement, quality inspection, transportation, erection and final handover of PEB construction contractor projects.",
  },
  {
    question:
      "Why PEB construction company for industrial and commercial buildings?",
    answer:
      "A specialized PEB construction contractor company can integrate PEB Steel structure engineering, prefabricated steel building components and efficient site erection into one coordinated pre engineered building system. PEB construction is well suited for PEB industrial and commercial building projects requiring large, efficient building spaces.",
  },
  {
    question: "Can a PEB construction company customize tailor-made?",
    answer:
      "Yes. A PEB construction company can engineer the pre-engineered building according to project requirements such as steel fabricated building dimensions, clear span, height, loading requirements, functional use and future expansion plans. MEKARK begins by understanding the client's requirements and site conditions before PEB steel structure design and peb manufacturing.",
  },
  {
    question: "What is a PEB manufacturer?",
    answer:
      "A PEB manufacturer or pre engineered steel building manufacturer manufactures the pre-engineered steel building components required for a pre-engineered steel building contractor company. The process typically involves approved structural designs, precision steel fabrication, quality checks before the components are transported to the turnkey industrial construction project site for erection.",
  },
  {
    question: "What is the difference — PEB manufacturer vs PEB contractor?",
    answer:
      "A PEB manufacturer primarily manufactures the pre-engineered steel building components, while a PEB contractor manages pre engineered steel building project execution, including erection, installation and site activities. MEKARK combines both capabilities with in-house PEB steel structure manufacturing, engineering and turnkey PEB constructor services for end-to-end custom steel building project execution.",
  },
  {
    question: "Why a PEB manufacturer with in-house manufacturing capability?",
    answer:
      "PEB manufacturer with in-house manufacturing capability can improve coordination between engineering, fabrication, quality control and project execution. MEKARK has its own manufacturing facility and integrates PEB manufacturing with engineering and on-site erection for PEB industrial and commercial building projects.",
  },
  {
    question: "What is turnkey PEB construction?",
    answer:
      "Turnkey PEB construction provides multiple stages to a pre-engineered steel building contractor's project with a coordinated project delivery approach. It covers requirement analysis, structural design, procurement, PEB manufacturing, quality control, installation, and final handover to a wide range of industrial steel building contractors, PEB warehouse contractors, PEB factory contractors, and industrial building contractors.",
  },
  {
    question: "What are the advantages of choosing a turnkey PEB contractor?",
    answer:
      "A turnkey industrial PEB contractor or turnkey steel building contractor provides a single point of responsibility, reduces coordination gaps between pre engineered steel building manufacturer & site execution, gives the customer one pre engineered building company to work with from pre engineered industrial building project planning through erection and handover of pre engineered commercial building.",
  },
  {
    question: "Does MEKARK provide end-to-end turnkey PEB construction?",
    answer:
      "Yes. MEKARK provides turnkey PEB contractor and turnkey industrial construction services for pre engineered commercial buildings, supported by in-house PEB manufacturing and on-site erection capabilities. MEKARK manages the PEB EPC contractor projects with end-to-end process for turnkey industrial constructions and pre engineered commercial buildings.",
  },
];

export default function PEBFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqId = useId();

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="relative z-10 overflow-hidden bg-[#F9F6F7] py-8 lg:overflow-clip lg:py-16 3xl:py-[95px]">
      <div className="section-container-wide grid h-full min-h-0 w-full max-w-[1706px] grid-cols-1 items-start gap-6 lg:max-w-[1920px] lg:grid-cols-[minmax(0,692fr)_minmax(0,912fr)] lg:items-start lg:gap-12 xl:gap-16 2xl:max-w-[1920px] 2xl:gap-20 3xl:max-w-[1920px] 3xl:gap-[101.333px] 3xl:px-[106.667px]">
        <div className="relative min-h-0 lg:sticky lg:top-24 lg:self-start 2xl:top-[95px]">
          <div className="flex flex-col items-start gap-3 px-5 py-1.5 lg:gap-[25.467px] lg:px-0 lg:py-0">
            <div className="inline-flex items-center rounded-full border border-[#FCD5D0] bg-[#FEEAE7] px-[18.67px] py-2 lg:border-[1.333px] lg:px-5 lg:py-[9.333px]">
              <span className="font-manrope text-[14px] font-semibold leading-[22px] text-[#CC000A] lg:text-[16px] lg:leading-[26px]">
                FAQ
              </span>
            </div>

            <h2 className="font-manrope text-[28px] font-bold leading-8 text-[#070506] lg:text-[40px] lg:leading-[50px] xl:text-[48px] xl:leading-[60px] 2xl:text-[56px] 2xl:leading-[70px] 3xl:text-[66px] 3xl:leading-[81.6px]">
              Frequently asked
              <span className="block text-[#CC000A]">questions.</span>
            </h2>

            <p className="font-manrope text-[16px] font-medium leading-[23px] text-[#64748B] lg:text-[20px] lg:leading-[30px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[24px] 3xl:leading-[37.333px]">
              Everything you need to know about PEB
              <span className="block">
                construction and our manufacturing capability.
              </span>
            </p>
          </div>

          <div className="relative mt-0 h-[220px] w-full overflow-hidden lg:mt-10 lg:h-auto lg:overflow-visible">
            <Image
              src="/Images/faq-720.webp"
              alt="Industrial steel building"
              width={720}
              height={480}
              sizes="(max-width: 1023px) 100vw, 720px"
              quality={70}
              className="h-full w-full object-cover lg:hidden"
            />
            <Image
              src="/Images/faq-desktop.png"
              alt="Multi-storey industrial steel building"
              width={946}
              height={631}
              sizes="(min-width: 1920px) 946px, 50vw"
              className="relative hidden lg:left-[-20.617%] lg:block lg:h-auto lg:w-[136.705%] lg:max-w-none lg:-scale-x-100"
            />
          </div>
        </div>

        <div className="w-full min-h-0 px-5 lg:px-0 3xl:pt-[15.333px]">
          <div className="flex w-full flex-col gap-3 pb-8 lg:gap-0 lg:pb-0">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;
              const number = `${index + 1}.`;
              const questionTone = isOpen
                ? "text-[#C4161C]"
                : "text-[#080808] group-hover:text-[#C4161C]";

              return (
                <div
                  key={faq.question}
                  className={`border-b border-[#E2E2E2] lg:border-b-[1.333px] lg:pb-[33.333px] ${
                    index > 0 ? "lg:pt-8" : ""
                  } ${isOpen ? "flex flex-col gap-2.5 lg:gap-[18.667px]" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    id={`${faqId}-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`${faqId}-answer-${index}`}
                    className="group flex w-full items-center justify-between gap-4 py-3 text-left lg:items-center lg:gap-6 lg:py-0"
                  >
                    <h3
                      className={`flex min-w-0 flex-1 items-start gap-0 font-manrope text-[16px] font-medium leading-6 transition-colors duration-300 lg:gap-2 lg:pr-4 lg:text-[18px] lg:leading-[26px] xl:text-[20px] xl:leading-[28px] 3xl:text-[24px] 3xl:leading-8 ${questionTone}`}
                    >
                      <span className="shrink-0 lg:min-w-[28px]">{number}</span>
                      <span className="min-w-0">{faq.question}</span>
                    </h3>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[18.667px] transition-colors duration-300 lg:h-[37.333px] lg:w-[37.333px] ${
                        isOpen
                          ? "bg-[#C4161C] text-[#F5F5F5]"
                          : "bg-[#F0F0F0] text-[#9A9A9A]"
                      }`}
                    >
                      {isOpen ? (
                        <X className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={2.4} />
                      ) : (
                        <Plus className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={2.4} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p id={`${faqId}-answer-${index}`} role="region" aria-labelledby={`${faqId}-question-${index}`} className="max-w-[876px] font-manrope text-[14px] font-medium leading-5 text-[#5A5A5A] lg:mx-auto lg:w-[96%] lg:text-[16px] lg:leading-[26px] xl:text-[18px] xl:leading-[28px] 3xl:text-[20px] 3xl:leading-[30px]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
