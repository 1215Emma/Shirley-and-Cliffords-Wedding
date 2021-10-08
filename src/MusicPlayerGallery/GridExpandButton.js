import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { AiOutlineNodeCollapse } from 'react-icons/ai';


const growVariants = {
  show: {
    opacity: 0,
    x: 0,
  },
  grow: {
    opacity: 0,
    
    transition: {
      type: "sween",
      duration: 0.3,
    }
  },
  exit: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 0.3,
    }
  }
}

const Image = ({ image, disabled }) => {
  if (!disabled) {
    return (
      <motion.img
        className="title"
        layoutId="title"
        style={{ opacity: 1 }}
        src={image}
      >
      </motion.img>
    );
  } else {
    return (
      <motion.img
        variants={growVariants}
        initial="show"
        animate="grow"
        exit="exit"
        className="title"
        layoutId="title"
        style={{ opacity: 0 }}
        src={image}
      ></motion.img>
    );
  }
}


function ExpandedImage({ children, onCollapse }) {
  console.log("EXPANDEDIMAGE")
  return (
    <>
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
  console.log()
  return (
        <motion.div
        className="image compact"
        layoutId="expandable-image"
        onClick={disabled ? undefined : onExpand}
        >
        {children}
      </motion.div>
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
      duration: 0.3,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    }
  }
}
export const GridExpandButton = ({ image, onCollapse, onExpand, disabled }) => {
  const [isExpanded, setIsExpanded] = useState(false);
console.log(disabled);
  const collapseImage = () => {
    setIsExpanded(false);
    onCollapse()
  }
  const expandImage = () => {
    setIsExpanded(true);
    onExpand()
  }
  return (
    <AnimateSharedLayout>
      <AnimatePresence initial={false}>
          <motion.div className="image-container1"
          variants={gridShowVariants}
          initial="show"
          animate="grow">
        {isExpanded ? (
          <ExpandedImage onCollapse={collapseImage} image={image}>
            <Image image={image} disabled={disabled} />
          </ExpandedImage>
        ) : (
          <CompactImage onExpand={expandImage} disabled={disabled} image={image}>
            <Image image={image} disabled={disabled} />
          </CompactImage>
        )}
        </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
  );
}


