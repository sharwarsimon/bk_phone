import React from 'react';
import { 
  X, 
  Home, 
  Newspaper, 
  PhoneCall, 
  Wrench, 
  ShoppingBag, 
  Landmark, 
  MapPin, 
  Award, 
  ShieldAlert, 
  User, 
  Share2, 
  ChevronRight,
  Sparkles,
  Info,
  UtensilsCrossed
} from 'lucide-react';
import { useData } from '../../context/DataContext.js';

interface SideDrawerMenuProps {
  navigate: (path: string) => void;
  currentPath: string;
}

export const SideDrawerMenu: React.FC<SideDrawerMenuProps> = ({ navigate, currentPath }) => {
  const { isMenuOpen, setIsMenuOpen, showToast } = useData();

  if (!isMenuOpen) return null;

  const handleNav = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Boalkhali.com - বোয়ালখালী তথ্য ও সেবা',
        text: 'বোয়ালখালী উপজেলার ডিজিটাল তথ্য ভাণ্ডার, জরুরি সেবা ও শপ।',
        url: window.location.origin,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.origin);
      showToast('অ্যাপ লিংক কপি হয়েছে!', 'success');
    }
  };

  const menuSections = [
    {
      title: 'প্রধান মেনু',
      items: [
        { label: 'হোম (Home)', icon: Home, path: '/', color: 'text-[#1877F2] bg-blue-50' },
        { label: 'রেস্টুরেন্ট ও খাবার (Restaurants)', icon: UtensilsCrossed, path: '/restaurants', color: 'text-orange-600 bg-orange-50' },
        { label: 'সংবাদ (News)', icon: Newspaper, path: '/news', color: 'text-indigo-600 bg-indigo-50' },
        { label: 'নাম্বারসমূহ (Numbers)', icon: PhoneCall, path: '/numbers', color: 'text-red-600 bg-red-50' },
        { label: 'হ্যান্ডিম্যান সেবা (Handyman)', icon: Wrench, path: '/handyman', color: 'text-amber-600 bg-amber-50' },
        { label: 'বোয়ালখালী শপ (Shop)', icon: ShoppingBag, path: '/shop', color: 'text-emerald-600 bg-emerald-50' },
      ],
    },
    {
      title: 'বোয়ালখালী তথ্য হাব',
      items: [
        { label: 'উপজেলা পরিচিতি (Info)', icon: Landmark, path: '/upozila-info', color: 'text-sky-600 bg-sky-50' },
        { label: 'ইউনিয়ন পরিষদসমূহ (Unions)', icon: MapPin, path: '/upozila-info?tab=unions', color: 'text-teal-600 bg-teal-50' },
        { label: 'কৃতি ব্যক্তিত্ব (Famous Persons)', icon: Award, path: '/upozila-info?tab=famous', color: 'text-purple-600 bg-purple-50' },
        { label: 'দর্শনীয় স্থান (Tourist Spots)', icon: Sparkles, path: '/upozila-info?tab=tourist', color: 'text-orange-600 bg-orange-50' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsMenuOpen(false)}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 border-b border-[#E4E6EB] flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-black text-base shadow-2xs">
                ব
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-[#1877F2] block leading-none">
                  boalkhali<span className="text-[#050505]">.com</span>
                </span>
                <span className="text-[10px] text-[#65676B]">বোয়ালখালী তথ্য ও সেবা</span>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-gray-200 text-[#65676B] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-4">
            {menuSections.map((section, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="text-[11px] font-bold text-[#65676B] uppercase tracking-wider px-2">
                  {section.title}
                </h4>
                <div className="space-y-1">
                  {section.items.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = currentPath === item.path;
                    return (
                      <button
                        key={i}
                        onClick={() => handleNav(item.path)}
                        className={`w-full p-2.5 rounded-xl text-left text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-blue-50 text-[#1877F2] font-bold'
                            : 'text-[#050505] hover:bg-[#F0F2F5]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quick Emergency Banner in Drawer */}
            <div 
              onClick={() => handleNav('/numbers')}
              className="bg-red-50 border border-red-200 rounded-xl p-3 cursor-pointer hover:bg-red-100/70 transition-colors"
            >
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs">
                <ShieldAlert className="w-4 h-4" />
                <span>জরুরি হেল্পলাইন ৯৯৯ ও অ্যাম্বুলেন্স</span>
              </div>
              <p className="text-[11px] text-red-600 mt-1">
                পুলিশ, ফায়ার সার্ভিস, বিদ্যুৎ অভিযোগ ও রক্ত সহায়তা
              </p>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-3.5 border-t border-[#E4E6EB] bg-slate-50 space-y-2">
            <button
              onClick={handleShare}
              className="w-full py-2 bg-white border border-[#CED0D4] hover:bg-gray-100 rounded-xl text-xs font-bold text-[#050505] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>বন্ধুদের সাথে শেয়ার করুন</span>
            </button>
            <div className="text-center text-[10px] text-[#65676B]">
              Boalkhali.com • বোয়ালখালী, চট্টগ্রাম
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
