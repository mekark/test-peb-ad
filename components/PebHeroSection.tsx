"use client";

import Image from "next/image";
import { Loader2, MessageCircle, Phone, Star } from "lucide-react";
import { useEffect, useState } from "react";

const industryOptions = [
  "Warehouse & Logistics",
  "Factories, Industries & Plants",
  "Manufacturing",
  "Multi Storey Steel",
  "Cold Storage",
];

const sqftOptions = [
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "50,000+ Sq.ft",
];

const timelineOptions = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
];

const budgetOptions = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
];

const THANK_YOU_URL = "https://peb.mekark.com/thank-you";
const FORM_ENDPOINT = "/api/enquiry-form";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 3900;

    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);

        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <>
      {count}
      <span className="text-[#E40015]">{suffix}</span>
    </>
  );
}

export default function PebHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    sqft: "",
    projectTimeline: "",
    projectBudget: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors: any = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    // INDUSTRY
    if (!formData.industry) {
      newErrors.industry = "Select industry type";
    }

    // SQFT
    if (!formData.sqft) {
      newErrors.sqft = "Select sq.ft range";
    }

    // PROJECT TIMELINE
    if (!formData.projectTimeline) {
      newErrors.projectTimeline = "Select project start timeline";
    }

    // PROJECT BUDGET
    if (!formData.projectBudget) {
      newErrors.projectBudget = "Select project budget";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("HANDLE SUBMIT STARTED");

    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          location: formData.location.trim(),
          industry: formData.industry.trim(),
          sqf: formData.sqft.trim(),
          startTimeline: formData.projectTimeline.trim(),
          budget: formData.projectBudget.trim(),
          message: formData.message.trim(),
          sourceUrl: window.location.href,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => null);

      console.log("Response:", payload);

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to submit form.");
      }

      window.location.href = THANK_YOU_URL;
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };
  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Images/HERO.png"
          alt="PEB Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* LEFT DARK GRADIENT */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(90deg,#000_0%,#000000f5_22%,#000000df_42%,rgba(0,0,0,0.45)_62%,transparent_100%)]
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full">
        <div
          className="
            max-w-[1720px]
            mx-auto

            px-5
            sm:px-8
            md:px-10
            xl:px-16
            2xl:px-20
          "
        >
          <div
            className="
min-h-screen

flex
items-start
lg:items-center

pt-[95px]
sm:pt-[105px]
md:pt-[115px]
lg:pt-[107px]

