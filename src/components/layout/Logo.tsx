import React from 'react';
import { Mountain } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Mountain className="text-primary-500 mr-2" size={28} />
      <span className="font-heading font-bold text-xl">
        <span className="text-foreground">Vietnam</span>
        <span className="text-primary-500">ADV</span>
      </span>
    </div>
  );
};