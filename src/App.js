import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import MenuPage from './MenuPage/MenuPage'
import BioPage from './BioPage/BioPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/menu' component={MenuPage} />
            <Route path='/bio' component={BioPage} />
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
