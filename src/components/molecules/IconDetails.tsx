import React from 'react';
import GetX from '../../animation/GetX';
interface iconDetailsProps {
  icon: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  isCircle?: boolean;
  iconColor?: string;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

const IconDetails: React.FC<iconDetailsProps> = ({
  icon: Icon,
  title,
  description = 'Default description here',
  isCircle = true,
  iconColor = 'text-blue-500',
  bgColor = 'bg-blue-100',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'p-4 text-sm w-38',
    md: 'p-6 text-base w-64',
    lg: 'p-8 text-lg w-80',
  }[size];

  const shapeClass = isCircle ? 'rounded-full' : 'rounded-lg';

  return (
    <GetX direction='left'>
    <div className={`bg-white dark:bg-dark-secondary rounded-xl shadow-md ${sizeClasses} flex flex-col items-center text-center`}>
      <div className={`${bgColor} ${shapeClass} p-4 mb-4 flex items-center justify-center`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      {title && <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">{title}</h3>}
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
    </GetX>
  );
};

export default IconDetails;