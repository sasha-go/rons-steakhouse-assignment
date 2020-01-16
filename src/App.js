import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
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
          <HomePage />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
