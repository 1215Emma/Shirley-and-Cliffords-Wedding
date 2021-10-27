import { motion, AnimatePresence } from "framer-motion";

const imageVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0.5,
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 0.5,

  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0.5,

    };
  },
};

const BackgroundImage = ({ images, imageIndex, page, direction }) => {
  console.log(images[imageIndex].source);
  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={page}
        src={images[imageIndex].source}
        custom={direction}
        variants={imageVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "sween", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        alt="bg"
        className="gallery-images-background"
      />
    </AnimatePresence>
  );
}

export default BackgroundImage