import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.copyright}>
          © 2024 CIS Robotics. All Rights Reserved.
        </div>
        <div style={styles.links}>
          <Link href="/privacy" style={styles.link}>Privacy Policy</Link>
          <Link href="/terms" style={styles.link}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 0',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease',
  },
  copyright: {
    opacity: 0.8,
  }
} as const;

export default Footer;
