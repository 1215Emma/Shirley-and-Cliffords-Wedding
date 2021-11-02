import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";

// framer-motion variant, makes rest of images in gallery disappear
const growVariants = {
  show: {
    opacity: 0,

  },
  grow: {
    opacity: 1,

    transition: {
      type: "sween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
};

const Image = ({ image, disabled }) => {
  if (!disabled) {
      return (
        <motion.img
          key={image}
          className="title"
          layoutid="title"
          style={{ opacity: 1 }}
          src={image}
        ></motion.img>
      )
  } else {
    return (
        <motion.img
          key={image}
          className="title"
          layoutId="title"
          src={image}
        ></motion.img>
      )
  }
};

function ExpandedImage({ children, onCollapse }) {
  console.log("EXPANDEDIMAGE");
  return (
        <>
      <div className="expanded-navigation-bar">
        <button className="close-expanded-button" onClick={onCollapse}>
          <BsArrowLeft className="close-expanded-icon" />
        </button>
      </div>

        <motion.div
          variants={growVariants}
          initial="show"
          animate="grow"
          exit="exit"
      className="image expanded"
      layoutId="expandable-image"
      onClick={onCollapse}
      >
        {children}
        </motion.div>

        </>

    
  );
}

function CompactImage({ children, onExpand, disabled }) {
  return (
    <div
      className="image compact"
      layoutId="expandable-image"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </div>
  );
}
const gridShowVariants = {
  show: {
    opacity: 0,
    x: 0,
  },
  grow: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  }
};
export const DisplayGrid = ({
  id,
  category,
  image,
  source,
  onCollapse,
  onExpand,
  disabled,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseImage = () => {
    setIsExpanded(false);
    onCollapse();
  };
  const expandImage = () => {
    setIsExpanded(true);
    onExpand();
  };
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.div
          key={image}
          className="image-container1"
          variants={gridShowVariants}
          initial="show"
          animate="grow"

        >
          <AnimatePresence>
            {isExpanded && (
              <ExpandedImage onCollapse={collapseImage} >
                <Image image={image} disabled={disabled} />
              </ExpandedImage>
            )}
            <CompactImage onExpand={expandImage} disabled={disabled}>
              <Image
                image={image}
                disabled={disabled}
              />
            </CompactImage>
          
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
