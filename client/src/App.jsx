import { useState } from 'react'
import Header from './pages/header'
import Hero from './pages/Hero'
import Skills from './pages/skills'
import Footer from './pages/footer'
import About from './pages/about'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
          </>
        } />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
