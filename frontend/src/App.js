// import { Fragment } from "react"
// Import components 
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About_us from "./Components/About-us/about-us";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/about-us" exact component={About_us} />
          <Route path="/" exact />
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;
