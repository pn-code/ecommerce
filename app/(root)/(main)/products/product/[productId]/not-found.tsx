import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, but this product does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}