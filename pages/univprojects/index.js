const UnivProjects = () => {
  return (
    <div className="wrapper works-page univprojects">

      {/* About */}
      <section>
        <h1>University Projects</h1>
        <p>Here are some university projects I've made while studying in the&apos;university</p>
      </section>

      {/* Works */}
      <ul className="works">
        <a className="card" href="https://amvtheatres.vercel.app/">
          <div></div>
          <div>AMV Theatres</div>
        </a>
      </ul>

      {/* More are coming soon */}
      <div className="coming-soon">More are coming soon</div>

    </div>
  )
}
 
export default UnivProjects