import React, { useState } from 'react';
import { 
  Newspaper, 
  ChevronRight, 
  Calendar, 
  Landmark, 
  MapPin, 
  Award, 
  Sparkles, 
  PhoneCall, 
  Shield, 
  Flame, 
  Ambulance, 
  Droplet, 
  Zap,
  ArrowRight, 
  Phone, 
  Copy, 
  Check,
  GraduationCap,
  BookOpen,
  School,
  Building2,
  Layers,
  UtensilsCrossed,
  Star,
  Clock,
  Utensils
} from 'lucide-react';
import { 
  STATIC_STORIES, 
  STATIC_NEWS, 
  STATIC_EMERGENCY_GROUPS,
  STATIC_RESTAURANTS,
  Restaurant
} from '../data/staticData.js';
import { useData } from '../context/DataContext.js';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { showToast } = useData();
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [selectedEmergencyCategory, setSelectedEmergencyCategory] = useState<string>('police');

  const handleCopy = (phone: string, label: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    showToast(`${label} (${phone}) কপি করা হয়েছে!`, 'success');
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const currentEmergencyGroup = STATIC_EMERGENCY_GROUPS.find(
    (g) => g.id === selectedEmergencyCategory
  ) || STATIC_EMERGENCY_GROUPS[0];

  return (
    <div className="space-y-4 pb-12">
      {/* 1. TOP STORIES SECTION */}
      <section className="bg-white rounded-2xl p-3 sm:p-4 border border-[#E4E6EB] shadow-2xs space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm sm:text-base font-bold text-[#050505]">
              বোয়ালখালী বিশেষ আয়োজন
            </h2>
          </div>
          <span className="text-[11px] text-[#65676B] font-medium">
            গুরুত্বপূর্ণ আপডেট
          </span>
        </div>

        {/* Stories Horizontal Slider */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 px-1">
          {STATIC_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => navigate(story.linkAction)}
              className="relative w-44 sm:w-52 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xs group cursor-pointer shrink-0 border border-[#E4E6EB] hover:border-[#1877F2] transition-all hover:scale-[1.02]"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="bg-[#1877F2] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    {story.tag}
                  </span>
                  {story.badge && (
                    <span className="bg-red-600 text-[9px] font-bold px-2 py-0.5 rounded-full">
                      {story.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-bold text-xs sm:text-sm leading-snug line-clamp-1 group-hover:text-blue-200">
                    {story.title}
                  </h3>
                  <p className="text-[10px] text-gray-200 line-clamp-1">
                    {story.subtitle}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-blue-300 pt-0.5">
                    <span>{story.linkText}</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. CARD 1: বোয়ালখালী তথ্য হাব কার্ড (সব আইটেম এক লাইনে horizontally scrollable) */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E4E6EB] shadow-2xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1877F2] flex items-center justify-center font-bold">
              <Landmark className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#050505]">উপজেলা তথ্য হাব</h2>
              <p className="text-[11px] text-[#65676B]">প্রশাসন, ইউনিয়ন, প্রাথমিক ও মাধ্যমিক বিদ্যালয়, কলেজ, মাদ্রাসা ও দর্শনীয় স্থান</p>
            </div>
          </div>
          <div className="text-[11px] font-semibold text-[#1877F2] flex items-center gap-1">
            <span>ডানে স্ক্রল করুন</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Horizontally Scrollable Action Items (All in one line) */}
        <div className="flex items-stretch gap-3 overflow-x-auto no-scrollbar py-1 px-1">
          {/* 1. উপজেলা info */}
          <button
            onClick={() => navigate('/upozila-info?tab=info')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 border border-sky-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-sky-950 block">উপজেলা info</span>
              <span className="text-[10px] text-sky-700">পরিচিতি ও প্রশাসন</span>
            </div>
            <span className="text-[10px] font-semibold bg-white text-sky-800 px-2 py-0.5 rounded-full border border-sky-100">
              বিস্তারিত
            </span>
          </button>

          {/* 2. ইউনিয়ন সমুহ */}
          <button
            onClick={() => navigate('/upozila-info?tab=unions')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-teal-50 to-emerald-50 hover:from-teal-100 hover:to-emerald-100 border border-teal-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-teal-950 block">ইউনিয়ন সমুহ</span>
              <span className="text-[10px] text-teal-700">১০টি ইউপি বিস্তারিত</span>
            </div>
            <span className="text-[10px] font-semibold bg-white text-teal-800 px-2 py-0.5 rounded-full border border-teal-100">
              ১০টি ইউনিয়ন
            </span>
          </button>

          {/* 3. প্রাথমিক বিদ্যালয় */}
          <button
            onClick={() => navigate('/education?type=primary')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border border-emerald-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <School className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-emerald-950 block">প্রাথমিক বিদ্যালয়</span>
              <span className="text-[10px] text-emerald-700">সরকারি ও মডেল স্কুল</span>
            </div>
            <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
              ৮২টি প্রতিষ্ঠান
            </span>
          </button>

          {/* 4. মাধ্যমিক বিদ্যালয় */}
          <button
            onClick={() => navigate('/education?type=secondary')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 border border-indigo-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-indigo-950 block">মাধ্যমিক বিদ্যালয়</span>
              <span className="text-[10px] text-indigo-700">উচ্চ বিদ্যালয় ও বালিকা</span>
            </div>
            <span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full">
              ২৮টি প্রতিষ্ঠান
            </span>
          </button>

          {/* 5. কলেজ */}
          <button
            onClick={() => navigate('/education?type=college')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-purple-50 to-fuchsia-50 hover:from-purple-100 hover:to-fuchsia-100 border border-purple-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-purple-950 block">কলেজ</span>
              <span className="text-[10px] text-purple-700">সরকারি ও ডিগ্রি কলেজ</span>
            </div>
            <span className="text-[10px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-full">
              ৬টি কলেজ
            </span>
          </button>

          {/* 6. মাদ্রাসা */}
          <button
            onClick={() => navigate('/education?type=madrasa')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 border border-teal-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-teal-950 block">মাদ্রাসা</span>
              <span className="text-[10px] text-teal-700">ফাজিল, আলিম ও দাখিল</span>
            </div>
            <span className="text-[10px] font-bold bg-teal-600 text-white px-2 py-0.5 rounded-full">
              ১৪টি মাদ্রাসা
            </span>
          </button>

          {/* 7. কৃতি ব্যক্তিত্ব */}
          <button
            onClick={() => navigate('/upozila-info?tab=famous')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 border border-amber-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-amber-950 block">কৃতি ব্যক্তিত্ব</span>
              <span className="text-[10px] text-amber-700">সূর্য সেন ও মনীষীগণ</span>
            </div>
            <span className="text-[10px] font-semibold bg-white text-amber-800 px-2 py-0.5 rounded-full border border-amber-100">
              ১২+ জন মনীষী
            </span>
          </button>

          {/* 8. দর্শনীয় স্থান */}
          <button
            onClick={() => navigate('/upozila-info?tab=tourist')}
            className="w-36 sm:w-40 p-3 bg-gradient-to-br from-orange-50 to-rose-50 hover:from-orange-100 hover:to-rose-100 border border-orange-200 rounded-2xl flex flex-col items-center justify-between text-center gap-2 group transition-all cursor-pointer shadow-2xs shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-orange-950 block">দর্শনীয় স্থান</span>
              <span className="text-[10px] text-orange-700">মেধস মুনির আশ্রম ও নদী</span>
            </div>
            <span className="text-[10px] font-semibold bg-white text-orange-800 px-2 py-0.5 rounded-full border border-orange-100">
              ৮+ টি আকর্ষণ
            </span>
          </button>
        </div>
      </section>

      {/* 3. NEW: রেস্টুরেন্ট ও ক্যাফে হরিজন্টাল স্লাইডার (RESTAURANTS SLIDER) */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E4E6EB] shadow-2xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <UtensilsCrossed className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#050505]">
                বোয়ালখালীর জনপ্রিয় রেস্টুরেন্ট ও ক্যাফে
              </h2>
              <p className="text-[11px] text-[#65676B]">
                মেনু ও খাবারের ছবি-দাম দেখতে যেকোনো রেস্টুরেন্টে ক্লিক করুন
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/restaurants')}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer shrink-0 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded-lg transition-colors"
          >
            <span>সব দেখুন</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Horizontal Slider for Restaurants */}
        <div className="flex items-stretch gap-3.5 overflow-x-auto no-scrollbar py-1 px-1">
          {STATIC_RESTAURANTS.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              className="w-64 sm:w-72 bg-white rounded-2xl border border-[#E4E6EB] hover:border-orange-400 shadow-2xs hover:shadow-md transition-all cursor-pointer group shrink-0 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-between p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{restaurant.rating}</span>
                      </span>
                      <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {restaurant.cuisine}
                      </span>
                    </div>

                    <span className="text-[10px] text-orange-200 font-semibold truncate">
                      📍 {restaurant.location}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-3 space-y-1.5">
                  <h3 className="font-bold text-sm text-[#050505] group-hover:text-orange-600 transition-colors leading-snug line-clamp-1">
                    {restaurant.name}
                  </h3>

                  <p className="text-[11px] text-[#65676B] line-clamp-1">
                    {restaurant.tagline}
                  </p>

                  <div className="pt-1.5 flex items-center justify-between text-[11px] text-[#65676B] border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{restaurant.openHours}</span>
                    </span>
                    <span className="font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                      {restaurant.menu.length} টি খাবার
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action strip */}
              <div className="px-3 py-2 bg-orange-50/60 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-orange-700 group-hover:bg-orange-100/70 transition-colors">
                <span>খাবারের মেনু দেখুন</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CARD 2: জরুরী সেবা কার্ড (পুলিশ, ফায়ার সার্ভিস, বিদ্যুৎ, এম্বুলেন্স, ব্লাড ডোনারস) */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E4E6EB] shadow-2xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <PhoneCall className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#050505]">জরুরী সেবা কার্ড</h2>
              <p className="text-[11px] text-[#65676B]">পুলিশ, ফায়ার সার্ভিস, বিদ্যুৎ, এম্বুলেন্স ও ব্লাড ডোনারস</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/numbers')}
            className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>সব দেখুন</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs: পুলিশ, ফায়ার সার্ভিস, বিদ্যুৎ, এম্বুলেন্স, ব্লাড ডোনারস */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'police', label: 'পুলিশ', icon: Shield, color: 'text-blue-600' },
            { id: 'fire-service', label: 'ফায়ার সার্ভিস', icon: Flame, color: 'text-red-600' },
            { id: 'electricity', label: 'বিদ্যুৎ', icon: Zap, color: 'text-amber-600' },
            { id: 'ambulance', label: 'এম্বুলেন্স', icon: Ambulance, color: 'text-rose-600' },
            { id: 'blood-donors', label: 'ব্লাড ডোনারস', icon: Droplet, color: 'text-red-700' },
          ].map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedEmergencyCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedEmergencyCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#1877F2] text-white shadow-2xs'
                    : 'bg-[#F0F2F5] text-[#65676B] hover:bg-[#E4E6EB] hover:text-[#050505]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : cat.color}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Multi-Phone Entries */}
        <div className="bg-[#F0F2F5] rounded-xl p-3 sm:p-4 border border-[#E4E6EB] space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-[#CED0D4]">
            <h3 className="text-xs font-bold text-[#050505]">{currentEmergencyGroup.title}</h3>
            <span className="text-[10px] text-[#65676B] font-semibold">সরাসরি কল বা কপি করুন</span>
          </div>

          <div className="space-y-2">
            {currentEmergencyGroup.numbers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-2.5 rounded-xl border border-[#E4E6EB] flex items-center justify-between gap-2 shadow-2xs"
              >
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#050505] truncate">{item.label}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono text-xs font-bold text-[#1877F2]">{item.phone}</span>
                    {item.note && (
                      <span className="text-[10px] text-[#65676B] truncate">({item.note})</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(item.phone, item.label)}
                    className="p-1.5 rounded-lg border border-[#CED0D4] bg-[#F0F2F5] hover:bg-gray-200 text-gray-700 cursor-pointer"
                    title="কপি করুন"
                  >
                    {copiedPhone === item.phone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <a
                    href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                  >
                    <Phone className="w-3 h-3 fill-current" />
                    <span>কল</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "সংবাদ" SECTION (With 'আরও দেখুন >' button and News Cards) */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E4E6EB] shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Newspaper className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#050505]">সংবাদ ও সর্বশেষ খবর</h2>
              <p className="text-[11px] text-[#65676B]">বোয়ালখালীর উন্নয়ন ও সাম্প্রতিক ঘটনাবলী</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/news')}
            className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1 cursor-pointer bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200"
          >
            <span>আরও দেখুন</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {STATIC_NEWS.slice(0, 4).map((news) => (
            <div
              key={news.id}
              className="p-3 bg-[#F0F2F5] hover:bg-white rounded-2xl border border-[#E4E6EB] hover:border-[#1877F2] shadow-2xs hover:shadow-sm transition-all flex gap-3 group cursor-pointer"
              onClick={() => navigate('/news')}
            >
              {/* Thumbnail */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1 left-1 bg-[#1877F2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-md">
                  {news.category}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-[#65676B]">
                    <span className="flex items-center gap-0.5">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-[#050505] line-clamp-2 leading-snug group-hover:text-[#1877F2] transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-[11px] text-[#65676B] line-clamp-1">
                    {news.excerpt}
                  </p>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs font-bold text-[#1877F2]">
                  <span>আরো পড়ুন &gt;&gt;</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
