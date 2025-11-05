"use client";

import { Logo } from "@/components/ui/logo";
import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import dayjs from "dayjs";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: siteConfig.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: siteConfig.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: siteConfig.twitter,
      label: "X (Twitter)",
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t px-4 py-4 md:px-8 md:py-3.5">
      <div className="text-foreground/70 flex flex-col items-center justify-between gap-4 text-xs sm:text-sm md:flex-row md:gap-3">

        <div className="inline-flex items-center gap-2">
          <Logo className="w-8 sm:w-10" />
          <span className="text-center sm:text-left">© {dayjs().year()} Patrick Francis. All rights reserved.</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 sm:gap-2"
        >
          <span className="text-foreground/60 text-xs sm:text-sm">Made with</span>
          <Heart className={`h-3.5 w-3.5 fill-red-400 text-red-400 sm:h-4 sm:w-4`} />
          <span className="text-foreground/60 text-xs sm:text-sm">in Next.js</span>
        </motion.div>


        <div className="inline-flex items-center gap-3 sm:gap-4">
          {/* Social Links */}
          <div className="inline-flex overflow-hidden rounded-md border *:size-9 *:border-r last:*:border-r-0 sm:*:size-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/60 hover:bg-muted/30 hover:text-foreground inline-flex items-center justify-center transition-colors active:scale-95"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>


          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-foreground/5 rounded-md border px-2.5 py-1.5 text-xs transition-all sm:px-2 sm:py-1 sm:text-sm"
          >
            <span className="hidden sm:inline">Back to top</span>
            <span className="sm:hidden">Top</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
