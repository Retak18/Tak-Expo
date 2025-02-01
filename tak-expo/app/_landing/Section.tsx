"use client";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  className?: string;
}>;
const Section = (props: SectionProps) => {
  return (
    <section
      className={cn(
        "my-8 md:my-14 lg:my-20 max-w-2xl m-auto lg:p-x-6 px-4",
        props.className,
        "my-12"
      )}
    >
      {props.children}
    </section>
  );
};

export default Section;
