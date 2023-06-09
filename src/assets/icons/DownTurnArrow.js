import * as React from "react";
const SvgDownTurnArrow = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 15-4 4m0 0-4-4m4 4V8a3 3 0 0 1 3-3h7"
    />
  </svg>
);
export default SvgDownTurnArrow;
