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
import { Badge, badgeVariants } from "@/components/ui/badge";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import Link from "next/link";

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
              isDesktop
                ? "hover:-translate-x-5 transition ease-in-out duration-180"
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
            <DialogFooter>
              <ImageSlider project={index} url={p.url} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
