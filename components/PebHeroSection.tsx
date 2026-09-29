"use client";

import Image from "next/image";
import styles from "./PebHeroSection.module.css";
import { ChevronRight, Loader2, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import IndustryTypeSelect from "./IndustryTypeSelect";

const sqftOptions = [
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  " Above 50,000 Sq.ft",
];

const clientLogos = [
  { src: "/Images/Logos/vwu.webp", alt: "VWU" },
  { src: "/Images/Logos/voltas.webp", alt: "Voltas" },
  { src: "/Images/Logos/tvs.webp", alt: "TVS" },
  { src: "/Images/Logos/tata.webp", alt: "Tata" },
  { src: "/Images/Logos/stetter.webp", alt: "Schwing Stetter" },
  { src: "/Images/Logos/srf.webp", alt: "SRF" },
  { src: "/Images/Logos/saveetha.webp", alt: "Saveetha" },
  { src: "/Images/Logos/sarvam.webp", alt: "Sarvam" },
  { src: "/Images/Logos/sanmar1.webp", alt: "Sanmar" },
  { src: "/Images/Logos/sanmar.webp", alt: "Sanmar" },
  { src: "/Images/Logos/reliance.webp", alt: "Reliance" },
  { src: "/Images/Logos/orbittal.webp", alt: "Orbittal" },
  { src: "/Images/Logos/ns.webp", alt: "NSI" },
  { src: "/Images/Logos/mrf.webp", alt: "MRF" },
  { src: "/Images/Logos/lt.webp", alt: "L&T" },
  { src: "/Images/Logos/laf.webp", alt: "Lafarge" },
  { src: "/Images/Logos/kom.webp", alt: "Komatsu" },
];

const mobileClientLogos = [
  { src: "/Images/figma-mobile/asset-15.png", alt: "Saveetha", size: 39 },
  { src: "/Images/figma-mobile/asset-12.png", alt: "Voltas", size: 50 },
  { src: "/Images/figma-mobile/asset-16.png", alt: "TVS", size: 53 },
  { src: "/Images/figma-mobile/asset-07.png", alt: "Tata Electronics", size: 54 },
];

const featureItems = [
  "Warehouse, Logistics, Cold Storages, Clean Rooms",
  "Factories, Industries, Plants, Manufacturing Units",
  "Malls, Auditorium, Convention Halls, IT & Data Center",
  "Multi Storey buildings, Schools, Colleges, Hospitals",
];

const mobileFeatureItems = [
  "Warehouse, Logistics, Cold Storages, Clean Rooms",
  "Factories, Industries, Plants, Manufacturing Units",
  "Malls, Auditorium, Convention Halls, IT & Data Center",
  "Multi Storey bulidings, Schools, Colleges, Hospitals",
];

const stats = [
  { end: 200, suffix: "+", label: "Projects", suffixClassName: "text-[#C4161C]" },
  {
    end: 18,
    suffix: "+",
    label: "Years Experience",
    suffixClassName: "text-[#CC000A]",
  },
  { end: 40000, suffix: " t", label: "Annual Production", suffixClassName: "text-[#C4161C]" },
  { end: 175, suffix: "+", label: "Engineering Team", suffixClassName: "text-[#C4161C]" },
];

const THANK_YOU_URL = "https://peb.mekark.com/thank-you";
const FORM_ENDPOINT = "/api/enquiry-form";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";
const QUOTE_FORM_ID = "quote-form";

const inputClassName =
  "h-auto min-h-[46px] w-full rounded-[8px] border border-[#E2E2E2] bg-[#F0F0F0] px-[18px] py-[14px] text-[12px] font-normal text-black caret-black outline-none transition-all duration-300 placeholder:text-[#757575] focus:border-[#C4161C] focus:bg-white lg:h-[46px] lg:px-4 lg:py-0 lg:text-[12px] lg:font-medium xl:text-[13px] 2xl:h-[48px] 2xl:text-[13px] 3xl:min-h-[46px] 3xl:px-[19px] 3xl:text-[12px]";
const labelClassName =
  "sr-only font-manrope text-[14px] font-bold text-white lg:not-sr-only lg:mb-1.5 lg:block lg:text-[12px] xl:text-[13px] 2xl:text-[13px] 3xl:mb-[7px] 3xl:text-[14px]";

function ContactButtons({ className = "" }: { className?: string }) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <div className={className}>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-manrope text-[14px] font-bold leading-5 text-[#E5091F] transition-transform duration-300 hover:scale-[1.03] lg:h-[50px] lg:w-auto lg:px-6 lg:py-0 lg:text-[15px] xl:text-[15px] 2xl:h-[52px] 2xl:text-[16px] 3xl:h-[55px] 3xl:gap-[10px] 3xl:px-6 3xl:text-[16px] 3xl:leading-6"
      >
        WhatsApp
        <MessageCircle className="h-[18px] w-[18px] lg:hidden" />
        <Image src="/Images/figma-desktop-hero/whatsapp.svg" alt="" width={17.9138} height={18} className="hidden lg:block" />
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex h-12 w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 py-3.5 font-manrope text-[14px] font-bold leading-5 text-white transition-colors duration-300 hover:bg-white/10 lg:h-[50px] lg:w-auto lg:px-6 lg:py-0 lg:text-[15px] xl:text-[15px] 2xl:h-[52px] 2xl:text-[16px] 3xl:h-[55px] 3xl:gap-[10px] 3xl:px-6 3xl:text-[16px] 3xl:leading-6"
      >
        Call Now
        <Phone className="h-[18px] w-[18px] lg:hidden" />
        <Image src="/Images/figma-desktop-hero/phone.svg" alt="" width={18} height={18} className="hidden lg:block" />
      </a>
    </div>
  );
}

