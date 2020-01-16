import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import MenuPage from './MenuPage/MenuPage'
import BioPage from './BioPage/BioPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import './App.css'

/*
  use curly brackets because Switch and Route
  are not default exports of react-router-dom
*/
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Components outside of 'main' will be the same for every route so
        no need to wrap them in routes */}
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            {/* Use a Switch to only match one route at a time */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/bio" component={BioPage} />
            <Route exact path="/menu" component={MenuPage} />
            {/* NotFoundPage will be our fallback if none of the above routes
            match the url */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
