import Link from "next/link"

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="cont">
        <Link href="/"><a className="logo"></a></Link>
        <ul className="social">
          <li><a href="https://github.com/markuswedler"></a></li>
          <li><a href="https://dev.to/markuswedler"></a></li>
          <li><a href="https://www.youtube.com/channel/UC07C6734bBfcNVL2Za8Y_-A"></a></li>
          <li><a href="https://twitter.com/MarkusWedler"></a></li>
        </ul>
      </div>
  </footer>
  )
}
 
export default Footer