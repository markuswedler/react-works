import Link from "next/link"

export default function Home() {
  return (
    <main className="wrapper">
      <div><Link href="/js-challenges"><a>js-challenges</a></Link></div>
      <div><Link href="/univprojects"><a>univprojects</a></Link></div>
    </main>
  )
}