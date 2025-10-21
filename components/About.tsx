"use client";

import { FC } from "react";
import SectionHeading from "./accessories/SectionHeading";
import Container from "./Container";
import Link from "next/link";
import FadeUp from "@/motions/FadeUp";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";

const About: FC = () => {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <section id="about" className="about-container" ref={ref}>
      <Container>
        <FadeUp>
          <div className="about">
            <SectionHeading>About me</SectionHeading>
            <div>
              <p>
                I am a{" "}
                <span className="bold">
                  software engineer with over 3 years of experience
                </span>{" "}
                and a <span className="bold">Carleton University graduate</span>
                . My passion lies in{" "}
                <span className="bold">
                  collaboration and problem-solving through software development
                </span>
                . I have honed my skills across{" "}
                <span className="bold">
                  various programming languages and technologies
                </span>
                , with a strong emphasis on{" "}
                <span className="bold">
                  web development, Python, Java, and C
                </span>
                .
              </p>
              <br />
              <p>
                I am dedicated to{" "}
                <span className="bold">continuous learning</span> and am always
                seeking opportunities to{" "}
                <span className="bold">
                  enhance my skills while staying updated with the latest
                  technology
                </span>
                . As a software engineer, I thrive for{" "}
                <span className="bold">
                  quality, efficiency, and innovation
                </span>
                . I also thrive in{" "}
                <span className="bold">collaborative environments</span> where I
                can{" "}
                <span className="bold">
                  contribute to and learn from a team
                </span>
                , driving projects to successful completion. If you'd like to
                explore some of the projects I've worked on, feel free to check
                out my{" "}
                <Link
                  href={externalLinks.github}
                  className="bold"
                  target="_blank"
                >
                  Github profile
                </Link>
                .
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default About;
