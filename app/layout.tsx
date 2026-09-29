import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import FloatingWhatsApp from "@/components/Whatsapp";
import "./globals.css";


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "PEB Manufacturer in Chennai - Mekark",

  description:
    "Leading Pre-Engineered Building Manufacturer in Chennai. Turnkey PEB & EPC solutions – from design to execution with on-time delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5SBMM86H');
            `,
          }}
        />
      </head>

      <body
        className={`
          ${manrope.variable}
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SBMM86H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <FloatingWhatsApp />

        <Script
          id="tawk-to-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.Tawk_API = window.Tawk_API || {};
              window.Tawk_LoadStart = new Date();
            `,
          }}
        />
        <Script
          id="tawk-to-widget"
          src="https://embed.tawk.to/69fd7e65427c251c368c1e92/1jo33bfff"
          strategy="afterInteractive"
          charSet="UTF-8"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
