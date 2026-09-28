import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';
import EmptyState from '../../components/common/EmptyState';
import { SAMPLE_INPATIENT_RECORDS, SAMPLE_ADMISSIONS } from '../../data/sampleData';

export default function InpatientRecordPage({
  admissions = SAMPLE_ADMISSIONS,
  records = SAMPLE_INPATIENT_RECORDS,
  onAddNote,
}) {
  const activeAdmissions = admissions.filter((a) => a.status === 'Admitted');
  const [selectedAdmissionId, setSelectedAdmissionId] = useState(activeAdmissions[0]?.id || '');
  const [author, setAuthor] = useState('Dr. Marcus Vance');
  const [newNote, setNewNote] = useState('');

  const currentRecord = records.find((r) => r.admissionId === selectedAdmissionId);
  const currentAdmission = admissions.find((a) => a.id === selectedAdmissionId);

  const handleAddNoteSubmit = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const noteObj = {
      date: new Date().toISOString().split('T')[0],
      author,
      note: newNote,
    };

    if (onAddNote) {
      onAddNote(selectedAdmissionId, noteObj);
    }

    setNewNote('');
  };

  return (
    <div>
      <PageHeader
        title="Inpatient Medical Record & Daily Rounds"
        subtitle="Clinical progress tracking, physician notes, and nurse observations"
      />

      <div className="card" style={{ maxWidth: '500px', marginBottom: '1.25rem' }}>
        <FormField
          label="Select Inpatient Case"
          name="admissionSelect"
          type="select"
          value={selectedAdmissionId}
          onChange={(e) => setSelectedAdmissionId(e.target.value)}
          options={
            activeAdmissions.length > 0
              ? activeAdmissions.map((a) => ({
                  value: a.id,
                  label: `${a.patientName} (${a.id} — Bed: ${a.bedNumber})`,
                }))
              : [{ value: '', label: 'No active inpatients admitted.' }]
          }
        />
      </div>

      {currentAdmission ? (
        <div>
          <div className="card">
            <h3>Inpatient Summary: {currentAdmission.patientName}</h3>
            <div className="grid-4" style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}>
              <div><strong>Admission ID:</strong> {currentAdmission.id}</div>
              <div><strong>Patient ID:</strong> {currentAdmission.patientId}</div>
              <div><strong>Ward:</strong> {currentAdmission.ward}</div>
              <div><strong>Assigned Bed:</strong> {currentAdmission.bedNumber}</div>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#64748b' }}>
              <strong>Admission Reason:</strong> {currentAdmission.reason}
            </div>
          </div>

          <div className="card">
            <h3>Daily Rounds & Progress Notes</h3>
            <div style={{ margin: '1rem 0' }}>
              {currentRecord && currentRecord.dailyNotes && currentRecord.dailyNotes.length > 0 ? (
                currentRecord.dailyNotes.map((dn, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      borderBottom: '1px solid #e2e8f0',
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                      <strong>{dn.author}</strong>
                      <span>{dn.date}</span>
                    </div>
                    <p style={{ marginTop: '0.35rem', fontSize: '0.875rem' }}>{dn.note}</p>
                  </div>
                ))
              ) : (
                <EmptyState message="No clinical notes recorded yet for this admission." />
              )}
            </div>

            <form onSubmit={handleAddNoteSubmit} style={{ borderTop: '1px solid #cbd5e1', paddingTop: '1rem' }}>
              <h4>Add Clinical Round Note (Demo Form)</h4>
              <div className="grid-2" style={{ marginTop: '0.5rem' }}>
                <FormField
                  label="Author / Clinician"
                  name="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Dr. Vance or Nurse Kelly"
                  required
                />
              </div>
              <FormField
                label="Daily Progress Note"
                name="newNote"
                type="textarea"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Enter vital observations, medication response, or patient condition..."
                required
                rows={2}
              />
              <button type="submit" className="btn btn-primary">
                Add Round Note (Demo)
              </button>
            </form>
          </div>
        </div>
      ) : (
        <EmptyState message="No active inpatient selected. Admit a patient from the Admissions screen first." />
      )}
    </div>
  );
}
