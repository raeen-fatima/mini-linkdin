// app/page.tsx
'use client'
import { useEffect, useState } from 'react'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/api'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Community Feed</h1>
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map(post => <PostCard key={post._id} post={post} />)
      )}
    </div>
  )
}
