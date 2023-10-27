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
                I am a <span className="bold">fourth-year</span> student
                pursuing a{" "}
                <span className="bold">degree in Software Engineering</span> at
                Carleton University. I enjoy collaborating with fellow motivated
                individuals and utilizing software development as a means to
                tackle real world problems, ultimately delivering valuable
                solutions. I am{" "}
                <span className="bold">
                  proficient in various languages, such as web development
                  technologies, Python, Java, and C.
                </span>
              </p>
              <br />
              <p>
                I am{" "}
                <span className="bold">committed to continuous learning</span>,{" "}
                <span className="bold">and</span> constantly seeking ways in{" "}
                <span className="bold">enhancing my skill set</span>. If you'd
                like to explore some of the projects I've worked on, feel free
                to check out my{" "}
                <Link
                  href={externalLinks.github}
                  className="bold"
                  target="_blank"
                >
                  Github
                </Link>{" "}
                profile. I am eagerly looking forward to{" "}
                <span className="bold">graduation in April 2024</span> and am
                actively{" "}
                <span className="bold">
                  seeking full-time software developer
                </span>{" "}
                positions to embark on the next phase of my career.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default About;
