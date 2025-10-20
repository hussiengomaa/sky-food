import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="pt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center min-h-[72vh]">
        <div className="space-y-6">
          <div className="text-sm uppercase text-primary font-semibold">Premium Natural Foods</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Sky Food — Fresh. Natural. Trusted.
          </h1>
          <p className="text-gray-600 max-w-xl">
            We produce and distribute high-quality natural food products with modern production standards and transparent supply chain.
          </p>
          <div className="flex gap-4">
            <a href="#products" className="inline-block bg-primary text-white px-5 py-3 rounded-lg shadow hover:scale-105 transition">Explore Products</a>
            <a href="#contact" className="inline-block border border-gray-200 px-5 py-3 rounded-lg hover:bg-gray-50 transition">Contact Us</a>
          </div>

          <div className="mt-6 flex gap-4 items-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <div>Supply-chain transparency</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <div>B2B & B2C solutions</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?w=1200&q=80&auto=format&fit=crop"
              alt="hero"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
