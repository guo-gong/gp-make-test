import React from 'react';

const CTA = () => {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.banner}>
          <h2 style={styles.title}>Ready to Transform Your Operations?</h2>
          <p style={styles.subtitle}>
            Contact our experts today to find the perfect robotic solution for your business.
          </p>
          <button className="btn btn-primary" style={styles.button}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 0 8rem 0',
  },
  banner: {
    backgroundColor: 'var(--cta-bg)',
    borderRadius: '24px',
    padding: '6rem 2rem',
    textAlign: 'center' as const,
    color: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  title: {
    fontSize: '2.4rem',
    marginBottom: '1.5rem',
    color: 'white',
    letterSpacing: '-0.01em',
  },
  subtitle: {
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '3rem',
    maxWidth: '600px',
    lineHeight: '1.5',
  },
  button: {
    padding: '0.9rem 2.2rem',
    fontSize: '1rem',
    backgroundColor: 'var(--accent-teal)',
    borderRadius: '8px',
  }
} as const;

export default CTA;
