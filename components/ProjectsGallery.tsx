import Image from "next/image";

const galleryImages = [
  "/Images/gal/1.webp",
  "/Images/projects/DJI_20260221125016_0027_D.webp",
  "/Images/projects/jaguar-showroom.webp",
  "/Images/gal/4.webp",
  "/Images/projects/mipl.webp",
  "/Images/projects/sop.webp",
];

type GalleryTile = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
};

const galleryTiles: GalleryTile[] = [
  {
    src: galleryImages[0],
    alt: "Completed PEB structure project",
    className:
      "col-span-2 h-[220px] w-full sm:h-[320px] lg:col-span-2 lg:row-span-2 lg:h-[520px] 2xl:absolute 2xl:left-0 2xl:top-0 2xl:h-[643px] 2xl:w-[32.33%]",
    imageClassName: "object-cover 2xl:object-[42%_center]",
  },
  {
    src: galleryImages[1],
    alt: "PEB construction project",
    className:
      "h-[174px] w-full sm:h-[340px] lg:col-span-2 lg:h-[250px] 2xl:absolute 2xl:left-[33.7%] 2xl:top-0 2xl:h-[477px] 2xl:w-[24.1%]",
  },
  {
    src: galleryImages[2],
    alt: "Industrial building interior project",
    className:
      "h-[174px] w-full sm:h-[340px] lg:col-span-2 lg:h-[250px] 2xl:absolute 2xl:left-[59.15%] 2xl:top-0 2xl:h-[477px] 2xl:w-[40.85%]",
  },
  {
    src: galleryImages[3],
    alt: "Completed factory project",
    className:
      "h-[174px] w-full sm:h-[340px] lg:col-span-2 lg:h-[250px] 2xl:absolute 2xl:left-0 2xl:top-[663px] 2xl:h-[305px] 2xl:w-[32.33%]",
  },
  {
    src: galleryImages[4],
    alt: "Steel structure construction project",
    className:
      "h-[174px] w-full sm:h-[340px] lg:col-span-2 lg:h-[250px] 2xl:absolute 2xl:left-[33.7%] 2xl:top-[497px] 2xl:h-[471px] 2xl:w-[32.44%]",
  },
  {
    src: galleryImages[5],
    alt: "Industrial project site",
    className:
      "col-span-2 h-[196px] w-full sm:h-[340px] lg:col-span-2 lg:h-[250px] 2xl:absolute 2xl:left-[67.56%] 2xl:top-[497px] 2xl:h-[471px] 2xl:w-[32.44%]",
  },
];

type ImageTileProps = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
};

function ImageTile({
  src,
  alt,
  className,
  imageClassName = "object-cover",
}: ImageTileProps) {
  return (
    <div className={`relative overflow-hidden bg-[#D9D9D9] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={imageClassName}
      />
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#F9F6F7] py-8 lg:py-16 2xl:py-[70px]"
    >
      <div className="section-container-wide flex flex-col gap-6 lg:block lg:gap-0">
        <div className="flex w-full max-w-[648px] flex-col items-start gap-4 lg:gap-[14px]">
          <div className="flex w-full flex-col items-start gap-2.5 font-manrope font-bold lg:max-w-[509px] lg:gap-[13px]">
            <p className="type-eyebrow font-bold text-[#ED1D23] tracking-[1.6px] lg:leading-[21px] 2xl:leading-6">
              Our Work
            </p>

            <h2 className="type-section-heading text-[#0F172A] 3xl:leading-[60px]">
              Projects <span className="text-[#ED1D23]">Gallery</span>
            </h2>
          </div>

          <p className="type-section-subtitle max-w-[307px] lg:max-w-none">
            Completed PEB structures across India .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:mt-8 lg:grid-cols-6 lg:gap-5 2xl:relative 2xl:mt-10 2xl:h-[968px]">
          {galleryTiles.map((tile) => (
            <ImageTile
              key={tile.src}
              src={tile.src}
              alt={tile.alt}
              className={tile.className}
              imageClassName={tile.imageClassName}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center lg:mt-[70px]">
          <a
            href="https://www.mekark.com/projects/completed-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center rounded-[8px] bg-[#C4161C] px-10 py-3.5 font-manrope text-[14px] font-semibold text-[#F5F5F5] shadow-[0_8.809px_17.618px_rgba(196,22,28,0.3)] transition-colors duration-300 hover:bg-[#A91217] sm:min-w-[220px] lg:min-w-[240px] lg:px-12 lg:py-4 lg:text-[16px] lg:font-extrabold xl:text-[17px] 2xl:text-[17px] 3xl:min-w-[280px] 3xl:px-14 3xl:py-5 3xl:text-[18px]"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}
