import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Main from '../components/template/Main'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
      <Main icon="home" title="Diego Felipe" subtitle="Subtítulo do projeto" />
        <Footer />
    </div>
