"use client";

import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Typewriter } from "@/components/ui/typewriter";
import { clientApi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownSquareIcon, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const { data: umamiStats } = useQuery({
    queryKey: ["pageViews"],
    queryFn: clientApi.views.getStats,
  });

  return (
    <div className="relative flex flex-col justify-center overflow-hidden border-b pt-8 sm:pt-12">
      {/* Gradient background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 text-center sm:gap-12 md:flex-row md:text-left"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rotate-3 rounded-lg border-2" />
              <div className="absolute -inset-1 -rotate-3 rounded-lg border-2" />
              <div className="bg-background relative rounded-lg border-2 p-1.5 sm:p-2">
                <Profile />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="md:flex-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 inline-flex flex-wrap items-center justify-center gap-2 sm:mb-4 md:justify-start"
            >
              <div className="bg-background border px-2.5 py-1 sm:px-3">
                <span className="text-foreground/60 font-mono text-[10px] sm:text-xs">
                  {"<"} Hello World {"/>"}
                </span>
              </div>
              <div className="h-px w-8 bg-[#e1e1e1] sm:w-12" />
              <span className="text-foreground/50 font-mono text-[10px] sm:text-xs md:text-sm">
                Full-Stack Developer & Entrepreneur
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-incognito mb-3 text-2xl leading-tight font-semibold sm:mb-4 sm:text-3xl md:text-4xl lg:text-6xl"
            >
              <span className="text-foreground">Hey, I&apos;m </span>
              <span className="relative text-[#8cc2ff] italic">
                <Typewriter
                  text={["Patrick Francis", "DontFollowPat"]}
                  speed={85}
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar="|"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/60 mx-auto max-w-2xl text-sm font-light leading-relaxed sm:text-base md:mx-0"
            >
              Full-stack developer and entrepreneur building impactful mobile and web apps.
              Creator of PrayAi.org and FakeFlex.app - helping millions connect, grow, and thrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 flex w-full flex-col items-center gap-3 sm:mt-5 sm:flex-row sm:gap-4 md:w-auto md:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group/btn w-full border-2 font-medium sm:w-auto"
              >
                <a href={"#contact"}>
                  Lets Connect
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group/btn w-full border-2 font-medium sm:w-auto"
              >
                <Link href={"/resume.pdf"}>
                  <Download className="size-4 transition-transform group-hover/btn:translate-y-0.5" />
                  <span className="sm:inline">Download resume</span>
                  <span className="hidden max-sm:inline">Resume</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/*  Stats Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 border md:max-w-3/4 md:border-0 md:border-t md:border-r lg:grid-cols-4">
          {[
            {
              label: "Portfolio views",
              value: umamiStats?.data?.pageviews ?? 0,
            },
            { label: "Years of Experience", value: 5 },
            { label: "Apps Launched", value: 10 },
            { label: "Active Users", value: 50000 },
          ].map((stat, i) => (
            <div
              key={i}
              className={cn(
                "group hover:bg-foreground/5 relative p-4 text-center transition-colors sm:p-6 md:p-8",
                i !== 3 && "border-r",
                i < 2 && "border-b lg:border-b-0",
              )}
            >
              <div className="text-foreground mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl">
                <NumberTicker value={stat.value} />+
              </div>
              <div className="text-foreground/50 font-mono text-[10px] tracking-wider uppercase sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground absolute right-4 bottom-2 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex">
          SCROLL DOWN
          <ArrowDownSquareIcon className="size-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
