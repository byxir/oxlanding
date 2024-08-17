import * as React from "react";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export function PortfolioCarouselNoSnap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md overflow-auto absolute">
      <div className="flex">
        <div className="w-[calc((100vw-1280px)/2)]"></div>
        <div className="flex w-max gap-x-4 overflow-auto">{children}</div>

        <div className="w-[calc((100vw-1280px)/2)]"></div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
