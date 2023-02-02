import React from 'react'
import './App.css'

import {Footer,Blog,Possibility,Features,whatGPT3,Header} from './containers'
import {CTA,Brand,Navbar} from './Components'

const App = () => {
  return (
    <div className="app">
        <div className="gradient_bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <whatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
    )
}

export default App
