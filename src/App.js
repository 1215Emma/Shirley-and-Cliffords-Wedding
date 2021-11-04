import React, { useState, useEffect } from "react";
import "./App.css";
// import MusicPlayerGallery from "./MusicPlayerGallery/MusicPlayerGallery";
import Rsvp from "./pages/Rsvp/Rsvp";
import Home from "./pages/Home";
import Travel from "./pages/Travel/Travel";
import Faq from "./pages/Faq/Faq";
import Admin from "./Admin/Admin";
import Registry from "./pages/Registry/Registry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SevenLionsFooter from './pages/images/footer.png'
import WeddingParty from "./pages/WeddingParty/WeddingParty";
import Gallery from "./Gallery/Gallery";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth, height: window.innerHeight,
  });
  
  useEffect(() => {
    const debounce = (fn, delay) => {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    };
    let windowSize = (width, height) => {
      console.log("width", width)
      console.log("height", height)
      windowDimensions.height = height;
      windowDimensions.width = width;
    setWindowDimensions({width: width, height: height})
  };
  windowSize = debounce(windowSize, 500);
  window.addEventListener("resize", () =>
    windowSize(window.innerWidth, window.innerHeight)
    );
  }, [windowDimensions])

  return (
    <>
      <div
        className="app"
        style={{
          height: `${windowDimensions.height}px`,
          width: `${windowDimensions.width}px`,
        }}
      >
        <Router>
            <Route exact path="/">
              <Home
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                height={windowDimensions.height}
                width={windowDimensions.width}
              />
            </Route>
          <Switch>
            <Route exact path="/wedding-party">
              <WeddingParty />
            </Route>
            <Route exact path="/home">
              <Gallery />
            </Route>
            <Route exact path="/admin">
              <Admin
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            </Route>
            {/* <Route exact path="/gallery-player">
            <MusicPlayerGallery
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </Route> */}
            <Route exact path="/rsvp">
              <Rsvp
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                height={windowDimensions.height}
                width={windowDimensions.width}
              />
            </Route>
            <Route exact path="/travel">
              <Travel
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                height={windowDimensions.height}
                width={windowDimensions.width}
              />
            </Route>
            <Route exact path="/faq">
              <Faq
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                height={windowDimensions.height}
                width={windowDimensions.width}
              />
            </Route>
            <Route exact path="/registry">
              <Registry
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                height={windowDimensions.height}
                width={windowDimensions.width}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
