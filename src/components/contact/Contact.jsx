import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    staggerChildren: 0.1,
  },
};
function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-150px" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oz8byrq", "template_wcjsgsv", formRef.current, {
        publicKey: "BaLi2ExW5Nrr2DCmN",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>mohitwork717@gmail.com
          </span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>67 western ave, Jersey City, NJ 07307</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+1 201 241 5440</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ delay: 1,duration: 1 }}
              stroke="orange"
              stroke-linejoin="round"
              stroke-width="12"
              d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          action=""
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Something went wrong"}
          {success && "Email sent successfully"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
