import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import BasicTable from '../../components/common/BasicTable';
import EmptyState from '../../components/common/EmptyState';
import {
  SAMPLE_PATIENTS,
  SAMPLE_APPOINTMENTS,
  SAMPLE_CONSULTATIONS,
  SAMPLE_LAB_ORDERS,
} from '../../data/sampleData';

export default function PatientProfilePage({
  patients = SAMPLE_PATIENTS,
  appointments = SAMPLE_APPOINTMENTS,
  consultations = SAMPLE_CONSULTATIONS,
  labOrders = SAMPLE_LAB_ORDERS,
}) {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === id) || patients[0];

  if (!patient && id) {
    return (
      <div>
        <PageHeader title="Patient Profile" subtitle="Outpatient record details" />
        <EmptyState
          message={`Patient with ID "${id}" was not found in the current demo session.`}
          action={
            <Link to="/opd/patients" className="btn btn-primary">
              Back to Patient List
            </Link>
          }
        />
      </div>
    );
  }

  const patientAppointments = appointments.filter((a) => a.patientId === patient.id);
  const patientConsultations = consultations.filter((c) => c.patientId === patient.id);
  const patientLabs = labOrders.filter((l) => l.patientId === patient.id);

  const appointmentColumns = [
    { header: 'Appt ID', key: 'id' },
    { header: 'Doctor', key: 'doctorName' },
    { header: 'Date', key: 'date' },
    { header: 'Time', key: 'time' },
    { header: 'Type', key: 'type' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
  ];

  const consultationColumns = [
    { header: 'Date', key: 'date' },
    { header: 'Doctor', key: 'doctorName' },
    { header: 'Symptoms', key: 'symptoms' },
    { header: 'Diagnosis Note', key: 'diagnosis' },
    { header: 'Prescription', key: 'prescription' },
  ];

  const labColumns = [
    { header: 'Order ID', key: 'id' },
    { header: 'Test Name', key: 'testName' },
    { header: 'Date', key: 'date' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    { header: 'Result', key: 'result' },
  ];

  return (
    <div>
      <PageHeader
        title={`Patient Profile: ${patient.fullName}`}
        subtitle={`Demo ID: ${patient.id} — Registered: ${patient.registeredDate || 'N/A'}`}
        actionButton={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to={`/opd/appointments?patientId=${patient.id}`} className="btn btn-primary">
              Book Appointment
            </Link>
            <Link to="/opd/patients" className="btn btn-secondary">
              Back to List
            </Link>
          </div>
        }
      />

      <div className="card">
        <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
          Personal Information
        </h3>
        <div className="grid-3" style={{ fontSize: '0.9rem' }}>
          <div><strong>Full Name:</strong> {patient.fullName}</div>
          <div><strong>Age / Gender:</strong> {patient.age} / {patient.gender}</div>
          <div><strong>Blood Group:</strong> {patient.bloodGroup}</div>
          <div><strong>Contact:</strong> {patient.contact}</div>
          <div><strong>Address:</strong> {patient.address || 'Not provided'}</div>
          <div><strong>Registered:</strong> {patient.registeredDate}</div>
        </div>
        <div style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
          <strong>Medical History:</strong> {patient.medicalHistorySummary || 'No documented history in this demo profile.'}
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Appointments & Visits</h3>
        <BasicTable
          columns={appointmentColumns}
          data={patientAppointments}
          emptyMessage="No scheduled appointments for this patient."
        />
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Consultations & Prescriptions</h3>
        <BasicTable
          columns={consultationColumns}
          data={patientConsultations}
          emptyMessage="No recorded consultations in this demo session."
        />
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Laboratory Test Records</h3>
        <BasicTable
          columns={labColumns}
          data={patientLabs}
          emptyMessage="No lab test orders for this patient."
        />
      </div>
    </div>
  );
}
