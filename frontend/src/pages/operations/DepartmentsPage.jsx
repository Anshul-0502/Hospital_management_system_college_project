import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import { SAMPLE_DEPARTMENTS } from '../../data/sampleData';

export default function DepartmentsPage() {
  const columns = [
    { header: 'Dept ID', key: 'id' },
    { header: 'Department Name', key: 'name' },
    { header: 'Head of Department', key: 'head' },
    { header: 'Location / Rooms', key: 'rooms' },
    { header: 'Active Staff', key: 'staffCount' },
  ];

  return (
    <div>
      <PageHeader
        title="Clinical & Administrative Departments"
        subtitle="Overview of hospital wings, department heads, and room allocations"
      />

      <div className="card">
        <BasicTable
          columns={columns}
          data={SAMPLE_DEPARTMENTS}
          emptyMessage="No departments listed."
        />
      </div>
    </div>
  );
}
