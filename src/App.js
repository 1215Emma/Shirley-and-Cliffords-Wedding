import React, { useState } from 'react'
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
import Canvas from './Canvas'
function App() {
const [showSidebar, setShowSidebar] = useState(false);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
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
