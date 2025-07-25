"use client";

import React from "react";

type BaseButtonProps = {
  classNamePortraitW: string;
  classNamePortraitH: string;
  classNameLandscapeW: string;
  classNameLandscapeH: string;
  classNameBg: string;
  children: React.ReactNode;
};

export const BaseButton = ({
  classNamePortraitW,
  classNamePortraitH,
  classNameLandscapeW,
  classNameLandscapeH,
  classNameBg,
  children,
}: BaseButtonProps) => {
  const baseButtonClassName = [
    "portrait:rounded-[1dvh]",
    "landscape:rounded-[1dvw]",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "flex",
    classNamePortraitW,
    classNamePortraitH,
    classNameLandscapeW,
    classNameLandscapeH,
    classNameBg,
  ].join(" ");

  return <div className={baseButtonClassName}>{children}</div>;
};
