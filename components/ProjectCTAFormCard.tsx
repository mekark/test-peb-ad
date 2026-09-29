"use client";

import EnquiryForm from "./EnquiryForm";

export default function ProjectCTAFormCard() {
  return (
    <div className="w-full min-w-0 rounded-[24px] border border-[#E2E2E2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] lg:rounded-[28.998px] lg:px-7 lg:py-8 xl:px-9 2xl:px-[46px] 2xl:py-[42px]">
      <div className="text-center">
        <h3 className="font-manrope text-[18px] font-extrabold text-[#080808] lg:text-[21.8px] lg:tracking-[-0.5px] xl:text-[23px] 2xl:text-[24px] 3xl:text-[28px]">
          Request Your Project Blueprint
        </h3>
        <p className="mt-2 font-manrope text-[12px] font-medium text-[#9A9A9A] lg:mt-3 lg:text-[13px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[16px]">
          Get a custom layout, cost range & 150-day* timeline
        </p>
      </div>

      <EnquiryForm
        variant="cta"
        messageFieldName="details"
        formClassName="mt-4 space-y-4 lg:mt-[21px] lg:space-y-3"
      />
    </div>
  );
}
