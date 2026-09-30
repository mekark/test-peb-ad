import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import LazyHydrateWhenVisible from "./LazyHydrateWhenVisible";
import ProjectCTAFormCard from "./ProjectCTAFormCard";
import ProjectCTAFormPlaceholder from "./ProjectCTAFormPlaceholder";

const WHATSAPP_NUMBER = "919790924754";
const PHONE_NUMBER = "+919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my PEB project.";

export default function ProjectCTASection() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <section className="defer-render relative overflow-hidden bg-[#090909] xl:min-h-[760px]">
      <Image
        src="/Images/footerbg-mobile.webp"
        alt=""
        fill
        aria-hidden
        loading="lazy"
        quality={55}
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

        <LazyHydrateWhenVisible fallback={<ProjectCTAFormPlaceholder />}>
          <ProjectCTAFormCard />
        </LazyHydrateWhenVisible>
      </div>
    </section>
  );
}
