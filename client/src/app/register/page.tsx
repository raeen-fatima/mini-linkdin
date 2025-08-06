"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await res.json()
    if (res.ok) {
      router.push("/login")
    } else {
      alert(data.message || "Registration failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">Join DevLink</h2>
        <p className="text-gray-500 mb-6 text-center text-sm">Make the most of your professional life</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="Password (6+ characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
          >
            Agree & Join
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Already on DevLink?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  )
}
