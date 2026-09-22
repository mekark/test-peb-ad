"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/Images/gal/1.png",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/Images/projects/DJI_20260221125016_0027_D.webp",
    className: "",
  },
  {
    src: "/Images/projects/jaguar-showroom.webp",
    className: "",
  },
  {
    src:"/Images/gal/4.png",
    className: "",
  },
  {
    src:"/Images/projects/mipl.webp",
    className: "",
  },
  {
    src: "/Images/projects/sop.webp",
    className: "",
  },
  {
    src: "/Images/gal/7.png",
    className: "",
  },
  {
    src:"/Images/gal/8.jpg",
    className: "lg:col-span-2 lg:row-span-2",
  },
];

export default function ProjectsGallery() {
  return (
    <section className="bg-[#F9F6F7] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                font-space-grotesk
                text-[12px]
                font-bold
                uppercase
                leading-[16px]
                tracking-[1.2px]
                text-[#ED1D23]
              "
            >
              Our Work
            </p>

            <h2
              className="
                mt-3
                font-manrope
                text-[28px]
                font-bold
                leading-[34px]
                text-black

                sm:text-[38px]
                sm:leading-[44px]

                lg:text-[50px]
                lg:leading-[55px]
              "
            >
              Projects{" "}
              <span className="text-[#ED1D23]">Gallery</span>
            </h2>
          </div>

          {/* RIGHT */}
          <p
            className="
              max-w-[486px]
              text-left
              text-[16px]
              font-medium
              leading-[28px]
              text-[#070506A6]

              lg:text-right
              lg:text-[18px]
            "
          >
            Completed PEB structures across Tamil Nadu and beyond.
          </p>
        </motion.div>

{/* COLLAGE GRID */}
<div
  className="
    mt-14
    grid
    grid-cols-1
    gap-5

    sm:grid-cols-2

    lg:grid-cols-12
    lg:grid-rows-[361px_361px_361px_361px]
  "
>
  {/* IMAGE 1 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[320px]

      sm:h-[420px]

      lg:col-span-8
      lg:row-span-2
      lg:h-full
    "
  >
    <Image
      src={galleryImages[0].src}
      alt="Project 1"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 2 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[260px]

      sm:h-[320px]

      lg:col-span-4
      lg:row-span-1
      lg:h-full
    "
  >
    <Image
      src={galleryImages[1].src}
      alt="Project 2"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 3 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[260px]

      sm:h-[320px]

      lg:col-span-4
      lg:row-span-1
      lg:h-full
    "
  >
    <Image
      src={galleryImages[2].src}
      alt="Project 3"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 4 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[260px]

      sm:h-[320px]

      lg:col-span-4
      lg:row-span-1
      lg:h-full
    "
  >
    <Image
      src={galleryImages[3].src}
      alt="Project 4"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 5 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[260px]

      sm:h-[320px]

      lg:col-span-4
      lg:row-span-1
      lg:h-full
    "
  >
    <Image
      src={galleryImages[4].src}
      alt="Project 5"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 6 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[260px]

      sm:h-[320px]

      lg:col-span-4
      lg:row-span-1
      lg:h-full
    "
  >
    <Image
      src={galleryImages[5].src}
      alt="Project 6"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 7 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[260px]

      sm:h-[320px]

      lg:col-span-4
      lg:row-span-1
      lg:h-full
    "
  >
    <Image
      src={galleryImages[6].src}
      alt="Project 7"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>

  {/* IMAGE 8 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.45, duration: 0.7 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#E7E1E2]

      h-[340px]

      sm:h-[520px]

      lg:col-span-8
      lg:row-span-2
      lg:h-full
    "
  >
    <Image
      src={galleryImages[7].src}
      alt="Project 8"
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/10" />
  </motion.div>
</div>
      </div>
    </section>
  );
}