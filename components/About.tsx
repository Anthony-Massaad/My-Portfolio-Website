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
                  software engineer with 2 years of experience
                </span>{" "}
                and <span className="bold">Carleton University graduate</span>{" "}
                with a passion for collaboration and problem-solving through
                software development. My{" "}
                <span className="bold">
                  proficiency spans in various languages, such as web
                  development technologies, Python, Java, and C.
                </span>
              </p>
              <br />
              <p>
                Dedicated to continuous learning, I am always seeking
                opportunities to enhance my skills. If you'd like to explore
                some of the projects I've worked on, feel free to check out my{" "}
                <Link
                  href={externalLinks.github}
                  className="bold"
                  target="_blank"
                >
                  Github profile
                </Link>
                . I am actively{" "}
                <span className="bold">
                  seeking full-time software developer
                </span>{" "}
                positions to further advance my career.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default About;
