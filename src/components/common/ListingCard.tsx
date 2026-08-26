import React from 'react';
import { Phone, CheckCircle2, MapPin, Eye, Star, Bookmark, ExternalLink } from 'lucide-react';
import { Listing } from '../../types.js';

interface ListingCardProps {
  listing: Listing & { 
    category_name?: string; 
    category_slug?: string; 
    subcategory_name?: string; 
    subcategory_slug?: string;
    is_bookmarked?: boolean;
  };
  onClick: () => void;
  onBookmarkToggle?: (e: React.MouseEvent) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick, onBookmarkToggle }) => {
  const isPerson = listing.display_type === 'person';

  const handleCallClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${listing.phone}`;
  };

  return (
    <div
      id={`listing-card-${listing.id}`}
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-200/80 p-3.5 sm:p-4 hover:border-orange-400/80 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Top: Image, Titles & Badges */}
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Image / Avatar */}
          <div className="relative shrink-0">
            <img
              src={listing.image || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=300&auto=format&fit=crop&q=80'}
              alt={listing.title}
              className={`w-16 h-16 sm:w-20 sm:h-20 object-cover border border-gray-100 shadow-2xs ${
                isPerson ? 'rounded-full' : 'rounded-xl'
              }`}
              referrerPolicy="no-referrer"
            />
            {listing.verified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs" title="যাচাইকৃত">
                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-1">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2">
                {listing.title}
              </h3>
              {onBookmarkToggle && (
                <button
                  id={`bookmark-btn-${listing.id}`}
                  onClick={onBookmarkToggle}
                  className="p-1 text-gray-400 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                  aria-label="Bookmark listing"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      listing.is_bookmarked ? 'fill-orange-600 text-orange-600' : ''
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Subcategory / Type Badge */}
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {listing.subcategory_name && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-orange-50 text-orange-700">
                  {listing.subcategory_name}
                </span>
              )}
              {listing.featured && (
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ফিচার্ড
                </span>
              )}
            </div>

            {/* Short Description */}
            {listing.short_description && (
              <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 leading-relaxed">
                {listing.short_description}
              </p>
            )}
          </div>
        </div>

        {/* Location & Opening Hours info */}
        <div className="mt-3 pt-2.5 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between flex-wrap gap-1">
          <div className="flex items-center gap-1 text-gray-600 truncate max-w-[200px] sm:max-w-none">
            <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span className="truncate">{listing.area ? `${listing.area}, ` : ''}{listing.union || 'বোয়ালখালী'}</span>
          </div>

          {listing.opening_hours && (
            <span className="text-[11px] text-gray-400 font-medium truncate max-w-[140px]">
              {listing.opening_hours}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Strip: Direct Call Button */}
      <div className="mt-3.5 pt-2 flex items-center justify-between gap-2">
        <div className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
          <span className="font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded-md text-[11px] sm:text-xs">
            {listing.phone}
          </span>
        </div>

        <button
          id={`call-btn-${listing.id}`}
          onClick={handleCallClick}
          className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs sm:text-sm shadow-xs transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          কল করুন
        </button>
      </div>
    </div>
  );
};
