"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ArrowUpRight,
    Warehouse,
    Factory,
    Cog,
    Building,
    Snowflake,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectors = [
    {
        id: "01",
        title: "Warehouse & Logistics",
        icon: Warehouse,
        bg: "/Images/Spcl/ware.webp",
        heading: "Smart Warehousing Infrastructure",
        desc: "Built for velocity, accuracy, and seamless movement — redefining modern storage.",
        points: [
            "E-commerce Fulfillment Hubs",
            "High-Capacity Storage Bays",
            "Intelligent Distribution Networks",
            "Multi-Zone Logistics Facilities",
        ],
        footer:
            "Delivered by advanced PEB manufacturers in Chennai, ensuring faster execution and optimized layouts.",
    },
    {
        id: "02",
        title: "Factories, Industries & Plants",
        icon: Factory,
        bg: "/Images/Spcl/fact.webp",
        heading: "High-Performance Industrial Facilities",
        desc: "Engineered environments for continuous production and operational excellence.",
        points: [
            "Heavy Engineering Plants",
            "Steel Processing Facilities",
            "Heavy Engineering Plants",
            "Advanced Electronics Manufacturing",
        ],
        footer:
            "Crafted by expert pre engineered building manufacturers in India with unmatched structural precision.",
    },
    {
        id: "03",
        title: "Manufacturing",
        icon: Cog,
        bg: "/Images/Spcl/MAnu.webp",
        heading: "Future-Ready Production Spaces",
        desc: "Where innovation meets efficiency in every square meter.",
        points: [
            "Automotive Production Units",
            "Chemical & FMCG Processing Units",
            "Pharma & Clean Manufacturing Zones",
            "Textile & Export Manufacturing",
        ],
        footer:
            "Powered by a trusted peb construction company focused on durability and scalability.",
    },
    {
        id: "04",
        title: "Multi Storey Steel Buildings",
        icon: Building,
        bg: "/Images/Spcl/Multi.webp",
        heading: "Vertical Steel Infrastructure",
        desc: "Optimized for urban expansion and structural excellence.",
        points: [
            "Corporate & Commercial Towers",
            "Premium Office Complexes",
            "Healthcare & Institutional Buildings",
            "Hospitality Developments",
        ],
        footer:
            "Designed by leading pre engineered steel building manufacturers for strength without compromise.",
    },
    {
        id: "05",
        title: "Clean Rooms & Cold Storage",
        icon: Snowflake,
        bg: "/Images/Spcl/cold.webp",
        heading: "Temperature-Controlled Engineering",
        desc: "Precision-built environments preserving quality, safety, and compliance.",
        points: [
            "Food Grade Cold Warehousing",
            "Pharmaceutical Storage Units",
            "Clean Room Infrastructure",
            "Controlled Atmosphere Facilities",
        ],
        footer:
            "Executed by a specialized industrial PEB manufacturer ensuring thermal efficiency and reliability.",
    },
];

export default function SpecializedSectors() {
    const [activeSector, setActiveSector] = useState(0);
    const ActiveIcon = sectors[activeSector].icon;

    return (
        <section id="industries"
            className="relative overflow-hidden bg-black py-20 lg:py-28">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={sectors[activeSector].bg}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={sectors[activeSector].bg}
                            alt="sector bg"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[520px_1fr] lg:items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        {/* Top Label */}
                        <p
                            className="
                mb-8
                text-[11px]
                font-semibold
                uppercase
                tracking-[4px]
                text-[#E30613]
              "
                        >
                            Specialized Solutions
                        </p>

                        {/* Heading */}
                        <h2
                            className="
                max-w-[475px]
                font-manrope
                text-[28px]
                font-bold
                leading-[34px]
                tracking-[-1px]
                text-white

                sm:text-[40px]
                sm:leading-[46px]

                lg:text-[52px]
                lg:leading-[56px]
                lg:tracking-[-1.2px]
              "
                        >
                            Specialized PEB Solutions{" "}
                            <span className="text-[#E30613]">Across 5 Sectors</span>
                        </h2>

                        {/* Sector List */}
                        <div className="mt-14 border-t border-white/10">
                            {sectors.map((sector, index) => (
                                <button
                                    key={index}
                                    onMouseEnter={() => setActiveSector(index)}
                                    className="
                    group
                    flex
                    w-full
                    items-start
                    justify-between
                    border-b
                    border-white/10
                    py-5
                    text-left
                    transition-all
                    duration-300
                  "
                                >
                                    <div className="flex gap-5">
                                        <span
                                            className="
                        mt-2
                        text-[10px]
                        text-white/40
                      "
                                        >
                                            {sector.id}
                                        </span>

                                        <h3
                                            className={`
                        max-w-[315px]
                        text-[26px]
                        leading-[34px]
                        transition-all
                        duration-300

                        lg:text-[28px]
                        lg:leading-[36px]

                        ${activeSector === index
                                                    ? "font-medium text-[#E30613]"
                                                    : "font-normal text-white"
                                                }
                      `}
                                        >
                                            {sector.title}
                                        </h3>
                                    </div>

                                    <ArrowUpRight
                                        className={`
                      mt-2
                      h-4
                      w-4
                      shrink-0
                      transition-all
                      duration-300

                      sm:h-5
                      sm:w-5

                      ${activeSector === index
                                                ? "text-[#E30613]"
                                                : "text-white/40"
                                            }
                    `}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        {/* Top Text */}
                        <p
                            className="
                mb-10
                max-w-[390px]
                text-[16px]
                font-normal
                leading-[24px]
                text-white/60
              "
                        >
                            Precision-built spaces crafted by a leading PEB company in
                            Chennai, delivering performance, speed, and scalability across
                            sectors.
                        </p>

                        {/* Glass Card */}
                        <div
                            className="
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-white/10
                bg-white/[0.08]
                p-8
                backdrop-blur-xl

                lg:p-10
              "
                        >
                            {/* Blur Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSector}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                    }}
                                    className="relative z-10"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#FF1F2D]

                      sm:h-12
                      sm:w-12

                      lg:h-14
                      lg:w-14
                    "
                                        >
                                            <ActiveIcon className="h-5 w-5 text-white sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                                        </div>

                                        <div>
                                            <p
                                                className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#FF2D3B]
                      "
                                            >
                                                {sectors[activeSector].id} / Sector
                                            </p>

                                            <h3
                                                className="
                        mt-2
                        text-[28px]
                        font-bold
                        leading-[36px]
                        tracking-[-0.6px]
                        text-white
                      "
                                            >
                                                {sectors[activeSector].heading}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="
                    mt-6
                    max-w-[720px]
                    text-[18px]
                    leading-[28px]
                    text-white/70
                  "
                                    >
                                        {sectors[activeSector].desc}
                                    </p>

                                    {/* Points */}
                                    <div className="mt-8 grid grid-cols-1 gap-y-5 gap-x-10 sm:grid-cols-2">
                                        {sectors[activeSector].points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="mt-1 h-8 w-[2px] bg-white/30" />

                                                <p
                                                    className="
                          text-[15px]
                          leading-[24px]
                          text-white/85
                        "
                                                >
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <p
                                        className="
                    mt-10
                    border-t
                    border-white/10
                    pt-6
                    text-[14px]
                    italic
                    leading-[24px]
                    text-white/45
                  "
                                    >
                                        {sectors[activeSector].footer}
                                    </p>
                                </motion.div>
                            </AnimatePresence>                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}