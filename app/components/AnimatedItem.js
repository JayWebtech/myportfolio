import React from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedItem = ({ animationConfig, children }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, ...animationConfig }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </VisibilitySensor>
  );
};

export default AnimatedItem;
