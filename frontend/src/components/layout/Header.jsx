import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="app-header">
      <div>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
          <h1>Hospital Management System</h1>
        </Link>
      </div>
      <div className="header-badges">
        <span className="badge" style={{ backgroundColor: '#0284c7', color: '#ffffff' }}>Demo Foundation</span>
        <span className="badge" style={{ backgroundColor: '#334155', color: '#f8fafc' }}>Spring Boot Planned</span>
      </div>
    </header>
  );
}
