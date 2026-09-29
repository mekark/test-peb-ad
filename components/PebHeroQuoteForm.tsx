"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import IndustryTypeSelect from "./IndustryTypeSelect";
import styles from "./PebHeroSection.module.css";

export const QUOTE_FORM_ID = "quote-form";

const sqftOptions = [
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  " Above 50,000 Sq.ft",
];

const THANK_YOU_URL = "https://peb.mekark.com/thank-you";
const FORM_ENDPOINT = "/api/enquiry-form";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClassName =
  "h-auto min-h-[46px] w-full rounded-[8px] border border-[#E2E2E2] bg-[#F0F0F0] px-[18px] py-[14px] text-[12px] font-normal text-black caret-black outline-none transition-all duration-300 placeholder:text-[#757575] focus:border-[#C4161C] focus:bg-white lg:h-[46px] lg:px-4 lg:py-0 lg:text-[12px] lg:font-medium xl:text-[13px] 2xl:h-[48px] 2xl:text-[13px] 3xl:min-h-[46px] 3xl:px-[19px] 3xl:text-[12px]";
const labelClassName =
  "sr-only font-manrope text-[14px] font-bold text-white lg:not-sr-only lg:mb-1.5 lg:block lg:text-[12px] xl:text-[13px] 2xl:text-[13px] 3xl:mb-[7px] 3xl:text-[14px]";

export default function PebHeroQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    sqft: "",
    projectBudget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
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

    setFormData((current) => ({
      ...current,
      [e.target.name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (formData.email.trim() && !EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.industry) {
      newErrors.industry = "Select industry type";
    }

    if (!formData.sqft) {
      newErrors.sqft = "Select sq.ft range";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          startTimeline: "",
          budget: formData.projectBudget.trim(),
          message: formData.message.trim(),
          sourceUrl: window.location.href,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => null);

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
    <div
      id={QUOTE_FORM_ID}
      className={`${styles.formPanel} mx-auto w-full max-w-[560px] rounded-[24px] border border-white/10 bg-white/[0.01] px-5 py-6 shadow-[0_26px_88px_rgba(0,0,0,0.06)] backdrop-blur-[15px] lg:rounded-[31.931px] lg:border-white/20 lg:p-6 sm:p-8 xl:ml-auto xl:max-w-[520px] xl:self-center xl:p-7 2xl:max-w-[520px] 3xl:mx-0 3xl:max-w-[661px] 3xl:self-center 3xl:rounded-[31.931px] 3xl:border-white/15 3xl:bg-white/[0.01] 3xl:px-[50px] 3xl:py-[62px] 3xl:shadow-[0_26.428px_88.092px_rgba(0,0,0,0.06)] 3xl:backdrop-blur-[30px]`}
    >
      <div className="text-left lg:text-center">
        <h2 className="font-manrope text-[24px] font-extrabold leading-normal text-white lg:text-[22px] lg:text-[#080808] xl:text-[23px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-normal">
          Request Your Project Blueprint
        </h2>
        <p className="mt-1.5 font-manrope text-[14px] font-medium leading-normal text-white/80 lg:text-[12px] lg:text-white sm:text-[13px] xl:text-[13px] 2xl:text-[14px] 3xl:mt-1.5 3xl:text-[14px]">
          Get a custom layout, cost range & 150-day* timeline
        </p>
      </div>

      <form onSubmit={handleSubmit} className={`${styles.form} mt-4 space-y-3 lg:mt-5`}>
        <div className="grid gap-x-5 gap-y-3 lg:grid-cols-2 lg:gap-y-2.5 2xl:gap-x-5 3xl:gap-x-[35px] 3xl:gap-y-[26px]">
          <div>
            <label className={labelClassName}>Full Name*</label>
            <input
              type="text"
              name="name"
              aria-label="Full Name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClassName}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-200">{errors.name}</p>
            )}
          </div>

          <div>
            <label className={labelClassName}>Project Location</label>
            <input
              type="text"
              name="location"
              aria-label="Project Location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Project Location"
              className={inputClassName}
            />
          </div>

          <div>
            <label className={labelClassName}>Mobile Number*</label>
            <input
              type="text"
              name="phone"
              aria-label="Mobile Number"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClassName}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-200">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className={labelClassName}>Email Address</label>
            <input
              type="email"
              name="email"
              aria-label="Email Address"
              value={formData.email}
              onChange={handleChange}
              placeholder="abcd@gmail.com"
              className={inputClassName}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-200">{errors.email}</p>
            )}
          </div>

          <div>
            <label className={labelClassName}>Industry Type*</label>
            <IndustryTypeSelect
              value={formData.industry}
              variant="figma"
              onChange={(value) =>
                handleChange({
                  target: { name: "industry", value },
                } as React.ChangeEvent<HTMLSelectElement>)
              }
            />
            {errors.industry && (
              <p className="mt-2 text-sm text-red-200">{errors.industry}</p>
            )}
          </div>

          <div>
            <label className={labelClassName}>Project Sq. Ft*</label>
            <IndustryTypeSelect
              value={formData.sqft}
              options={sqftOptions}
              placeholder="Select Sq.ft Requirement"
              variant="figma"
              onChange={(value) =>
                handleChange({
                  target: { name: "sqft", value },
                } as React.ChangeEvent<HTMLSelectElement>)
              }
            />
            {errors.sqft && (
              <p className="mt-2 text-sm text-red-200">{errors.sqft}</p>
            )}
          </div>

          <div className="lg:col-span-2">
            <label className={labelClassName}>Requirement Details</label>
            <input
              type="text"
              name="message"
              aria-label="Requirement Details"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Requirement Details"
              className={`${inputClassName} lg:hidden`}
            />
            <textarea
              name="message"
              aria-label="Requirement Details"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Requirement Details"
              className={`${inputClassName} hidden lg:block lg:min-h-[84px] lg:resize-y lg:py-[15px]`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#C4161C] px-6 py-[13px] font-manrope text-[14px] font-bold text-[#F5F5F5] shadow-[0_8.809px_35.24px_rgba(196,22,28,0.3)] transition-all duration-300 hover:bg-[#A91217] disabled:cursor-not-allowed disabled:opacity-70 lg:h-[50px] lg:rounded-[9px] lg:px-8 lg:py-4 lg:text-[15px] xl:text-[16px] 2xl:h-[54px] 2xl:text-[17px] 3xl:mt-[39px] 3xl:h-[64px] 3xl:rounded-[9px] 3xl:px-10 3xl:py-5 3xl:text-[18px]"
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

      <p className="mt-3 text-center text-[12px] font-medium leading-normal text-[#8A8A8A] lg:text-[11px] lg:tracking-[0.3303px] xl:text-[11px] 2xl:text-[11px] 3xl:mt-3.5 3xl:text-[12px] 3xl:tracking-[0.3303px]">
        100% Transparent Consultation with single point project support
      </p>
    </div>
  );
}
