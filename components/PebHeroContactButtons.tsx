import Image from "next/image";

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";

export default function PebHeroContactButtons({
  className = "",
}: {
  className?: string;
}) {
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
        <svg
          className="h-[18px] w-[18px] lg:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
        <Image
          src="/Images/figma-desktop-hero/whatsapp.svg"
          alt=""
          width={18}
          height={18}
          className="hidden lg:block"
        />
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex h-12 w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 py-3.5 font-manrope text-[14px] font-bold leading-5 text-white transition-colors duration-300 hover:bg-white/10 lg:h-[50px] lg:w-auto lg:px-6 lg:py-0 lg:text-[15px] xl:text-[15px] 2xl:h-[52px] 2xl:text-[16px] 3xl:h-[55px] 3xl:gap-[10px] 3xl:px-6 3xl:text-[16px] 3xl:leading-6"
      >
        Call Now
        <svg
          className="h-[18px] w-[18px] lg:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <Image
          src="/Images/figma-desktop-hero/phone.svg"
          alt=""
          width={18}
          height={18}
          className="hidden lg:block"
        />
      </a>
    </div>
  );
}
