import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import SearchBar from '../../components/common/SearchBar';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import { SAMPLE_STAFF } from '../../data/sampleData';

export default function DoctorsStaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [staff] = useState(SAMPLE_STAFF);

  const filteredStaff = staff.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Staff ID', key: 'id' },
    { header: 'Full Name', key: 'name' },
    { header: 'Role', key: 'role', render: (val) => <StatusBadge status={val} /> },
    { header: 'Department', key: 'department' },
    { header: 'Contact / Ext', key: 'contact' },
  ];

  return (
    <div>
      <PageHeader
        title="Hospital Staff & Physicians"
        subtitle="Directory of doctors, nursing staff, and hospital administrators"
      />

      <div className="notice-box">
        <strong>Operations Directory:</strong> Showing sample personnel records.
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm('')}
        placeholder="Filter by staff name, role (Doctor, Nurse), or department..."
      />

      <BasicTable
        columns={columns}
        data={filteredStaff}
        emptyMessage="No staff members match the query."
      />
    </div>
  );
}
