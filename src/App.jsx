import React from 'react';
import TableComponent from './components/TableComponent'

function App() {
  const sampleData = [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Sam Johnson', Age: 45, Email: 'sam@example.com' }
  ];

  return (
    <div className="App flex justify-center">
      <TableComponent data={sampleData} />
    </div>
  );
}

export default App;
