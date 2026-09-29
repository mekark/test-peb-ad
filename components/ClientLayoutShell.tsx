"use client";

import FloatingWhatsApp from "@/components/Whatsapp";

export default function ClientLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FloatingWhatsApp />
    </>
  );
}
