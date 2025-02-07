"use client";

import { useState } from "react";
import { Menu, X, Code2, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <div className="flex space-x-2">
                <a
                  href="https://github.com/affan0321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/affan-tahir-bb7825330/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block hover:text-primary transition-colors px-3 py-2"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block hover:text-primary transition-colors px-3 py-2"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block hover:text-primary transition-colors px-3 py-2"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block hover:text-primary transition-colors px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
