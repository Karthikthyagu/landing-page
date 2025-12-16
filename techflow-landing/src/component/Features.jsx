import '../styles/features.css'

const Features = () => {
  return (
    <section className="features" id='features'>
      <div className="features-container">
        <h2>Everything you need to succeed</h2>
        <p className="features-subtitle">
          Powerful features designed to help you build, ship, and scale your
          products faster than ever.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Optimized for speed and performance. Your applications load
              instantly and run smoothly.
            </p>
          </div>

          <div className="feature-card highlight">
            <div className="feature-icon">🛡️</div>
            <h3>Enterprise Security</h3>
            <p>
              Bank-grade encryption and security protocols to keep your data
              safe and compliant.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>
              Gain actionable insights with real-time analytics and
              customizable dashboards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Seamless Integration</h3>
            <p>
              Connect with your favorite tools. Works with 100+ integrations
              out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
