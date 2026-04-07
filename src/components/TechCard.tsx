import React from 'react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}

const TechCard = ({ icon, title, description, iconBg }: TechCardProps) => {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.iconWrapper, backgroundColor: iconBg }}>
        {icon}
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#FAF9F6',
    padding: '3rem 2rem',
    borderRadius: '24px',
    textAlign: 'center' as const,
    border: '1px solid rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    height: '100%',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
    color: 'white',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
  },
  description: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
} as const;

export default TechCard;
