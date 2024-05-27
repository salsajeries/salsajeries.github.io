"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Data from "../data/project_data.json";
import TypewriterTitle from "@/components/TypewriterTitle";

export default function Projects() {
  return (
    <div className="flex flex-col items-end justify-center">
      <TypewriterTitle title={"projects"} size={"5vw"} />
      {Data.map((project: any) => (
        <Dialog key={project.title}>
          <DialogTrigger
            className="mb-5 mt-5 uppercase hover:-translate-x-5 "
            style={{ fontSize: "2vw", transition: "transform 0.18s ease-out" }}
          >
            {project.title}
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>
                {project.details.map((d: string, i: number) => {
                  return <li key={i}>{d}</li>;
                })}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
