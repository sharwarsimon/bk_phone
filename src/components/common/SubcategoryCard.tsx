import React from 'react';
import { Subcategory } from '../../types.js';
import { DynamicIcon } from './DynamicIcon.js';

interface SubcategoryCardProps {
  subcategory: Subcategory;
  categorySlug?: string;
  onClick: () => void;
}

export const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ subcategory, onClick }) => {
  return (
    <div
      id={`subcat-card-${subcategory.slug}`}
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-orange-400/80 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95 text-center min-h-[96px] sm:min-h-[110px]"
    >
      {/* Icon Container */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center mb-2 transition-all duration-200 shadow-xs">
        <DynamicIcon name={subcategory.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      {/* Bengali Title */}
      <span className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-orange-600 leading-tight transition-colors line-clamp-1">
        {subcategory.name}
      </span>

      {/* Optional English Subtitle */}
      {subcategory.name_en && (
        <span className="text-[10px] sm:text-[11px] text-gray-400 leading-none mt-0.5 hidden sm:block truncate max-w-full">
          {subcategory.name_en}
        </span>
      )}
    </div>
  );
};
