import React from "react";
import Section from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedIcon } from "./icons/LinkedIcon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky ease-in-out duration-300 top-0  z-20 bg-background/80 backdrop-blur  ">
      <Section className=" flex items-center max-w-[1150px] h-12 ">
        <h1 className="text-4xl font-bold text-primary">
          Tarek
          <span className="bg-gradient-to-tr from-green-600 via-sky-300 to-blue-600 bg-clip-text text-transparent"> Dev</span>
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <a href="#projects" className={cn(buttonVariants({ variant: "outline" }))}>
            Mes projects
          </a>
          <Link
            href="https://github.com/retak18"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <GithubIcon size={14} className="text-foreground" />
          </Link>
          <Link
            href="www.linkedin.com/in/tarek-lamarti-06b041b9"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <LinkedIcon size={14} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};

export default Header;
