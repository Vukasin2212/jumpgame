import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/site/home";
import Game from "./components/game";
import { Navbar, Nav } from "react-bootstrap";
import "./css/nav.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar
        style={{
          backgroundColor: "rgb(192,192,192,0.4)",
          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.7)",
          width: "100%"
        }}
        expand="lg"
      >
        <Link className="main-link" to="/home">
          JUMP
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="links" to="/home">
              Home
            </Link>
            <Link className="links" to="/aboutgame">
              About Game
            </Link>
            <Link className="links" to="/game">
              Game
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
