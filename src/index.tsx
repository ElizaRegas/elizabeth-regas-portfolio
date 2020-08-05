import React from "react";

export type HoverImageProps = {
  src: string;
  hoverSrc: string;
  disabled?: boolean;
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler;
};