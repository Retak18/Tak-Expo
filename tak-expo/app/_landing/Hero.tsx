import React, { PropsWithChildren } from "react";
import Section from "./Section";

const Hero = () => {
  return (
    <Section className="md:my-14 lg:my-20 max-w-2xl m-auto px-12  flex flex-col gap-2 lg:gap-4 my-12 relative min-h-[300px]">
      <div className="flex flex-row justify-center items-center gap-2">
        <h1
          className="bg-gradient-to-tr 
             from-green-600 via-sky-300 to-blue-600 
             bg-clip-text text-transparent 
             text-4xl lg:text-5xl font-bold lg:whitespace-nowrap z-10 animate-slidein300 opacity-0 "
        >
          Welcome to the Tak world
        </h1>{" "}
        <span className="text-4xl lg:text-5xl font-bold z-10 animate-slidein0 [--slidein-delay:500ms] opacity-0">🌍 </span>
      </div>
      <p className="text-lg leading-9 text-muted-foreground z-10 animate-slidein0 [--slidein-delay:500ms] opacity-0">
        Developer full-stack junior, in quest to always improve my code and make
        new applications, experience in Website, Mobile and Software development.
        <br /> 💻Love work with team and can also work alone.💻
      </p>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  from-[#5850e0] to-[#7ba35e] opacity-80 "
        />
      </div>
    </Section>
  );
};

const Code = (props: PropsWithChildren) => {
  return (
    <span className="px-1 rounded-md -mx-1 bg-card/50 border py-5">
      {props.children}
    </span>
  );
};

export default Hero;
