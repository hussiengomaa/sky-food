import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from './pages/Contact';
import Footer from './pages/Footer';


export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      


    </div>
  )
}
