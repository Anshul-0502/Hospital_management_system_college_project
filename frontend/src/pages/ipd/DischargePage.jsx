import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';
import { SAMPLE_DISCHARGES, SAMPLE_ADMISSIONS } from '../../data/sampleData';

export default function DischargePage({
  admissions = SAMPLE_ADMISSIONS,
  discharges = SAMPLE_DISCHARGES,
  onDischargePatient,
}) {
  const activeAdmissions = admissions.filter((a) => a.status === 'Admitted');
  const [selectedAdmissionId, setSelectedAdmissionId] = useState(activeAdmissions[0]?.id || '');
  const [summary, setSummary] = useState('');
  const [billRef, setBillRef] = useState('BILL-802');
  const [notice, setNotice] = useState(null);

  const handleDischarge = (e) => {
    e.preventDefault();
    if (!summary.trim()) {
      alert('Please enter a clinical discharge summary.');
      return;
    }

    if (!selectedAdmissionId) {
      alert('Please select an active inpatient to discharge.');
      return;
    }

    if (onDischargePatient) {
      const res = onDischargePatient({
        admissionId: selectedAdmissionId,
        summary,
        billReference: billRef,
      });

      if (res.success) {
        setNotice(
          `Discharge completed for ${res.discharge.patientName} (Discharge ID: ${res.discharge.dischargeId}). Assigned bed has been released and is now Available. (In-memory demo)`
        );
        setSummary('');
        // Update selected admission to next available
        const remaining = activeAdmissions.filter((a) => a.id !== selectedAdmissionId);
        setSelectedAdmissionId(remaining[0]?.id || '');
      }
    }
  };

  const columns = [
    { header: 'Discharge ID', key: 'dischargeId' },
    { header: 'Patient Name', key: 'patientName' },
    { header: 'Admission Ref', key: 'admissionId' },
    { header: 'Discharge Date', key: 'dischargeDate' },
    { header: 'Clinical Summary', key: 'summary' },
    { header: 'Bill Reference', key: 'billReference' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <PageHeader
        title="Inpatient Discharge Management"
        subtitle="Finalize inpatient discharge summaries and release ward beds"
      />

      <div className="notice-box">
        <strong>Demo Discharge:</strong> Marking a patient as discharged updates their admission status and frees up the assigned bed in real-time demo state.
      </div>

      {notice && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {notice}
        </div>
      )}

      {activeAdmissions.length > 0 ? (
        <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Process Patient Discharge (Demo Form)</h3>
          <form onSubmit={handleDischarge}>
            <div className="grid-2">
              <FormField
                label="Select Admitted Patient"
                name="admissionId"
                type="select"
                value={selectedAdmissionId}
                onChange={(e) => setSelectedAdmissionId(e.target.value)}
                options={activeAdmissions.map((a) => ({
                  value: a.id,
                  label: `${a.patientName} (${a.ward} — Bed ${a.bedNumber})`,
                }))}
                required
              />

              <FormField
                label="Associated Bill Reference"
                name="billRef"
                type="text"
                value={billRef}
                onChange={(e) => setBillRef(e.target.value)}
                placeholder="e.g. BILL-802"
                required
              />
            </div>

            <FormField
              label="Discharge Summary & Instructions"
              name="summary"
              type="textarea"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Document patient condition at discharge, discharge medications, and follow-up advice..."
              required
              rows={3}
            />

            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              Finalize Discharge & Release Bed (Demo)
            </button>
          </form>
        </div>
      ) : (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <EmptyState message="All admitted inpatients have been discharged. No active admissions currently occupy beds." />
        </div>
      )}

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Completed Discharge Records</h3>
        <BasicTable
          columns={columns}
          data={discharges}
          keyField="dischargeId"
          emptyMessage="No completed discharge records."
        />
      </div>
    </div>
  );
}
