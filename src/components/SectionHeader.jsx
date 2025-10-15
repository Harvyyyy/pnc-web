import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
  const alignmentClass = `text-${align}`;
  
  return (
    <div className={`section-header ${alignmentClass}`}>
      <h2>{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;