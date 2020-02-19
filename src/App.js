import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import MenuPage from './MenuPage/MenuPage'
import BioPage from './BioPage/BioPage'
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
          <Route exact path='/' component={HomePage} />
          <Route path='/menu' component={MenuPage} />
          <Route path='/bio' component={BioPage} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
