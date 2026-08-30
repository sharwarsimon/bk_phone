import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  MapPin, 
  Phone, 
  BadgeCheck, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Copy, 
  Check, 
  Filter, 
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import { STATIC_HANDYMEN, Handyman } from '../data/staticData.js';
import { useData } from '../context/DataContext.js';

interface HandymanPageProps {
  navigate: (path: string) => void;
}

export const HandymanPage: React.FC<HandymanPageProps> = ({ navigate }) => {
  const { showToast } = useData();
  const [selectedService, setSelectedService] = useState('সব');
  const [selectedUnion, setSelectedUnion] = useState('সব');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const servicesList = [
    'সব',
    'ইলেকট্রিশিয়ান',
    'প্লাম্বার ও স্যানিটারি',
    'এসি ও ফ্রিজ টেকনিশিয়ান',
    'রং মিস্ত্রী',
    'কাঠমিস্ত্রী ও ফার্নিচার',
    'রাজমিস্ত্রী ও কনস্ট্রাকশন',
    'গ্রিল ও ওয়েল্ডিং',
    'সিসিটিভি ও সিকিউরিটি',
  ];

  const unionsList = [
    'সব',
    'কধুরখীল',
    'পশ্চিম গোমদণ্ডী',
    'শাকপুরা',
    'সারোয়াতলী',
    'পোপাদিয়া',
    'চরণদ্বীপ',
    'শ্রীপুর-খরণদ্বীপ',
    'আমুচিয়া',
    'কড়লডেঙ্গা',
    'বোয়ালখালী পৌরসভা',
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopyPhone = (phone: string, name: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    showToast(`${name}-এর মোবাইল (${phone}) কপি হয়েছে!`, 'success');
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const filteredHandymen = STATIC_HANDYMEN.filter((item) => {
    const matchesService = selectedService === 'সব' || item.serviceCategory === selectedService;
    const matchesUnion = selectedUnion === 'সব' || item.union.includes(selectedUnion) || selectedUnion.includes(item.union);
    const matchesSearch = !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesService && matchesUnion && matchesSearch;
  });

  return (
    <div className="space-y-4 pb-12">
      {/* Page Header Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xs border border-[#E4E6EB] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#050505]">বোয়ালখালী হ্যান্ডিম্যান ডিরেক্টরি</h1>
              <p className="text-xs text-[#65676B]">অভিজ্ঞ ইলেকট্রিশিয়ান, প্লাম্বার, এসি টেকনিশিয়ান ও মিস্ত্রী সেবা</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-blue-50 text-[#1877F2] text-xs font-semibold px-3 py-1.5 rounded-xl border border-blue-200">
            <ShieldCheck className="w-4 h-4" />
            <span>ভেরিফাইড স্থানীয় টেকনিশিয়ান</span>
          </div>
        </div>

        {/* Horizontal Scrollable Service Category Pills */}
        <div className="space-y-2 pt-2 border-t border-[#E4E6EB]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#65676B] uppercase tracking-wider">সার্ভিস ক্যাটাগরি নির্বাচন করুন:</span>
            <span className="text-[11px] text-[#1877F2] font-semibold">ডানে স্ক্রল করুন →</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {servicesList.map((svc) => {
              const isSelected = selectedService === svc;
              const count = svc === 'সব' 
                ? STATIC_HANDYMEN.length 
                : STATIC_HANDYMEN.filter(h => h.serviceCategory === svc).length;

              return (
                <button
                  key={svc}
                  onClick={() => setSelectedService(svc)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                    isSelected
                      ? 'bg-[#1877F2] text-white border-[#1877F2] shadow-xs'
                      : 'bg-[#F0F2F5] text-[#050505] border-transparent hover:bg-[#E4E6EB]'
                  }`}
                >
                  <span>{svc === 'সব' ? 'সকল সার্ভিস' : svc}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white text-gray-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Union Filter & Search Input Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {/* Union Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#65676B] shrink-0">ইউনিয়ন:</span>
            <select
              value={selectedUnion}
              onChange={(e) => setSelectedUnion(e.target.value)}
              className="w-full py-2 px-3 bg-[#F0F2F5] border border-[#CED0D4] rounded-xl text-xs font-semibold text-[#050505] focus:bg-white focus:outline-[#1877F2] cursor-pointer"
            >
              {unionsList.map((un) => (
                <option key={un} value={un}>
                  {un === 'সব' ? 'সকল ইউনিয়ন ও পৌরসভা (সব)' : un}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="নাম, দক্ষতা বা ঠিকানা দিয়ে খুঁজুন..."
              className="w-full pl-9 pr-3 py-2 bg-[#F0F2F5] border border-[#CED0D4] rounded-xl text-xs focus:bg-white focus:outline-[#1877F2]"
            />
          </div>
        </div>
      </div>

      {/* Handymen Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHandymen.length === 0 ? (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl p-6 border border-[#E4E6EB] text-[#65676B] space-y-2">
            <Wrench className="w-10 h-10 mx-auto text-gray-300" />
            <p className="font-bold text-sm text-[#050505]">কোনো টেকনিশিয়ান পাওয়া যায়নি</p>
            <p className="text-xs">ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        ) : (
          filteredHandymen.map((hm) => {
            const isExpanded = expandedId === hm.id;
            return (
              <div
                key={hm.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 shadow-2xs ${
                  isExpanded ? 'border-[#1877F2] ring-1 ring-blue-100 shadow-md' : 'border-[#E4E6EB] hover:border-gray-300'
                }`}
              >
                {/* Compact Primary View (Always Visible) */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    {/* Handyman Photo */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-[#E4E6EB] shrink-0">
                      <img
                        src={hm.photo}
                        alt={hm.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {hm.verified && (
                        <div 
                          className="absolute bottom-0 right-0 bg-[#1877F2] text-white p-0.5 rounded-tl-md"
                          title="ভেরিফাইড টেকনিশিয়ান"
                        >
                          <BadgeCheck className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    {/* Basic Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="font-bold text-sm sm:text-base text-[#050505] truncate flex items-center gap-1.5">
                          <span>{hm.name}</span>
                          {hm.verified ? (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded-md shrink-0">
                              <BadgeCheck className="w-3 h-3" />
                              ভেরিফাইড
                            </span>
                          ) : (
                            <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.2 rounded-md shrink-0">
                              তালিকাভুক্ত
                            </span>
                          )}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md shrink-0">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{hm.rating}</span>
                        </div>
                      </div>

                      {/* Service Title */}
                      <p className="text-xs font-semibold text-[#1877F2] mt-0.5">
                        {hm.serviceCategory} • {hm.serviceTitle}
                      </p>

                      {/* Union & Ward Short */}
                      <div className="flex items-center gap-2 text-[11px] text-[#65676B] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                          {hm.union} ({hm.wardNo})
                        </span>
                        <span>•</span>
                        <span>অভিজ্ঞতা: {hm.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Action Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={`tel:${hm.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>সরাসরি কল ({hm.phone})</span>
                    </a>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(hm.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1 cursor-pointer ${
                        isExpanded
                          ? 'bg-blue-50 border-blue-300 text-[#1877F2]'
                          : 'bg-[#F0F2F5] border-[#CED0D4] text-[#050505] hover:bg-[#E4E6EB]'
                      }`}
                    >
                      <span>{isExpanded ? 'সংক্ষেপ করুন' : 'বিস্তারিত'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Information (Toggled on click) */}
                {isExpanded && (
                  <div className="p-4 bg-slate-50 border-t border-[#E4E6EB] space-y-3 animate-in fade-in duration-150">
                    {/* Work Details / Description */}
                    <div>
                      <h4 className="text-xs font-bold text-[#050505] mb-1">কাজের বিস্তারিত:</h4>
                      <p className="text-xs text-[#65676B] leading-relaxed bg-white p-2.5 rounded-xl border border-[#E4E6EB]">
                        {hm.description}
                      </p>
                    </div>

                    {/* Skills Tags */}
                    <div>
                      <h4 className="text-[11px] font-bold text-[#050505] mb-1">দক্ষতাসমূহ:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {hm.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-[#CED0D4] text-[#050505] text-[10px] font-semibold px-2 py-0.5 rounded-md"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Address & Availability Info Table */}
                    <div className="bg-white p-3 rounded-xl border border-[#E4E6EB] space-y-2 text-xs">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[#65676B] shrink-0 font-medium">ইউনিয়ন ও ওয়ার্ড:</span>
                        <span className="font-bold text-[#050505] text-right">{hm.union} ইউনিয়ন, {hm.wardNo}</span>
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[#65676B] shrink-0 font-medium">বাড়ি/ঠিকানা:</span>
                        <span className="font-semibold text-[#050505] text-right">{hm.address}</span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#65676B] shrink-0 font-medium">কাজের সময়:</span>
                        <span className="font-semibold text-emerald-700 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {hm.availableHours}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1 border-t border-gray-100">
                        <span className="text-[#65676B] shrink-0 font-medium">প্রধান মোবাইল:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#1877F2]">{hm.phone}</span>
                          <button
                            onClick={() => handleCopyPhone(hm.phone, hm.name)}
                            className="p-1 text-gray-500 hover:text-black cursor-pointer"
                            title="কপি করুন"
                          >
                            {copiedPhone === hm.phone ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {hm.altPhone && (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[#65676B] shrink-0 font-medium">বিকল্প মোবাইল:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-semibold text-[#050505]">{hm.altPhone}</span>
                            <button
                              onClick={() => handleCopyPhone(hm.altPhone!, hm.name)}
                              className="p-1 text-gray-500 hover:text-black cursor-pointer"
                              title="কপি করুন"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
