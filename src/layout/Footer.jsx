import React from 'react'
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const socialLinks = [
  { icon: Github, href: "https://github.com/Akay2307", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akinbola-binuyo-03128a367/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/akin_bola23", label: "Twitter" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@akin_bola23", label: "TikTok" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              HayKay<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Binuyo Akinbola. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
                
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer