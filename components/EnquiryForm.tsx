"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  EMAIL_REGEX,
  FORM_ENDPOINT,
  sqftOptions,
  THANK_YOU_URL,
} from "@/lib/enquiryFormConstants";
import IndustryTypeSelect from "./IndustryTypeSelect";

const heroInputClassName =
  "h-auto min-h-[46px] w-full rounded-[8px] border border-[#E2E2E2] bg-[#F0F0F0] px-[18px] py-[14px] text-[12px] font-normal text-black caret-black outline-none transition-all duration-300 placeholder:text-[#757575] focus:border-[#C4161C] focus:bg-white lg:h-[46px] lg:px-4 lg:py-0 lg:text-[12px] lg:font-medium xl:text-[13px] 2xl:h-[48px] 2xl:text-[13px] 3xl:min-h-[46px] 3xl:px-[19px] 3xl:text-[12px]";
const heroLabelClassName =
  "sr-only font-manrope text-[14px] font-bold text-white lg:not-sr-only lg:mb-1.5 lg:block lg:text-[12px] xl:text-[13px] 2xl:text-[13px] 3xl:mb-[7px] 3xl:text-[14px]";

type EnquiryFormProps = {
  variant: "hero" | "cta";
  formClassName?: string;
  messageFieldName?: "message" | "details";
};

export default function EnquiryForm({
  variant,
  formClassName = "",
  messageFieldName = "message",
}: EnquiryFormProps) {
  const isHero = variant === "hero";
  const inputClassName = isHero ? heroInputClassName : "type-form-input";
  const labelClassName = isHero
    ? heroLabelClassName
    : "type-form-label max-lg:sr-only tracking-[0.3px]";

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
    details: "",
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

    if (
      isHero &&
      formData.email.trim() &&
      !EMAIL_REGEX.test(formData.email.trim())
    ) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.industry) {
      newErrors.industry = isHero
        ? "Select industry type"
        : "Select industry type";
    }

    if (!formData.sqft) {
      newErrors.sqft = isHero
        ? "Select sq.ft range"
        : "Select sq.ft requirement";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const messageBody = messageFieldName === "details"
      ? formData.details.trim()
      : formData.message.trim();

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
          message: messageBody,
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

  const errorClass = isHero ? "mt-2 text-sm text-red-200" : "mt-1 block text-xs text-red-500";

  const submitButtonClass = isHero
    ? "mt-2 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#C4161C] px-6 py-[13px] font-manrope text-[14px] font-bold text-[#F5F5F5] shadow-[0_8.809px_35.24px_rgba(196,22,28,0.3)] transition-all duration-300 hover:bg-[#A91217] disabled:cursor-not-allowed disabled:opacity-70 lg:h-[50px] lg:rounded-[9px] lg:px-8 lg:py-4 lg:text-[15px] xl:text-[16px] 2xl:h-[54px] 2xl:text-[17px] 3xl:mt-[39px] 3xl:h-[64px] 3xl:rounded-[9px] 3xl:px-10 3xl:py-5 3xl:text-[18px]"
    : "flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C4161C] px-9 py-3.5 font-manrope text-[14px] font-semibold text-[#F5F5F5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] transition-colors duration-300 hover:bg-[#A91217] disabled:cursor-not-allowed disabled:opacity-70 lg:h-[58px] lg:py-[18px] lg:text-[16px] lg:font-extrabold xl:text-[17px] 2xl:h-[60px] 2xl:text-[17px] 3xl:h-[64px] 3xl:text-[18px]";

  const grid = isHero ? (
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
        {errors.name && <p className={errorClass}>{errors.name}</p>}
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
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
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
        {errors.email && <p className={errorClass}>{errors.email}</p>}
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
        {errors.industry && <p className={errorClass}>{errors.industry}</p>}
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
        {errors.sqft && <p className={errorClass}>{errors.sqft}</p>}
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
  ) : (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2 lg:gap-y-3">
      <label className="block">
        <span className={labelClassName}>Full Name*</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClassName}
        />
        {errors.name && <span className={errorClass}>{errors.name}</span>}
      </label>
      <label className="block">
        <span className={labelClassName}>Project Location</span>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter project location"
          className={inputClassName}
        />
      </label>
      <label className="block">
        <span className={labelClassName}>Mobile Number*</span>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          maxLength={10}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={inputClassName}
        />
        {errors.phone && <span className={errorClass}>{errors.phone}</span>}
      </label>
      <label className="block">
        <span className={labelClassName}>Email Address</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="abcd@gmail.com"
          className={inputClassName}
        />
      </label>
      <label className="block">
        <span className={labelClassName}>Industry Type*</span>
        <IndustryTypeSelect
          value={formData.industry}
          variant="figma"
          onChange={(value) =>
            handleChange({
              target: { name: "industry", value },
            } as React.ChangeEvent<HTMLSelectElement>)
          }
        />
        {errors.industry && <span className={errorClass}>{errors.industry}</span>}
      </label>
      <label className="block">
        <span className={labelClassName}>Project Sq. Ft*</span>
        <IndustryTypeSelect
          value={formData.sqft}
          options={sqftOptions}
          placeholder="Select Sq. Ft Requirement"
          variant="figma"
          onChange={(value) =>
            handleChange({
              target: { name: "sqft", value },
            } as React.ChangeEvent<HTMLSelectElement>)
          }
        />
        {errors.sqft && <span className={errorClass}>{errors.sqft}</span>}
      </label>
      <label className="block">
        <span className={labelClassName}>Requirement Details</span>
        <input
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Enter requirement details"
          className={inputClassName}
        />
      </label>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      {grid}
      <button type="submit" disabled={isSubmitting} className={submitButtonClass}>
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
        className={
          isHero
            ? "mt-3 text-center text-[12px] font-medium leading-normal text-[#8A8A8A] lg:text-[11px] lg:tracking-[0.3303px] xl:text-[11px] 2xl:text-[11px] 3xl:mt-3.5 3xl:text-[12px] 3xl:tracking-[0.3303px]"
            : "text-center font-manrope text-[12px] font-medium text-[#5A5A5A] lg:text-[10.667px] lg:tracking-[0.3px] 2xl:text-[10.667px] 3xl:text-[14px]"
        }
      >
        100% Transparent Consultation with single point project support
      </p>
    </form>
  );
}
