import React from 'react';

export default function EmptyState({ message = 'No data available to display.', action }) {
  return (
    <div className="card empty-state">
      <p style={{ marginBottom: action ? '1rem' : 0 }}>{message}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
