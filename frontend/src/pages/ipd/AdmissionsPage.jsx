import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import FormField from '../../components/common/FormField';
import StatusBadge from '../../components/common/StatusBadge';
import { SAMPLE_ADMISSIONS, SAMPLE_PATIENTS, SAMPLE_BEDS } from '../../data/sampleData';

export default function AdmissionsPage({
  admissions = SAMPLE_ADMISSIONS,
  patients = SAMPLE_PATIENTS,
  beds = SAMPLE_BEDS,
  onAdmitPatient,
}) {
  const [patientId, setPatientId] = useState(patients[0]?.id || '');
  const [ward, setWard] = useState('General Medical Ward');
  const availableBedsForWard = beds.filter((b) => b.ward.includes(ward) && b.status === 'Available');
  const [bedNumber, setBedNumber] = useState(availableBedsForWard[0]?.bedNumber || '');
  const [reason, setReason] = useState('');
  const [notice, setNotice] = useState(null);
  const [errorNotice, setErrorNotice] = useState(null);

  const handleWardChange = (e) => {
    const newWard = e.target.value;
    setWard(newWard);
    const newAvailable = beds.filter((b) => b.ward.includes(newWard) && b.status === 'Available');
    setBedNumber(newAvailable[0]?.bedNumber || '');
  };

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    setErrorNotice(null);

    if (!reason.trim()) {
      setErrorNotice('Please specify the reason for admission.');
      return;
    }

    if (!bedNumber) {
      setErrorNotice('No bed selected or no beds available in this ward. Please select an available bed.');
      return;
    }

    if (onAdmitPatient) {
      const res = onAdmitPatient({
        patientId,
        ward,
        bedNumber,
        reason,
        attendingDoctor: 'Dr. Marcus Vance',
      });

      if (!res.success) {
        setErrorNotice(res.message);
        return;
      }

      setNotice(
        `Demo Admission Logged: ${res.admission.patientName} successfully admitted to ${res.admission.ward} (Bed: ${res.admission.bedNumber}). Bed is now occupied.`
      );
    } else {
      setNotice(`Demo admission recorded for patient ${patientId}.`);
    }

    setReason('');
  };

  const columns = [
    { header: 'Admission ID', key: 'id' },
    { header: 'Patient Name', key: 'patientName' },
    { header: 'Ward', key: 'ward' },
    { header: 'Bed #', key: 'bedNumber' },
    { header: 'Admitted Date', key: 'admittedDate' },
    { header: 'Attending Doctor', key: 'attendingDoctor' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <PageHeader
        title="IPD Patient Admissions"
        subtitle="Manage inpatient registration, ward admission, and bed allotment"
      />

      <div className="notice-box">
        <strong>Demo IPD:</strong> Bed allotments and admissions are held in local memory. Admitting a patient marks the bed as occupied in real time.
      </div>

      {notice && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {notice}
        </div>
      )}

      {errorNotice && (
        <div className="notice-box danger">
          {errorNotice}
        </div>
      )}

      <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Admit Patient (Demo Form)</h3>
        <form onSubmit={handleAdmissionSubmit}>
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
              label="Select Ward"
              name="ward"
              type="select"
              value={ward}
              onChange={handleWardChange}
              options={[
                { value: 'General Medical Ward', label: 'General Medical Ward' },
                { value: 'Surgical Recovery Ward', label: 'Surgical Recovery Ward' },
                { value: 'Intensive Care Unit', label: 'Intensive Care Unit (ICU)' },
                { value: 'Maternity Ward', label: 'Maternity Ward' },
              ]}
              required
            />
          </div>

          <div className="grid-2">
            <FormField
              label="Available Bed"
              name="bedNumber"
              type="select"
              value={bedNumber}
              onChange={(e) => setBedNumber(e.target.value)}
              options={
                availableBedsForWard.length > 0
                  ? availableBedsForWard.map((b) => ({ value: b.bedNumber, label: `${b.bedNumber} (${b.type}) - Available` }))
                  : [{ value: '', label: 'No beds currently available in this ward' }]
              }
              required
              helpText="Only beds with status 'Available' can be assigned."
            />
          </div>

          <FormField
            label="Reason for Admission / Clinical Diagnosis"
            name="reason"
            type="textarea"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g. Inpatient monitoring for severe pneumonia or post-op recovery"
            required
            rows={2}
          />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '0.5rem' }}
            disabled={!bedNumber}
          >
            Process Admission (Demo Submit)
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Current Inpatient Admissions</h3>
        <BasicTable
          columns={columns}
          data={admissions}
          emptyMessage="No active inpatient admissions."
        />
      </div>
    </div>
  );
}
