import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";
import { 
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiMongodb,
  DiMysql,
  DiCode,
  DiHtml5,
  DiCss3,
  DiGit,
  DiGithub
} from "react-icons/di";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skillsData = [
  {
    name: "JavaScript",
    icon: <DiJavascript1 size={50} color="#F0DB4F" />,
    category: "Language"
  },
  {
    name: "React",
    icon: <DiReact size={50} color="#61DAFB" />,
    category: "Framework"
  },
  {
    name: "Node.js",
    icon: <DiNodejs size={50} color="#68A063" />,
    category: "Backend"
  },
  {
    name: "Python",
    icon: <DiPython size={50} color="#4B8BBE" />,
    category: "Language"
  },
  {
    name: "Java",
    icon: <DiJava size={50} color="#f89820" />,
    category: "Language"
  },
  {
    name: "MongoDB",
    icon: <DiMongodb size={50} color="#4DB33D" />,
    category: "Database"
  },
  {
    name: "MySQL",
    icon: <DiMysql size={50} color="#00758F" />,
    category: "Database"
  },
  {
    name: "Express",
    icon: <DiCode size={50} color="#ffffff" />,
    category: "Backend"
  },
  {
    name: "HTML5",
    icon: <DiHtml5 size={50} color="#E34F26" />,
    category: "Frontend"
  },
  {
    name: "CSS3",
    icon: <DiCss3 size={50} color="#1572B6" />,
    category: "Frontend"
  },
  {
    name: "Git",
    icon: <DiGit size={50} color="#F1502F" />,
    category: "Tool"
  },
  {
    name: "GitHub",
    icon: <DiGithub size={50} color="#ffffff" />,
    category: "Tool"
  }
];

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "1px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Here are my technical
          <br />
          skills & expertise
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Technical</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>& Development</motion.b> Expertise
          </h1>
          {/* <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          </a> */}
            {/* <button>View Projects</button> */}
        </div>
      </motion.div>
      <motion.div className="skillsGridContainer" variants={variants}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skillBox"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
          >
            {skill.icon}
            <h3>{skill.name}</h3>
            <span className="category">{skill.category}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;