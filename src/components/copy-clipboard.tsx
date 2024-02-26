import React, { ComponentPropsWithoutRef, useState } from "react";
import { ClipboardList } from "lucide-react";

interface CopyClipboardProps extends ComponentPropsWithoutRef<"div"> {
  animateCopy: boolean;
}

const CopyClipboard: React.FC<CopyClipboardProps> = ({
  animateCopy,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`
        border-opacity-22 absolute bottom-10
        right-6 z-10 flex 
        items-center justify-center 
        space-x-1 rounded-lg  
        border border-white px-[0.2rem]
        py-[0.125rem] text-sm 
        text-white 
        shadow-md 
        backdrop-blur-[6.1px]
        hover:cursor-pointer
        ${animateCopy ? "animate-flash" : ""}
      `}
    >
      <ClipboardList width={20} height={20} />
      <span>Copy</span>
    </div>
  );
};

export default CopyClipboard;
