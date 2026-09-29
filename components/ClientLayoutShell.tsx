"use client";

import dynamic from "next/dynamic";

const FloatingActions = dynamic(() => import("@/components/FloatingActions"), {
  ssr: false,
});

export default function ClientLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FloatingActions />
    </>
  );
}
