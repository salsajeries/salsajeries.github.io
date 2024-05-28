"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Data from "../data/project_data.json";
import TypewriterTitle from "@/components/TypewriterTitle";
import useMediaQuery from "../hooks/use-media-query";
import ImageSlider from "./ImageSlider";

export default function Projects() {
  const isDesktop = useMediaQuery("(min-width: 786px)");

  return (
    <div
      className={`flex flex-col ${
        isDesktop ? "w-[50vw] items-end" : "w-[100vw] items-center"
      } p-10 justify-center`}
    >
      <TypewriterTitle
        title={"projects"}
        size={`${isDesktop ? "4em" : "2.5em"}`}
      />
      {Data.map((p: any, index: number) => (
        <Dialog key={p.title}>
          <DialogTrigger
            className={`mb-5 mt-5 uppercase ${
              isDesktop ? "hover:-translate-x-5" : ""
            }`}
            style={{
              fontSize: `${isDesktop ? "1.5em" : "1em"}`,
              transition: "transform 0.18s ease-out",
            }}
          >
            {p.title}
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogTitle style={{ fontSize: "2.5em" }} className="pb-3">
                {p.title}
              </DialogTitle>
              <DialogDescription>
                <p style={{ fontSize: "1.5em" }} className="pb-3">
                  {p.dates}
                </p>
                {p.details.map((d: string, i: number) => {
                  return (
                    <li key={i} style={{ fontSize: "1em" }}>
                      {d}
                    </li>
                  );
                })}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <ImageSlider project={index} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
