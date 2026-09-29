export default function ProjectCTAFormPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="w-full min-w-0 rounded-[24px] border border-[#E2E2E2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] lg:rounded-[28.998px] lg:px-7 lg:py-8 xl:px-9 2xl:px-[46px] 2xl:py-[42px]"
    >
      <div className="mx-auto h-6 max-w-[240px] animate-pulse rounded bg-[#ECECEC]" />
      <div className="mx-auto mt-3 h-4 max-w-[200px] animate-pulse rounded bg-[#F0F0F0]" />
      <div className="mt-6 space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-[46px] animate-pulse rounded-[8px] bg-[#F0F0F0]" />
        ))}
        <div className="h-[52px] animate-pulse rounded-[8px] bg-[#ECECEC]" />
      </div>
    </div>
  );
}
