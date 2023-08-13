import React from 'react';

const DetailedCard = ({ title, children }) => {
  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-300">
      <div className="p-4">
          <h2 className="text-lg font-semibold text-slate-900">
            {title}
          </h2>
      </div>
      <div className="p-4">
          {children}
      </div>
    </div>
  );
};

export default DetailedCard;