"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const navItems = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "Industries",
        href: "#industries",
    },
    {
        label: "Process",
        href: "#process",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "Why Choose Us",
        href: "#whychooseus",
    },
];

export default function Navbar() {
    const headerRef =
        useRef<HTMLElement | null>(null);

    const [mobileMenu, setMobileMenu] =
        useState(false);

    const [active, setActive] =
        useState("Home");

    const [isOnLightSection, setIsOnLightSection] =
        useState(false);

    useEffect(() => {
        const isLightColor = (color: string) => {
            const match = color.match(
                /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
            );

            if (!match) {
                return false;
            }

            const [, red, green, blue, alpha] =
                match;

            if (alpha !== undefined && Number(alpha) < 0.5) {
                return false;
            }

            const brightness =
                (Number(red) * 299 +
                    Number(green) * 587 +
                    Number(blue) * 114) /
                1000;

            return brightness > 180;
        };

        const updateNavbarTheme = () => {
            const header = headerRef.current;
            const home = document.getElementById("home");

            // Keep navbar transparent over the hero (white form was falsely detected as light)
            if (home) {
                const homeBottom = home.getBoundingClientRect().bottom;
                const headerBottom =
                    header?.getBoundingClientRect().bottom ?? 90;

                if (homeBottom > headerBottom + 40) {
                    setIsOnLightSection(false);
                    return;
                }
            }

            const sampleY = Math.min(
                window.innerHeight - 1,
                (header?.getBoundingClientRect().bottom ??
                    90) + 8
            );
            const sampleX = window.innerWidth / 2;

            const section = document
                .elementsFromPoint(sampleX, sampleY)
                .find((element) => {
                    if (
                        header &&
                        header.contains(element)
                    ) {
                        return false;
                    }

                    return element.closest("section");
                })
                ?.closest("section");

            if (!section) {
                setIsOnLightSection(false);
                return;
            }

            let element: Element | null = section;

            while (
                element &&
                element !== document.body
            ) {
                const backgroundColor =
                    window.getComputedStyle(
                        element
                    ).backgroundColor;

                if (
                    backgroundColor !==
                        "rgba(0, 0, 0, 0)" &&
                    backgroundColor !==
                        "transparent"
                ) {
                    setIsOnLightSection(
                        isLightColor(backgroundColor)
                    );
                    return;
                }

                element = element.parentElement;
            }

            setIsOnLightSection(false);
        };

        updateNavbarTheme();

        window.addEventListener(
            "scroll",
            updateNavbarTheme,
            { passive: true }
        );
        window.addEventListener(
            "resize",
            updateNavbarTheme
        );

        return () => {
            window.removeEventListener(
                "scroll",
                updateNavbarTheme
            );
            window.removeEventListener(
                "resize",
                updateNavbarTheme
            );
        };
    }, []);

    const scrollToHash = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (!href.startsWith("#")) return;

        const target = document.getElementById(href.slice(1));
        if (!target) return;

        event.preventDefault();

        const nav = headerRef.current?.querySelector("nav");
        const headerOffset = nav
            ? nav.getBoundingClientRect().bottom
            : 100;
        const top =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerOffset -
            16;

        window.scrollTo({
            top: Math.max(0, top),
            behavior: "smooth",
        });

        if (window.location.hash !== href) {
            window.history.pushState(null, "", href);
        }
    };

    return (
        <header
            ref={headerRef}
            className="
        fixed
        top-0
        left-0
        z-50

        w-full
      "
        >
            <div
                className="
          max-w-[1500px]
          mx-auto

          px-4
          sm:px-6
          lg:px-10

pt-2
sm:pt-3

lg:pt-5        "
            >
                {/* NAVBAR */}
                <motion.nav
                    initial={{
                        opacity: 0,
                        y: -40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className={`
            relative

            w-full

            h-[78px]

            flex
            items-center

            rounded-[22px]

            px-3
            sm:px-5
            lg:px-6

            transition-all
            duration-300

            ${isOnLightSection
                            ? `
                border
                border-black/[0.08]
                backdrop-blur-xl
                bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(255,248,248,0.92)_45%,rgba(255,235,237,0.88)_100%)]
                shadow-[0_10px_40px_rgba(50,44,46,0.08)]
              `
                            : `
                border
                border-transparent
                bg-transparent
                backdrop-blur-none
                shadow-none
              `
                        }
          `}
                >
                    {/* LOGO */}
                    <div className="shrink-0 z-10">
                        <Link href="/">
                            <Image
                                src="/Images/icon.webp"
                                alt="Logo"
                                width={150}
                                height={40}
                                priority
                                className="
                  w-auto
                  h-[34px]
                  sm:h-[38px]

                  object-contain
                "
                            />
                        </Link>
                    </div>

                    {/* CENTER NAV */}
                    <div
                        className="
              absolute
              left-1/2
              -translate-x-1/2

              hidden
              lg:flex

              items-center
              gap-10
            "
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(event) => {
                                    setActive(item.label);
                                    scrollToHash(event, item.href);
                                }}
                                className={`
                  relative

                  text-[15px]

                  font-semibold

                  transition-all
                  duration-300

                  ${active === item.label
                                        ? "text-[#E40015]"
                                        : isOnLightSection
                                            ? "text-black/75 hover:text-black"
                                            : "text-white/80 hover:text-white"
                                    }
                `}
                            >
                                <span
                                    className="
                    relative

                    after:absolute
                    after:left-0
                    after:-bottom-2

                    after:h-[2px]

                    after:transition-all
                    after:duration-300
                  "
                                >
                                    {item.label}
                                </span>

                                {/* ACTIVE LINE */}
                                {active === item.label && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="
                      absolute
                      left-0
                      -bottom-2

                      h-[2px]
                      w-full

                      bg-[#E40015]
                    "
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="ml-auto flex items-center gap-4">
                        {/* CTA BUTTON */}
                        <Link
                            href="#quote-form"
                            onClick={(event) =>
                                scrollToHash(event, "#quote-form")
                            }
                            className="
                hidden
                sm:flex

                items-center
                justify-center

                h-[48px]

                rounded-full

                bg-[#E40015]

                px-7

                text-white

                text-[14px]

                font-semibold

                transition-all
                duration-300

                hover:bg-red-700
                hover:scale-[1.03]

                shadow-[0_0_35px_rgba(228,0,21,0.35)]
              "
                        >
                            Get Free Quote
                        </Link>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() =>
                                setMobileMenu(!mobileMenu)
                            }
                            className={`
                lg:hidden

                w-11
                h-11

                rounded-full

                border
                ${isOnLightSection
                                    ? "border-black/10"
                                    : "border-white/10"
                                }

                ${isOnLightSection
                                    ? "bg-black/5"
                                    : "bg-white/10"
                                }

                backdrop-blur-md

                flex
                items-center
                justify-center

                ${isOnLightSection
                                    ? "text-black"
                                    : "text-white"
                                }
              `}
                        >
                            {mobileMenu ? (
                                <X size={20} />
                            ) : (
                                <Menu size={20} />
                            )}
                        </button>
                    </div>
                </motion.nav>

                {/* MOBILE MENU */}
                <motion.div
                    initial={false}
                    animate={{
                        height: mobileMenu
                            ? "auto"
                            : 0,
                        opacity: mobileMenu ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="
            lg:hidden

            overflow-hidden
          "
                >
                    <div
                        className={`
              mt-3

              rounded-[24px]

              border
              ${isOnLightSection
                            ? "border-black/10"
                            : "border-white/10"
                        }

              ${isOnLightSection
                            ? "bg-white/95"
                            : "bg-black/70"
                        }

              backdrop-blur-xl

              p-5
            `}
                    >
                        <div className="flex flex-col gap-5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(event) => {
                                        setActive(
                                            item.label
                                        );

                                        setMobileMenu(
                                            false
                                        );

                                        scrollToHash(
                                            event,
                                            item.href
                                        );
                                    }}
                                    className={`
                    text-[15px]

                    font-medium

                    transition-all
                    duration-300

                    ${active ===
                                            item.label
                                            ? "text-[#E40015]"
                                            : isOnLightSection
                                                ? "text-black/75 hover:text-black"
                                                : "text-white/80 hover:text-white"
                                        }
                  `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* MOBILE CTA */}
                        <Link
                            href="#quote-form"
                            onClick={(event) => {
                                setMobileMenu(false);
                                scrollToHash(event, "#quote-form");
                            }}
                            className="
                mt-6

                flex
                items-center
                justify-center

                h-[50px]

                rounded-full

                bg-[#E40015]

                text-white

                text-[15px]

                font-semibold

                transition-all
                duration-300

                hover:bg-red-700
              "
                        >
                            Get Free Quote
                        </Link>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
