"use client";
import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-blue-50 py-20 px-6 text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions or need assistance? Reach out to our team, and we’ll
          get back to you promptly.
        </p>
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="300" height="300">
            <circle cx="150" cy="150" r="150" fill="#000" />
          </svg>
        </div>
      </section>

      {/* 2️⃣ Info Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <HiOutlineMail className="text-4xl text-black mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">support@care.xyz</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <HiOutlinePhone className="text-4xl text-black mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+880 1XXXXXXXXX</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <HiOutlineClock className="text-4xl text-black mb-4" />
          <h3 className="text-xl font-semibold mb-2">Availability</h3>
          <p className="text-gray-600">24/7 Support</p>
        </div>
      </section>

      {/* 3️⃣ Contact Form + Illustration */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-rose-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Illustration / Image */}
        <div className="hidden md:flex justify-center">
          <img
            src="/contact-illustration.png"
            alt="Contact Illustration"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* 4️⃣ CTA Section */}
      <section className="py-20 text-center px-6 bg-black text-white rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p className="mb-6">
          Call us anytime and our team will help you right away.
        </p>
        <a
          href="tel:+880195696845"
          className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Call Now
        </a>
      </section>
    </div>
  );
}
