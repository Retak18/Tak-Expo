import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "../icons/GithubIcon";
import { VercelIcon } from "../icons/VercelIcon";
import { buttonVariants } from "@/components/ui/button";
import { Project } from "../WorkClient";

const PhoneView = () => {
    
      
  return (
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
  );
};

export default PhoneView;
