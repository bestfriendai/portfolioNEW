"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import env from "@/config/env";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "PrayAi.org",
      description:
        "AI-powered faith companion helping millions deepen their spiritual journey through personalized prayer, scripture, and guidance. Available on web and mobile (iOS & Android).",
      tags: ["AI", "Mobile", "Faith", "React Native"],
      github: null,
      image: "/projects/prayai-screenshot.png",
      live: "https://prayai.org",
      date: "Jan, 2024",
      status: "completed",
    },
    {
      title: "FakeFlex.app",
      description: "Social fitness platform connecting thousands of users to track workouts, share progress, and stay motivated. Cross-platform mobile app with real-time updates.",
      tags: ["Social", "Fitness", "Mobile", "Fullstack"],
      github: null,
      image: "/projects/fakeflex-screenshot.png",
      live: "https://fakeflex.app",
      date: "Mar, 2024",
      status: "completed",
    },
    {
      title: "DontFollowPat.com",
      description:
        "Personal portfolio and brand hub showcasing projects, technical expertise, and entrepreneurial journey.",
      tags: ["Portfolio", "Next.js", "Personal"],
      github: `https://github.com/${env.NEXT_PUBLIC_GITHUB_USERNAME}/portfolio`,
      image: "/projects/portfolio-screenshot.png",
      live: env.NEXT_PUBLIC_APP_URL,
      date: "Nov, 2025",
      status: "completed",
    },
  ];

  const tagColors = {
    AI: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    Mobile: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    Faith: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    "React Native": "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    Social: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    Fitness: "bg-green-500/10 text-green-600 border-green-500/30",
    Fullstack: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    Portfolio: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    "Next.js": "bg-slate-500/10 text-slate-600 border-slate-500/30",
    Personal: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  };

  return (
    <SectionHeading id="projects" text="Projects">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      <div className="divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side  */}
              <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image Container */}
                <div className="relative inset-0 z-10 p-4 sm:p-6 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Main image */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side  */}
              <div className="relative flex flex-col justify-center overflow-hidden p-4 sm:p-6 md:p-12 lg:p-16">
                {/* Date & Status */}
                <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
                  <time className="text-muted-foreground font-mono text-[10px] sm:text-xs">
                    {project.date}
                  </time>
                  <div className="bg-border h-3 w-px sm:h-4" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2",
                        project.status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500",
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-[10px] uppercase sm:text-xs">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title  */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-incognito text-2xl font-bold sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  <HeadingLine className="mt-2 sm:mt-3" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:mb-6 md:text-base">
                  {project.description}
                </p>

                {/* Tags  */}
                <div className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "border font-mono text-[10px] sm:text-xs",
                        tagColors[tag as keyof typeof tagColors],
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/*  Buttons */}
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="group/btn relative border-2 font-medium"
                    disabled={!project.github}
                  >
                    <a
                      href={project.github || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">View Code</span>
                      <span className="sm:hidden">Code</span>
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group/btn border-2 font-medium"
                    disabled={!project.live}
                  >
                    <a
                      href={project.live || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>

                {/*  slanted lines */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  {/* 1st Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                  {/* 2nd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />

                  {/* 3rd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />

                  {/* 4th Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects */}
      <div className="border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <Button asChild variant="ghost" size="lg" className="group font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
              VIEW ALL PROJECTS ON GITHUB
              <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionHeading>
  );
};

export default Projects;
