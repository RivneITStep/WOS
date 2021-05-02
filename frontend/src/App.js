import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About_us from "./Components/About-us/about-us";
import Main from "./Components/Content/content";

import React from "react";
import store from "./store";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/about-us" exact component={About_us} />
          <Route path="/" exact component={Main} />
        </Switch>
      <Footer />
    </Router>
</Provider>
  );
}

export default App;
