'use client';

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
                alt="AI Specialist 1" 
                style={styles.image}
                width={380}
                height={380}
                priority
              />
            </div>
            <div style={styles.portraitTwo}>
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="AI Specialist 2" 
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
    paddingTop: '3rem',
    paddingBottom: '5rem',
    textAlign: 'center' as const,
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  content: {
    maxWidth: '850px',
    marginBottom: '4.5rem',
  },
  title: {
    fontSize: '3.6rem',
    marginBottom: '2rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.025em',
    lineHeight: '1.05',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: '1.5',
    opacity: 0.85,
  },
  imageContainer: {
    width: '100%',
    maxWidth: '1000px',
    height: '480px',
    backgroundColor: 'var(--bg-hero)',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as const,
    marginTop: '1rem',
    overflow: 'hidden',
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
    width: '320px',
    height: '320px',
    borderRadius: '45% 55% 50% 50% / 40% 40% 60% 60%',
    overflow: 'hidden',
    border: '10px solid white',
    zIndex: 1,
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
    transform: 'rotate(-5deg) translate(20px, -10px)',
    position: 'absolute' as const,
    left: '25%',
  },
  portraitTwo: {
    width: '320px',
    height: '320px',
    borderRadius: '55% 45% 50% 50% / 40% 40% 60% 60%',
    overflow: 'hidden',
    border: '10px solid white',
    zIndex: 2,
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
    transform: 'rotate(5deg) translate(-20px, 10px)',
    position: 'absolute' as const,
    right: '25%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    filter: 'grayscale(100%) contrast(1.1)',
  }
} as const;

export default Hero;
