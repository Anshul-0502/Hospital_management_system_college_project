import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';
import { SAMPLE_PATIENTS, SAMPLE_CONSULTATIONS } from '../../data/sampleData';

export default function ConsultationPage({
  patients = SAMPLE_PATIENTS,
  onSaveConsultation,
}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const patientIdParam = searchParams.get('patientId') || (patients[0]?.id || '');
  const appointmentIdParam = searchParams.get('appointmentId') || 'APP-202';

  const [selectedPatientId, setSelectedPatientId] = useState(patientIdParam);
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [prescription, setPrescription] = useState('');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (patientIdParam) {
      setSelectedPatientId(patientIdParam);
    }
  }, [patientIdParam]);

  const activePatient = patients.find((p) => p.id === selectedPatientId) || patients[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!symptoms.trim() || !prescription.trim()) {
      alert('Please fill out the symptoms and prescription fields before finishing consultation.');
      return;
    }

    const newConsultation = {
      id: `CON-${Math.floor(300 + Math.random() * 700)}`,
      patientId: activePatient.id,
      patientName: activePatient.fullName,
      appointmentId: appointmentIdParam,
      doctorName: 'Dr. Marcus Vance (Demo Physician)',
      date: new Date().toISOString().split('T')[0],
      symptoms,
      diagnosis: diagnosis || 'General checkup summary',
      prescription,
      notes: clinicalNotes,
    };

    if (onSaveConsultation) {
      onSaveConsultation(newConsultation);
    }

    setMessage(`Consultation recorded in demo state for ${activePatient.fullName}. Queue entry marked completed.`);
    setTimeout(() => {
      navigate(`/opd/patient/${activePatient.id}`);
    }, 1500);
  };

  return (
    <div>
      <PageHeader
        title="Doctor Consultation Desk"
        subtitle="Record clinical consultation notes, observations, and prescription"
        actionButton={
          <Link to="/opd/queue" className="btn btn-secondary">
            Back to Queue
          </Link>
        }
      />

      <div className="notice-box warning">
        <strong>Demo Only:</strong> No clinical decision support, automated diagnosis, or real medical records.
        This interface demonstrates workflow notes entry only.
      </div>

      {message && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {message}
        </div>
      )}

      {activePatient && (
        <div className="card" style={{ backgroundColor: '#f8fafc', marginBottom: '1.25rem' }}>
          <h4>Active Patient Details</h4>
          <div className="grid-3" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            <div><strong>Name:</strong> {activePatient.fullName} ({activePatient.id})</div>
            <div><strong>Age / Gender:</strong> {activePatient.age} / {activePatient.gender}</div>
            <div><strong>Blood Group:</strong> {activePatient.bloodGroup}</div>
          </div>
          <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#64748b' }}>
            Known history: {activePatient.medicalHistorySummary || 'None documented'}
          </div>
        </div>
      )}

      <div className="card" style={{ maxWidth: '750px' }}>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Chief Presenting Complaints / Symptoms"
            name="symptoms"
            type="textarea"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="e.g. Headache for 2 days, mild fever in the evenings"
            required
            rows={2}
          />

          <FormField
            label="Clinical Findings / Diagnosis Note"
            name="diagnosis"
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="e.g. Mild viral rhinovirus (sample observation)"
          />

          <FormField
            label="Prescription & Dosage Instructions (Demo Text)"
            name="prescription"
            type="textarea"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
            placeholder="e.g. Tab Paracetamol 500mg - 1 tab SOS after food for 3 days."
            required
            rows={3}
            helpText="Prescriptions entered here will appear in the patient's profile and pharmacy orders demo."
          />

          <FormField
            label="Doctor's Advice & Follow-up Notes"
            name="clinicalNotes"
            type="textarea"
            value={clinicalNotes}
            onChange={(e) => setClinicalNotes(e.target.value)}
            placeholder="e.g. Drink warm fluids, follow up if symptoms persist after 48 hours."
            rows={2}
          />

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary">
              Complete Consultation (Demo Save)
            </button>
            <Link to="/opd/queue" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
