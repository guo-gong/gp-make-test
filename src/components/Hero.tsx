import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Innovating Tomorrow with Intelligent Robotics</h1>
          <p style={styles.subtitle}>
            Harnessing the power of AI to build autonomous solutions for a
            smarter, more efficient world. Discover our CIS-Standard compliant
            robotic fleet.
          </p>
        </div>
        
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <div style={styles.portraitOne}>
              <Image 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="AI Portrait 1" 
                style={styles.image}
                width={380}
                height={380}
                priority
              />
            </div>
            <div style={styles.portraitTwo}>
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="AI Portrait 2" 
                style={styles.image}
                width={380}
                height={380}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    paddingTop: '4rem',
    paddingBottom: '6rem',
    textAlign: 'center' as const,
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  content: {
    maxWidth: '800px',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  imageContainer: {
    width: '100%',
    maxWidth: '1000px',
    height: '500px',
    backgroundColor: '#FAF9F6',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as const,
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.03)',
    marginTop: '2rem',
  },
  imageWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  portraitOne: {
    width: '380px',
    height: '380px',
    borderRadius: '45% 55% 50% 50% / 40% 40% 60% 60%',
    overflow: 'hidden',
    border: '12px solid white',
    position: 'absolute' as const,
    left: '20%',
    zIndex: 1,
    transform: 'translateX(0%)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
  },
  portraitTwo: {
    width: '380px',
    height: '380px',
    borderRadius: '55% 45% 50% 50% / 40% 40% 60% 60%',
    overflow: 'hidden',
    border: '12px solid white',
    position: 'absolute' as const,
    right: '20%',
    zIndex: 2,
    transform: 'translateX(0%)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    filter: 'grayscale(30%) contrast(1.1)',
  }
} as const;

export default Hero;
