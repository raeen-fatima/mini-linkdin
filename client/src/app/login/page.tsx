'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        router.push("/profile")
      } else {
        alert("Login failed")
      }
    } catch (error) {
      console.error("Login error", error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Sign in</h2>
        <p className="text-gray-500 mb-6">Stay updated on your professional world</p>

        <input
          type="email"
          placeholder="Email or phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
        >
          Sign in
        </button>

        <div className="text-right mt-3">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>

        <div className="border-t mt-6 pt-4 text-center">
          <p className="text-sm text-gray-600">New to DevLink? <a href="/register" className="text-blue-600 hover:underline">Join now</a></p>
        </div>
      </div>
    </div>
  )
}
