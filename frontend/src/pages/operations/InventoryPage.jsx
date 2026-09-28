import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import BasicTable from '../../components/common/BasicTable';
import StatusBadge from '../../components/common/StatusBadge';
import { SAMPLE_INVENTORY } from '../../data/sampleData';

export default function InventoryPage() {
  const columns = [
    { header: 'Item Code', key: 'itemId' },
    { header: 'Medical Supply / Item', key: 'name' },
    { header: 'Category', key: 'category' },
    { header: 'In Stock', key: 'stock' },
    { header: 'Reorder Level', key: 'reorderLevel' },
    {
      header: 'Stock Status',
      key: 'status',
      render: (_, r) => {
        const isLow = r.stock <= r.reorderLevel;
        return <StatusBadge status={isLow ? 'Low Stock' : 'Adequate'} />;
      },
    },
  ];

  return (
    <div>
      <PageHeader
        title="Central Medical Inventory"
        subtitle="Manage hospital consumables, medical equipment, and supplies"
      />

      <div className="card">
        <BasicTable
          columns={columns}
          data={SAMPLE_INVENTORY}
          keyField="itemId"
          emptyMessage="No inventory supplies listed."
        />
      </div>
    </div>
  );
}
