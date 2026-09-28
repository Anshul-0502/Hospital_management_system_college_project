import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import SearchBar from '../../components/common/SearchBar';
import BasicTable from '../../components/common/BasicTable';
import { SAMPLE_PATIENTS } from '../../data/sampleData';

export default function PatientListPage({ patients = SAMPLE_PATIENTS }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter((p) =>
    p.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.contact.includes(searchTerm)
  );

  const columns = [
    { header: 'Patient ID', key: 'id' },
    { header: 'Full Name', key: 'fullName' },
    { header: 'Age / Gender', key: 'age', render: (_, r) => `${r.age} / ${r.gender}` },
    { header: 'Blood Group', key: 'bloodGroup' },
    { header: 'Contact', key: 'contact' },
    {
      header: 'Actions',
      key: 'actions',
      render: (_, r) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to={`/opd/patient/${r.id}`} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
            View Profile
          </Link>
          <Link to={`/opd/appointments?patientId=${r.id}`} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
            Book
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="OPD Patient Directory"
        subtitle="Search and view registered outpatient records"
        actionButton={
          <Link to="/opd/register" className="btn btn-primary">
            + Register New Patient
          </Link>
        }
      />

      <div className="notice-box">
        <strong>Sample Data:</strong> Showing local sample records. Changes are held in frontend memory.
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm('')}
        placeholder="Filter by name, ID (e.g. PAT-101), or contact..."
      />

      <BasicTable
        columns={columns}
        data={filteredPatients}
        keyField="id"
        emptyMessage="No patients match your search criteria."
      />
    </div>
  );
}
