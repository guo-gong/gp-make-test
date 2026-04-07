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
    backgroundColor: 'var(--bg-white)',
    padding: '3rem 1.5rem',
    borderRadius: '16px',
    textAlign: 'center' as const,
    border: '1px solid rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    height: '100%',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    color: 'white',
  },
  title: {
    fontSize: '1.15rem',
    marginBottom: '1.2rem',
    color: 'var(--text-primary)',
    fontWeight: '700',
  },
  description: {
    fontSize: '0.92rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    maxWidth: '260px',
    margin: '0 auto',
  },
} as const;

export default TechCard;
