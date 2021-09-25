import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, data, onRowClick }) {
  return (
    <div className='table-fixed-scrollable'>
      {data.length === 0 && (
        <div className='empty-div'>
          <h1>No data.</h1>
        </div>
      )}
      {data.length > 0 && (
        <table className='table table-sm table-striped table-responsive'>
          <TableHeader columns={columns} />
          <TableBody data={data} columns={columns} onRowClick={onRowClick} />
        </table>
      )}
    </div>
  );
}

export default Table;
