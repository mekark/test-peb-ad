"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import IndustryTypeSelect from "./IndustryTypeSelect";

const THANK_YOU_URL = "https://peb.mekark.com/thank-you";
const FORM_ENDPOINT = "/api/enquiry-form";

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

const WHATSAPP_NUMBER = "919790924754";

const PHONE_NUMBER = "+919790924754";

export default function ProjectCTASection() {
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
    details: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement
    >
  ) => {
    let value = e.target.value;
  
    if (e.target.name === "phone") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 10);
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.industry) {
      newErrors.industry = "Select industry type";
    }

    if (!formData.sqft) {
      newErrors.sqft = "Select sq.ft requirement";
    }

    if (!formData.projectTimeline) {
      newErrors.projectTimeline = "Select project start timeline";
    }

    if (!formData.projectBudget) {
      newErrors.projectBudget = "Select project budget";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const requestPayload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        location: formData.location.trim(),
        industry: formData.industry.trim(),
        sqf: formData.sqft.trim(),
        startTimeline: formData.projectTimeline.trim(),
        budget: formData.projectBudget.trim(),
        message: formData.details.trim(),
        sourceUrl: window.location.href,
        pageUrl: window.location.href,
      };

      console.log("REQUEST PAYLOAD:", requestPayload);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      });

      const payload = await response.json().catch(() => null);

      console.log("RESPONSE:", payload);

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
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Images/footerbg.webp"
          alt="Industrial Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#020817]/80" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(228,0,21,0.08)_0%,rgba(228,0,21,0.30)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-14 items-center">
          {/* LEFT */}
          <div className="max-w-[680px]">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
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
                mb-8
              "
            >
              <span className="text-[13px] font-semibold leading-[19.5px] text-[#CC000A]">
                Start Your Project
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
                text-white
                text-[28px]
                sm:text-[42px]
                lg:text-[56px]
                leading-[1.1]
                tracking-[-1px]
                sm:tracking-[-2px]
                font-bold
                max-w-[720px]
              "
            >
              Let’s build it{" "}
              <span className="text-[#E40015]">
                faster,
                <br />
                smarter, better.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="
                mt-8
                text-white/70
                text-[17px]
                sm:text-[18px]
                leading-[30px]
                font-medium
                max-w-[520px]
              "
            >
              Share your requirement — our engineering team responds with a
              layout, BOQ and timeline.
            </motion.p>

            {/* Cards */}
            <div className="mt-10 space-y-5">
              {/* CALL */}
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  group
                  w-full
                  max-w-[520px]
                  min-h-[90px]
                  rounded-[22px]
                  border
                  border-black/5
                  bg-[#212121]
                  px-5
                  py-5
                  flex
                  items-center
                  justify-between
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-[18px]
                      bg-[#CC000A]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Phone className="text-white" size={22} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[#A9A9A9]
                        text-[12px]
                        font-bold
                        uppercase
                        tracking-[0.6px]
                      "
                    >
                      Call Now
                    </p>

                    <h4
                      className="
                        text-white
                        text-[18px]
                        font-bold
                        leading-[24px]
                        tracking-[-0.4px]
                        mt-1
                      "
                    >
                      +91 97909 24754
                    </h4>
                  </div>
                </div>

                <ArrowUpRight
                  className="
                    text-white/60
                    group-hover:text-white
                  "
                  size={22}
                />
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  group
                  w-full
                  max-w-[520px]
                  min-h-[90px]
                  rounded-[22px]
                  border
                  border-black/5
                  bg-[#212121]
                  px-5
                  py-5
                  flex
                  items-center
                  justify-between
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-[18px]
                      bg-[#CC000A]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Image
                      src="/Images/ws.webp"
                      alt="WhatsApp"
                      width={26}
                      height={26}
                    />
                  </div>

                  <h4
                    className="
                      text-white
                      text-[18px]
                      font-bold
                    "
                  >
                    WhatsApp Us Now
                  </h4>
                </div>

                <ArrowUpRight
                  className="
                    text-white/60
                    group-hover:text-white
                  "
                  size={22}
                />
              </motion.a>
            </div>

            {/* ADDRESS */}
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
                mt-10
                flex
                items-start
                gap-4
                max-w-[560px]
              "
            >
              <MapPin className="text-[#E40015] mt-1" size={30} />

              <p
                className="
                  text-white
                  text-[16px]
                  leading-[24px]
                  font-medium
                "
              >
                Mekark Polyhouse Tower, 5th Floor, Anna Salai, Little Mount,
                Guindy, Chennai - 600032
              </p>
            </motion.div>
          </div>

          {/* RIGHT FORM */}
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
            className="
              bg-[#F7F7F7]
              rounded-[30px]
              p-6
              sm:p-8
              lg:p-10
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            "
          >
            {/* Heading */}
            <div className="text-center">
              <h3
                className="
                  text-[#121212]
                  text-[28px]
                  font-bold
                "
              >
                Request Your Project Blueprint
              </h3>

              <p
                className="
                  text-[#8B8B8B]
                  text-[14px]
                  mt-2
                "
              >
                Get a custom layout, cost range & 150-day timeline
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              id="quote-form"
              className="mt-8 space-y-4"
            >
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
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
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
                    value={formData.phone}
                    maxLength={10}
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
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
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
                  <IndustryTypeSelect
                    value={formData.industry}
                    onChange={(value) =>
                      handleChange({
                        target: { name: "industry", value },
                      } as React.ChangeEvent<HTMLSelectElement>)
                    }
                  />

                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* SQFT */}
                <div>
                  <IndustryTypeSelect
                    value={formData.sqft}
                    options={sqftOptions}
                    placeholder="Select Sq.ft Requirement*"
                    onChange={(value) =>
                      handleChange({
                        target: { name: "sqft", value },
                      } as React.ChangeEvent<HTMLSelectElement>)
                    }
                  />

                  {errors.sqft && (
                    <p className="text-red-500 text-sm mt-2">{errors.sqft}</p>
                  )}
                </div>

                {/* PROJECT TIMELINE */}
                <div>
                  <IndustryTypeSelect
                    value={formData.projectTimeline}
                    options={timelineOptions}
                    placeholder="Project Start Timeline*"
                    onChange={(value) =>
                      handleChange({
                        target: { name: "projectTimeline", value },
                      } as React.ChangeEvent<HTMLSelectElement>)
                    }
                  />

                  {errors.projectTimeline && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.projectTimeline}
                    </p>
                  )}
                </div>

                {/* PROJECT BUDGET */}
                <div>
                  <IndustryTypeSelect
                    value={formData.projectBudget}
                    options={budgetOptions}
                    placeholder="Project Budget*"
                    onChange={(value) =>
                      handleChange({
                        target: { name: "projectBudget", value },
                      } as React.ChangeEvent<HTMLSelectElement>)
                    }
                  />

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
                  name="details"
                  value={formData.details}
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

              <p
                className="
                  text-center
                  text-[#8B8B8B]
                  text-[12px]
                  mt-4
                "
              >
                100% Transparent Consultation with single point project support
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
