
import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'warm';
}

const PageSection = ({ children, className = '', background = 'white' }: PageSectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gradient-to-br from-[#48dbfb]/8 to-[#58e6ff]/8',
    warm: 'bg-gradient-to-b from-[#e8f9fd]/40 to-[#d8f5fc]/20'
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
