import Link from "next/link"

export default function Home() {
  const imgs = [
    'https://images.unsplash.com/photo-1663862424506-1a1ed0777761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1663832669522-41dbf914e1a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80',
    'https://images.unsplash.com/photo-1663651158949-a95b731c07ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
  ]
  const dates = [
    'June 22, 2022',
    'July 23, 2022',
    'August 03, 2022'
  ]

  return (
    <main className="wrapper">
      <div><Link href="/js-challenges"><a>js-challenges</a></Link></div>
      <div><Link href="/univprojects"><a>univprojects</a></Link></div>

      <div className="cards-cont">
        {
          imgs.map((img, i)=>(
            <a href="" className="card" style={{backgroundImage: "url('" + img + "')"}} key={i}>
              <div className="container">
                <div className="arrow"><div><span/></div></div>
                <div className="content">
                  <span>{ dates[i] }</span>
                  <h3>A Demo Website for the Univercity Course&nbsp;Project</h3>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </main>
  )
}