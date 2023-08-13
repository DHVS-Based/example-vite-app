import React from 'react';
import SummaryCard from './cards/SummaryCard';
import DetailedCard from './cards/DetailedCard';
import LineChart from './LineChart';

const Dashboard = () => {
  return (
    <div className='grow p-6'>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title='Total Spending'
          cost={10000}
         />
         <SummaryCard
          title='Budgets'
          cost={5000}
         />
         <SummaryCard
          title='Expenses'
          cost={50}
         />
         <SummaryCard
          title='Savings'
          cost={2000}
         />
      </div>
      <DetailedCard
        title='Expense Trends'
      >
        <div className='h-96 w-full'>
          <LineChart />
        </div>
      </DetailedCard>
      <DetailedCard
        title='Expense Table'
      >
        <table className="w-full text-slate-900">
          <thead>
              <tr>
                <th className="px-2 py-1.5">Service Provider</th>
                <th className="px-2 py-1.5">Category</th>
                <th className="px-2 py-1.5">Cost</th>
                <th className="px-2 py-1.5">Date</th>
              </tr>
          </thead>
          <tbody>
              <tr className='text-center'>
                <td className="px-2 py-1.5">AWS</td>
                <td className="px-2 py-1.5">Storage</td>
                <td className="px-2 py-1.5">$100</td>
                <td className="px-2 py-1.5">2023-08-01</td>
              </tr>
              <tr className='text-center'>
                <td className="px-2 py-1.5">Azure</td>
                <td className="px-2 py-1.5">Compute</td>
                <td className="px-2 py-1.5">$200</td>
                <td className="px-2 py-1.5">2023-08-02</td>
              </tr>
              <tr className='text-center'>
                <td className="px-2 py-1.5">GCP</td>
                <td className="px-2 py-1.5">Networking</td>
                <td className="px-2 py-1.5">$150</td>
                <td className="px-2 py-1.5">2023-08-03</td>
              </tr>
          </tbody>
        </table>
      </DetailedCard>
    </div>
  );
};

export default Dashboard;