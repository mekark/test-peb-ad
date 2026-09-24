"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMekark() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F7F7]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/about.webp"
          alt="Background"
          fill
          priority
          className="object-cover opacity-[0.15]"
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#F6CFCB]
              bg-[#FEEAE7]
              px-[14px]
              py-[6px]
              text-[13px]
              font-semibold
              leading-[19.5px]
              text-[#CC000A]
              mb-6
            "
          >
            About Mekark
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[1100px]
              font-manrope
              text-[26px]
              leading-[32px]
              tracking-[-1px]
              font-bold
              text-black

              sm:text-[36px]
              sm:leading-[42px]
              sm:tracking-[-1.2px]

              lg:text-[50px]
              lg:leading-[61.2px]
              lg:tracking-[-1.8px]
              lg:whitespace-nowrap
            "
          >
            Trusted Industrial{" "}
            <span className="text-[#CC000A]">EPC Contractor & PEB Manufacturer</span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-[1fr_1fr]
            lg:items-center
          "
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                shadow-[0px_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/Images/abut us.webp"
                alt="Mekark Factory"
                width={900}
                height={650}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                text-[17px]
                font-medium
                leading-[30px]
                text-[#070506]

                sm:text-[18px]
                sm:leading-[29.25px]
              "
            >
              Founded in 2008, Mekark is a leading Pre Engineered Building (PEB)
              manufacturer, PEB contractor and industrial EPC contractor
              delivering turnkey industrial construction solutions across South
              India.
              
              <br />
              <br />
              We specialise in the design, engineering, manufacturing and
              erection of PEB steel structures for factories, warehouses and
              industrial buildings. From in-house engineering and steel
              fabrication to site erection and project execution, we provide
              complete end-to-end solutions under one roof. 
              
              <br />
              <br />
              With an integrated
              manufacturing facility, experienced engineering team and proven
              industrial project expertise, we deliver projects with quality,
              precision, predictable timelines and single-point accountability.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                mt-6
                text-[15px]
                leading-[26px]
                text-[#07050699]

                sm:text-[16px]
              "
            >
              Every stage—from engineering and steel fabrication to site
              erection—is managed in-house, ensuring superior quality,
              predictable timelines and single-point responsibility.
            </motion.p>

            {/* STATS CARDS */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-5

                sm:grid-cols-2
              "
            >
              {/* CARD 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-[28px]
                  border
                  border-[#E7E2E2]
                  bg-white
                  px-6
                  py-6
                  shadow-[0px_8px_30px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  min-h-[108px]
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  className="shrink-0"
                >
                  <Image
                    src="/Images/ton2.webp"
                    alt="Tons Icon"
                    width={78}
                    height={78}
                    className="
                      object-contain
                      w-[78px]
                      h-[78px]
                    "
                  />
                </motion.div>

                <div>
                  <h3
                    className="
                      font-space-grotesk
                      text-[24px]
                      font-bold
                      uppercase
                      leading-[32px]
                      tracking-[-0.6px]
                      text-black
                    "
                  >
                    40,000 Tons
                  </h3>

                  <p className="mt-1 text-[16px] text-[#5B5B5B]">
                    Annual Capacity
                  </p>
                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-[28px]
                  border
                  border-[#E7E2E2]
                  bg-white
                  px-6
                  py-6
                  shadow-[0px_8px_30px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  min-h-[108px]
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -4,
                  }}
                  className="shrink-0"
                >
                  <Image
                    src="/Images/ton1.webp"
                    alt="Campus Icon"
                    width={78}
                    height={78}
                    className="
                      object-contain
                      w-[78px]
                      h-[78px]
                    "
                  />
                </motion.div>

                <div>
                  <h3
                    className="
                      font-space-grotesk
                      text-[24px]
                      font-bold
                      uppercase
                      leading-[32px]
                      tracking-[-0.6px]
                      text-black
                    "
                  >
                    6 Lakh
                  </h3>

                  <p className="mt-1 text-[16px] text-[#5B5B5B]">
                    Sq.Ft Campus
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
