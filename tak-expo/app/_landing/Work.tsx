"use client";
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
  const [isGridView, setIsGridView] = useState(false);

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
    <div className="w-full max-w-[1200px] mx-auto p-4 relative">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8" id="projects">
        My Projects
      </h2>

      {/*----------------------------------- Mobile View - Grid Layout ------------------------------*/}
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
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-background  rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-8 w-8 p-0"
                )}
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={14} className="text-foreground" />
              </a>
              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-8 w-8 p-0"
                )}
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

      {/*-------------------------------------- Desktop View  ------------------------------------*/}
     
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsGridView(!isGridView)}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "transition-colors"
          )}
        >
          {isGridView ? "Carrousel View" : "Grid View"}
        </button>
      </div>

      {/* -------------------------------------------Grid View------------------------------ */}
      <div className={isGridView ? "block" : "hidden"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-background rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-8 w-8 p-0"
                  )}
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={14} className="text-foreground" />
                </a>
                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-8 w-8 p-0"
                  )}
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
      </div>

      {/* ------------------------------------Carousel View--------------------------------------- */}
      <div className={isGridView ? "hidden" : "block"}>
        <ul ref={wrapperRef} className="group flex gap-[1.5%] h-[640px]">
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
             
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#63c5e30f]">
                <div className="absolute inset-0 flex flex-col justify-end p-6 rounded-xl"></div>
                <img
                  className="absolute left-1/2 top-1/2 h-[500px] w-[790px] max-w-none -translate-x-1/2 -translate-y-3/4 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div
                  className={`
                      inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px]
                      before:z-10 before:bg-texture after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0
                      ${activeItem === index ? "md:opacity-25" : "md:opacity-0"}
                      `}
                />
                <div
                  className={`absolute inset-0 p-6 flex flex-col justify-end`}
                >
                  <h3 className="text-lg text-white mx-1">{project.title}</h3>
                  
                  {activeItem === index && (
                    <>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-white/20 text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm mt-2">{project.description}</p>
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
                          <VercelIcon size={14} className="text-white" />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(14.1% 24.1%, 10% 61.6%, 97.5% 26.9%, 25.5% 0.1%, 20.7% 2%, 72.5% 62.5%, 32.2% 32.4%, 22.4% 38.1%, 67.5% 58.3%, 65.2% 34.5%, 87.5% 76.7%, 0.1% 44.9%, 97.9% 100%, 87.6% 76.8%, 36.1% 97.7%, 34.1% 84.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1255/378] w-[59.125rem] -translate-x-1/3 bg-gradient-to-tr  from-[#5850e0] to-[#7ba35e] opacity-30 "
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-20 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(64.1% 54.1%, 70% 31.6%, 77.5% 26.9%, 25.5% 0.1%, 20.7% 2%, 72.5% 62.5%, 32.2% 32.4%, 22.4% 38.1%, 27.5% 58.3%, 15.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 97.9% 100%, 87.6% 76.8%, 36.1% 97.7%, 34.1% 84.1%)",
          }}
          className="relative left-[calc(30%+3rem)] aspect-[1055/378] w-[59.125rem] -translate-x-1/3 bg-gradient-to-tr  from-[#5850e0] to-[#7ba35e] opacity-30 "
        />
      </div>
    </div>
  );
};

export default Work;
