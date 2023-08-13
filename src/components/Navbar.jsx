import React from 'react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div>
        <button className="px-3.5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-700">
          Create Expense
        </button>
      </div>
    </header>
  );
};

export default Navbar;