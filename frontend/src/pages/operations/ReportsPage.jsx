import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import {
  SAMPLE_PATIENTS,
  SAMPLE_APPOINTMENTS,
  SAMPLE_ADMISSIONS,
  SAMPLE_BEDS,
} from '../../data/sampleData';

export default function ReportsPage() {
  const totalPatients = SAMPLE_PATIENTS.length;
  const totalAppointments = SAMPLE_APPOINTMENTS.length;
  const activeAdmissions = SAMPLE_ADMISSIONS.length;
  const occupiedBeds = SAMPLE_BEDS.filter((b) => b.status === 'Occupied').length;

  return (
    <div>
      <PageHeader
        title="Operational Reports & Analytics"
        subtitle="Summary metrics and operational statistics"
      />

      <div className="notice-box">
        <strong>Demo Reporting:</strong> Summaries are derived from local session state. Reporting and analytical exports will be backed by database queries in later phases.
      </div>

      <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Registered Outpatients</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0284c7' }}>{totalPatients}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Consultations Scheduled</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0284c7' }}>{totalAppointments}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Active Inpatient Admissions</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0284c7' }}>{activeAdmissions}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Ward Bed Occupancy</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0284c7' }}>
            {((occupiedBeds / SAMPLE_BEDS.length) * 100).toFixed(0)}%
          </p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Departmental Workload Summary</h3>
          <ul style={{ listStyle: 'none', marginTop: '1rem', lineHeight: '2' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
              <span>Cardiology</span>
              <strong>1 scheduled / 8 staff</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
              <span>General Medicine</span>
              <strong>1 active / 14 staff</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
              <span>Orthopedics</span>
              <strong>1 completed / 6 staff</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
              <span>Emergency Services</span>
              <strong>2 admissions / 16 staff</strong>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Planned Report Modules (Future Backend)</h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', marginTop: '0.75rem', lineHeight: '1.8', color: '#475569' }}>
            <li>Monthly Outpatient Attendance Trends</li>
            <li>Inpatient Average Length of Stay (ALOS)</li>
            <li>Bed Turnover Rate by Ward</li>
            <li>Pharmacy Formulary & Fast-Moving Stock</li>
            <li>Revenue and Collection Breakdown</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
