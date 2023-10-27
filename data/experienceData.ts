import { FunctionComponentElement, createElement } from "react";
import { IconBaseProps } from "react-icons";
import { GrLocation } from "react-icons/gr";

export interface ExperienceDataInterface {
  name: string;
  role: string;
  date: string;
  icon: FunctionComponentElement<IconBaseProps>;
  content: string[];
}

export const experienceData: ExperienceDataInterface[] = [
  {
    name: "Irdeto",
    role: "Software Developer",
    date: "Apr 2022 - Sept 2023",
    icon: createElement(GrLocation),
    content: [
      `Worked with the Irdeto Reference Cloud App (IRCA) team in developing a web application using NextJs and TypeScript.`,
      `Worked with Amazon Web Service (AWS), Microsoft Azure and Auth0 authentication.`,
      `Implemented many web pages including an internationalization page to help with creating unique translations for the content of the website, with the base language being English. This solution was then used in many other web applications at Irdeto. `,
      `Also contributed to creating a Irdeto website component library using TypeScript to have pre-defined web components and functionalities that will assist in speeding up web development at Irdeto.`,
    ],
  },
  {
    name: "Elections Canada",
    role: "Website Designer & Developer ",
    date: "Sept 2022 - Jan 2023",
    icon: createElement(GrLocation),
    content: [
      `Worked on a new website branch, Digital Enterprise Transformation Branch (DETB) using HTML, CSS, and JavaScript.`,
      `Have weekly meetings with key stakeholders to discuss their requirements to design and develop their webpages.`,
      `Created a script file for animating components on web pages using JavaScript. `,
    ],
  },
  {
    name: "Irdeto",
    role: "Software Developer",
    date: "Sept 2022 - Jan 2023",
    icon: createElement(GrLocation),
    content: [
      `Provided manual assistance in maintaining the test framework and machines.`,
      `Improved the logger implementation using python in one of Irdeto’s software components, which enhance the logs more efficiently and effectively. This allows debugging to be much easier.`,
      `Aided in one of the major product releases to a client, which resulted in developing in C and in Makefile to support a dialect.`,
      `In a team collaboration during corporal hackathon, we developed a slack bot using python to help track Merge Requests (MR) from GitLab. This is done by sending a daily list of pending MRs, as well as post into a specified channel of MRs sent. This helps keep organization and ensure everything is reviewed.`,
    ],
  },
  {
    name: "Elections Canada",
    role: "Website Designer and Developer",
    date: "Jan 2022 - Aug 2022",
    icon: createElement(GrLocation),
    content: [
      `Using web programming languages (HTML, CSS, JavaScript, and JavaScript libraries), I develop webpages for the Digital Transformation Branch. This includes web pages for the change management team, project management team, Data Management Centre of Expertise…etc.`,
      `Have weekly meetings with key stakeholders to discuss their requirements to design and develop their webpages.`,
      `Developed a search algorithm for the Digital Transformation Branch to locate content much easier.`,
      `Create a custom style sheet and JavaScript file for the Digital Transformation Branch, which allows any developer to easily create custom components and animations.`,
      `Using PowerApps, I developed a form to automate our team’s weekly updates. This form has reduced the volume of emails and eliminated the need to manually gather the team’s information. developing new skills, as well as showing and enhance my current skills either.`,
    ],
  },
];
