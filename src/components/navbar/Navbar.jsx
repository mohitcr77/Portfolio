import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mohit Singh
        </motion.span> */}
        <div className="social">
          <a href="https://www.linkedin.com/in/mohit-singh-3362231b6/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
