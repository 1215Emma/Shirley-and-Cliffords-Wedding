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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/gallery-player">
          <MusicPlayerGallery />
        </Route>
        <Route exact path="/rsvp">
          <Rsvp />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
