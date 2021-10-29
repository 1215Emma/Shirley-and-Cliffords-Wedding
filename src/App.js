import React, { useState } from "react";
import "./App.css";
import MusicPlayerGallery from "./MusicPlayerGallery/MusicPlayerGallery";
import Rsvp from "./pages/Rsvp/Rsvp";
import Home from "./pages/Home";
import Travel from "./pages/Travel/Travel";
import Faq from "./pages/Faq/Faq";
import Admin from "./Admin/Admin";
import Gallery from "./Gallery/Gallery";
import Registry from "./pages/Registry/Registry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useWindowSize } from "./Utilities/useWindowSize";

import Canvas from "./Canvas";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [width, height] = useWindowSize()
  const resetHeight = () => {
    // reset the body height to that of the inner browser
    return (
      document.body.style.height = window.innerHeight + "px"
      )
  }
  // reset the height whenever the window's resized
  window.addEventListener("resize", resetHeight);
  // called to initially set the height.
  resetHeight();
  console.log(resetHeight())
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home showSidebar={showSidebar} setShowSidebar={setShowSidebar} height={height} width={width} />
          </Route>
          <Route exact path="/admin">
            <Admin showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </Route>
          <Route exact path="/gallery-player">
            <MusicPlayerGallery
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </Route>
          <Route exact path="/rsvp">
            <Rsvp showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </Route>
          <Route exact path="/travel">
            <Travel showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </Route>
          <Route exact path="/faq">
            <Faq showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </Route>
          <Route exact path="/registry">
            <Registry
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
