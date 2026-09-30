import dynamic from "next/dynamic";
import Image from "next/image";
import { QUOTE_FORM_ID } from "@/lib/enquiryFormConstants";
import HeroQuoteFormSkeleton from "./HeroQuoteFormSkeleton";
import PebHeroContactButtons from "./PebHeroContactButtons";
import styles from "./PebHeroSection.module.css";

const PebHeroQuoteForm = dynamic(() => import("./PebHeroQuoteForm"), {
  loading: () => <HeroQuoteFormSkeleton />,
});

const desktopClientLogos = [
  { src: "/Images/Logos/saveetha.webp", alt: "Saveetha" },
  { src: "/Images/Logos/voltas.webp", alt: "Voltas" },
  { src: "/Images/Logos/tvs.webp", alt: "TVS" },
  { src: "/Images/Logos/tata.webp", alt: "Tata Electronics" },
  { src: "/Images/Logos/lt.webp", alt: "L&T" },
  { src: "/Images/Logos/mrf.webp", alt: "MRF" },
  { src: "/Images/Logos/reliance.webp", alt: "Reliance" },
];

const mobileClientLogos = [
  { src: "/Images/figma-mobile/asset-15.webp", alt: "Saveetha", size: 39 },
  { src: "/Images/figma-mobile/asset-12.webp", alt: "Voltas", size: 50 },
  { src: "/Images/figma-mobile/asset-16.webp", alt: "TVS", size: 53 },
  { src: "/Images/figma-mobile/asset-07.webp", alt: "Tata Electronics", size: 54 },
  { src: "/Images/Logos/lt.webp", alt: "L&T", size: 40 },
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

function ClientLogosRow() {
  return (
    <div className="grid h-[52px] w-full grid-cols-7 items-center gap-2 xl:gap-3 3xl:h-10 3xl:gap-3">
      {desktopClientLogos.map((logo) => (
        <div
          key={logo.src}
          className="flex h-10 min-w-0 items-center justify-center overflow-hidden rounded-[8px] bg-[#F9F6F7] px-2"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            sizes="120px"
            quality={75}
            loading="lazy"
            className="h-7 w-auto max-w-full object-contain"
          />
        </div>
      ))}
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

function FeatureChevron({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function PebHeroSection() {
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
          fetchPriority="high"
          loading="eager"
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
            sizes="132px"
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
                PEB Manufacturer &amp; Commercial, Industrial construction Company
              </span>
            </div>

            <div className="relative -mx-5 h-[184px] w-[calc(100%_+_40px)] sm:-mx-10 sm:w-[calc(100%_+_80px)] overflow-hidden bg-[#060606] lg:hidden">
              <div className="absolute left-1/2 top-[-18.66px] h-[282.473px] w-[max(501.908px,128.69%)] -translate-x-1/2">
                <Image
                  src="/Images/figma-mobile/asset-13-520.webp"
                  alt="Industrial project site"
                  fill
                  unoptimized
                  loading="lazy"
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
                  loading="lazy"
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
                  <FeatureChevron className="h-[15px] w-[15px] shrink-0 text-[#E40015] lg:hidden" />
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

              <div className="grid grid-cols-5 gap-2 sm:gap-3 lg:hidden">
                {mobileClientLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#F9F6F7] px-1"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.size}
                      height={logo.size}
                      loading="lazy"
                      className="h-7 w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className={`${styles.desktopLogos} hidden w-full min-w-0 lg:block 3xl:absolute 3xl:left-[32px] 3xl:top-[55px] 3xl:h-auto 3xl:w-[783px]`}>
                <ClientLogosRow />
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

            <PebHeroContactButtons className={`${styles.desktopContacts} hidden lg:flex`} />
          </div>

          <PebHeroQuoteForm />

          <PebHeroContactButtons className="flex flex-row items-center justify-center gap-3.5 lg:hidden" />
        </div>
      </div>
    </section>
  );
}
