import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import BasicTable from '../../components/common/BasicTable';
import { SAMPLE_BEDS } from '../../data/sampleData';

export default function BedsPage({ beds = SAMPLE_BEDS }) {
  const [filterWard, setFilterWard] = useState('All');

  const wards = ['All', 'General Medical Ward', 'Intensive Care Unit', 'Surgical Recovery Ward', 'Maternity Ward'];

  const filteredBeds = filterWard === 'All' ? beds : beds.filter((b) => b.ward.includes(filterWard));

  const columns = [
    { header: 'Bed Number', key: 'bedNumber' },
    { header: 'Ward Name', key: 'ward' },
    { header: 'Bed Type', key: 'type' },
    { header: 'Status', key: 'status', render: (val) => <StatusBadge status={val} /> },
    {
      header: 'Occupant / Admission',
      key: 'patientName',
      render: (val, r) => (val ? `${val} (${r.admissionId || 'IPD'})` : '— Available —'),
    },
  ];

  const totalBeds = beds.length;
  const occupiedBeds = beds.filter((b) => b.status === 'Occupied').length;
  const availableBeds = totalBeds - occupiedBeds;

  return (
    <div>
      <PageHeader
        title="Bed Management & Ward Availability"
        subtitle="Track ward occupancy, bed allotment status, and current occupants"
      />

      <div className="grid-3" style={{ marginBottom: '1.25rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Total Beds</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0284c7' }}>{totalBeds}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Occupied</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ef4444' }}>{occupiedBeds}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h4>Available</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#16a34a' }}>{availableBeds}</p>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Wards & Bed Directory</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.85rem' }}>Filter by Ward:</label>
            <select
              className="form-select"
              style={{ width: 'auto' }}
              value={filterWard}
              onChange={(e) => setFilterWard(e.target.value)}
            >
              {wards.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
        </div>

        <BasicTable
          columns={columns}
          data={filteredBeds}
          keyField="bedNumber"
          emptyMessage="No beds match the selected ward filter."
        />
      </div>
    </div>
  );
}
