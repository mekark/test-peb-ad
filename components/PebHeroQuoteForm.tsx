"use client";

import EnquiryForm from "./EnquiryForm";
import styles from "./PebHeroSection.module.css";
import { QUOTE_FORM_ID } from "@/lib/enquiryFormConstants";

export { QUOTE_FORM_ID };

export default function PebHeroQuoteForm() {
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

      <EnquiryForm
        variant="hero"
        formClassName={`${styles.form} mt-4 space-y-3 lg:mt-5`}
      />
    </div>
  );
}
