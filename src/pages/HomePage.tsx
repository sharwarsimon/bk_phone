import React, { useState, useEffect } from 'react';
import { 
  Search, 
  PhoneCall, 
  ShieldAlert, 
  HeartPulse, 
  Ambulance, 
  Flame, 
  ArrowRight, 
  Sparkles,
  MapPin,
  Building,
  CheckCircle2
} from 'lucide-react';
import { useData } from '../context/DataContext.js';
import { SubcategoryCard } from '../components/common/SubcategoryCard.js';
import { ListingCard } from '../components/common/ListingCard.js';
import { DynamicIcon } from '../components/common/DynamicIcon.js';
import { api } from '../services/api.js';
import { Listing, Post } from '../types.js';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { categories, subcategories, settings, loading } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredListings, setFeaturedListings] = useState<Listing[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Load featured listings & posts
    const loadHighlights = async () => {
      try {
        const [listings, posts] = await Promise.all([
          api.getListings({ featured: true, status: 'active' }),
          api.getPosts(),
        ]);
        setFeaturedListings(listings.slice(0, 6));
        setRecentPosts(posts.slice(0, 3));
      } catch (err) {
        console.error('Error loading homepage highlights:', err);
      }
    };
    loadHighlights();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const searchExamples = [
    { label: 'পুলিশ', query: 'পুলিশ' },
    { label: 'ডাক্তার', query: 'ডাক্তার' },
    { label: 'হাসপাতাল', query: 'হাসপাতাল' },
    { label: 'অ্যাম্বুলেন্স', query: 'অ্যাম্বুলেন্স' },
    { label: 'স্কুল ও কলেজ', query: 'কলেজ' },
    { label: 'বাজার', query: 'বাজার' },
    { label: 'দর্শনীয় স্থান', query: 'দর্শনীয়' },
  ];

  // Filter categories that are active and marked for home display
  const activeCategories = categories.filter(c => c.status === 'active' && c.show_on_home);

  return (
    <div className="min-h-screen pb-12">
      {/* Welcome Hero Area */}
      <section className="bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600 text-white pt-6 pb-12 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-orange-700/60 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-orange-100 border border-orange-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            বোয়ালখালী উপজেলার ডিজিটাল তথ্য ভাণ্ডার
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-xs">
            স্বাগতম, বোয়ালখালী 👋
          </h1>

          <p className="text-sm sm:text-base text-orange-50 max-w-xl mx-auto font-medium">
            {settings?.site_subtitle_bn || 'আপনার এলাকার প্রয়োজনীয় তথ্য ও সেবা এক জায়গায়'}
          </p>

          {/* Large Search Input */}
          <div className="pt-2 max-w-2xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden p-1.5 border border-orange-200"
            >
              <div className="pl-3.5 pr-2 text-orange-600">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="home-main-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="আপনি কী খুঁজছেন? (যেমন: ডাক্তার, পুলিশ, অ্যাম্বুলেন্স, কলেজ...)"
                className="w-full py-2.5 px-2 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-hidden"
              />
              <button
                id="home-main-search-submit-btn"
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 active:scale-95 text-white px-5 sm:px-6 py-2.5 rounded-xl font-bold text-sm shadow-xs transition-all shrink-0"
              >
                খুঁজুন
              </button>
            </form>

            {/* Quick Search Example Pills */}
            <div className="flex items-center justify-center flex-wrap gap-1.5 mt-3 pt-1">
              <span className="text-xs text-orange-100/80 mr-1 hidden sm:inline">উদাহরণ:</span>
              {searchExamples.map((item, idx) => (
                <button
                  key={idx}
                  id={`search-pill-${idx}`}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(item.query)}`)}
                  className="text-xs bg-orange-700/40 hover:bg-orange-700/80 text-orange-100 hover:text-white px-2.5 py-1 rounded-lg border border-orange-400/20 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating 4 Emergency Quick Actions */}
      <section className="max-w-6xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-md border border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          <a
            id="quick-police-call"
            href="tel:+8801713373656"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-red-50 hover:bg-red-100/80 text-red-900 border border-red-100 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">বোয়ালখালী থানা</div>
              <div className="text-[11px] text-red-700 font-mono truncate">+8801713373656</div>
            </div>
          </a>

          <a
            id="quick-fire-call"
            href="tel:+8801730009999"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 text-amber-950 border border-amber-100 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">ফায়ার সার্ভিস</div>
              <div className="text-[11px] text-amber-800 font-mono truncate">+8801730009999</div>
            </div>
          </a>

          <a
            id="quick-hospital-call"
            href="tel:+8801730324789"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/80 text-blue-900 border border-blue-100 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">স্বাস্থ্য কমপ্লেক্স</div>
              <div className="text-[11px] text-blue-700 font-mono truncate">+8801730324789</div>
            </div>
          </a>

          <a
            id="quick-ambulance-call"
            href="tel:+8801817554433"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-100 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Ambulance className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">জরুরি অ্যাম্বুলেন্স</div>
              <div className="text-[11px] text-emerald-700 font-mono truncate">+8801817554433</div>
            </div>
          </a>
        </div>
      </section>

      {/* Main Dynamic Categories Grid Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 space-y-10">
        {loading ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-28 bg-white rounded-2xl animate-pulse border border-gray-100" />
            ))}
          </div>
        ) : (
          activeCategories.map((category) => {
            const categorySubcats = subcategories.filter(
              (s) => s.category_id === category.id && s.status === 'active'
            );

            return (
              <section
                key={category.id}
                id={`home-cat-section-${category.slug}`}
                className="space-y-3.5"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                      <DynamicIcon name={category.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-gray-900">
                        {category.name}
                      </h2>
                      {category.description && (
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    id={`view-all-cat-${category.slug}`}
                    onClick={() => navigate(`/category/${category.slug}`)}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 hover:underline shrink-0"
                  >
                    সব দেখুন
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 3-Column Mobile Subcategories Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3.5">
                  {categorySubcats.map((sub) => (
                    <SubcategoryCard
                      key={sub.id}
                      subcategory={sub}
                      categorySlug={category.slug}
                      onClick={() => navigate(`/category/${category.slug}/${sub.slug}`)}
                    />
                  ))}
                </div>
              </section>
            );
          })
        )}

        {/* Featured Listings Section */}
        {featuredListings.length > 0 && (
          <section className="space-y-4 pt-4">
            <div className="flex items-center justify-between border-t border-gray-200/80 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    বিশেষ লিস্টিং ও গুরুত্বপূর্ণ সেবা
                  </h2>
                  <p className="text-xs text-gray-500">বোয়ালখালীর শীর্ষ যাচাইকৃত সেবা সমূহ</p>
                </div>
              </div>

              <button
                id="view-all-featured-btn"
                onClick={() => navigate('/search')}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 hover:underline"
              >
                সকল ডিরেক্টরি
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onClick={() => navigate(`/listing/${listing.slug}`)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Community Notice & Activity Highlight */}
        {recentPosts.length > 0 && (
          <section className="space-y-3.5 pt-4">
            <div className="flex items-center justify-between border-t border-gray-200/80 pt-6">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  এলাকার খবর ও ঘোষণা 📢
                </h2>
                <p className="text-xs text-gray-500">বোয়ালখালী কমিউনিটি আপডেট</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.user_avatar}
                      alt={post.user_name}
                      className="w-8 h-8 rounded-full object-cover border border-gray-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-gray-900">{post.user_name}</div>
                      <div className="text-[10px] text-gray-400">
                        {new Date(post.created_at).toLocaleDateString('bn-BD')}
                      </div>
                    </div>
                  </div>
                  {post.title && <h4 className="text-sm font-bold text-gray-900">{post.title}</h4>}
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{post.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
