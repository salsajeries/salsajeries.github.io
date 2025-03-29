"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
//import Data from "../_data/project_data.json";
import TypewriterTitle from "@/_components/TypewriterTitle";
import useMediaQuery from "../_hooks/useMediaQuery";
import ImageSlider from "../../_components/ImageSlider";
import { Badge } from "@/_components/ui/badge";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import Link from "next/link";
import useGetProjects from "../_hooks/useGetProjects";
import { Project } from "@/types";
import { useEffect } from "react";

export default function Projects() {
  const isDesktop = useMediaQuery("(min-width: 786px)");
  const { projects, loading, error } = useGetProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className={`flex flex-col p-10 justify-center 
      ${isDesktop ? "w-[50vw] items-end" : "w-[100vw] items-center"}`}
      id="projects"
    >
      <TypewriterTitle
        title={"projects"}
        size={`${isDesktop ? "4em" : "2.5em"}`}
      />
      {projects.map((p: Project, index: number) => (
        <Dialog key={p.title}>
          <DialogTrigger
            className={`mb-5 mt-5 uppercase ${
              isDesktop
                ? "hover:opacity-80 hover:-translate-x-5 transition ease-in-out duration-180"
                : ""
            }`}
            style={{
              fontSize: `${isDesktop ? "1.5em" : "1em"}`,
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
                <ul className="list-disc ml-5">
                  {p.details.map((d: string, i: number) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "1.5em",
                        listStyleType: "circle",
                      }}
                      className="custom-background p-1"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="p-3">
                  <Link passHref href={p.github} className="p-1">
                    <Badge variant="default">
                      <GitHubIcon className="pr-1" />
                      Github
                    </Badge>
                  </Link>
                  {p.url ? (
                    <Link passHref href={p.url} className="p-1">
                      <Badge variant="default">
                        <LanguageRoundedIcon className="pr-1" />
                        Website
                      </Badge>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="w-full max-h-[600px] overflow-auto">
              <ImageSlider images={p.images} url={p.url} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
