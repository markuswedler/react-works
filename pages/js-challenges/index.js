const JSC = () => {
  return (
    <div className="wrapper js-challenges works-page">

      {/* About */}
      <section>
        <h1>JS Challenges</h1>
        <p>Here are some JS challenges I once saw on Instagram and coded</p>
      </section>

      {/* Works */}
      <ul className="works">
        <a className="card" href="https://markuswedler.github.io/stopwatch/">
          <div></div>
          <div>Stopwatch</div>
        </a>
        <a className="card" href="https://markuswedler.github.io/clock/">
          <div></div>
          <div>Clock</div>
        </a>
        <a className="card" href="https://markuswedler.github.io/calculator/">
          <div></div>
          <div>Calculator</div>
        </a>
      </ul>

      {/* More are coming soon */}
      <div className="coming-soon">More are coming soon</div>

    </div>
  )
}
 
export default JSC