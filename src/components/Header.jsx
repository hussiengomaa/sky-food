import React from 'react'
import { Leaf } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-40 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white animate-float">
            <Leaf size={18} />
          </div>
          <div>
            <div className="logo-text text-lg">Sky Food</div>
            <div className="text-xs text-gray-500 -mt-0.5">Natural & Modern Food Solutions</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
          <a className="ml-4 px-3 py-1 rounded bg-primary text-white text-sm" href="#contact">Get Quote</a>
        </nav>

        <div className="md:hidden">
          {/* mobile simple menu placeholder */}
          <button className="text-primary border border-primary px-2 py-1 rounded">Menu</button>
        </div>
      </div>
    </header>
  )
}
