import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import { SAMPLE_LAB_ORDERS, SAMPLE_PATIENTS } from '../../data/sampleData';

export default function LabPage() {
  const [orders, setOrders] = useState(SAMPLE_LAB_ORDERS);
  const [patientId, setPatientId] = useState(SAMPLE_PATIENTS[0]?.id || '');
  const [testName, setTestName] = useState('');
  const [orderedBy, setOrderedBy] = useState('Dr. Marcus Vance');
  const [feedback, setFeedback] = useState(null);

  const handleOrder = (e) => {
    e.preventDefault();
    if (!testName.trim()) return;

    const newOrder = {
      id: `LAB-${Math.floor(600 + Math.random() * 400)}`,
      patientId,
      testName,
      orderedBy,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      result: 'Specimen sample collected (demo state)',
    };

    setOrders([newOrder, ...orders]);
    setFeedback(`Lab order ${newOrder.id} (${testName}) logged for ${patientId}. (In-memory demo)`);
    setTestName('');
  };

  const columns = [
    { header: 'Order ID', key: 'id' },
    { header: 'Patient ID', key: 'patientId' },
    { header: 'Test Requested', key: 'testName' },
    { header: 'Ordered By', key: 'orderedBy' },
    { header: 'Date', key: 'date' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    { header: 'Result / Clinical Note', key: 'result' },
  ];

  return (
    <div>
      <PageHeader
        title="Diagnostic Laboratory Services"
        subtitle="Manage diagnostic test orders, specimen processing, and test reports"
      />

      <div className="notice-box">
        <strong>Demo Laboratory:</strong> Test orders are simulated for development. Does not connect to medical lab analyzers.
      </div>

      {feedback && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {feedback}
        </div>
      )}

      <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Order Diagnostic Test (Demo Form)</h3>
        <form onSubmit={handleOrder}>
          <div className="grid-2">
            <FormField
              label="Select Patient"
              name="patientId"
              type="select"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              options={SAMPLE_PATIENTS.map((p) => ({ value: p.id, label: `${p.fullName} (${p.id})` }))}
              required
            />

            <FormField
              label="Ordering Physician"
              name="orderedBy"
              type="text"
              value={orderedBy}
              onChange={(e) => setOrderedBy(e.target.value)}
              required
            />
          </div>

          <FormField
            label="Diagnostic Test Name"
            name="testName"
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            placeholder="e.g. Complete Blood Count, Renal Panel, Chest X-Ray"
            required
          />

          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            Submit Test Order (Demo)
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Laboratory Test Log</h3>
        <BasicTable
          columns={columns}
          data={orders}
          emptyMessage="No laboratory orders on record."
        />
      </div>
    </div>
  );
}
