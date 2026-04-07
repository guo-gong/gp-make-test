import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          <Link href="/">CIS Robotics</Link>
        </div>
        <div style={styles.navLinks}>
          <Link href="/products" style={styles.link}>Products</Link>
          <Link href="/solutions" style={styles.link}>Solutions</Link>
          <Link href="/about" style={styles.link}>About Us</Link>
          <Link href="/demo" className="btn btn-primary" style={styles.button}>Request a Demo</Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
  },
  link: {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
  },
  button: {
    marginLeft: '1rem',
  }
} as const;

export default Navbar;
