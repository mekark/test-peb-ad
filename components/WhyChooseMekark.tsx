type Feature = {
  id: string;
  title: string;
  mobileTitle: string;
  mobileDesc: string;
  large?: boolean;
  highlight?: boolean;
};

const features: Feature[] = [
  {
    id: "01",
    title: "Complete Turnkey PEB contractor",
    mobileTitle: "Complete Turnkey PEB contractor",
    mobileDesc:
      "Trusted Turnkey PEB contractor for turnkey industrial construction & pre engineered commercial buildings. One team of Engineered Design, PEB Manufacturer, PEB erection.",
    large: true,
  },
  {
    id: "02",
    title: "In-House PEB Manufacturer",
    mobileTitle: "In-House PEB Manufacturer",
    mobileDesc:
      "Every steel component is engineered by experienced PEB manufacturing, PEB structure manufacturers & PEB steel structure specialists",
  },
  {
    id: "03",
    title: "Transparent Pricing EPC",
    mobileTitle: "Transparent Pricing EPC",
    mobileDesc:
      "Fixed cost proposals milestone driven execution delivering quality PEB contractor solutions with PEB industrial and commercial construction",
  },
  {
    id: "04",
    title: "ISO Certified & Quality  PEB",
    mobileTitle: "ISO Certified & Quality  PEB",
    mobileDesc:
      "Strict quality systems for reliable, safe, compliant constructor of pre engineered commercial building & pre engineered industrial building.",
  },
  {
    id: "05",
    title: "Large Scale PEB Steel",
    mobileTitle: "Large Scale Infrastructure",
    mobileDesc:
      "6,00,000 sq. ft. manufacturing facility designed for pre-fabricated building constructors and prefab structure manufacturers",
  },
  {
    id: "06",
    title: "Strong Engineered PEB EPC",
    mobileTitle: "Strong Engineering Backbone",
    mobileDesc:
      " Skilled professionals delivering accurate design and efficient execution by pre engineered building contractors & pre engineered steel building manufacturers     ",
  },
  {
    id: "07",
    title: "Faster Turnkey PEB Delivery",
    mobileTitle: "Faster Turnkey PEB Delivery",
    mobileDesc:
      "Optimized PEB systems enable 30- 40% faster executing PEB construction company and to suit prefabricated building constructions",
  },
  {
    id: "08",
    title: "Cost-Effective Turnkey PEB",
    mobileTitle: "Cost-Effective Turnkey PEB",
    mobileDesc:
      "Smart engineering reduces material waste, overall project cost of steel fabricated building for PEB contractors & PEB steel structure contractors",
  },
  {
    id: "09",
    title: "End-to-End EPC Turnkey",
    mobileTitle: "End-to-End EPC Turnkey",
    mobileDesc:
      "Single-point responsibility - from PEB design & manufacturing to erection - turnkey PEB EPC contractor project execution.",
  },
  {
    id: "10",
    title: "Eco-Friendly PEB EPC",
    mobileTitle: "Eco-Friendly PEB EPC",
    mobileDesc:
      "Eco-conscious PEB solutions processes delivering future-ready PEB industrial construction and PEB commercial buildings.",
    large: true,
    highlight: true,
  },
];

