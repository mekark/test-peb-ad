import styles from "./PebHeroSection.module.css";
import { QUOTE_FORM_ID } from "@/lib/enquiryFormConstants";

const fieldClassName =
  "h-[46px] w-full animate-pulse rounded-[8px] bg-[#E8E8E8]/80 lg:bg-[#ECECEC]";

export default function HeroQuoteFormSkeleton() {
  return (
    <div
      id={QUOTE_FORM_ID}
      aria-hidden="true"
      className={`${styles.formPanel} mx-auto w-full max-w-[560px] rounded-[24px] border border-white/10 bg-white/[0.01] px-5 py-6 shadow-[0_26px_88px_rgba(0,0,0,0.06)] backdrop-blur-[15px] lg:rounded-[31.931px] lg:border-white/20 lg:p-6 sm:p-8 xl:ml-auto xl:max-w-[520px] xl:self-center xl:p-7 2xl:max-w-[520px] 3xl:mx-0 3xl:max-w-[661px] 3xl:self-center 3xl:rounded-[31.931px] 3xl:border-white/15 3xl:bg-white/[0.01] 3xl:px-[50px] 3xl:py-[62px] 3xl:shadow-[0_26.428px_88.092px_rgba(0,0,0,0.06)] 3xl:backdrop-blur-[30px]`}
    >
      <div className="text-left lg:text-center">
        <div className="mx-auto h-7 max-w-[280px] animate-pulse rounded bg-[#E8E8E8]/80 lg:mx-auto lg:bg-[#D8D8D8]" />
        <div className="mx-auto mt-3 h-4 max-w-[220px] animate-pulse rounded bg-[#E8E8E8]/60 lg:bg-[#ECECEC]" />
      </div>
      <div className={`${styles.form} mt-4 space-y-3 lg:mt-5`}>
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-y-2.5">
          <div className={fieldClassName} />
          <div className={fieldClassName} />
          <div className={fieldClassName} />
          <div className={fieldClassName} />
          <div className={fieldClassName} />
          <div className={fieldClassName} />
          <div className={`${fieldClassName} lg:col-span-2`} />
        </div>
        <div className="mt-2 h-[48px] w-full animate-pulse rounded-[10px] bg-[#E8E8E8]/90 lg:h-[50px] lg:bg-[#D8D8D8]" />
      </div>
    </div>
  );
}
