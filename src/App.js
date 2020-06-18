import React, { Component } from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"

import About from "./components/About"
import Terms from "./components/Terms"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomeGuest />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default App

if (module.hot) {
  module.hot.accept()
}
