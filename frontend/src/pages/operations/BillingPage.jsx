import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import FormField from '../../components/common/FormField';
import { SAMPLE_BILLS, SAMPLE_PATIENTS } from '../../data/sampleData';

export default function BillingPage() {
  const [bills, setBills] = useState(SAMPLE_BILLS);
  const [patientId, setPatientId] = useState(SAMPLE_PATIENTS[0]?.id || '');
  const [serviceType, setServiceType] = useState('OPD Consultation');
  const [amount, setAmount] = useState('50.00');
  const [notice, setNotice] = useState(null);

  const handleCreateBill = (e) => {
    e.preventDefault();
    const patient = SAMPLE_PATIENTS.find((p) => p.id === patientId);

    const newBill = {
      billId: `BILL-${Math.floor(810 + Math.random() * 190)}`,
      patientId,
      patientName: patient ? patient.fullName : 'Demo Patient',
      type: serviceType,
      amount: parseFloat(amount) || 0,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
    };

    setBills([newBill, ...bills]);
    setNotice(`Invoice ${newBill.billId} generated for ${newBill.patientName} ($${newBill.amount.toFixed(2)}). (In-memory demo)`);
  };

  const handleMarkPaid = (billId) => {
    setBills(
      bills.map((b) => (b.billId === billId ? { ...b, status: 'Paid' } : b))
    );
  };

  const columns = [
    { header: 'Invoice #', key: 'billId' },
    { header: 'Patient Name', key: 'patientName' },
    { header: 'Charge Description', key: 'type' },
    { header: 'Date', key: 'date' },
    {
      header: 'Total Amount',
      key: 'amount',
      render: (val) => `$${Number(val).toFixed(2)}`,
    },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    {
      header: 'Action',
      key: 'action',
      render: (_, r) => (
        r.status === 'Pending' ? (
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
            onClick={() => handleMarkPaid(r.billId)}
          >
            Mark Paid (Demo)
          </button>
        ) : null
      ),
    },
  ];

  const totalInvoiced = bills.reduce((acc, curr) => acc + curr.amount, 0);
  const totalCollected = bills
    .filter((b) => b.status === 'Paid')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <PageHeader
        title="Patient Billing & Invoicing"
        subtitle="Manage hospital fees, department invoices, and payment statuses"
      />

      <div className="notice-box">
        <strong>Demo Billing:</strong> Financial transactions are simulated for presentation. No payment gateway is integrated.
      </div>

      {notice && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {notice}
        </div>
      )}

      <div className="grid-2" style={{ marginBottom: '1.25rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Total Invoiced</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0284c7' }}>
            ${totalInvoiced.toFixed(2)}
          </p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Collected (Paid)</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#16a34a' }}>
            ${totalCollected.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Generate New Invoice (Demo Form)</h3>
        <form onSubmit={handleCreateBill}>
          <div className="grid-2">
            <FormField
              label="Patient"
              name="patientId"
              type="select"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              options={SAMPLE_PATIENTS.map((p) => ({ value: p.id, label: `${p.fullName} (${p.id})` }))}
              required
            />

            <FormField
              label="Service / Ward Item"
              name="serviceType"
              type="select"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              options={[
                { value: 'OPD Consultation Fee', label: 'OPD Consultation Fee' },
                { value: 'IPD Ward Room Charge', label: 'IPD Ward Room Charge' },
                { value: 'Laboratory Diagnostics', label: 'Laboratory Diagnostics' },
                { value: 'Dispensary Medications', label: 'Dispensary Medications' },
              ]}
              required
            />
          </div>

          <FormField
            label="Amount (USD)"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            Create Demo Bill
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Billing Invoices</h3>
        <BasicTable
          columns={columns}
          data={bills}
          keyField="billId"
          emptyMessage="No billing records found."
        />
      </div>
    </div>
  );
}
