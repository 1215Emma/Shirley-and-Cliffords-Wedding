import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BsArrowLeft } from 'react-icons/bs';

// framer-motion variant, makes rest of images in gallery disappear
const growVariants = {
  show: {
    opacity: 0,
    x: 0,
  },
  grow: {
    opacity: 0,
    y: 0,
    transition: {
      type: "sween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
};


const Image = ({ id, source, disabled }) => {
  if (!disabled) {
    return (
      <motion.img
        key={id}
        className="title"
        layoutId="title"
        style={{ opacity: 1 }}
        src={source}
      ></motion.img>
    );
  } else {
    return (
      <motion.img
        variants={growVariants}
        key={id}
        initial="show"
        animate="grow"
        exit="exit"
        className="title"
        layoutId="title"
        // style={{ visibility: "hidden", opacity: 0}}
        src={source}
      ></motion.img>
    );
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
    opacity: 1,
    x: 0,
  },
  grow: {
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const DisplayGrid = ({
  id,
  category,
  source,
  onCollapse,
  onExpand,
  disabled,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(disabled);
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
      <AnimatePresence initial={false}>
        <motion.div
          className="image-container1"
          variants={gridShowVariants}
          initial="show"
          animate="grow"
        >
          {isExpanded ? (
            <ExpandedImage onCollapse={collapseImage} source={source}>
              <Image source={source} disabled={disabled} />
            </ExpandedImage>
          ) : (
            <CompactImage
              onExpand={expandImage}
              disabled={disabled}
              source={source}
            >
              <Image source={source} disabled={disabled} />
            </CompactImage>
          )}
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
