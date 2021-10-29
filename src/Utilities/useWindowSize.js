import { useState, useLayoutEffect } from 'react'


export const useWindowSize = () => {
  // Initialize state with 0 width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth]);
  useLayoutEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize([
        window.innerWidth,
        window.innerHeight,
      ]);
    }
    // Set size at the first client-side load

    // Add event listener
    window.addEventListener("resize", handleResize);
 
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
