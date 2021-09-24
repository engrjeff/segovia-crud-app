import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, data, onRowClick }) {
  return (
    <div className='table-fixed-scrollable'>
      <table className='table table-sm table-striped table-responsive'>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} onRowClick={onRowClick} />
      </table>
    </div>
  );
}

export default Table;
