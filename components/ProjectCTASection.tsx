"use client";

import Image from "next/image";
import { ArrowUpRight, Loader2, Phone } from "lucide-react";
import { useState } from "react";
import IndustryTypeSelect from "./IndustryTypeSelect";

const THANK_YOU_URL = "https://peb.mekark.com/thank-you";
const FORM_ENDPOINT = "/api/enquiry-form";

const sqftOptions = [
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  " Above 50,000 Sq.ft",
];

const WHATSAPP_NUMBER = "919790924754";
const PHONE_NUMBER = "+919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my PEB project.";

const inputClassName = "type-form-input";

export default function ProjectCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    sqft: "",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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

    if (!formData.industry) {
      newErrors.industry = "Select industry type";
    }

    if (!formData.sqft) {
      newErrors.sqft = "Select sq.ft requirement";
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
          company: "",
          location: formData.location.trim(),
          industry: formData.industry.trim(),
          sqf: formData.sqft.trim(),
          startTimeline: "",
          budget: "",
          message: formData.details.trim(),
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
    <section className="relative overflow-hidden bg-[#090909] xl:min-h-[760px]">
      <Image
        src="/Images/footerbg-mobile.webp"
        alt=""
        fill
        aria-hidden
        unoptimized
        loading="lazy"
        sizes="100vw"
        className="object-cover opacity-30 lg:hidden"
      />
      <Image
        src="/Images/footerbg.webp"
        alt=""
        fill
        aria-hidden
        loading="lazy"
        sizes="1280px"
        quality={55}
        className="hidden object-cover opacity-30 lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-[54%] lg:bg-[linear-gradient(-63deg,rgba(16,21,25,0)_0%,#080B0F_83%)]" />
      <div className="absolute left-[180px] top-[-61px] h-[274px] w-[274px] rounded-full bg-[#E40015]/30 blur-[62px] lg:left-auto lg:right-[-213px] lg:top-[-267px] lg:h-[1035px] lg:w-[1035px]" />

      <div className="section-container-wide relative z-10 flex w-full max-w-[1483px] flex-col items-stretch gap-6 py-9 xl:grid xl:min-h-[760px] xl:grid-cols-[minmax(0,1fr)_minmax(500px,560px)] xl:items-center xl:gap-14 2xl:grid-cols-[minmax(0,837px)_600px] 2xl:max-w-[1680px] 2xl:py-[149px]">
        <div className="w-full min-w-0 xl:max-w-[837px]">
          <div className="flex w-full flex-col items-start gap-3.5 px-0 py-0 lg:gap-[25px] lg:overflow-hidden lg:rounded-[28px] xl:px-0 xl:py-0">
            <div className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#FCD5D0] bg-[#FEEAE7] px-[18px] py-1 lg:px-5 lg:py-[9px]">
              <span className="font-manrope text-[10px] font-semibold leading-4 text-[#CC000A] lg:text-[16px] lg:leading-[26px] xl:text-[17px] 2xl:text-[17px] 3xl:text-[18px] 3xl:leading-[28px]">
                Ready to Build?
              </span>
            </div>

            <div className="flex w-full flex-col gap-3">
              <h2 className="w-full font-manrope text-[28px] font-extrabold leading-[34px] text-white sm:text-[40px] sm:leading-[46px] lg:text-[40px] lg:leading-[46px] xl:text-[48px] xl:leading-[52px] 2xl:text-[52px] 2xl:leading-[58px] 3xl:text-[79.467px] 3xl:leading-[81.6px]">
                Start Your PEB Project{" "}
                <span className="text-[#CC000A]">Today</span>
              </h2>

              <p className="w-full font-manrope text-[14px] font-medium leading-normal text-white/65 lg:max-w-[760px] lg:text-[20px] lg:leading-[30px] xl:text-[21px] xl:leading-[32px] 2xl:text-[22px] 2xl:leading-[34px] 3xl:text-[24px] 3xl:leading-[37.333px]">
                Share your requirement — our engineering team responds with a
                layout, BOQ and timeline. Response within 2 hours.
              </p>
            </div>
          </div>

          <div className="mt-0 flex w-full flex-col gap-3 lg:mt-10 lg:max-w-[693px] lg:gap-5 2xl:mt-[55px] 2xl:gap-[21px]">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group flex w-full items-center justify-between rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 transition-transform duration-300 hover:scale-[1.01] lg:min-h-[96px] lg:rounded-[24px] lg:px-5 2xl:min-h-[120px] 2xl:rounded-[29.333px] 2xl:px-[27px]"
            >
              <div className="flex items-center gap-4 lg:gap-[21px]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#CC000A] lg:h-16 lg:w-16 lg:rounded-[24px]">
                  <Phone className="h-6 w-6 text-white lg:h-[27px] lg:w-[27px]" />
                </span>
                <span>
                  <span className="block font-manrope text-[10px] font-bold uppercase leading-4 text-[#A9A9A9] lg:text-[16px] lg:leading-[21.333px] xl:text-[17px] 2xl:text-[17px] 3xl:text-[18px]">
                    Call Now
                  </span>
                  <span className="mt-0.5 block font-manrope text-[14px] font-extrabold leading-6 text-white lg:mt-1 lg:text-[21.333px] lg:leading-8 xl:text-[23px] 2xl:text-[24px] 3xl:text-[26px]">
                    +91 97909 24754
                  </span>
                </span>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-white/55 transition-colors group-hover:text-white lg:h-[27px] lg:w-[27px]" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-between rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 transition-transform duration-300 hover:scale-[1.01] lg:min-h-[96px] lg:rounded-[24px] lg:px-5 2xl:min-h-[120px] 2xl:rounded-[29.333px] 2xl:px-[27px]"
            >
              <div className="flex items-center gap-4 lg:gap-[21px]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#CC000A] lg:h-16 lg:w-16 lg:rounded-[24px]">
                  <Image
                    src="/Images/ws.webp"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] lg:h-[39px] lg:w-[39px]"
                  />
                </span>
                <span className="font-manrope text-[14px] font-bold leading-6 text-white lg:text-[26px] lg:leading-[27.46px] xl:text-[27px] 2xl:text-[28px] 3xl:text-[30px]">
                  WhatsApp Us Now
                </span>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-white/55 transition-colors group-hover:text-white lg:h-[27px] lg:w-[27px]" />
            </a>
          </div>
        </div>

        <div className="w-full min-w-0 rounded-[24px] border border-[#E2E2E2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] lg:rounded-[28.998px] lg:px-7 lg:py-8 xl:px-9 2xl:px-[46px] 2xl:py-[42px]">
          <div className="text-center">
            <h3 className="font-manrope text-[18px] font-extrabold text-[#080808] lg:text-[21.8px] lg:tracking-[-0.5px] xl:text-[23px] 2xl:text-[24px] 3xl:text-[28px]">
              Request Your Project Blueprint
            </h3>
            <p className="mt-2 font-manrope text-[12px] font-medium text-[#9A9A9A] lg:mt-3 lg:text-[13px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[16px]">
              Get a custom layout, cost range & 150-day* timeline
            </p>
          </div>

          <form
            id="quote-form"
            onSubmit={handleSubmit}
            className="mt-4 space-y-4 lg:mt-[21px] lg:space-y-3"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2 lg:gap-y-3">
              <label className="block">
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Full Name*
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClassName}
                />
                {errors.name && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Project Location
                </span>
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
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Mobile Number*
                </span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  maxLength={10}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClassName}
                />
                {errors.phone && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.phone}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Email Address
                </span>
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
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Industry Type*
                </span>
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
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.industry}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Project Sq. Ft*
                </span>
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
                {errors.sqft && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.sqft}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="type-form-label max-lg:sr-only tracking-[0.3px]">
                  Requirement Details
                </span>
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C4161C] px-9 py-3.5 font-manrope text-[14px] font-semibold text-[#F5F5F5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] transition-colors duration-300 hover:bg-[#A91217] disabled:cursor-not-allowed disabled:opacity-70 lg:h-[58px] lg:py-[18px] lg:text-[16px] lg:font-extrabold xl:text-[17px] 2xl:h-[60px] 2xl:text-[17px] 3xl:h-[64px] 3xl:text-[18px]"
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

            <p className="text-center font-manrope text-[12px] font-medium text-[#5A5A5A] lg:text-[10.667px] lg:tracking-[0.3px] 2xl:text-[10.667px] 3xl:text-[14px]">
              100% Transparent Consultation with single point project support
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
