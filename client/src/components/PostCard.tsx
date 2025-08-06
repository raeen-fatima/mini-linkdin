export default function PostCard({ post }) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h3 className="font-semibold">{post.author.name}</h3>
      <p className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleString()}</p>
      <p className="mt-2">{post.content}</p>
    </div>
  )
}
