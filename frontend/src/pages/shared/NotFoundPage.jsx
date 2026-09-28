import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <PageHeader
        title="404 — Page Not Found"
        subtitle="The requested page route does not exist in this Hospital Management System"
      />
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/" className="btn btn-primary">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
