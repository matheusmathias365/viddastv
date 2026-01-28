import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="w-full bg-white h-16 flex items-center px-6 border-b-4 border-viddas-accent shadow-sm z-30 relative justify-between flex-shrink-0">
      <div className="flex items-center h-full max-w-[70%]">
         {/* Official Logo Image */}
         <img 
            src="https://i.postimg.cc/XvhtVDxn/logo-oficial-1024x236-png.png" 
            alt="Clínica Viddas" 
            className="h-10 w-auto object-contain"
         />
      </div>
      
      {/* Decorative lines (Horizontal/Row) */}
      <div className="flex items-center space-x-2 flex-shrink-0 opacity-80">
        <div className="h-1.5 w-10 bg-viddas-blue rounded-full opacity-30"></div>
        <div className="h-1.5 w-6 bg-viddas-blue rounded-full opacity-60"></div>
        <div className="h-1.5 w-20 bg-viddas-accent rounded-full shadow-sm"></div>
      </div>
    </div>
  );
};