import React from 'react';
import { Cpu, Shield, Sliders } from 'lucide-react';
import TechCard from './TechCard';

const CoreTechnologies = () => {
  const techs = [
    {
      icon: <Cpu size={32} />,
      title: 'Advanced AI Core',
      description: 'Our robots are powered by a proprietary AI engine, enabling real-time decision-making and adaptive learning.',
      iconBg: '#3d8b8b',
    },
    {
      icon: <Shield size={32} />,
      title: 'Unmatched Durability',
      description: 'Built with high-grade materials and rigorous testing to ensure reliable operation in the most demanding environments.',
      iconBg: '#e67e22',
    },
    {
      icon: <Sliders size={32} />,
      title: 'Modular & Scalable',
      description: 'Easily customize and upgrade your robotic fleet with our modular components to meet evolving business needs.',
      iconBg: '#8e9e3e',
    },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>Core Technologies</h2>
        <div style={styles.grid}>
          {techs.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '6rem 0',
  },
  heading: {
    textAlign: 'center' as const,
    fontSize: '2.5rem',
    marginBottom: '5rem',
    color: 'var(--text-primary)',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
} as const;

export default CoreTechnologies;
