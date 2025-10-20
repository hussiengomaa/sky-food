import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Sky Food</h2>
          <p className="text-gray-600 leading-relaxed">
            Sky Food is dedicated to delivering natural food products with modern manufacturing and strict quality control.
            We work with partners locally and internationally to ensure the best for our clients.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="text-gray-700">• Certified production facilities</li>
            <li className="text-gray-700">• Integrated logistics & inventory</li>
            <li className="text-gray-700">• Support for B2B portals and corporate clients</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-sm animate-fade-up">
          <h3 className="font-semibold text-lg mb-3">Why partners like working with us</h3>
          <p className="text-gray-600">Fast delivery, transparent pricing, and tailored solutions for distributors and retailers.</p>
        </div>
      </div>
    </section>
  )
}
