import React from 'react';
import DropDown from '../custom/DropDown';

const Dashboard = () => {
  const states = [
    { name: 'Instance', value: 2 },
    { name: 'Sold', value: 30 },
    { name: 'Seller', value: 10 },
    { name: 'Revanue', value: 20 },
  ];

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Mark Wilson', email: 'mark@example.com', role: 'Manager' },
  ];

  return (
    <div className="p-6">
      {/* Grid for States */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {states.map((state, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{state.name}</h3>
            <p className="text-gray-600">Value: {state.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-bold mb-4">User Table</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <DropDown title={'action'} items={[{label: 'weqw', value: 'dvsd  '}]} onSelect={(res) => {console.log(alert(res))}} />
                    <div className="absolute hidden right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                      <ul>
                        <li>
                          <button className="block px-4 py-2 text-gray-700">Edit</button>
                        </li>
                        <li>
                          <button className="block px-4 py-2 text-red-500">Delete</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty div for the Graph */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Graph Area (Empty for now)</h3>
        <div className="h-64 bg-gray-200 border-dashed border-4 border-gray-400 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
