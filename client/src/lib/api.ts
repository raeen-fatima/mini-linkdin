export async function getAllPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts`, { cache: 'no-store' })
  return res.json()
}
