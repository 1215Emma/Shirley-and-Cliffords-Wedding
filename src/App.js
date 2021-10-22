import "./App.css";
import MusicPlayerGallery from "./MusicPlayerGallery/MusicPlayerGallery";
import Rsvp from "./pages/Rsvp/Rsvp";
import Main from "./pages/Main/Main";
import Home from "./pages/Home";
import Admin from "./Admin/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Admin">
            <Admin />
          </Route>
          <Route exact path="/Main">
            <Main />
          </Route>
          <Route exact path="/galleryplayer">
            <MusicPlayerGallery />
          </Route>
          <Route exact path="/rsvp">
            <Rsvp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
