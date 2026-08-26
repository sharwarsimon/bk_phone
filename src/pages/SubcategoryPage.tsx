import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Search, MapPin, CheckCircle2, ChevronRight, PlusCircle } from 'lucide-react';
import { api } from '../services/api.js';
import { Subcategory, Category, Listing } from '../types.js';
import { ListingCard } from '../components/common/ListingCard.js';
import { DynamicIcon } from '../components/common/DynamicIcon.js';

interface SubcategoryPageProps {
  categorySlug: string;
  subcategorySlug: string;
  navigate: (path: string) => void;
}

export const SubcategoryPage: React.FC<SubcategoryPageProps> = ({
  categorySlug,
  subcategorySlug,
  navigate,
}) => {
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const fetchSubcategoryData = async () => {
      setLoading(true);
      try {
        const data = await api.getSubcategory(subcategorySlug, categorySlug);
        setSubcategory(data);
        setCategory(data.category || null);
        setListings(data.listings || []);
      } catch (err) {
        console.error('Failed to load subcategory:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategoryData();
  }, [categorySlug, subcategorySlug]);

  const filteredListings = listings.filter((l) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase().trim();
    return (
      l.title.toLowerCase().includes(q) ||
      (l.short_description && l.short_description.toLowerCase().includes(q)) ||
      l.phone.includes(q) ||
      (l.area && l.area.toLowerCase().includes(q))
    );
  });

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        <div className="h-28 bg-orange-600 rounded-3xl animate-pulse" />
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 bg-white rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!subcategory) {
    return (
      <div className="max-w-md mx-auto my-16 text-center px-4 space-y-4">
        <h2 className="text-xl font-bold text-gray-800">উপ-বিভাগ পাওয়া যায়নি</h2>
        <p className="text-sm text-gray-500">অনুরোধকৃত বিভাগটি বর্তমানে উপলব্ধ নেই।</p>
        <button
          onClick={() => navigate(`/category/${categorySlug}`)}
          className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-bold shadow-xs hover:bg-orange-700"
        >
          ক্যাটাগরিতে ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Subcategory Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-6 px-4 shadow-sm">
        <div className="max-w-5xl mx-auto space-y-3">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-orange-100 font-medium overflow-x-auto whitespace-nowrap">
            <button onClick={() => navigate('/')} className="hover:text-white">
              হোম
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <button
              onClick={() => navigate(`/category/${categorySlug}`)}
              className="hover:text-white"
            >
              {category?.name || 'ক্যাটাগরি'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-bold">{subcategory.name}</span>
          </nav>

          <div className="flex items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-orange-600 flex items-center justify-center shadow-md shrink-0">
                <DynamicIcon name={subcategory.icon} className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {subcategory.name} তালিকা
                </h1>
                {subcategory.name_en && (
                  <span className="text-xs text-orange-100 font-medium">
                    {subcategory.name_en} List
                  </span>
                )}
              </div>
            </div>

            <button
              id="subcat-back-btn"
              onClick={() => navigate(`/category/${categorySlug}`)}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold bg-orange-800/40 text-orange-100 hover:text-white px-3 py-1.5 rounded-xl border border-orange-400/20 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              পূর্ববর্তী পাতা
            </button>
          </div>

          {subcategory.description && (
            <p className="text-xs sm:text-sm text-orange-50 max-w-xl leading-relaxed">
              {subcategory.description}
            </p>
          )}
        </div>
      </div>

      {/* Main Listing List Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 space-y-4">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              id="subcat-listing-search"
              type="text"
              placeholder={`${subcategory.name} এর মধ্যে নাম, এলাকা বা ফোন দিয়ে খুঁজুন...`}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-orange-500 focus:bg-white transition-all"
            />
          </div>

          <div className="text-xs font-semibold text-gray-500 shrink-0">
            মোট লিস্টিং: <span className="text-orange-600 font-bold">{filteredListings.length}</span> টি
          </div>
        </div>

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onClick={() => navigate(`/listing/${listing.slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-800">কোনো লিস্টিং খুঁজে পাওয়া যায়নি</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              এই উপ-বিভাগে এখনো কোনো তথ্য বা লিস্টিং যুক্ত করা হয়নি অথবা আপনার সার্চের সাথে মিলছে না।
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
