import '../styles/cta.css'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Ready to get started?</h2>
        <p>
          Join thousands of teams already using TechFlow to build better
          products.
        </p>

        <div className="cta-actions">
          <button className="cta-primary">Start Free Trial</button>
          <button className="cta-secondary">Contact Sales</button>
        </div>
      </div>
    </section>
  )
}

export default CTA
