// import { Fragment } from "react"
// Import components 
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About_us from "./Components/About-us/about-us";
import Main from "./Components/Main/Main";

// Import Redux
import store from "./store";
import { Provider } from "react-redux";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/about-us" exact component={About_us} />
          <Route path="/" exact component={Main} />
        </Switch>
        <Footer />
      </Provider>
    </Router>

  );
}

export default App;
