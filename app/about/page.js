import Link from 'next/link';
import React from 'react'

function About() {
  return (
  <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
    <h1 className="text-4xl font-bold mb-6 text-center">Visit my profile - <Link href={"/SoloReaper"}><button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-4 hover:cursor-pointer text-3xl rounded-md">Lets Go</button></Link></h1>

    <p className="text-lg mb-6">
      <strong>Funds Reaper</strong> is a simple and powerful micro-funding platform
      built to help creators, developers, artists, streamers, and independent
      professionals receive support directly from the people who appreciate their work.
      Whether you create content, build projects, teach online, or simply want a clean
      way to accept one-time payments, Funds Reaper gives you a fast, secure, and
      effortless experience.
    </p>

    <h2 className="text-2xl font-semibold mb-3">What Is Funds Reaper?</h2>
    <p className="mb-6">
      Funds Reaper is a modern alternative to Patreon or Buy Me a Coffee, built using
      <strong> Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and 
      <strong> Razorpay</strong>. The goal is simple: make supporting creators easy —
      without the complexity or heavy fees.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Why Funds Reaper Was Built</h2>
    <p className="mb-6">
      Many creators struggle with complicated dashboards, slow payouts, and expensive
      platform fees. Funds Reaper solves these problems by providing a clean support
      page, instant payment confirmations, simple creator profiles, and a reliable
      Razorpay-powered backend with safe signature verification.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Simple. Secure. Creator-Friendly.</h2>
    <p className="mb-6">
      Funds Reaper uses the official Razorpay payment gateway to ensure encrypted
      transactions, verified signatures, and a fast, error-free checkout flow. Your
      supporters can trust that every payment is protected.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Built for Everyone</h2>
    <p className="mb-6">
      Funds Reaper is ideal for developers, designers, content creators, students,
      artists, musicians, bloggers, gamers, streamers, and freelancers. If you create
      something valuable, Funds Reaper gives your supporters a way to appreciate you.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
    <p className="mb-6">
      Funds Reaper aims to democratize digital support by offering a minimal,
      transparent, and creator-first funding experience. No subscriptions required, no
      complicated setup — just a simple way to receive appreciation.
    </p>
  </div>
);

}

export default About

export const metadata = {
  title: "About - Funds Reaper",
};
