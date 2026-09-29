import Image from "next/image";

import { Space_Grotesk } from "next/font/google";



const processNumberFont = Space_Grotesk({

  subsets: ["latin"],

  weight: "700",

  display: "swap",

});



type ProcessStep = {

  id: string;

  title: string;

  desc: string;

  iconSrc: string;

  iconWidth: number;

  iconHeight: number;

  numberClassName?: string;

};



const processSteps: ProcessStep[] = [

  {

    id: "01",

    title: "Requirement Discussion",

    desc: "Understanding client needs & site conditions.",

    iconSrc: "/Images/manufacturing-process/clipboard-check.svg",

    iconWidth: 29.419,

    iconHeight: 36.0856,

  },

  {

    id: "02",

    title: "Structural Design",

    desc: "3D analysis & approval of drawings",

    iconSrc: "/Images/manufacturing-process/drafting-compass.svg",

    iconWidth: 32.7505,

    iconHeight: 32.7502,

  },

  {

    id: "03",

    title: "PEB Manufacturing",

    desc: "Precision fabrication in our unit.",

    iconSrc: "/Images/manufacturing-process/factory.svg",

    iconWidth: 40,

    iconHeight: 40,

  },

  {

    id: "04",

    title: "Final Handover",

    desc: "Project delivery on time, every time.",

    iconSrc: "/Images/manufacturing-process/calendar-check.svg",

    iconWidth: 32.75,

    iconHeight: 34.4167,

  },

  {

    id: "05",

    title: "On-Site Installation",

    desc: "Safe and fast erection by certified team.",

    iconSrc: "/Images/manufacturing-process/wrench.svg",

    iconWidth: 41,

    iconHeight: 41,

  },

  {

    id: "06",

    title: "Quality Check",

    desc: "Rigorous inspection of materials.",

    iconSrc: "/Images/manufacturing-process/circle-check.svg",

    iconWidth: 36.0833,

    iconHeight: 36.0833,

    numberClassName: "text-[#FFA5A8]",

  },

];



function ProcessStepIcon({

  src,

  width,

  height,

  variant,

}: {

  src: string;

  width: number;

  height: number;

  variant: "mobile" | "desktop";

}) {

  const roundedWidth = Math.round(width);

  const roundedHeight = Math.round(height);



  return (

    <Image

      src={src}

      alt=""

      width={roundedWidth}

      height={roundedHeight}

      aria-hidden

      className={

        variant === "mobile"

          ? "h-6 w-auto"

          : "h-auto w-auto max-h-[41px] max-w-[41px]"

      }

    />

  );

}



export default function ManufacturingProcess() {

  return (

    <section

      id="process"

      className="overflow-hidden bg-[#F9F6F7] py-8 lg:py-20 2xl:py-24"

    >

      <div className="section-container-wide flex flex-col gap-6 max-lg:px-6 lg:gap-[50px]">

        <div className="flex flex-col items-start gap-3 text-left lg:gap-4">

          <h2 className="type-section-heading max-w-[342px] text-[#0F172A] max-lg:text-[28px] max-lg:leading-[34px] sm:max-w-[640px] lg:max-w-[1015px] 3xl:leading-[73px]">

            <span className="sm:hidden">

              Our PEB{" "}

              <span className="text-[#ED1D23]">Manufacturing</span>

              <span className="block text-[#ED1D23]">Process</span>

            </span>

            <span className="hidden sm:inline">

              Our PEB{" "}

              <span className="text-[#ED1D23]">Manufacturing Process</span>

            </span>

          </h2>



          <p className="w-full max-w-[342px] font-manrope type-body-muted text-center max-lg:text-[14px] max-lg:leading-5 lg:max-w-none lg:text-left">

            From first consultation to final handover a proven 6-step process

            for on-time delivery.

          </p>

        </div>



        <div className="relative lg:mt-0">

          <div aria-hidden="true" className="absolute bottom-[56px] left-[25px] top-[18px] w-px bg-[#E4DFE0] lg:hidden" />



          <div className="flex w-full max-w-[302px] flex-col gap-5 lg:hidden">

            {processSteps.map((step) => (

              <article

                key={step.id}

                className="relative flex items-start gap-4"

              >

                <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg border border-[#E4DFE0] bg-white">

                  <ProcessStepIcon

                    src={step.iconSrc}

                    width={step.iconWidth}

                    height={step.iconHeight}

                    variant="mobile"

                  />

                </div>



                <div className="flex min-w-0 flex-1 flex-col gap-2">

                  <p

                    className={`${processNumberFont.className} text-[18px] font-bold leading-[23px] ${step.numberClassName ?? "text-[#FF8F92]"}`}

                  >

                    {step.id}

                  </p>



                  <h3 className="font-manrope text-[18px] font-bold leading-[22px] text-[#0F172A]">
                    {step.title}
                  </h3>



                  <p className={`font-manrope text-[14px] font-normal text-[#64748B] ${step.id === "01" ? "leading-5" : "leading-[18px]"}`}>

                    {step.desc}

                  </p>

                </div>

              </article>

            ))}

          </div>



          <div className="absolute left-0 right-0 top-[47px] hidden border-t border-[#E4DFE0] lg:block" />



          <div className="hidden gap-10 sm:grid-cols-2 lg:grid lg:grid-cols-6 lg:gap-5 xl:gap-6 2xl:gap-7">

            {processSteps.map((step) => (

              <article

                key={`desktop-${step.id}`}

                className="relative min-w-0"

              >

                <div className="relative z-10 flex h-[92px] w-[100px] items-center justify-center rounded-[18px] border border-[#E4DFE0] bg-white">

                  <ProcessStepIcon

                    src={step.iconSrc}

                    width={step.iconWidth}

                    height={step.iconHeight}

                    variant="desktop"

                  />

                </div>



                <div className="mt-[53px] flex w-full min-w-0 flex-col items-start gap-3 pr-1 2xl:max-w-[271px] 2xl:pr-0">

                  <p className="font-manrope text-[22px] font-bold leading-[21.333px] text-[#ED1D23] lg:text-[22px] xl:text-[24px] 2xl:text-[25px] 3xl:text-[26px]">

                    {step.id}

                  </p>



                  <h3
                    className={`w-full min-w-0 font-manrope font-bold leading-snug text-black ${
                      step.id === "01"
                        ? "text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[21px]"
                        : "text-[18px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] 3xl:text-[21px]"
                    } 3xl:leading-6`}
                  >
                    {step.title}
                  </h3>



                  <p className="w-full min-w-0 max-w-[210px] font-manrope text-[15px] font-normal leading-5 text-[#64748B] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 3xl:leading-[22.667px]">

                    {step.desc}

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

