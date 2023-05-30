"use client";

import React from "react";
import { IconProps } from "./types";
import Image from "next/image";

export default function Icon({
  icon = undefined,
  onClick = () => {},
}: IconProps) {
  function handleClick() {
    onClick();
  }

  return !icon ? null : (
    <Image className="Icon" onClick={handleClick} src={icon} alt={icon} />
  );
}
