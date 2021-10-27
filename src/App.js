import "./App.css";
import MusicPlayerGallery from "./MusicPlayerGallery/MusicPlayerGallery";
import Rsvp from "./pages/Rsvp/Rsvp";
import Main from "./pages/Main/Main";
import Home from "./pages/Home";
import Admin from "./Admin/Admin";
import Gallery from './Gallery/Gallery'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="https://soinlovewithcho.com">
          <Home />
        </Route>
        <Route exact path="https://soinlovewithcho.com/Admin">
          <Admin />
        </Route>
        <Route exact path="https://soinlovewithcho.com/main">
          <Main />
        </Route>
        <Route exact path="https://soinlovewithcho.com/galleryplayer">
          <MusicPlayerGallery />
        </Route>
        <Route exact path="https://soinlovewithcho.com/rsvp">
          <Rsvp />
        </Route>
        <Route exact path="https://soinlovewithcho.com/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
