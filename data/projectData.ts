type ProjectInterface = {
  name: string;
  language: string[];
  imgUrl: string;
  content: string[];
  github: string;
}

export const projectsData: ProjectInterface[] = [
  {
    name: "AI Flappy Bird",
    language: ["Python", "Machine Learning"],
    imgUrl: "/FlappyBird.png",
    content: [
      `Developed a fully functional Flappy Bird game using Python and Pygame, implementing realistic physics based mechanics for gravity, velocity, and collision detection to simulate natural bird motion`,
      `Engineered a neural network from scratch and implemented neuroevolution using genetic algorithms, enabling each generation of agents to inherit and mutate weights from top performing parents for performance optimization`,
      `Achieved autonomous gameplay with the best evolved bird trained`,
    ],
    github: "https://github.com/Anthony-Massaad/FlappyBird_NeuralNetwork",
  },
  {
    name: "E-commerce Store Website",
    language: ["Prisma", "React-Typescript", "scss"],
    imgUrl: "/ECommerce.jpg",
    content: [
      `Developed a full-stack e-commerce web application replicating real-world shopping workflows using Next.js, TypeScript, and Prisma ORM with a PostgreSQL backend`,
      `Leveraged PrimeReact and PrimeFlex for responsive UI components and layout structure, complemented by custom SCSS modules for extended styling and visual refinement`,
      `Implemented JWT-based authentication with encrypted cookies to securely manage user sessions and persisted login states across browser sessions`,
    ],
    github: "https://github.com/Anthony-Massaad/store-website-nextjs",
  },
  {
    name: "Audio Genre Classifier",
    language: [
      "Python",
      "Machine Learning",
      "Transfer Learning",
      "Deep Learning",
    ],
    imgUrl: "/GenreClassifier.png",
    content: [
      `Developed a machine learning model using a combination of Convolutional Neural Network and a Support Machine Vector to classify audio files to their Genres`,
      `Used Transfer Learning through a pretrained model tuned to work with the problem at hand`,
      `Used tuning techniques like Grid Search to optimize both models for better performance`,
    ],
    github:
      "https://github.com/Anthony-Massaad/Machine-Learning-AudioRecognizer",
  },
  {
    name: "Opinion Owl",
    language: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    imgUrl: "/opinionOwl.png",
    content: [
      `In a team environment, developed a Mini-Survey Monkey for users to create and fill surverys`,
      `Utilized Spring Boot to create a front-end user experience that is seamless`,
      `Used Object-Relational Mapping through Jakarta Persistence to simplify database interactions, enhances code maintainability, and ensures portability across various database systems.`,
    ],
    github: "https://github.com/Anthony-Massaad/OpinionOwl",
  },
  {
    name: "Real-Time Elevator Simulator",
    language: ["Java"],
    imgUrl: "/elevatorProject.png",
    content: [
      `Simulated an elevator control system in real-time using Java threads following the state design pattern.`,
      `Utilized UDP to connect the components through the network either via the same machine or across machines.`,
    ],
    github: "https://github.com/Anthony-Massaad/Elevator-Simulator",
  },
  {
    name: "Access Control System",
    language: ["Python", "JSON", "RBAC", "ABAC", "Access Control Matrix"],
    imgUrl: "/AccessControl.png",
    content: [
      `Designed and implemented a role-based access control (RBAC) system to manage user authentication and authorization, granting users permissions based on predefined roles`,
      `Integrated attribute-based access control (ABAC) to dynamically evaluate user attributes and contextual conditions, enforcing access restrictions during authentication and system use`,
      `Enforced strong password policies through rule-based enforcement to ensure compliance with security best practices`,
      `User Credentials are secured and hashed with a 32-byte salt`,
    ],
    github: "https://github.com/Anthony-Massaad/software-security-access-control",
  },
  {
    name: "Art Store",
    language: ["HTML", "CSS", "PHP", "JS", "SQL"],
    imgUrl: "/PaintStore.png",
    content: [
      `Developed an online art store website using PHP and NoSQL that allows users to browse and favorite a variety of paintings.`,
      `Uses caching to store data that was previously taken from the database. This makes the website faster because it does not retrieve complex code every single time.`,
      `Uses Object Orientated Programming for code reusability and flexibility. It also reduces data redundancy.`,
    ],
    github: "https://github.com/Anthony-Massaad/Art-Store-Website",
  },
  {
    name: "Real Time Chat",
    language: ["Ejs", "CSS", "JavaScript"],
    imgUrl: "/RealTimeChat.png",
    content: [
      `Created interface using Ejs, CSS and JavaScript that allow users to have a real time conversation with other users that are connected to the same server.`,
      `Created an easy to use interface to allow users to easily send messages and see how many users are in the same server. This interface designed to be accessible on any device (laptops, tablets, or phones).`,
      `Carefully commented the code for better understanding.`,
    ],
    github: "https://github.com/Anthony-Massaad/Real-Time-Chat",
  },
  {
    name: "Monopoly",
    language: ["Java", "XML"],
    imgUrl: "/Monopoly.png",
    content: [
      `Developed an object orientated - Java based application of the game Monopoly, which follows the MVC design pattern, which reinforces reliable and maintainable code.`,
      `Integrated artificial intelligence for the option of including AI players.`,
      `Used XML to implement save/load features, as well as custom boards.`,
    ],
    github: "https://github.com/Anthony-Massaad/SYSC3110MonopolyProject",
  },
  {
    name: "Path Finding Algorithm",
    language: ["Python"],
    imgUrl: "/PathAlgo.png",
    content: [
      `Developed a Graphical User Interface using A-star algorithm and Pygame module to show the shortest path between two locations.`,
      `Used object orientated programming to help with code redundancy, while keeping everything well documented for better understanding.`,
    ],
    github:
      "https://github.com/Anthony-Massaad/path-finding-algorithm-using-AStar",
  },
];
