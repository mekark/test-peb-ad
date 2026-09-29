"use client";

import FloatingActions from "@/components/FloatingActions";

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
