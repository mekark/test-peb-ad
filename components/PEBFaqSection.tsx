import Image from "next/image";
import { faqData } from "@/lib/faqData";

export default function PEBFaqSection() {
  return (
    <section id="faq" className="relative z-10 overflow-hidden bg-[#F9F6F7] py-8 lg:overflow-clip lg:py-16 3xl:py-[95px]">
      <div className="section-container-wide grid h-full min-h-0 w-full max-w-[1706px] grid-cols-1 items-start gap-6 lg:max-w-[1920px] lg:grid-cols-[minmax(0,692fr)_minmax(0,912fr)] lg:items-start lg:gap-12 xl:gap-16 2xl:max-w-[1920px] 2xl:gap-20 3xl:max-w-[1920px] 3xl:gap-[101.333px] 3xl:px-[106.667px]">
        <div className="relative min-h-0 lg:sticky lg:top-24 lg:self-start 2xl:top-[95px]">
          <div className="flex flex-col items-start gap-3 px-5 py-1.5 lg:gap-[25.467px] lg:px-0 lg:py-0">
            <div className="inline-flex items-center rounded-full border border-[#FCD5D0] bg-[#FEEAE7] px-[18.67px] py-2 lg:border-[1.333px] lg:px-5 lg:py-[9.333px]">
              <span className="font-manrope text-[14px] font-semibold leading-[22px] text-[#CC000A] lg:text-[16px] lg:leading-[26px]">
                FAQ
              </span>
            </div>

            <h2 className="font-manrope text-[28px] font-bold leading-8 text-[#070506] lg:text-[40px] lg:leading-[50px] xl:text-[48px] xl:leading-[60px] 2xl:text-[56px] 2xl:leading-[70px] 3xl:text-[66px] 3xl:leading-[81.6px]">
              Frequently asked
              <span className="block text-[#CC000A]">questions.</span>
            </h2>

            <p className="font-manrope text-[16px] font-medium leading-[23px] text-[#64748B] lg:text-[20px] lg:leading-[30px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[24px] 3xl:leading-[37.333px]">
              Everything you need to know about PEB
              <span className="block">
                construction and our manufacturing capability.
              </span>
            </p>
          </div>

          <div className="relative mt-0 h-[220px] w-full overflow-hidden lg:mt-10 lg:h-auto lg:overflow-visible">
            <Image
              src="/Images/faq-720.webp"
              alt="Industrial steel building"
              width={720}
              height={480}
              sizes="(max-width: 1023px) 100vw, 720px"
              quality={70}
              loading="lazy"
              className="h-full w-full object-cover lg:hidden"
            />
            <Image
              src="/Images/faq-desktop.png"
              alt="Multi-storey industrial steel building"
              width={946}
              height={631}
              sizes="(min-width: 1920px) 946px, 50vw"
              loading="lazy"
              className="relative hidden lg:left-[-20.617%] lg:block lg:h-auto lg:w-[136.705%] lg:max-w-none lg:-scale-x-100"
            />
          </div>
        </div>

        <div className="w-full min-h-0 px-5 lg:px-0 3xl:pt-[15.333px]">
          <div className="flex w-full flex-col gap-3 pb-8 lg:gap-0 lg:pb-0">
            {faqData.map((faq, index) => {
              const number = `${index + 1}.`;

              return (
                <details
                  key={faq.question}
                  className={`group border-b border-[#E2E2E2] lg:border-b-[1.333px] lg:pb-[33.333px] [&_summary::-webkit-details-marker]:hidden ${
                    index > 0 ? "lg:pt-8" : ""
                  } open:flex open:flex-col open:gap-2.5 open:lg:gap-[18.667px]`}
                >
                  <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-3 text-left lg:items-center lg:gap-6 lg:py-0">
                    <h3 className="flex min-w-0 flex-1 items-start gap-0 font-manrope text-[16px] font-medium leading-6 text-[#080808] transition-colors duration-300 group-open:text-[#C4161C] lg:gap-2 lg:pr-4 lg:text-[18px] lg:leading-[26px] xl:text-[20px] xl:leading-[28px] 3xl:text-[24px] 3xl:leading-8">
                      <span className="shrink-0 lg:min-w-[28px]">{number}</span>
                      <span className="min-w-0">{faq.question}</span>
                    </h3>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[18.667px] bg-[#F0F0F0] text-lg font-medium leading-none text-[#9A9A9A] group-open:bg-[#C4161C] group-open:text-[#F5F5F5] lg:h-[37.333px] lg:w-[37.333px]">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">×</span>
                    </span>
                  </summary>
                  <p className="max-w-[876px] font-manrope text-[14px] font-medium leading-5 text-[#5A5A5A] lg:mx-auto lg:w-[96%] lg:text-[16px] lg:leading-[26px] xl:text-[18px] xl:leading-[28px] 3xl:text-[20px] 3xl:leading-[30px]">
                    {faq.answer}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
