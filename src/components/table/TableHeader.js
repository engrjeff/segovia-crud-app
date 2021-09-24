import React from "react";

function TableHeader({ columns }) {
  return (
    <thead className='bg-dark text-white'>
      <tr>
        {columns.map((column) => (
          <th key={column.property || column.key} scope='col'>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
