"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Factory,
  ShieldCheck,
  Building2,
  Users,
  Timer,
  Leaf,
  FolderKanban,
  BadgeDollarSign,
  Rocket,
} from "lucide-react";

const features = [
  {
    id: "01",
    title: "High-Capacity PEB Manufacturing",
    desc: "Large-scale PEB manufacturing capability for industrial projects, factories and warehouses.",
    icon: Crown,
    large: true,
  },
  {
    id: "02",
    title: "Fully Automated PEB Manufacturing",
    desc: "Advanced production lines ensure precision, consistency and faster manufacturing turnaround.",
    icon: Factory,
  },
  {
    id: "03",
    title: "30–40% Faster Project Delivery",
    desc: "Optimized PEB steel structures enable faster completion compared to conventional construction methods.",
    icon: Rocket,
  },
  {
    id: "04",
    title: "ISO-Certified Quality Assurance",
    desc: "Strict quality systems ensure reliable, safe and compliant PEB and industrial construction.",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "Large-Scale Manufacturing Infrastructure",
    desc: "Integrated manufacturing infrastructure designed for high-volume PEB production and industrial projects.",
    icon: Building2,
  },
  {
    id: "06",
    title: "Strong Engineering Expertise",
    desc: "Experienced engineering professionals deliver accurate design, efficient execution and project coordination.",
    icon: Users,
  },
  {
    id: "07",
    title: "Faster PEB Project Delivery",
    desc: "Optimized PEB systems help reduce project timelines while maintaining quality and structural performance.",
    icon: Timer,
  },
  {
    id: "08",
    title: "Cost-Effective Industrial Solutions",
    desc: "Efficient engineering and optimized PEB design help reduce material waste and overall project costs.",
    icon: BadgeDollarSign,
  },
  {
    id: "09",
    title: "End-to-End Project Execution",
    desc: "Single-point responsibility from PEB design and manufacturing to erection and turnkey project execution.",
    icon: FolderKanban,
  },
  {
    id: "10",
    title: "Sustainable Industrial Construction",
    desc: "Eco-conscious PEB solutions supporting efficient, future-ready factories, warehouses and industrial buildings.",
    icon: Leaf,
    highlight: true,
    wide: true,
    iconColor: "text-[#22C55E]",
  },
];

export default function WhyChooseMekark() {
  return (
    <section
      id="whychooseus"
      className="bg-[#F7F4F5] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* LEFT */}
          <div>
            <p
              className="
                text-[12px]
                font-normal
                uppercase
                leading-[16px]
                tracking-[1px]
                text-[#E50818]
              "
            >
              Market Leaders
            </p>

            <h2
              className="
                mt-5
                max-w-[760px]
                font-manrope
                text-[28px]
                font-bold
                leading-[34px]
                tracking-[-1px]
                text-black

                sm:text-[40px]
                sm:leading-[46px]

                lg:text-[56px]
                lg:leading-[62px]
                lg:tracking-[-2px]
              "
            >
              Why Top Industries{" "}
              <span className="text-[#E50818]">Choose Mekark</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[410px] lg:pb-4">
            <p
              className="
                text-left
                text-[16px]
                font-normal
                leading-[28px]
                text-[#322C2E]

                lg:text-right
              "
            >
              A trusted PEB manufacturer and industrial EPC contractor
              delivering high-capacity manufacturing, engineering expertise and
              end-to-end project execution.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className={`
  group
  relative
  overflow-hidden
  border
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-[#E50818]
  hover:shadow-[0px_20px_50px_rgba(229,8,24,0.12)]

  ${
    item.highlight
      ? "border-[#E50818] bg-[#F00014] text-white"
      : "border-[#E4DDDF] bg-white text-black"
  }

  ${item.large ? "lg:col-span-2" : item.wide ? "lg:col-span-2" : ""}

  rounded-[26px]
  p-7

  sm:p-8

  min-h-[260px]
`}
              >
                {/* HOVER GLOW */}
                <motion.div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                  "
                  transition={{ duration: 0.4 }}
                />

                {/* TOP */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`
                      flex
                      h-[64px]
                      w-[64px]
                      items-center
                      justify-center
                      rounded-2xl

                      ${item.highlight ? "bg-white/20" : "bg-[#FFE7EA]"}
                    `}
                  >
                    <Icon
                      className={`
                        h-8
                        w-8

                        ${
                          item.iconColor
                            ? item.iconColor
                            : item.highlight
                              ? "text-white"
                              : "text-[#E50818]"
                        }
                      `}
                    />
                  </motion.div>

                  {/* NUMBER */}
                  <span
                    className={`
                      font-['Space_Grotesk']
                      text-[16px]
                      font-bold
                      uppercase
                      leading-[16px]
                      tracking-[1.2px]

                      ${item.highlight ? "text-white" : "text-[#666666]"}
                    `}
                  >
                    {item.id}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className={`
                    relative
                    z-10
                    mt-10
                    max-w-[490px]
                    font-manrope
                    font-bold
                    leading-[1.15]

                    ${
                      item.large
                        ? "text-[30px] lg:text-[35px]"
                        : item.highlight
                          ? "text-[34px]"
                          : "text-[24px]"
                    }
                  `}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`
                    relative
                    z-10
                    mt-5
                    max-w-[520px]
                    text-[16px]
                    leading-[28px]

                    ${item.highlight ? "text-white/90" : "text-[#4E4749]"}
                  `}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
