import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import { SAMPLE_AMBULANCE_REQUESTS } from '../../data/sampleData';

export default function AmbulanceRequestPage({
  requests = SAMPLE_AMBULANCE_REQUESTS,
  onAddAmbulanceRequest,
}) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [callerContact, setCallerContact] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [demoNotice, setDemoNotice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickupLocation.trim() || !callerContact.trim()) {
      alert('Please fill out the pickup location and caller contact.');
      return;
    }

    const newRequest = {
      requestId: `AMB-REQ-${Math.floor(10 + Math.random() * 90)}`,
      location: pickupLocation,
      callerContact,
      requestedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Draft demo request',
      notes: caseDescription || 'Simulated demonstration request',
    };

    if (onAddAmbulanceRequest) {
      onAddAmbulanceRequest(newRequest);
    }

    setDemoNotice(
      `Demo Request Recorded: Simulation ID ${newRequest.requestId} (Status: Draft demo request). NOTICE: Demo only — this form does not contact an ambulance or emergency service.`
    );
    setPickupLocation('');
    setCallerContact('');
    setCaseDescription('');
  };

  const columns = [
    { header: 'Request ID', key: 'requestId' },
    { header: 'Pickup Location', key: 'location' },
    { header: 'Caller Contact', key: 'callerContact' },
    { header: 'Logged At', key: 'requestedAt' },
    { header: 'Simulation Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    { header: 'Details', key: 'notes' },
  ];

  return (
    <div>
      <PageHeader
        title="Ambulance Request (Frontend Simulation)"
        subtitle="Educational demonstration form for hospital transit coordination"
      />

      <div className="notice-box danger" style={{ borderWidth: '2px', fontWeight: 'bold' }}>
        IMPORTANT SAFETY NOTICE:
        <br />
        This application is an educational student project. It is NOT connected to any real ambulance dispatch,
        emergency call center (911 / 112 / 108), or clinical emergency fleet. Submitting this form does NOT contact emergency services or dispatch an ambulance.
        In a real emergency, immediately dial your local emergency telephone number.
      </div>

      <div className="notice-box warning">
        <strong>Demo Policy:</strong> Demo only — this form does not contact an ambulance or emergency service. All entries are created as a <em>Draft demo request</em> in browser memory.
      </div>

      {demoNotice && (
        <div className="notice-box" style={{ backgroundColor: '#e0f2fe', borderColor: '#0284c7', color: '#0369a1' }}>
          {demoNotice}
        </div>
      )}

      <div className="card" style={{ maxWidth: '650px', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Simulated Transit Request Form</h3>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Pickup Address / Street Location"
            name="pickupLocation"
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="e.g. 742 Evergreen Terrace"
            required
          />

          <FormField
            label="Caller Contact Number (Mock Data)"
            name="callerContact"
            type="text"
            value={callerContact}
            onChange={(e) => setCallerContact(e.target.value)}
            placeholder="e.g. 555-0188"
            required
          />

          <FormField
            label="Reason for Transit / Nature of Call"
            name="caseDescription"
            type="textarea"
            value={caseDescription}
            onChange={(e) => setCaseDescription(e.target.value)}
            placeholder="Describe transit requirement (e.g. routine non-emergency transfer)..."
            rows={2}
          />

          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            Submit Demo Request (Academic Simulation)
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '0.75rem' }}>Simulated Requests Log</h3>
        <BasicTable
          columns={columns}
          data={requests}
          keyField="requestId"
          emptyMessage="No simulated ambulance requests logged."
        />
      </div>
    </div>
  );
}
