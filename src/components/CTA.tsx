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
    padding: '4rem 0',
  },
  banner: {
    backgroundColor: 'var(--cta-bg)',
    borderRadius: '24px',
    padding: '5rem 2rem',
    textAlign: 'center' as const,
    color: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'white',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
  },
  button: {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
  }
} as const;

export default CTA;