pb-14
lg:py-10
            "
          >
            {/* GRID */}
            <div
              className="
                w-full
                grid
                grid-cols-1

                lg:grid-cols-[1.08fr_0.92fr]

                items-center
                gap-10
                xl:gap-14
                2xl:gap-20
              "
            >
              {/* LEFT SIDE */}
              <div
                className="
                  w-full
                  max-w-[860px]
                "
              >
                {/* TOP BADGE */}
                <div
                  className="
    inline-flex
    items-center
    gap-1.5
    sm:gap-2

    rounded-full
    border border-white/20
    bg-black/40
    backdrop-blur-md

    px-2.5
    sm:px-5
    py-1.5
    sm:py-3

    mb-5 sm:mb-6

    max-w-full
    w-fit
  "
                >
                  {/* DOT */}
                  <div
                    className="
      w-1.5
      h-1.5
      sm:w-2
      sm:h-2

      rounded-full

      bg-[#E40015]

      shrink-0
    "
                  />

                  {/* TEXT */}
                  <span
                    className="
    text-white
    text-[9px]
    leading-none
    whitespace-nowrap

    sm:text-sm
    sm:leading-normal

    md:text-base

    font-medium
    font-manrope
  "
                  >
                    PEB Manufacturer & Turnkey Industrial Construction Company
                  </span>
                </div>

                {/* HEADING */}
                <h1
                  className="
    font-manrope

    font-semibold

    text-white

    text-[28px]
    leading-[34px]

    sm:text-[40px]
    sm:leading-[44px]

    md:text-[52px]
    md:leading-[56px]

    lg:text-[48px]
    lg:leading-[52px]

    xl:text-[50px]
    xl:leading-[54px]

    2xl:text-[58px]
    2xl:leading-[62px]

    tracking-[-1px]
    sm:tracking-[-1.5px]
  "
                >
                  Build Smarter & Faster with End-to-End
                  <br className="hidden sm:block" />
                  <span className="text-[#E40015]">
                    {" "}
                    PEB Manufacturing & Construction
                  </span>
                </h1>

                {/* SUBHEADING */}
                <h2
                  className="
                    mt-8

                    max-w-[760px]

                    font-manrope
                    text-white

                    text-[17px]
                    leading-[22px]

                    lg:text-[19px]
                    lg:leading-[23px]
                  "
                >
                  End-to-end PEB solutions for factories, warehouses and
                  industrial buildings. As a leading PEB manufacturer and PEB
                  contractor, we provide in-house design, manufacturing,
                  erection and turnkey industrial construction for industrial
                  projects
                </h2>

                {/* FEATURES */}
                <div className="mt-8 space-y-1 max-w-[760px]">
                  {[
                    "40,000+ MT Annual Manufacturing Capacity",
                    "450+ Industrial Projects Delivered",
                    "In-House Design, Manufacturing & Erection",
                    "ISO Certified PEB Manufacturing Facility",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {/* ARROW ICON */}
                      <div className="mt-[7px] flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 2L9 7L4 12"
                            stroke="#E40015"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* TEXT */}
                      <p
                        className="
          text-white/85
          font-inter

          text-[15px]
          leading-[28px]

          lg:text-[15px]
          lg:leading-[30px]
        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* REVIEW BADGE */}
                <div
                  className="
    mt-10

    inline-flex
    items-center
    gap-4

    rounded-2xl

    border
    border-white/10

    bg-white/10
    backdrop-blur-xl

    px-5
    py-4
  "
                >
                  {/* CLIENT LOGOS */}
                  <div className="flex -space-x-2">
                    <Image
                      src="/Images/Logos/kom.png"
                      alt="Client"
                      width={42}
                      height={42}
                      className="
        rounded-full
        border-2
        border-white
        object-cover
      "
                    />

                    <Image
                      src="/Images/Logos/sarvam.png"
                      alt="Client"
                      width={42}
                      height={42}
                      className="
        rounded-full
        border-2
        border-white
        object-cover
      "
                    />

                    <Image
                      src="/Images/Logos/vwu.png"
                      alt="Client"
                      width={42}
                      height={42}
                      className="
        rounded-full
        border-2
        border-white
        object-cover
      "
                    />
                  </div>

                  {/* REVIEW CONTENT */}
                  <div>
                    {/* STARS */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-[#FFB800] text-[#FFB800]"
                        />
                      ))}

                      <span className="text-white font-bold text-[18px] ml-2">
                        4.7/5
                      </span>
                    </div>

                    {/* TEXT */}
                    <p className="text-white/80 text-sm mt-1 font-medium">
                      Trusted Client Rating
                    </p>

                    <p className="text-white/60 text-xs mt-0.5">
                      500+ Successful Industrial Projects
                    </p>
                  </div>
                </div>

                {/* STATS SECTION */}
                <div
                  className="
    mt-10

    w-full
    max-w-[720px]

    border-t
    border-white/20

    pt-7

