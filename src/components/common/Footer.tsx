import React from 'react';
import { PhoneCall, ShieldAlert, HeartPulse, Bus, MapPin, Mail } from 'lucide-react';
import { useData } from '../../context/DataContext.js';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { settings } = useData();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 border-t border-gray-800">
      {/* Quick Emergency Strip */}
      <div className="bg-orange-600 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-200 shrink-0" />
            <span className="font-semibold text-sm">
              জরুরি মুহূর্তে সহায়তা পেতে সরাসরি বোয়ালখালী থানায় কল করুন
            </span>
          </div>
          <a
            id="emergency-footer-call-btn"
            href="tel:+8801713373656"
            className="inline-flex items-center gap-2 bg-white text-orange-700 px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm hover:bg-orange-50 shadow-sm transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            +৮৮০ ১৭১৩-৩৭৩৬৫৬
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black text-base">
                ব
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Boalkhali<span className="text-orange-500">.com</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
              {settings?.about_text ||
                'Boalkhali.com হলো চট্টগ্রামের বোয়ালখালী উপজেলার স্থানীয় নাগরিক তথ্য, জরুরি সেবা, স্বাস্থ্য, পরিবহন, শিক্ষা ও ব্যবসা ডিরেক্টরির সম্পূর্ণ ডিজিটাল প্ল্যাটফর্ম।'}
            </p>
            <div className="text-xs text-gray-400 flex flex-col gap-1 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                {settings?.address || 'বোয়ালখালী, চট্টগ্রাম, বাংলাদেশ'}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                {settings?.contact_email || 'info@boalkhali.com'}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-3">
              জনপ্রিয় সেবা
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => navigate('/category/emergency')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-orange-500" />
                  জরুরি সেবা সমূহ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/health')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <HeartPulse className="w-3.5 h-3.5 text-orange-500" />
                  স্বাস্থ্য ও ডাক্তার
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/transport')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <Bus className="w-3.5 h-3.5 text-orange-500" />
                  পরিবহন ও যোগাযোগ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/general-info')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  উপজেলার তথ্য ও দর্শনীয় স্থান
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-3">
              অ্যাডমিন ও একাউন্ট
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => navigate('/login')} className="hover:text-orange-400 transition-colors">
                  ব্যবহারকারী লগইন
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/register')} className="hover:text-orange-400 transition-colors">
                  নতুন অ্যাকাউন্ট রেজিস্টার
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/adm/login')} className="hover:text-orange-400 transition-colors text-orange-400 font-semibold">
                  অ্যাডমিন লগইন (/adm)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Boalkhali.com | সর্বস্বত্ব সংরক্ষিত
          </div>
          <div className="flex items-center gap-4">
            <span>বোয়ালখালী, চট্টগ্রাম</span>
            <span>•</span>
            <span>ভার্সন ২.০</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
