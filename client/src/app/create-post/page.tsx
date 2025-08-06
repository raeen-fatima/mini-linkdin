'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePost = async () => {
    if (!content.trim()) {
      setError('Post content cannot be empty.');
      return;
    }

    const res = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (res.ok) {
      setContent('');
      router.push('/');
    } else {
      setError('Failed to post. Try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <textarea
        className="w-full border border-gray-300 rounded p-3 mb-4"
        rows={5}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <button
        onClick={handlePost}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Post
      </button>
    </div>
  );
}
