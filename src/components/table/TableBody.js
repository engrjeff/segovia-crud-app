import React from "react";

function TableBody({ data, columns, onRowClick }) {
  function renderCellContent(item, column) {
    if (column.content) return column.content(item);
    return item[column.property];
  }

  function createKey(item, column) {
    return item.id + (column.property || column.key);
  }

  function handleRowClick(e, item) {
    if (!e.target.localName === "a") return;
    if (onRowClick) onRowClick(item);
  }

  return (
    <tbody>
      {data &&
        data.map((item) => (
          <tr
            key={item.id}
            onClick={(e) => handleRowClick(e, item)}
            // style={{ cursor: "pointer" }}
          >
            {columns.map((column) => (
              <td key={createKey(item, column)}>
                {renderCellContent(item, column)}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
}

export default TableBody;
