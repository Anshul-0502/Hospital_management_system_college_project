import React from 'react';

export default function StatusBadge({ status }) {
  if (!status) return null;

  const normalized = String(status).toLowerCase();
  let type = 'badge';

  if (['available', 'completed', 'paid', 'recovered', 'active'].some((s) => normalized.includes(s))) {
    type = 'badge badge-success';
  } else if (['scheduled', 'checked in', 'waiting', 'pending', 'under examination'].some((s) => normalized.includes(s))) {
    type = 'badge badge-warning';
  } else if (['occupied', 'high', 'emergency', 'cancelled', 'danger'].some((s) => normalized.includes(s))) {
    type = 'badge badge-danger';
  } else if (['admitted', 'medium', 'routine'].some((s) => normalized.includes(s))) {
    type = 'badge badge-info';
  }

  return <span className={type}>{status}</span>;
}
