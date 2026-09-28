import React from 'react';

export default function PageHeader({ title, subtitle, actionButton }) {
  return (
    <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actionButton && <div>{actionButton}</div>}
    </div>
  );
}
