import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Notice: Authentication backend is not connected yet. This is a basic frontend placeholder.');
  };

  return (
    <div>
      <PageHeader
        title="Login (Demo Placeholder)"
        subtitle="Visual placeholder for future Spring Boot authentication"
      />

      <div className="notice-box warning">
        <strong>Under Construction:</strong> Authentication and role-based access control are not connected in this phase.
        No credentials are saved or authenticated.
      </div>

      <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Username or Email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@hospital.local"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Sign In (Demo Action)
          </button>
        </form>
      </div>
    </div>
  );
}
