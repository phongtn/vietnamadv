import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className, 
  children,
  hoverEffect = true
}) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden', 
        hoverEffect && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={cn('p-4 border-b', className)}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={cn('p-4', className)}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={cn('p-4 border-t', className)}>
      {children}
    </div>
  );
};

export default Card;