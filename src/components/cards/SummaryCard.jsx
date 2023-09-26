import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const SummaryCard = ({ title, cost }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg shadow-md">
      <div>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-slate-900">
              {title}
            </h2>
            <p className="text-2xl font-bold text-slate-900">
              ${cost.toLocaleString()}
            </p>
          </>
        )}
      </div>
      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  );
};

export default SummaryCard;
