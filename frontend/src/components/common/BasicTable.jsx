import React from 'react';

export default function BasicTable({ columns = [], data = [], keyField = 'id', emptyMessage = 'No records found' }) {
  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <p className="empty-state">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="basic-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={col.key || index} style={col.width ? { width: col.width } : undefined}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row[keyField] || rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={col.key || colIndex}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
