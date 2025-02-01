import { ComponentPropsWithoutRef } from "react";

export const VercelIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
    width={props.size}
    height={props.size}
      viewBox="0 0 256 222"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <polygon
          fill="currentColor"
          points="128 0 256 221.705007 0 221.705007"
        ></polygon>
      </g>
    </svg>
  );
};
