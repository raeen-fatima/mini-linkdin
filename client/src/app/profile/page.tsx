'use client';
import { useEffect, useState } from 'react';

type Post = {
  _id: string;
  content: string;
  createdAt: string;
};

type User = {
  name: string;
  email: string;
  bio: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const userRes = await fetch('http://localhost:5000/api/auth/me');
      const postRes = await fetch('http://localhost:5000/api/posts/mine');

      if (userRes.ok) {
        const userData = await userRes.json();
        setUser(userData);
      }

      if (postRes.ok) {
        const postData = await postRes.json();
        setPosts(postData);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-12">
      {user ? (
        <>
          <div className="mb-6 border-b pb-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm mt-2">{user.bio || 'No bio yet.'}</p>
          </div>

          <h2 className="text-xl font-semibold mb-3">Your Posts</h2>
          <div className="space-y-4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="p-4 border rounded">
                  <p>{post.content}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Posted on {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p>You haven’t posted anything yet.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
