import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, Eye, Share2, ArrowRight, Search, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { STATIC_NEWS, NewsArticle } from '../data/staticData.js';
import { useData } from '../context/DataContext.js';

interface NewsPageProps {
  navigate: (path: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ navigate }) => {
  const { showToast } = useData();
  const [selectedCategory, setSelectedCategory] = useState('সকল');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['সকল', 'স্থানীয় সংবাদ', 'স্বাস্থ্য ও চিকিৎসা', 'উন্নয়ন', 'ধর্ম ও সংস্কৃতি', 'পৌরসভা'];

  const filteredNews = STATIC_NEWS.filter((item) => {
    const matchesCategory = selectedCategory === 'সকল' || item.category === selectedCategory;
    const matchesQuery = !searchQuery.trim() || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleShare = (article: NewsArticle) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${article.title} - Boalkhali.com`);
      showToast('সংবাদের লিংক কপি হয়েছে!', 'success');
    }
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Page Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xs border border-[#E4E6EB]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#050505]">বোয়ালখালী সংবাদ ও আপডেট</h1>
              <p className="text-xs text-[#65676B]">উপজেলার দৈনন্দিন খবর, উন্নয়ন ও প্রশাসনিক খবরাখবর</p>
            </div>
          </div>

          {/* News Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="সংবাদ খুঁজুন..."
              className="w-full pl-9 pr-3 py-2 bg-[#F0F2F5] border border-[#CED0D4] rounded-xl text-xs focus:bg-white focus:outline-[#1877F2]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-4 border-t border-[#E4E6EB] mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1877F2] text-white shadow-2xs'
                  : 'bg-[#F0F2F5] text-[#65676B] hover:bg-[#E4E6EB] hover:text-[#050505]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNews.length === 0 ? (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl p-6 border border-[#E4E6EB] text-[#65676B] space-y-2">
            <Newspaper className="w-10 h-10 mx-auto text-gray-300" />
            <p className="font-bold text-sm text-[#050505]">কোনো সংবাদ পাওয়া যায়নি</p>
            <p className="text-xs">অন্য ক্যাটাগরি বা শব্দ দিয়ে অনুসন্ধান করুন।</p>
          </div>
        ) : (
          filteredNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E4E6EB] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1877F2] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-[#65676B]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {article.time}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setActiveArticle(article)}
                    className="font-bold text-[#050505] text-sm sm:text-base leading-snug group-hover:text-[#1877F2] cursor-pointer transition-colors"
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#65676B] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-4 py-3 bg-slate-50 border-t border-[#E4E6EB] flex items-center justify-between">
                <button
                  onClick={() => handleShare(article)}
                  className="text-xs text-[#65676B] hover:text-[#1877F2] flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>শেয়ার</span>
                </button>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-bold text-[#1877F2] hover:text-blue-700 flex items-center gap-1 cursor-pointer group-hover:underline"
                >
                  <span>আরো পড়ুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Read News Full Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 md:p-12">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative mx-auto max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E4E6EB] animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 border-b border-[#E4E6EB] flex items-center justify-between bg-slate-50">
              <span className="text-xs font-bold text-[#1877F2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-200 text-[#65676B] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh] space-y-4">
              <h2 className="text-lg sm:text-2xl font-bold text-[#050505] leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#65676B] pb-3 border-b border-[#E4E6EB]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#1877F2]" />
                  {activeArticle.date} ({activeArticle.time})
                </span>
                <span>প্রতিবেদক: <strong className="text-[#050505]">{activeArticle.author}</strong></span>
              </div>

              <div className="rounded-xl overflow-hidden h-64 sm:h-80 w-full bg-gray-100">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-xs sm:text-sm text-[#050505] leading-relaxed space-y-3 whitespace-pre-line pt-2">
                <p className="font-semibold text-[#1877F2] bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                  {activeArticle.excerpt}
                </p>
                <p>{activeArticle.content}</p>
                <p>বোয়ালখালী উপজেলার সম্মানিত নাগরিক ও পাঠকদের বস্তুনিষ্ঠ তথ্য সেবা দিতে বোয়ালখালী ডটকম সার্বক্ষণিক সচেষ্ট। যেকোনো সংবাদ বা খবরের তথ্যের জন্য আমাদের সাথে যোগাযোগ করতে পারেন।</p>
              </div>

              <div className="pt-4 border-t border-[#E4E6EB] flex items-center justify-between">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="bg-[#F0F2F5] hover:bg-[#E4E6EB] text-[#050505] font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#1877F2]" />
                  <span>সংবাদটি শেয়ার করুন</span>
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-[#1877F2] hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
