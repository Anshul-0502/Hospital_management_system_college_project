import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import FormField from '../../components/common/FormField';
import { SAMPLE_PHARMACY_STOCK, SAMPLE_CONSULTATIONS } from '../../data/sampleData';

export default function PharmacyPage() {
  const [stock, setStock] = useState(SAMPLE_PHARMACY_STOCK);
  const [pendingPrescriptions, setPendingPrescriptions] = useState([
    {
      id: 'RX-901',
      patientName: 'Jane Doe',
      doctor: 'Dr. Connor',
      medication: 'Paracetamol 500mg (10 tabs)',
      status: 'Ready for Dispensing',
    },
    {
      id: 'RX-902',
      patientName: 'Alex Rivera',
      doctor: 'Dr. Rostova',
      medication: 'Paracetamol 500mg (15 tabs)',
      status: 'Ready for Dispensing',
    },
  ]);
  const [dispenseLog, setDispenseLog] = useState(null);

  const handleDispense = (rxId, medName) => {
    setPendingPrescriptions(pendingPrescriptions.filter((p) => p.id !== rxId));
    setDispenseLog(`Dispensed ${medName} for order ${rxId}. (In-memory demo action)`);
  };

  const stockColumns = [
    { header: 'Med Code', key: 'id' },
    { header: 'Medication Name', key: 'name' },
    { header: 'Category', key: 'category' },
    { header: 'Available Units', key: 'quantity' },
    { header: 'Unit Price', key: 'unitPrice' },
  ];

  const rxColumns = [
    { header: 'Rx ID', key: 'id' },
    { header: 'Patient Name', key: 'patientName' },
    { header: 'Prescribing Doctor', key: 'doctor' },
    { header: 'Prescription Detail', key: 'medication' },
    { header: 'Status', key: 'status' },
    {
      header: 'Action',
      key: 'action',
      render: (_, r) => (
        <button
          type="button"
          className="btn btn-primary"
          style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
          onClick={() => handleDispense(r.id, r.medication)}
        >
          Dispense (Demo)
        </button>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Hospital Pharmacy & Dispensary"
        subtitle="Medicine stock levels and prescription fulfillment"
      />

      <div className="notice-box">
        <strong>Demo Pharmacy:</strong> Real pharmacy inventory management and batch tracking will connect to Spring Boot APIs in Phase 7.
      </div>

      {dispenseLog && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {dispenseLog}
        </div>
      )}

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>Prescriptions Pending Fulfillment</h3>
        <BasicTable
          columns={rxColumns}
          data={pendingPrescriptions}
          keyField="id"
          emptyMessage="No pending prescriptions in the dispensary queue."
        />
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Pharmacy Medication Stock</h3>
        <BasicTable
          columns={stockColumns}
          data={stock}
          emptyMessage="No medication items registered."
        />
      </div>
    </div>
  );
}
