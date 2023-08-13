import React from 'react';

const SummaryCard = ({ title, cost = 0 }) => {
  return (
    <div class="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-300">
        <div>
          <h2 class="text-lg font-semibold text-slate-900">
            {title}
          </h2>
          <p class="text-3xl font-bold text-slate-900">
            ${cost.toLocaleString()}
          </p>
        </div>
        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
    </div>
  );
};

export default SummaryCard;