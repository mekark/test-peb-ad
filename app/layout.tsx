import type { Metadata } from "next";
import Script from "next/script";
import ClientLayoutShell from "@/components/ClientLayoutShell";
import { manrope } from "@/lib/fonts";
import "./globals.css";

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
    <html
      lang="en"
      className={manrope.variable}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/Images/figma-mobile/asset-09-520.webp"
          fetchPriority="high"
          media="(max-width: 1023px)"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.setTimeout(function(){
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5SBMM86H');
              }, 5000);
            `,
          }}
        />
      </head>

      <body className="font-manrope antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SBMM86H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
