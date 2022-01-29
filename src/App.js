import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/layout/Container";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </div>
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