function ClientLogosCarousel() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="relative flex h-[76px] w-full items-center overflow-hidden lg:h-[52px] xl:h-[52px] 2xl:h-[52px] 3xl:h-[75px]">
      <div className="hero-logo-marquee-track flex w-max flex-nowrap items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-8 3xl:gap-[50px]">
        {marqueeLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="flex h-[76px] w-[132px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white px-2.5 py-2 lg:h-[52px] lg:w-[100px] lg:rounded-[8px] lg:p-1.5 xl:h-[52px] xl:w-[100px] 2xl:h-[52px] 2xl:w-[100px] 3xl:h-10 3xl:w-[90px] 3xl:rounded-[8px] 3xl:bg-[#F9F6F7] 3xl:p-1"
          >
            <Image
              src={logo.src}
              alt={index < clientLogos.length ? logo.alt : ""}
              width={264}
              height={152}
              sizes="132px"
              quality={75}
              aria-hidden={index >= clientLogos.length}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatValue({
  end,
  suffix = "",
  suffixClassName = "text-[#C4161C]",
}: {
  end: number;
  suffix?: string;
  suffixClassName?: string;
}) {
  return (
    <>
      {end.toLocaleString("en-IN")}
      <span className={suffixClassName}>{suffix}</span>
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
    <section
      id="home"
      className={`${styles.hero} relative min-h-[1690px] overflow-hidden bg-[#060606] font-manrope text-white lg:min-h-screen`}
    >
      <div aria-hidden="true" className={`${styles.background} absolute inset-0 hidden lg:block`} />

      <div className="absolute left-1/2 top-[419px] h-[1556px] w-[max(505px,100%)] -translate-x-1/2 lg:hidden">
        <Image
          src="/Images/figma-mobile/asset-09-520.webp"
          alt="Steel building construction site"
          fill
          unoptimized
          priority
          sizes="520px"
          className="object-cover object-center"
        />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
        <div className="absolute inset-x-0 bottom-0 top-[284px] bg-[#0F0F0F]/40" />
        <div className="absolute left-1/2 top-[-8px] h-[1826px] w-[max(1028px,100%)] -translate-x-1/2">
          <Image
            src="/Images/figma-mobile/background-shade.webp"
            alt=""
            fill
            loading="lazy"
            sizes="1028px"
          />
        </div>
        <div className="absolute inset-0 bg-[url('/Images/figma-mobile/background-overlay.svg')] bg-[length:1017px_1690px] bg-top bg-no-repeat" />
      </div>
      <div className={`${styles.shade} absolute inset-0 hidden bg-[linear-gradient(90deg,#060606_0%,rgba(6,6,6,0.95)_24%,rgba(6,6,6,0.8)_43%,rgba(6,6,6,0.2)_88%)] lg:block 3xl:bg-[linear-gradient(90deg,#060606_30.33%,rgba(6,6,6,0.8)_50%,rgba(6,6,6,0)_100%)]`} />


      <header className="relative z-30">
        <div className="mx-auto flex h-[68px] max-w-[1920px] items-center justify-between px-5 sm:px-10 lg:px-10 xl:px-16 2xl:px-16 3xl:h-auto 3xl:px-20 3xl:py-[17px]">
          <Image
            src="/Images/icon.webp"
            alt="Mekark"
            width={132}
            height={46}
            loading="eager"
            className="h-auto w-[104px] object-contain sm:h-[46px] sm:w-[132px]"
          />

          <a
            href={`#${QUOTE_FORM_ID}`}
            className="rounded-[8px] bg-[#C4161C] px-4 py-2.5 text-center font-manrope text-[13px] font-semibold text-[#F5F5F5] shadow-[0_8.809px_35.24px_rgba(196,22,28,0.3)] transition-colors duration-300 hover:bg-[#A91217] sm:px-6 sm:text-[16px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] 3xl:px-6 3xl:py-2.5 3xl:text-[16px]"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      <div className={`${styles.content} relative z-20 mx-auto flex max-w-[1920px] items-start px-5 pb-6 pt-3 sm:px-10 lg:min-h-[calc(100vh-68px)] lg:px-10 lg:pb-10 lg:pt-4 xl:px-16 xl:pb-10 2xl:items-start 3xl:min-h-[calc(100vh-80px)] 3xl:items-center 3xl:px-20 3xl:pb-16 3xl:pt-7`}>
        <div className={`${styles.layout} grid w-full items-start gap-[13px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(440px,520px)] xl:items-center xl:gap-10 2xl:grid-cols-[minmax(0,1fr)_minmax(440px,520px)] 2xl:gap-10 3xl:grid-cols-[minmax(0,881px)_661px] 3xl:items-center 3xl:justify-between 3xl:gap-[92px]`}>
          <div className={`${styles.intro} flex w-full min-w-0 flex-col gap-[13px] lg:gap-0 2xl:max-w-none 3xl:max-w-[881px] 3xl:self-center 3xl:gap-6`}>
            <div className={`${styles.badge} inline-flex w-full max-w-full items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 font-manrope text-[10px] font-medium leading-4 text-white sm:w-fit sm:px-4 sm:text-[13px] lg:py-2 lg:text-[13px] xl:text-[14px] xl:leading-5 2xl:text-[15px] 2xl:leading-5 3xl:gap-[10.7px] 3xl:border-[1.3px] 3xl:border-white/20 3xl:px-4 3xl:py-2 3xl:text-[16px] 3xl:leading-[21px]`}>
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E40015] lg:h-2.5 lg:w-2.5 3xl:h-[10.7px] 3xl:w-[10.7px]" />
              <span className="min-w-0 whitespace-nowrap max-lg:text-[clamp(7px,2.3vw,10px)]">
                <span className="lg:hidden">
                  PEB Manufacturer &amp; Commercial, Industrial construction Company
                </span>
                <span className="hidden lg:inline">
                  PEB Manufacturer &amp; Commercial, Industrial construction Company
                </span>
              </span>
            </div>

            <div className="relative -mx-5 h-[184px] w-[calc(100%_+_40px)] sm:-mx-10 sm:w-[calc(100%_+_80px)] overflow-hidden bg-[#060606] lg:hidden">
              <div className="absolute left-1/2 top-[-18.66px] h-[282.473px] w-[max(501.908px,128.69%)] -translate-x-1/2">
                <Image
                  src="/Images/figma-mobile/asset-13-520.webp"
                  alt="Industrial project site"
                  fill
                  unoptimized
                  sizes="520px"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 top-0 h-[114px] bg-[linear-gradient(180deg,#060606_0%,rgba(62,62,62,0.776)_45.62%,rgba(105,105,105,0.604)_76.21%,rgba(255,255,255,0)_161.47%)]" />
              <div className="absolute left-1/2 top-[83.82px] h-[179.986px] w-[max(502.286px,128.79%)] -translate-x-1/2">
                <Image
                  src="/Images/figma-mobile/factory-original-520.webp"
                  alt="Completed blue industrial building"
                  fill
                  unoptimized
                  sizes="520px"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 top-[129px] h-[85px] bg-gradient-to-b from-transparent to-[#1E1E1E]" />
              <h1 className="absolute left-[21px] top-[17px] z-10 font-manrope text-[30px] font-bold leading-7 text-white">
                Build PEB.
                <br />
                Design to Delivery.
              </h1>
              <div className="absolute bottom-[11px] left-0 z-10 flex h-[23px] w-[250px] items-center justify-center bg-[#C4161C] text-[14px] font-bold leading-9 text-white">
                Manufacturing &amp; Construction
              </div>
            </div>

            <h1 className={`${styles.headline} hidden lg:flex`}>
              <span>Build PEB. Design to Delivery.</span>
              <span className={styles.headlineBanner}>Manufacturing &amp; Construction</span>
            </h1>

            <p className={`${styles.description} max-w-[350px] font-manrope text-[14px] leading-[normal] text-[#F3F3F3] lg:mt-4 lg:max-w-none lg:text-[15px] lg:leading-[24px] lg:text-[#A9A9A9] xl:max-w-[1180px] xl:text-[19px] xl:leading-[27px] 2xl:max-w-[1180px] 2xl:text-[20px] 2xl:leading-[28px] 3xl:mt-0 3xl:max-w-[881px] 3xl:text-[22px] 3xl:leading-[28px]`}>
              <span className="lg:hidden">
                <span className="font-bold text-[#C4161C]">MEKARK</span> - Builds
                Every Structure You Want -
                <br />
                All Commercial &amp; Industrial projects -{" "}
                <span className="font-bold text-white">ALL INDIA</span>
                <span className="block h-[10.5px]" />
                <span className="font-semibold">
                  In-House Manufacturing - PEB Erection - Turnkey EPC.
                </span>
              </span>
              <span className="hidden lg:inline">
                <span className="font-semibold text-[#ED1D23]">MEKARK</span> - Builds Every Structure You Want -
                <br />
                All Commercial &amp; Industrial projects – <span className="font-bold text-white">ALL INDIA</span>
                <span className="block h-7" />
                <span className="font-semibold text-[#F3F3F3]">In-House Manufacturing - PEB Erection - Turnkey EPC.</span>
              </span>
            </p>

            <div className={`${styles.features} flex flex-col gap-1.5 font-manrope lg:mt-4 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-5 lg:gap-y-2.5 lg:text-[13px] lg:leading-[19px] lg:text-white/70 xl:max-w-[1180px] xl:gap-x-6 xl:text-[15px] xl:leading-5 2xl:max-w-[1180px] 2xl:gap-x-6 2xl:text-[16px] 2xl:leading-5 3xl:mt-0 3xl:max-w-none 3xl:grid-cols-[543px_466px] 3xl:gap-x-6 3xl:gap-y-5 3xl:text-[18px] 3xl:leading-5 3xl:text-white/70`}>
              {featureItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl px-3 lg:items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:gap-2"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="h-[15px] w-[15px] shrink-0 stroke-[2.5] text-[#E40015] lg:hidden"
                  />
                  <Image src="/Images/figma-desktop-hero/chevron.svg" alt="" width={24} height={24} className="hidden shrink-0 lg:block" />
                  <span className="text-[12px] font-medium leading-5 text-white/70 lg:text-[13px] lg:leading-[19px] xl:text-[15px] xl:leading-5 2xl:text-[16px] 2xl:leading-5 3xl:text-[18px] 3xl:leading-5 3xl:text-white/70">
                    <span className="lg:hidden">{mobileFeatureItems[index]}</span>
                    <span className="hidden lg:inline">{item}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className={`${styles.trusted} w-full overflow-hidden rounded-[10px] bg-[linear-gradient(175.67deg,#08090A_1.29%,#654528_91.18%)] px-4 py-6 lg:mt-6 lg:rounded-[18px] lg:border lg:border-white/10 lg:bg-[linear-gradient(165deg,#3A3A3A_0%,#2A2A2A_48%,#1C1C1C_100%)] lg:px-5 lg:py-4 sm:px-7 sm:pt-5 xl:max-w-[720px] 2xl:max-w-[720px] 3xl:relative 3xl:mt-0 3xl:h-[147px] 3xl:w-[847px] 3xl:max-w-[847px] 3xl:rounded-[18px] 3xl:border-0 3xl:bg-[linear-gradient(0.21deg,#060606_0%,rgba(105,63,29,0.5)_100%)] 3xl:px-0 3xl:py-0 3xl:backdrop-blur-[1000px]`}>
              <p className="mb-4 text-left text-[14px] font-semibold uppercase leading-5 text-[#ED1D23] lg:mb-3 lg:text-[12px] lg:tracking-wide lg:text-[#FA7783] xl:text-[13px] 2xl:text-[13px] 3xl:absolute 3xl:left-[41px] 3xl:top-[21px] 3xl:mb-0 3xl:text-[14px] 3xl:leading-5">
                Trusted Across India
              </p>

              <div className="overflow-hidden lg:hidden">
                <div className="hero-logo-marquee-track flex w-max">
                  {[0, 1].map((group) => (
                    <div
                      key={group}
                      aria-hidden={group === 1 ? true : undefined}
                      className="flex shrink-0 gap-[18px] pr-[18px]"
                    >
                      {Array.from({ length: 3 }, (_, repeat) =>
                        mobileClientLogos.map((logo) => (
                          <div
                            key={`${repeat}-${logo.src}`}
                            aria-hidden={repeat > 0 ? true : undefined}
                            className="flex h-10 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#F9F6F7]"
                          >
                            <Image
                              src={logo.src}
                              alt={group === 0 && repeat === 0 ? logo.alt : ""}
                              width={logo.size}
                              height={logo.size}
                              loading="lazy"
                              className="shrink-0 object-contain"
                            />
                          </div>
                        )),
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${styles.desktopLogos} hidden lg:block lg:-mx-5 3xl:absolute 3xl:left-[32px] 3xl:top-[55px] 3xl:mx-0 3xl:h-[75px] 3xl:w-[789px] 3xl:overflow-hidden`}>
                <ClientLogosCarousel />
              </div>
            </div>

            <div className={`${styles.stats} box-border grid w-full grid-cols-2 gap-3 sm:gap-4 lg:mt-6 lg:grid-cols-4 lg:gap-2 lg:border-t lg:border-solid lg:border-[#E2E2E2] lg:pt-5 xl:gap-3 2xl:max-w-[720px] 2xl:flex 2xl:flex-nowrap 2xl:items-start 2xl:justify-between 2xl:gap-6 2xl:pt-5 3xl:mt-0 3xl:min-h-[117px] 3xl:max-w-[847px] 3xl:gap-8 3xl:border-t-[0.7px] 3xl:pt-5`}>
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-col gap-1 rounded-[10px] border border-white/[0.08] bg-[#1A1A1A] px-5 py-3 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 2xl:shrink-0 3xl:gap-[5px]"
                >
                  <p className="font-manrope text-[24px] font-extrabold leading-normal text-white lg:leading-none lg:text-[22px] xl:text-[24px] 2xl:text-[32px] 3xl:text-[42px]">
                    <StatValue
                      end={item.end}
                      suffix={item.suffix}
                      suffixClassName={item.suffixClassName}
                    />
                  </p>
                  <p className="text-[10px] font-semibold uppercase leading-normal text-[#9A9A9A] lg:mt-1.5 lg:text-[10px] lg:leading-tight lg:whitespace-nowrap xl:mt-1 xl:text-[10px] xl:leading-tight xl:whitespace-nowrap 2xl:mt-1.5 2xl:whitespace-nowrap 2xl:text-[13px] 3xl:mt-0 3xl:whitespace-nowrap 3xl:text-[16px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <ContactButtons className={`${styles.desktopContacts} hidden lg:flex`} />
          </div>

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
                  <label className={labelClassName}>
                    Full Name*
                  </label>
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
                  <label className={labelClassName}>
                    Project Location
                  </label>
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
                  <label className={labelClassName}>
                    Mobile Number*
                  </label>
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
                  <label className={labelClassName}>
                    Email Address
                  </label>
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
                  <label className={labelClassName}>
                    Industry Type*
                  </label>
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
                    <p className="mt-2 text-sm text-red-200">
                      {errors.industry}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClassName}>
                    Project Sq. Ft*
                  </label>
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
                  <label className={labelClassName}>
                    Requirement Details
                  </label>
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

          <ContactButtons className="flex flex-row items-center justify-center gap-3.5 lg:hidden" />
        </div>
      </div>
    </section>
  );
}
