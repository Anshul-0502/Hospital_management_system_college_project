import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import FormField from '../../components/common/FormField';
import { SAMPLE_EMERGENCY_CASES } from '../../data/sampleData';

export default function EmergencyWardPage() {
  const [cases, setCases] = useState(SAMPLE_EMERGENCY_CASES);
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [priority, setPriority] = useState('High');
  const [bayNumber, setBayNumber] = useState('Bay 2');
  const [notice, setNotice] = useState(null);

  const handleRegisterArrival = (e) => {
    e.preventDefault();
    if (!patientName.trim()) return;

    const newCase = {
      caseId: `EMG-${Math.floor(910 + Math.random() * 80)}`,
      patientName,
      age: age || 'Unknown',
      priority,
      arrivalTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      bayNumber,
      status: 'Admitted to ER',
    };

    setCases([newCase, ...cases]);
    setNotice(`Emergency Arrival Registered: Case ${newCase.caseId} assigned to ${bayNumber} (Priority: ${priority}). (In-memory demo)`);
    setPatientName('');
    setAge('');
  };

  const columns = [
    { header: 'Case ID', key: 'caseId' },
    { header: 'Patient / Subject', key: 'patientName' },
    { header: 'Age', key: 'age' },
    { header: 'Triage Priority', key: 'priority', render: (val) => <StatusBadge status={val} /> },
    { header: 'Arrival Time', key: 'arrivalTime' },
    { header: 'Bed / Bay', key: 'bayNumber' },
    { header: 'Clinical Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <PageHeader
        title="Emergency Ward & Triage Arrival"
        subtitle="Manage acute intake, emergency admissions, and bay allocation"
      />

      <div className="notice-box danger">
        <strong>EMERGENCY DEMO:</strong> This screen is a demonstration interface for academic presentation.
        It is NOT connected to any real-world dispatch, emergency call center, or clinical monitoring systems.
      </div>

      {notice && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {notice}
        </div>
      )}

      <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Log Emergency Arrival (Demo Intake)</h3>
        <form onSubmit={handleRegisterArrival}>
          <div className="grid-2">
            <FormField
              label="Patient Name or Identifier"
              name="patientName"
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="e.g. Unknown (Trauma Case) or Jane Doe"
              required
            />

            <FormField
              label="Estimated Age"
              name="age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. Approx 35 or 42"
            />
          </div>

          <div className="grid-2">
            <FormField
              label="Triage Priority Level"
              name="priority"
              type="select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              options={[
                { value: 'High', label: 'High (Immediate Attention)' },
                { value: 'Medium', label: 'Medium (Urgent)' },
                { value: 'Standard', label: 'Standard (Semi-urgent)' },
              ]}
              required
            />

            <FormField
              label="Assigned ER Bay"
              name="bayNumber"
              type="select"
              value={bayNumber}
              onChange={(e) => setBayNumber(e.target.value)}
              options={[
                { value: 'Bay 1 (Trauma)', label: 'Bay 1 (Trauma)' },
                { value: 'Bay 2', label: 'Bay 2' },
                { value: 'Bay 3', label: 'Bay 3' },
                { value: 'Bay 4', label: 'Bay 4' },
                { value: 'Resuscitation Suite', label: 'Resuscitation Suite' },
              ]}
              required
            />
          </div>

          <button type="submit" className="btn btn-danger" style={{ marginTop: '0.5rem' }}>
            Record Emergency Intake (Demo)
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Active Emergency Cases</h3>
        <BasicTable
          columns={columns}
          data={cases}
          keyField="caseId"
          emptyMessage="No active emergency cases in the ER bay."
        />
      </div>
    </div>
  );
}
