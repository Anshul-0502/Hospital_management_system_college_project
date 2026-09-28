import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import { SAMPLE_OPD_QUEUE } from '../../data/sampleData';

export default function OPDQueuePage({ queue = SAMPLE_OPD_QUEUE, onStartConsultation }) {
  const columns = [
    { header: 'Token #', key: 'queueNumber' },
    { header: 'Patient Name', key: 'patientName' },
    { header: 'Patient ID', key: 'patientId' },
    { header: 'Doctor', key: 'doctorName' },
    { header: 'Room', key: 'room' },
    { header: 'Check-In Time', key: 'checkInTime' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    {
      header: 'Actions',
      key: 'actions',
      render: (_, r) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link
            to={`/opd/consultation?patientId=${r.patientId}&appointmentId=${r.appointmentId}`}
            className="btn btn-primary"
            style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
            onClick={() => onStartConsultation && onStartConsultation(r)}
          >
            Start Consultation
          </Link>
          <Link
            to={`/opd/patient/${r.patientId}`}
            className="btn btn-secondary"
            style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
          >
            Profile
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="OPD Daily Consultation Queue"
        subtitle="Live waitlist of checked-in patients awaiting doctor consultation"
      />

      <div className="notice-box">
        <strong>Demo Queue:</strong> Queue order is simulated for development. Patients appear here once checked in.
      </div>

      <div className="card">
        <BasicTable
          columns={columns}
          data={queue}
          keyField="queueNumber"
          emptyMessage="No patients are currently waiting in the OPD queue."
        />
      </div>
    </div>
  );
}