hidden
lg:grid
    grid-cols-2
    sm:grid-cols-4

    gap-y-8
    gap-x-6
  "
                >
                  {[
                    {
                      number: "450+",
                      label: "Projects",
                    },
                    {
                      number: "18+",
                      label: "Years Experience",
                    },
                    {
                      number: "40,000 t",
                      label: "Annual Production",
                    },
                    {
                      number: "400+",
                      label: "Engineering Team",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      {/* NUMBER */}
                      <h3
                        className="
          text-white

          text-[38px]
          sm:text-[42px]

          font-bold

          leading-none

          tracking-[-1px]
        "
                      >
                        {item.number.includes("t") ? (
                          <CountUp end={40000} suffix="t" />
                        ) : (
                          <CountUp end={parseInt(item.number)} suffix="+" />
                        )}
                      </h3>

                      {/* LABEL */}
                      <p
                        className="
          mt-3

          text-[#9A9A9A]

          text-[12px]

          font-semibold

          uppercase

          tracking-[0.8px]
        "
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div
                  className="mt-10 hidden
lg:flex flex-col sm:flex-row gap-5"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    flex
    items-center
    justify-center
    gap-3

    bg-[#E40015]
    hover:bg-red-700

    transition-all
    duration-300

    rounded-2xl

    px-10
    py-5

    text-white
    font-bold

    text-lg

    shadow-[0_0_45px_rgba(228,0,21,0.35)]
  "
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp Us
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="
hidden
lg:flex    items-center
    justify-center
    gap-3

    border
    border-white/20

    bg-black/20
    hover:bg-white/10

    backdrop-blur-md

    transition-all
    duration-300

    rounded-2xl

    px-10
    py-5

    text-white
    font-bold

    text-lg
  "
                  >
                    <Phone className="w-6 h-6" />
                    Call Us
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div
                className="
                  w-full
                  flex
                  justify-center
                  lg:justify-end
                  lg:-mt-4
                "
              >
                <div
                  className="
                    w-full

                    max-w-[640px]

                    bg-white

                    rounded-[36px]

                    shadow-[0_25px_80px_rgba(0,0,0,0.35)]

                    p-6
                    sm:p-8
                    lg:p-10
                  "
                >
                  {/* TITLE */}
                  <h3
                    className="
                      text-center
                      font-manrope
                      font-bold
                      text-black

                      text-[22px]
                      leading-[28px]

                      sm:text-[28px]
                      sm:leading-[34px]

                      lg:text-[30px]
                      lg:leading-[36px]

                      tracking-[-0.5px]
                      sm:tracking-[-1px]
                    "
                  >
                    Request Your Project Blueprint
                  </h3>

                  <p className="text-center text-gray-500 mt-2 sm:mt-3 text-[12px] sm:text-[15px] lg:text-[13px] whitespace-nowrap">
                    Get a custom layout, cost range & 120-day* timeline
                  </p>
                  <p className="text-center text-gray-400 mt-1 text-[10px] sm:text-[11px]">
                    *T&amp;C apply
                  </p>

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    {/* NAME & COMPANY */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter Your Full Name*"
                          className="
                    w-full
                    h-[54px]
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    caret-black
                    outline-none
                    focus:border-[#D90916]
                    focus:bg-white
                    transition-all
                    duration-300
                  "
                        />

                        {errors.name && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter Company Name"
                        className="
                  w-full
                  h-[54px]
                  rounded-[10px]
                  border
                  border-[#E5E5E5]
                  bg-[#ECECEC]
                  px-4
                  text-[15px]
                  font-medium
                  text-black
                  placeholder:text-black/55
                  caret-black
                  outline-none
                  focus:border-[#D90916]
                  focus:bg-white
                  transition-all
                  duration-300
                "
                      />
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* PHONE */}
                      <div>
                        <input
                          type="text"
                          name="phone"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter Mobile Number*"
                          className="
                      w-full
                      h-[54px]
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      placeholder:text-black/55
                      caret-black
                      outline-none
                      focus:border-[#D90916]
                      focus:bg-white
                      transition-all
                      duration-300
                    "
                        />

                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* EMAIL */}
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                        className="
                    w-full
                    h-[54px]
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    caret-black
                    outline-none
                    focus:border-[#D90916]
                    focus:bg-white
                    transition-all
                    duration-300
                  "
                      />

                      {/* INDUSTRY */}
                      <div>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="
                      w-full
                      h-[54px]
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      caret-black
                      outline-none
                      focus:border-[#D90916]
                      focus:bg-white
                      transition-all
                      duration-300
                    "
                        >
                          <option value="">Select Industry Type*</option>

                          {[
                            "Warehouse & Logistics",
                            "Factories, Industries & Plants",
                            "Manufacturing",
                            "Multi Storey Steel",
                            "Cold Storage",
                          ].map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>

                        {errors.industry && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.industry}
                          </p>
                        )}
                      </div>

                      {/* SQFT */}
                      <div>
                        <select
                          name="sqft"
                          value={formData.sqft}
                          onChange={handleChange}
                          className="
                      w-full
                      h-[54px]
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      caret-black
                      outline-none
                      focus:border-[#D90916]
                      focus:bg-white
                      transition-all
                      duration-300
                    "
                        >
                          <option value="">Select Sq.ft Requirement*</option>

                          {[
                            "10,000 - 20,000 Sq.ft",
                            "20,000 - 30,000 Sq.ft",
                            "30,000 - 50,000 Sq.ft",
                            "50,000+ Sq.ft",
                          ].map((sqft) => (
                            <option key={sqft} value={sqft}>
                              {sqft}
                            </option>
                          ))}
                        </select>

                        {errors.sqft && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.sqft}
                          </p>
                        )}
                      </div>

                      {/* PROJECT TIMELINE */}
                      <div>
                        <select
                          name="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={handleChange}
                          className="
                      w-full
                      h-[54px]
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      caret-black
                      outline-none
                      focus:border-[#D90916]
                      focus:bg-white
                      transition-all
                      duration-300
                    "
                        >
                          <option value="">Project Start Timeline*</option>

                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        {errors.projectTimeline && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.projectTimeline}
                          </p>
                        )}
                      </div>

                      {/* PROJECT BUDGET */}
                      <div>
                        <select
                          name="projectBudget"
                          value={formData.projectBudget}
                          onChange={handleChange}
                          className="
                      w-full
                      h-[54px]
                      rounded-[10px]
                      border
                      border-[#E5E5E5]
                      bg-[#ECECEC]
                      px-4
                      text-[15px]
                      font-medium
                      text-black
                      caret-black
                      outline-none
                      focus:border-[#D90916]
                      focus:bg-white
                      transition-all
                      duration-300
                    "
                        >
                          <option value="">Project Budget*</option>

                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        {errors.projectBudget && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.projectBudget}
                          </p>
                        )}
                      </div>

                      {/* LOCATION */}
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter Project Location"
                        className="
                    w-full
                    h-[54px]
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    caret-black
                    outline-none
                    focus:border-[#D90916]
                    focus:bg-white
                    transition-all
                    duration-300
                  "
                      />

                      {/* DETAILS */}
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Requirement Details"
                        className="
                    w-full
                    h-[54px]
                    rounded-[10px]
                    border
                    border-[#E5E5E5]
                    bg-[#ECECEC]
                    px-4
                    text-[15px]
                    font-medium
                    text-black
                    placeholder:text-black/55
                    caret-black
                    outline-none
                    focus:border-[#D90916]
                    focus:bg-white
                    transition-all
                    duration-300
                  "
                      />
                    </div>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                  mt-3
                  w-full
                  h-[58px]
                  rounded-[12px]
                  bg-[#D90916]
                  text-white
                  text-[16px]
                  font-bold
                  shadow-[0_10px_30px_rgba(217,9,22,0.35)]
                  transition-all
                  duration-300
                  hover:scale-[1.01]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  disabled:hover:scale-100
                  flex
                  items-center
                  justify-center
                  gap-2
                "
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Get My Free Quote →"
                      )}
                    </button>
                  </form>

                  {/* FOOTER */}
                  <p className="text-center text-gray-400 text-sm mt-5">
                    100% Transparent Consultation with single point project
                    support
                  </p>
                </div>
              </div>
              {/* MOBILE BUTTONS + STATS */}
              <div className="lg:hidden w-full mt-6">
                {/* MOBILE BUTTONS */}
                <div className="flex flex-col gap-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        w-full

        flex
        items-center
        justify-center
        gap-3

        bg-[#E40015]
        hover:bg-red-700

        transition-all
        duration-300

        rounded-2xl

        px-6
        py-4

        text-white
        font-bold

        text-[15px]

        shadow-[0_0_45px_rgba(228,0,21,0.35)]
      "
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="
        w-full

        flex
        items-center
        justify-center
        gap-3

        border
        border-white/20

        bg-black/20
        hover:bg-white/10

        backdrop-blur-md

        transition-all
        duration-300

        rounded-2xl

        px-6
        py-4

        text-white
        font-bold

        text-[15px]
      "
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </div>

                {/* MOBILE STATS */}
                <div
                  className="
      mt-8

      border-t
      border-white/20

      pt-7

      grid
      grid-cols-2

      gap-y-8
      gap-x-6
    "
                >
                  {[
                    {
                      number: "450+",
                      label: "Projects",
                    },
                    {
                      number: "15+",
                      label: "Years Experience",
                    },
                    {
                      number: "40,000 t",
                      label: "Annual Production",
                    },
                    {
                      number: "300+",
                      label: "Engineering Team",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h3
                        className="
            text-white

            text-[28px]

            font-bold

            leading-none

            tracking-[-1px]
          "
                      >
                        {item.number.includes("t") ? (
                          <CountUp end={40000} suffix="t" />
                        ) : (
                          <CountUp end={parseInt(item.number)} suffix="+" />
                        )}
                      </h3>

                      <p
                        className="
            mt-3

            text-[#9A9A9A]

            text-[10px]

            font-semibold

            uppercase

            tracking-[0.8px]
          "
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
