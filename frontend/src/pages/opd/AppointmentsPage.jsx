import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import {
  SAMPLE_APPOINTMENTS,
  SAMPLE_PATIENTS,
  SAMPLE_STAFF,
} from '../../data/sampleData';

export default function AppointmentsPage({
  appointments = SAMPLE_APPOINTMENTS,
  patients = SAMPLE_PATIENTS,
  onBookAppointment,
  onCheckIn,
}) {
  const [searchParams] = useSearchParams();
  const preselectedPatientId = searchParams.get('patientId') || '';

  const [patientId, setPatientId] = useState(preselectedPatientId || (patients[0]?.id || ''));
  const [doctorId, setDoctorId] = useState('DOC-01');
  const [date, setDate] = useState('2026-10-01');
  const [time, setTime] = useState('10:00 AM');
  const [type, setType] = useState('General Consultation');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (preselectedPatientId) {
      setPatientId(preselectedPatientId);
    }
  }, [preselectedPatientId]);

  const doctors = SAMPLE_STAFF.filter((s) => s.role === 'Doctor');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPatient = patients.find((p) => p.id === patientId);
    const selectedDoc = doctors.find((d) => d.id === doctorId);

    const newAppt = {
      id: `APP-${Math.floor(200 + Math.random() * 800)}`,
      patientId,
      patientName: selectedPatient ? selectedPatient.fullName : 'Demo Patient',
      doctorId,
      doctorName: selectedDoc ? `${selectedDoc.name} (${selectedDoc.department})` : 'Assigned Doctor',
      date,
      time,
      type,
      status: 'Scheduled',
    };

    if (onBookAppointment) {
      onBookAppointment(newAppt);
    }

    setFeedback(`Demo Appointment Scheduled: ${newAppt.patientName} with ${newAppt.doctorName} on ${date} at ${time}. (In-memory demo only)`);
  };

  const columns = [
    { header: 'Appt ID', key: 'id' },
    { header: 'Patient Name', key: 'patientName' },
    { header: 'Doctor', key: 'doctorName' },
    { header: 'Date', key: 'date' },
    { header: 'Time', key: 'time' },
    { header: 'Type', key: 'type' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    {
      header: 'Actions',
      key: 'actions',
      render: (_, r) => (
        r.status === 'Scheduled' && onCheckIn ? (
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
            onClick={() => onCheckIn(r.id)}
          >
            Check In
          </button>
        ) : null
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="OPD Appointments"
        subtitle="Schedule and view outpatient consultations"
      />

      <div className="notice-box">
        <strong>Demo Scheduling:</strong> Scheduling adds an appointment to the local demo state. It does not reserve a live hospital slot.
      </div>

      {feedback && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {feedback}
        </div>
      )}

      <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Book a Consultation (Demo Form)</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <FormField
              label="Select Patient"
              name="patientId"
              type="select"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              options={patients.map((p) => ({ value: p.id, label: `${p.fullName} (${p.id})` }))}
              required
            />

            <FormField
              label="Consulting Doctor"
              name="doctorId"
              type="select"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              options={doctors.map((d) => ({ value: d.id, label: `${d.name} — ${d.department}` }))}
              required
            />
          </div>

          <div className="grid-3">
            <FormField
              label="Date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <FormField
              label="Preferred Time"
              name="time"
              type="select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              options={[
                { value: '09:00 AM', label: '09:00 AM' },
                { value: '10:00 AM', label: '10:00 AM' },
                { value: '11:00 AM', label: '11:00 AM' },
                { value: '02:00 PM', label: '02:00 PM' },
                { value: '03:30 PM', label: '03:30 PM' },
              ]}
              required
            />

            <FormField
              label="Appointment Type"
              name="type"
              type="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              options={[
                { value: 'General Consultation', label: 'General Consultation' },
                { value: 'Follow-up', label: 'Follow-up' },
                { value: 'Specialist Review', label: 'Specialist Review' },
              ]}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            Book Appointment (Demo Submit)
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Scheduled Appointments</h3>
        <BasicTable
          columns={columns}
          data={appointments}
          emptyMessage="No appointments scheduled."
        />
      </div>
    </div>
  );
}
