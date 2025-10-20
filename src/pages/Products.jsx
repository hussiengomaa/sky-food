import React from 'react'

const items = [
  { id:1, title: 'Organic Olive Oil', price: '$14.99', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&q=60&auto=format&fit=crop' },
  { id:2, title: 'Almond Granola', price: '$8.50', img: 'https://images.unsplash.com/photo-1505575967452-35a6e6b6b1b7?w=800&q=60&auto=format&fit=crop' },
  { id:3, title: 'Raw Honey', price: '$10.25', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=60&auto=format&fit=crop' }
]

export default function Products() {
  return (
    <section id="products" className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx)=>(
            <div key={it.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
              <img src={it.img} alt={it.title} className="w-full h-44 object-cover" />
              <div className="p-4 text-left">
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-gray-500 mt-2">{it.price}</p>
                <div className="mt-4">
                  <button className="px-3 py-2 bg-primary text-white rounded">Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
