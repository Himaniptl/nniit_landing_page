import react from "react";
import { motion } from "framer-motion";
import Image from "../NNIIT_Landing_Page_Assets/google_image.png";
import "./association.css";

const Association = () => {
  return (
    <motion.div
      className="association-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        className="association-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured & In Association With
      </motion.h2>

      <motion.img
        src={Image}
        alt="Google for Education"
        className="association-logo"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default Association;
