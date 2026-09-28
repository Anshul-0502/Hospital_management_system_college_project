import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Hospital System Dashboard"
        subtitle="Overview of hospital areas and core modules"
      />

      <div className="notice-box">
        <strong>Demo Foundation:</strong> Welcome to the Hospital Management System frontend foundation.
        Navigate to any section below or use the sidebar menu. All data displayed is fictional sample data.
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>1. OPD (Outpatient Department)</h3>
          <p style={{ margin: '0.5rem 0 1rem', color: '#64748b', fontSize: '0.9rem' }}>
            Manage outpatient registrations, appointments, queue tracking, and doctor consultations.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link to="/opd/patients" className="btn btn-primary">Patient List</Link>
            <Link to="/opd/register" className="btn btn-secondary">New Registration</Link>
            <Link to="/opd/appointments" className="btn btn-secondary">Appointments</Link>
            <Link to="/opd/queue" className="btn btn-secondary">Queue</Link>
          </div>
        </div>

        <div className="card">
          <h3>2. IPD (Inpatient Department)</h3>
          <p style={{ margin: '0.5rem 0 1rem', color: '#64748b', fontSize: '0.9rem' }}>
            Inpatient admissions, ward bed allocations, daily treatment notes, and discharge processing.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link to="/ipd/admissions" className="btn btn-primary">Admissions</Link>
            <Link to="/ipd/beds" className="btn btn-secondary">Bed Management</Link>
            <Link to="/ipd/records" className="btn btn-secondary">Inpatient Records</Link>
            <Link to="/ipd/discharge" className="btn btn-secondary">Discharge</Link>
          </div>
        </div>

        <div className="card">
          <h3>3. Hospital Operations</h3>
          <p style={{ margin: '0.5rem 0 1rem', color: '#64748b', fontSize: '0.9rem' }}>
            Hospital administration, clinical staff, departments, laboratory orders, pharmacy stock, inventory, and billing.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link to="/operations/staff" className="btn btn-primary">Doctors & Staff</Link>
            <Link to="/operations/departments" className="btn btn-secondary">Departments</Link>
            <Link to="/operations/lab" className="btn btn-secondary">Lab Orders</Link>
            <Link to="/operations/pharmacy" className="btn btn-secondary">Pharmacy</Link>
            <Link to="/operations/billing" className="btn btn-secondary">Billing</Link>
          </div>
        </div>

        <div className="card">
          <h3>4. Emergency</h3>
          <p style={{ margin: '0.5rem 0 1rem', color: '#64748b', fontSize: '0.9rem' }}>
            Emergency arrivals tracking and demonstration ambulance request interface.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link to="/emergency/ward" className="btn btn-danger">Emergency Ward</Link>
            <Link to="/emergency/ambulance" className="btn btn-secondary">Ambulance Request Demo</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
