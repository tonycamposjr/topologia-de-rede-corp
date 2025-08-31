import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, icon: Icon, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-full">
      <div className="p-5">
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-6 h-6 text-blue-600" />}
          <h2 className="text-xl font-bold text-zinc-800">{title}</h2>
        </div>
      </div>
      <div className="px-6 pb-6">
        {children}
      </div>
    </div>
  );
};