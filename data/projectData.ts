interface ProjectInterface {
  name: string;
  language: string[];
  imgUrl: string;
  content: string[];
  github: string;
}

export const projectsData: ProjectInterface[] = [
  {
    name: "Tetris",
    language: ["Python"],
    imgUrl: "/Tetris.png",
    content: [
      `GUI game tetris using the pygame module and Python.`,
      `Implemented all of the features of the game such as rotations (use of linear algebra), speeding up, etc.`,
      `Carefully commented the code for better understanding, and heavy use of OOP.`,
    ],
    github: "https://github.com/Anthony-Massaad/Tetris",
  },
  {
    name: "Chat Bot",
    language: ["Python", "JSON"],
    imgUrl: "/ChatBot.png",
    content: [
      `Developed an Artificial Intelligence chat messaging application using PySimpleGUI as the GUI framework for user input and AI responses. This application self-learns and improves based on user input data.`,
      `Implemented the AI’s database using JSON consisting of tags, patterns, responses, and context to handle a flow of conversation.`,
      `Used Deep Neural Network Model which takes in the parsed data, trains the bot to produce probability for accurate and precise responses.`,
    ],
    github: "https://github.com/Anthony-Massaad/ChatBot",
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
    name: "Virtual Shop",
    language: ["Java"],
    imgUrl: "/VirtualShop.png",
    content: [
      `Team coolaborative project that puts the use of Object Orientated proamming and simulated the behaviour of an online store using Java.`,
      `Developed an interactive graphical user interface using swing and a command based user interface which can handle multiple customer carts at a time.`,
      `Carefully documented code for better understanding, and implementation of UML diagrams to display the full process of the software development.`,
    ],
    github: "https://github.com/Anthony-Massaad/Store_Interface_java",
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
