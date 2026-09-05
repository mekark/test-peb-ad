"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Quote,
    Star,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        title:
            "Industrial Warehouse | Logistics Company Owner",
        content:
            "We needed a large-scale warehouse built quickly without compromising quality. The team delivered a 50,000 sq. ft. pre-engineered structure in just 11 weeks — on time and within budget. The build quality is outstanding, and the after-sales support has been excellent. We've already placed an order for our second facility.",
        name: "Ramesh Subramaniam",
        role: "Director",
        location: "Chennai",
    },
    {
        id: 2,
        title:
            "Manufacturing Factory | Auto Components Firm",
        content:
            "Our production facility required precise engineering and a fast turnaround. Right from design to erection, the entire process was seamless. The PEB structure is sturdy, well-ventilated, and perfectly suited for our heavy machinery operations. I would recommend them without hesitation to any industrialist.",
        name: "Arvind Mehta",
        role: "MD",
        location: "Pune",
    },
    {
        id: 3,
        title:
            "Commercial Building | Retail Chain",
        content:
            "We were skeptical about using a pre-engineered structure for a commercial showroom, but the results exceeded every expectation. The aesthetics, column-free space, and natural lighting solutions transformed our retail experience. Our customers constantly compliment the look and feel of the building.",
        name: "Priya Nair",
        role: "CEO",
        location: "Bengaluru",
    },
    {
        id: 4,
        title:
            "Cold Storage Facility | Food Processing Unit",
        content:
            "Temperature-controlled construction is highly specialized, and this team handled every detail with expertise. Our cold storage plant was completed with proper insulation, vapor barriers, and structural integrity — all built to international standards. Downtime during construction was minimal, which was critical for our operations.",
        name: "Suresh Patel",
        role: "Operations Head",
        location: "Ahmedabad",
    },
    {
        id: 5,
        title:
            "Multi-Purpose Commercial Complex | Real Estate Developer",
        content:
            "As a developer, I have worked with several construction firms, but this PEB manufacturer stands apart in professionalism and execution. The speed of construction saved us nearly 4 months compared to conventional methods, and the cost savings were significant. The structure is robust, modern, and our tenants are extremely satisfied.",
        name: "K. Venkatesh",
        role: "Managing Partner",
        location: "Hyderabad",
    },
];

const AUTO_PLAY_MS = 6000;

const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

const cardVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
        scale: 0.96,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.4, ease: "easeIn" },
    }),
};

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [progressKey, setProgressKey] = useState(0);

    const goToSlide = useCallback((index: number, dir: number) => {
        setDirection(dir);
        setActiveIndex(index);
        setProgressKey((prev) => prev + 1);
    }, []);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1,
        );
        setProgressKey((prev) => prev + 1);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1,
        );
        setProgressKey((prev) => prev + 1);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, AUTO_PLAY_MS);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-white py-20 lg:py-28"
        >
            {/* Decorative background */}
            <motion.div
                animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#E40015]/[0.06] blur-[80px]"
            />
            <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-[#E40015]/[0.05] blur-[90px]"
            />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #E40015 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-14">
                {/* TOP */}
                <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                    <motion.div
                        variants={headerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-[760px]"
                    >
                        <motion.div
                            variants={headerItemVariants}
                            className="
                                mb-7
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#FCD5D0]
                                bg-[#FEEAE7]
                                px-[14px]
                                py-[6px]
                            "
                        >
                            <span className="text-[13px] font-semibold leading-[19.5px] text-[#CC000A]">
                                Client Testimonials
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={headerItemVariants}
                            className="
                                text-[28px]
                                font-bold
                                leading-[1.1]
                                tracking-[-1px]
                                text-[#121212]
                                sm:text-[42px]
                                sm:tracking-[-2px]
                                lg:text-[52px]
                            "
                        >
                            Trusted by{" "}
                            <span className="text-[#E40015]">
                                industrial leaders.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={headerItemVariants}
                            className="
                                mt-7
                                max-w-[620px]
                                text-[17px]
                                font-medium
                                leading-[30px]
                                text-[#666666]
                                sm:text-[18px]
                            "
                        >
                            Real experiences from manufacturers, developers,
                            logistics companies and industrial businesses across
                            India.
                        </motion.p>
                    </motion.div>

                    {/* Nav buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#E5E5E5]
                                bg-white
                                text-[#121212]
                                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                                transition-colors
                                duration-300
                                hover:border-[#E40015]
                                hover:text-[#E40015]
                            "
                        >
                            <ChevronLeft size={22} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E40015]
                                text-white
                                shadow-[0_8px_24px_rgba(228,0,21,0.3)]
                                transition-colors
                                duration-300
                                hover:bg-red-700
                            "
                        >
                            <ChevronRight size={22} />
                        </motion.button>
                    </motion.div>
                </div>

                {/* CAROUSEL */}
                <div className="relative min-h-[420px] overflow-hidden lg:min-h-[360px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeTestimonial.id}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="flex justify-center px-2"
                        >
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="
                                    relative
                                    w-full
                                    max-w-[980px]
                                    overflow-hidden
                                    rounded-[26px]
                                    border
                                    border-[#EFEFEF]
                                    bg-white
                                    p-6
                                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                                    sm:p-7
                                    lg:p-9
                                "
                            >
                                {/* Accent bar */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className="absolute top-0 left-0 h-1 w-full origin-left bg-[#E40015]"
                                />

                                {/* Quote */}
                                <motion.div
                                    animate={{ rotate: [0, -8, 0, 8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="
                                        absolute
                                        top-6
                                        right-6
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FEEAE7]
                                    "
                                >
                                    <Quote className="text-[#E40015]" size={24} />
                                </motion.div>

                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star, i) => (
                                        <motion.div
                                            key={star}
                                            initial={{ opacity: 0, scale: 0, rotate: -30 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{
                                                delay: 0.1 + i * 0.08,
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 12,
                                            }}
                                        >
                                            <Star className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.p
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="
                                        mt-5
                                        text-[11px]
                                        font-bold
                                        uppercase
                                        tracking-[1px]
                                        text-[#E40015]
                                        sm:text-xs
                                    "
                                >
                                    {activeTestimonial.title}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.28, duration: 0.5 }}
                                    className="
                                        mt-5
                                        text-[15px]
                                        font-medium
                                        leading-[30px]
                                        text-[#333333]
                                        sm:text-[17px]
                                        lg:text-[19px]
                                        lg:leading-[34px]
                                    "
                                >
                                    &ldquo;{activeTestimonial.content}&rdquo;
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.38, duration: 0.45 }}
                                    className="
                                        mt-8
                                        flex
                                        flex-col
                                        gap-5
                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                    "
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                delay: 0.42,
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 15,
                                            }}
                                            className="
                                                flex
                                                h-14
                                                w-14
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#E40015]
                                                text-lg
                                                font-bold
                                                text-white
                                            "
                                        >
                                            {activeTestimonial.name
                                                .split(" ")
                                                .map((word) => word[0])
                                                .slice(0, 2)
                                                .join("")}
                                        </motion.div>

                                        <div>
                                            <h4 className="text-[18px] font-bold text-[#121212] sm:text-[20px]">
                                                {activeTestimonial.name}
                                            </h4>
                                            <p className="mt-1 text-[13px] text-[#888888] sm:text-[14px]">
                                                {activeTestimonial.role} •{" "}
                                                {activeTestimonial.location}
                                            </p>
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                        className="
                                            text-[48px]
                                            font-bold
                                            leading-none
                                            text-[#F0F0F0]
                                            lg:text-[70px]
                                        "
                                    >
                                        0{activeIndex + 1}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots + progress */}
                <div className="mt-10 flex flex-col items-center gap-5">
                    <div className="flex items-center justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => goToSlide(index, index > activeIndex ? 1 : -1)}
                                className={`
                                    rounded-full
                                    transition-all
                                    duration-300
                                    ${activeIndex === index
                                        ? "h-3 w-10 bg-[#E40015]"
                                        : "h-3 w-3 bg-[#DDDDDD] hover:bg-[#CCCCCC]"
                                    }
                                `}
                            />
                        ))}
                    </div>

                    <div className="h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-[#EFEFEF]">
                        <motion.div
                            key={progressKey}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: AUTO_PLAY_MS / 1000, ease: "linear" }}
                            className="h-full rounded-full bg-[#E40015]/40"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
