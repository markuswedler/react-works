import Link from "next/link"

const Header = () => {
  return (
    <header className="wrapper">
      <Link href="/"><a className="logo"></a></Link>
      <nav>
        <Link href="/"><a>About</a></Link>
        <Link href="/"><a>Works</a></Link>
        <Link href="/"><a>Contact</a></Link>
      </nav>
    </header>
  )
}
 
export default Header