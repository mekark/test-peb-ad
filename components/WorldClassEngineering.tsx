"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function WorldClassEngineering() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* WORLD MAP BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/Images/earth.png"
          alt="World Map"
          fill
          className="object-cover
            mix-blend-screen"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div
          className="
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-[1fr_620px]
            lg:items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[620px]"
          >
            {/* LABEL */}
            <p
              className="
                font-space-grotesk
                text-[12px]
                font-bold
                uppercase
                tracking-[1px]
                text-[#E50818]
              "
            >
              Global Standards
            </p>

            {/* HEADING */}
            <h2
              className="
                mt-4
                font-manrope
                text-[28px]
                font-light
                leading-[34px]
                tracking-[-1px]
                text-white

                sm:text-[42px]
                sm:leading-[48px]

                lg:text-[60px]
                lg:leading-[66px]
                lg:tracking-[-1.0px]
              "
            >
              <span className="font-bold text-white">World Class</span>

              <br />

              <span className="text-white/40">Engineering.</span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-[540px]
                font-manrope
                text-[16px]
                font-normal
                leading-[28px]
                text-white/70
              "
            >
              Though based in Chennai, our engineering standards meet global
              specifications. We export structural components and design
              expertise.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* GRID BOX */}
            <div
              className="
    overflow-hidden
    rounded-[14px]
    border
    border-white/10
    backdrop-blur-md
  "
            >
              {/* TOP ROW */}
              <div
                className="
      grid
      grid-cols-3
      border-b
      border-white/10
      bg-[#040303]
    "
              >
                {/* BOX 1 */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
        flex
        flex-col
        items-center
        justify-center
        border-r
        border-white/10
        px-4
        py-8
        text-center
      "
                >
                  <h3
                    className="
          font-space-grotesk
          text-[34px]
          font-bold
          text-[#E50818]
        "
                  >
                    18+
                  </h3>

                  <p
                    className="
          mt-2
          font-manrope
          text-[12px]
          uppercase
          tracking-[1.2px]
          text-white/65
        "
                  >
                    Years
                    <br />
                    Experience
                  </p>
                </motion.div>

                {/* BOX 2 */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
        flex
        flex-col
        items-center
        justify-center
        border-r
        border-white/10
        px-4
        py-8
        text-center
      "
                >
                  <h3
                    className="
          font-space-grotesk
          text-[34px]
          font-bold
          text-[#E50818]
        "
                  >
                    450+
                  </h3>

                  <p
                    className="
          mt-2
          font-manrope
          text-[12px]
          uppercase
          tracking-[1.2px]
          text-white/65
        "
                  >
                    Projects
                  </p>
                </motion.div>

                {/* BOX 3 */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-8
        text-center
      "
                >
                  <h3
                    className="
          font-space-grotesk
          text-[34px]
          font-bold
          text-[#E50818]
        "
                  >
                    97.8%
                  </h3>

                  <p
                    className="
          mt-2
          font-manrope
          text-[12px]
          uppercase
          tracking-[1.2px]
          text-white/65
        "
                  >
                    On-Time
                  </p>
                </motion.div>
              </div>

              {/* BOTTOM ROW */}
              <div
                className="
      grid
      grid-cols-1
      bg-white/5

      sm:grid-cols-3
    "
              >
                {/* ISO */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="
        flex
        items-center
        justify-center
        gap-4
        border-b
        border-r
        border-white/10
        px-5
        py-7

        sm:border-b-0
      "
                >
                  {/* ISO IMAGE */}
                  <div
                    className="
          flex
          h-[88px]
          w-[88px]
          items-center
          justify-center
          rounded-full
          bg-white
          p-2
        "
                  >
                    <Image
                      src="/Images/iso (1).jpg"
                      alt="ISO"
                      width={88}
                      height={88}
                      className="
            object-contain
            rounded-full
          "
                    />
                  </div>

                  <div>
                    <p
                      className="
            font-manrope
            text-[11px]
            font-bold
            uppercase
            tracking-[1px]
            text-white
          "
                    >
                      ISO 9001:2015
                    </p>

                    <p
                      className="
            mt-1
            text-[10px]
            uppercase
            tracking-[1px]
            text-white/60
          "
                    >
                      Certified
                      <br />
                      Quality
                    </p>
                  </div>
                </motion.div>

                {/* MBMA */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="
        flex
        flex-col
        items-center
        justify-center
        border-b
        border-r
        border-white/10
        px-5
        py-8
        text-center

        sm:border-b-0
      "
                >
                  <Image
                    src="/Images/mbma.png"
                    alt="MBMA"
                    width={150}
                    height={70}
                    className="object-contain"
                  />

                  <p
                    className="
          mt-3
          text-[10px]
          uppercase
          tracking-[1px]
          text-white/60
        "
                  >
                    Global
                    <br />
                    Design
                    <br />
                    Standards
                  </p>
                </motion.div>

                {/* LOCATION */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="
        flex
        flex-col
        items-center
        justify-center
        px-5
        py-8
        text-center
      "
                >
                  <h4
                    className="
          font-manrope
          text-[20px]
          font-bold
          text-white
        "
                  >
                    Chennai
                  </h4>

                  <p
                    className="
          mt-2
          text-[11px]
          uppercase
          tracking-[1.2px]
          text-white/60
        "
                  >
                    HQ — India
                  </p>
                </motion.div>
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                mt-5
                flex
                items-center
                gap-2
              "
            >
              <Globe className="h-4 w-4 text-[#E50818]" />

              <p
                className="
                  text-[13px]
                  text-white/70
                "
              >
                Global Engineering Reach
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
