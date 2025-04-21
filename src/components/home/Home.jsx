import "./home.scss";
import { animate, motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      delay: 1,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MOHIT SINGH</motion.h2>
          <motion.p variants={textVariants} className="subtitle">
            Graduate Student at Stevens Institute of Technology, Hoboken
          </motion.p>
          <motion.h1 variants={textVariants}>
            Software Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.a
              href="#Contact"
              className="contactButton"
              variants={textVariants}
            >
              Contact me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Free Lancer Data Scientist
      </motion.div>
      <div className="imageContainer">
        <img src="/home.png" alt="" />
      </div>
    </div>
  );
}

export default Home;