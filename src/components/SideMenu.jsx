import React from 'react';

const SideMenu = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
        <img src="https://img.logoipsum.com/288.svg" alt="Logo" className="h-6" />
        <span className="ml-2 text-xl font-bold">
          Expense Tracker
        </span>
      </div>
      <nav className="grow px-4 py-8">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Budgets
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Expenses
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Reports
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;