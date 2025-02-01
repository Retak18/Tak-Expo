"use client"
import Section from "@/app/_landing/Section";
import React, { useEffect, useRef, useState } from "react";
import { GithubIcon } from "./icons/GithubIcon";
import { VercelIcon } from "./icons/VercelIcon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Project } from "./WorkClient";

const Work = () => {
  const [activeItem, setActiveItem] = useState(2);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8" id="projects">My Projects</h2>

      {/* Mobile View - Grid Layout */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {Project.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-tr from-green-600/30 via-sky-300/30 to-blue-600/30 p-5 rounded-xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl object-cover"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-background  rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <a
                className={cn(buttonVariants({ variant: "outline" }), "h-8 w-8 p-0")}
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={14} className="text-foreground" />
              </a>
              <a
                className={cn(buttonVariants({ variant: "outline" }), "h-8 w-8 p-0")}
                href={project.verceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <VercelIcon size={14} className="text-foreground" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Carousel Layout */}
      <div className="hidden md:block">
        <ul
          ref={wrapperRef}
          className="group flex gap-[1.5%] h-[640px]"
        >
          {Project.map((project, index) => (
            <li
              key={project.id}
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={`
                relative md:w-[12%] md:first:w-[5%] md:last:w-[5%] md:[&[aria-current='true']]:w-[80%]
                md:[transition:width_var(--transition,200ms_ease-in)]
                before:hidden md:before:block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0
                [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[12%] hover:w-[20%]
              `}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  className="absolute left-1/2 top-1/2 h-[500px] w-[790px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className={`
                  inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px]
                  before:z-10 before:bg-texture after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0
                  ${activeItem === index ? 'md:opacity-25' : 'md:opacity-0'}
                `} />
                <div className={`
                  left-8 top-8 w-[590px] transition-[transform,opacity] md:absolute
                  ${activeItem === index ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-4 md:opacity-0'}
                `}>
                  <h3 className="text-lg text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-white/20 text-white rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;