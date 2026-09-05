"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Ruler,
  Factory,
  ShieldCheck,
  HardHat,
  Truck,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Requirement Discussion",
    desc: "Understanding client needs & site conditions.",
    icon: ClipboardCheck,
  },
  {
    id: "02",
    title: "Structural Design",
    desc: "3D analysis & approval of drawings",
    icon: Ruler,
  },
  {
    id: "03",
    title: "PEB Manufacturing",
    desc: "Precision fabrication in our unit.",
    icon: Factory,
  },

  {
    id: "04",
    title: "On-Site Installation",
    desc: "Safe and fast erection by certified team.",
    icon: HardHat,
  },
  {
    id: "05",
    title: "Quality Check",
    desc: "Rigorous inspection of materials.",
    icon: Truck,
  },
  {
    id: "06",
    title: "Final Handover",
    desc: "Project delivery on time, every time.",
    icon: ShieldCheck,
  },
];

export default function ManufacturingProcess() {
  return (
    <section id="process"
      className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[760px]"
        >
          {/* LABEL */}
          <p
            className="
              font-space-grotesk
              text-[12px]
              
              uppercase
              leading-[16px]
              tracking-[1.2px]
              text-[#ED1D23]
            "
          >
            Step by Step
          </p>

          {/* HEADING */}
          <h2
            className="
              mt-5
              font-manrope
              text-[28px]
              font-bold
              leading-[34px]
              tracking-[-1px]
              text-[#0F172A]

              sm:text-[38px]
              sm:leading-[44px]

              lg:text-[50px]
              lg:leading-[55px]
              lg:tracking-[-1.8px]
            "
          >
            Our PEB{" "}
            <span className="text-[#ED1D23]">
              Manufacturing Process
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-[669px]
              font-inter
              text-[16px]
              font-normal
              leading-[28px]
              text-[#64748B]
            "
          >
            From first consultation to final handover — a proven
            6-step process for on-time delivery.
          </p>
        </motion.div>

        {/* PROCESS SECTION */}
        <div className="relative mt-16">
          {/* CONNECTING LINE */}
          <div
            className="
              absolute
              left-0
              right-0
              top-[62px]
              hidden
              h-[1px]
              bg-[#DDD6D8]

              lg:block
            "
          />

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              gap-10

              sm:grid-cols-2

              lg:grid-cols-6
              lg:gap-8
            "
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* ICON BOX */}
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                    }}
                    className="
      relative
      z-10
      flex
      h-[136px]
      w-[136px]
      items-center
      justify-center
      rounded-[24px]
      border
      border-[#E5DFE1]
      bg-[#F7F7F7]
      shadow-[0px_10px_30px_rgba(0,0,0,0.03)]

      transition-all
      duration-300

      group-hover:border-[#ED1D23]
      group-hover:bg-[#ED1D23]

      mx-auto

      lg:mx-0
    "
                  >
                    <Icon
                      className="
        h-12
        w-12
        text-[#ED1D23]
        transition-all
        duration-300

        group-hover:text-white
      "
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <div
                    className="
      mt-7
      text-center

      lg:text-left
    "
                  >
                    {/* NUMBER */}
                    <p
                      className="
        font-space-grotesk
        text-[20px]
        font-bold
        leading-[16px]
        tracking-[0px]
        text-[#ED1D23]
      "
                    >
                      {step.id}
                    </p>

                    {/* TITLE */}
                    <h3
                      className="
        mt-4
        max-w-[160px]
        font-manrope
        text-[16px]
        font-bold
        leading-[20px]
        text-[#111111]

        mx-auto

        lg:mx-0
      "
                    >
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
        mt-4
        max-w-[170px]
        font-manrope
        text-[14px]
        font-normal
        leading-[20px]
        text-[#64748B]

        mx-auto

        lg:mx-0
      "
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}