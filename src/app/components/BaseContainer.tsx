import React from "react";

type BaseContainerProps = {
  classNamePortraitFlex: string;
  classNameLandscapeFlex: string;
  classNamePortraitW: string;
  classNamePortraitH: string;
  classNameLandscapeW: string;
  classNameLandscapeH: string;
  classNamePX: string;
  classNamePY: string;
  children: React.ReactNode;
};

export const BaseContainer = ({
  classNamePortraitFlex,
  classNameLandscapeFlex,
  classNamePortraitW,
  classNamePortraitH,
  classNameLandscapeW,
  classNameLandscapeH,
  classNamePX,
  classNamePY,
  children,
}: BaseContainerProps) => {
  const baseContainerClassName = [
    "justify-between",
    "flex",
    classNamePortraitFlex,
    classNameLandscapeFlex,
    classNamePortraitW,
    classNamePortraitH,
    classNameLandscapeW,
    classNameLandscapeH,
    classNamePX,
    classNamePY,
  ].join(" ");

  return <div className={baseContainerClassName}>{children}</div>;
};
