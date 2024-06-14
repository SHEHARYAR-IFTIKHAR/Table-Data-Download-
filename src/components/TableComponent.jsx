import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const TableComponent = ({ data }) => {
  const handleDownloadExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    
    // Convert the data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
    // Write the workbook to binary string
    const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert binary string to ArrayBuffer
    const buf = new ArrayBuffer(workbookBinary.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < workbookBinary.length; i++) {
      view[i] = workbookBinary.charCodeAt(i) & 0xFF;
    }

    // Create a Blob and save it using FileSaver
    const blob = new Blob([buf], { type: 'application/octet-stream' });
    saveAs(blob, 'data.xlsx');
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDownloadExcel}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Excel
      </button>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-4 py-2 border">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
