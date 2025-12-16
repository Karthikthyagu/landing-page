import '../styles/hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <span className="hero-badge">
          <span className="dot"></span>
          Now available for early access
        </span>

        <h1 className="hero-title">
          Build faster with <span>modern</span>
          <br />
         <span>tools</span> 
        </h1>

        <p className="hero-description">
          Streamline your workflow with our powerful platform. Ship products faster,
          collaborate seamlessly, and scale without limits.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started Free <span>→</span>
          </button>

          <button className="btn-secondary">
            ▶ Watch Demo
          </button>
        </div>

        <div className="hero-trust">
          <div className="avatars">
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
          </div>
          <p><strong>2,000+</strong> teams already onboard</p>
        </div>

      </div>
    </section>
  )
}

export default Hero
