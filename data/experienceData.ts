import { ReactElement, createElement } from "react";
import { IconBaseProps } from "react-icons";
import { GrLocation } from "react-icons/gr";

export interface ExperienceDataInterface {
  name: string;
  role: string;
  date: string;
  icon: ReactElement<IconBaseProps, React.FunctionComponent<IconBaseProps>>;
  content: string[];
}

export const experienceData: ExperienceDataInterface[] = [
  {
    name: "Ericsson",
    role: "Network Automation and Test/Software Developer",
    date: "Nov. 2024 - Present",
    icon: createElement(GrLocation),
    content: [
      `Provided lab support through Jira, diagnosing and resolving customer-reported incidents related to network, device configurations, test environments, and overall ensured timely closure of tickets to reduce downtime.`,
      `Collaborated with the automation team to design and implement a verification pipeline for code commits and merges, integrating linting, security scans, automated testing, and documentation validation to ensure consistent code quality and deployment integrity.`,
      `Collaborated with other teams to plan and execute lab migrations on demand, including hardware relocation, reconfiguration of network topologies, and validation of the system integrity post-migration.`,
      `Enhanced and maintained internal monitoring tools for access servers through Python, Ansible and Jenkins to improve system reliability and observability.`,
    ],
  },
  {
    name: "Irdeto",
    role: "Software Developer",
    date: "Sept. 2022 - Sept. 2023",
    icon: createElement(GrLocation),
    content: [
      `Collaborated with the Irdeto Reference Cloud App (IRCA) team in developing a web application using Next.js and TypeScript.`,
      `Worked with Amazon Web Service (AWS) to host the website, Microsoft Azure to host the database and Auth0 for authentication,
ensuring 99.9% uptime and robust security for user data.`,
      `Implemented multiple web pages with internationalization features, adapting to users’ preferred languages and improving the user
experience.`,
      `Played a pivotal role in creating a TypeScript-based internal component library, providing pre-defined web components and
functionalities. This reduced development time by 25% and standardized the codebase across all web projects.`,
      `Spearheaded in the development of a slack bot during corporal hackathon to help maintain and track merge requests from GitLab,
enhancing team collaboration and reducing merge request resolution time.`,
      `Optimized the logger implementation using python in one of Irdeto’s software components, making logs more efficient and effective.
This streamlined the debugging process and reduced bug resolution.`,
      `Provided virtual and manual assistance in maintaining the test framework and machines, reducing test-related downtime by 50%.`,
    ],
  },
  {
    name: "Elections Canada",
    role: "Website Designer & Developer ",
    date: "Jan. 2022 - Oct. 2023",
    icon: createElement(GrLocation),
    content: [
      `Led the development of webpages within the Digital Transformation Branch, and utilized HTML, CSS, JavaScript, and JavaScript
libraries to create webpages for various teams within the branch.`,
      `Engaged in weekly meetings with key stakeholders to gather requirements, design, and develop their webpages, ensuring alignment
with business needs and enhancing stakeholder satisfaction`,
      `Developed a search algorithm for the Digital Transformation Branch, significantly improving content discoverability and reducing
search time.`,
      `Created a custom style sheet and JavaScript file for the Digital Transformation Branch, enabling developers to easily create custom
components and animations.`,
      `Spearheaded the development of the Digital Enterprise Transformation Branch using HTML, CSS, and JavaScript, resulting in a
modern, user-friendly interface.`,
      `Developed a script file for animating components on web pages using JavaScript, enhancing user interaction and aiding in improved
user experience.`,
    ],
  },
];
