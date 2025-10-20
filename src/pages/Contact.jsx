import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-6">Leave your details and we will contact you to discuss pricing and B2B integration.</p>

        {!sent ? (
          <form onSubmit={(e)=>{ e.preventDefault(); setSent(true); }} className="grid gap-4">
            <input required placeholder="Full name" className="p-3 border rounded-md" />
            <input required placeholder="Company / Organization" className="p-3 border rounded-md" />
            <input required type="email" placeholder="Email" className="p-3 border rounded-md" />
            <textarea placeholder="Message (optional)" className="p-3 border rounded-md" rows="4" />
            <div className="flex justify-center">
              <button className="px-5 py-3 rounded bg-primary text-white">Send Message</button>
            </div>
          </form>
        ) : (
          <div className="p-6 bg-white rounded shadow">
            <p className="text-green-600 font-semibold">Thanks — we received your message. We'll contact you soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