export default function WhyChooseMekark() {
  return (
    <section
      id="whychooseus"
      className="overflow-hidden bg-[#0A0A0A] py-5 text-white lg:bg-[#040303] lg:py-20"
    >
      <div className="section-container-wide flex max-w-[1706px] flex-col gap-1.5 lg:max-w-[1920px] lg:gap-14 2xl:max-w-[1920px] 2xl:gap-20 3xl:max-w-[1920px] 3xl:px-[106.667px]">
        {/* Mobile — Figma editorial layout */}
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col gap-3">
            <h2 className="font-manrope text-[32px] font-extrabold leading-[38px] text-white">
              <span className="block">Why Top Industries</span>
              <span className="block text-[#ED1D23]">Choose MEKARK</span>
            </h2>
            <p className="font-manrope text-[14px] font-normal leading-5 text-[#888888]">
              India&apos;s Leading PEB manufacturer &amp; Construction.
            </p>
          </div>

          <div className="flex w-full flex-col">
            {features.map((feature, index) => (
              <article
                key={feature.id}
                className="flex gap-2.5 border-b border-white/10 py-4"
              >
                <p
                  className={`w-[50px] shrink-0 font-manrope text-[26px] font-extrabold leading-[25px] ${
                    index % 2 === 0 ? "text-[#E53935]" : "text-[#CCCCCC]"
                  }`}
                >
                  {feature.id}
                </p>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                  <h3 className="font-manrope text-[18px] font-bold leading-[22px] text-[#F5F5F5]">
                    {feature.mobileTitle}
                  </h3>
                  <p className="font-manrope text-[14px] font-normal leading-[18px] text-[#64748B]">
                    {feature.mobileDesc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop — Figma numbered card grid */}
        <div className="hidden flex-col gap-14 lg:flex 3xl:gap-20">
          <div className="flex items-end justify-between gap-10">
            <div className="min-w-0">
              <p className="font-manrope text-[14px] font-medium uppercase leading-[21.333px] text-[#E50818] 3xl:text-[22px]">
                Market Leaders
              </p>
              <h2 className="mt-6 font-manrope text-[46px] font-bold leading-[1.02] text-white xl:text-[60px] 2xl:text-[72px] 3xl:mt-[29px] 3xl:text-[88px] 3xl:leading-[80px]">
                Why Top Industries
                <span className="block text-[#E50818]">Choose Mekark</span>
              </h2>
            </div>
            <p className="w-[36%] max-w-[604px] shrink-0 font-manrope text-right text-[16px] leading-[24px] text-[#E8E8E8] xl:text-[18px] 2xl:text-[22px] 3xl:text-[24px] 3xl:leading-[30px]">
            India’s Leading PEB manufacturer & Construction.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 xl:gap-6 3xl:gap-8">
            {features.map((feature, index) => (
              <article
                key={feature.id}
                className={`flex min-w-0 flex-col p-5 xl:p-7 3xl:min-h-[307px] 3xl:px-[38.667px] 3xl:py-[34.667px] ${
                  feature.large ? "col-span-2" : ""
                } ${
                  feature.highlight ? "bg-[#E50818]" : "bg-[#1E1E1E]"
                } ${
                  index === 0
                    ? "rounded-tl-[33.333px] 3xl:pt-[58px]"
                    : index === 1
                      ? "3xl:pt-[62px]"
                      : index === 2
                        ? "rounded-tr-[33.333px] 3xl:pt-[62px]"
                        : index === 7
                        ? "rounded-b-[33.333px]"
                        : index === 9
                          ? "rounded-br-[33.333px]"
                          : ""
                }`}
              >
                <span
                  className={`font-manrope text-[28px] font-bold leading-[27px] tracking-[1.6px] 3xl:text-[34px] ${
                    [1, 3, 5, 8].includes(index) ? "text-[#FB2C36]" : "text-white"
                  }`}
                >
                  {feature.id}
                </span>
                <div className={`mt-7 flex flex-col 3xl:mt-8 ${
                  index === 0 ? "max-w-[657.333px]" : feature.highlight ? "max-w-[462px]" : ""
                }`}>
                  <h3 className={`font-manrope font-bold text-[#F0F0F0] ${
                    feature.highlight
                      ? "text-[24px] leading-[30px] 3xl:text-[32px]"
                      : feature.large
                        ? "text-[24px] leading-[32px] 3xl:text-[30px] 3xl:leading-10"
                        : "text-[18px] leading-[24px] 3xl:text-[24px] 3xl:leading-[30px]"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`mt-3 font-manrope text-[#D6D6D6] ${
                    feature.large
                      ? "text-[18px] font-medium leading-[26px] 3xl:mt-4 3xl:text-[24px] 3xl:leading-[33.333px]"
                      : "text-[14px] leading-[21px] 3xl:text-[18px] 3xl:leading-[26px]"
                  } ${
                    feature.highlight ? "text-white 3xl:mt-[21.333px] 3xl:leading-[30px]" : ""
                  } ${
                    [4, 6, 7].includes(index) ? "3xl:mt-7" : ""
                  }`}>
                    {feature.mobileDesc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
