import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AttendEase",
    img: "/collage_1.png",
    desc: "A secure attendance system that uses geofencing to verify employee check-ins within office boundaries. The platform offers separate dashboards for employees and administrators, allows setting up multiple office locations with GPS coordinates, and enables easy onboarding through organization codes. Listed on Play store with 50+ downloads.",
    link: 'https://play.google.com/store/apps/details?id=com.mohitcr77.client'
  },
  {
    id: 2,
    title: "MERN E-commerce",
    img: "/demo2.png",
    desc: " A full-stack e-commerce website is an online platform where users can browse products, shop securely, and manage orders, offering a smooth interface and reliable backend for a seamless experience. ",

  },
  {
    id: 3,
    title: "Trends-Shop",
    img: "/demo.png",
    desc: "Minimalist front-end layout with ample whitespace, subtle shadows, rounded corners, monochromatic palette, smooth animations, and a responsive grid system.",
    link: 'https://mohitcr77.github.io/Trends-Shop/'
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-150%", "150%"]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
            <button>see Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 10,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
