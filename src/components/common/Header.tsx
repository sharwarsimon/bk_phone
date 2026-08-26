import React, { useState } from 'react';
import { 
  Home, 
  Compass, 
  Search, 
  MessageSquare, 
  User as UserIcon, 
  Menu, 
  X, 
  ShieldCheck, 
  LogOut, 
  PhoneCall, 
  PlusCircle, 
  Settings,
  Bell
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.js';
import { useData } from '../../context/DataContext.js';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const { user, isAdmin, logout } = useAuth();
  const { settings } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [noticeDismissed, setNoticeDismissed] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Emergency Ticker if present */}
      {settings?.emergency_notice && !noticeDismissed && (
        <div id="emergency-banner" className="bg-amber-500 text-amber-950 px-4 py-1 text-xs sm:text-sm font-medium flex items-center justify-between">
          <div className="flex items-center gap-2 max-w-5xl mx-auto flex-1 overflow-hidden">
            <span className="bg-amber-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
              জরুরি
            </span>
            <span className="truncate">{settings.emergency_notice}</span>
          </div>
          <button 
            id="dismiss-emergency-btn"
            onClick={() => setNoticeDismissed(true)} 
            className="text-amber-950 hover:text-white ml-2 text-base leading-none"
            aria-label="Dismiss notice"
          >
            ×
          </button>
        </div>
      )}

      {/* Main Orange Header */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left: Mobile Menu Button & Brand */}
          <div className="flex items-center gap-3">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1.5 text-white/90 hover:text-white md:hidden rounded-lg hover:bg-orange-700/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div 
              id="header-brand-logo"
              onClick={() => handleNav('/')}
              className="cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-orange-600 flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                ব
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white drop-shadow-xs">
                  Boalkhali<span className="text-orange-200">.com</span>
                </span>
                <span className="text-[10px] sm:text-xs text-orange-100 font-medium tracking-wide">
                  বোয়ালখালী তথ্য ও সেবা
                </span>
              </div>
            </div>
          </div>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            <button
              id="nav-home-btn"
              onClick={() => handleNav('/')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                isActive('/') && currentPath === '/'
                  ? 'bg-white text-orange-600 shadow-xs'
                  : 'text-white hover:bg-orange-500/50'
              }`}
            >
              <Home className="w-4 h-4" />
              হোম
            </button>

            <button
              id="nav-search-btn"
              onClick={() => handleNav('/search')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                isActive('/search')
                  ? 'bg-white text-orange-600 shadow-xs'
                  : 'text-white hover:bg-orange-500/50'
              }`}
            >
              <Search className="w-4 h-4" />
              খুঁজুন
            </button>

            <button
              id="nav-chat-btn"
              onClick={() => handleNav('/chat')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                isActive('/chat')
                  ? 'bg-white text-orange-600 shadow-xs'
                  : 'text-white hover:bg-orange-500/50'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              চ্যাট
            </button>

            {/* Admin or User Profile */}
            {user ? (
              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-orange-500/60">
                {isAdmin && (
                  <button
                    id="nav-admin-panel-btn"
                    onClick={() => handleNav('/adm')}
                    className="px-2.5 py-1.5 rounded-lg bg-orange-900/80 text-orange-100 hover:bg-orange-950 text-xs font-bold flex items-center gap-1 transition-all border border-orange-400/30"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    অ্যাডমিন প্যানেল
                  </button>
                )}

                <button
                  id="nav-profile-btn"
                  onClick={() => handleNav('/profile')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors ${
                    isActive('/profile')
                      ? 'bg-white text-orange-600 shadow-xs'
                      : 'text-white hover:bg-orange-500/50'
                  }`}
                >
                  <img
                    src={user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.name)}`}
                    alt={user.name}
                    className="w-5 h-5 rounded-full object-cover border border-white/80"
                    referrerPolicy="no-referrer"
                  />
                  <span className="max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 ml-2">
                <button
                  id="nav-login-btn"
                  onClick={() => handleNav('/login')}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-white hover:bg-orange-500/50 transition-colors"
                >
                  লগইন
                </button>
                <button
                  id="nav-register-btn"
                  onClick={() => handleNav('/register')}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-bold bg-white text-orange-600 hover:bg-orange-50 shadow-xs transition-colors"
                >
                  রেজিস্টার
                </button>
              </div>
            )}
          </nav>

          {/* Right Mobile Actions */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              id="mobile-header-search-btn"
              onClick={() => handleNav('/search')}
              className="p-2 text-white/90 hover:text-white rounded-lg hover:bg-orange-700/50 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="mobile-header-chat-btn"
              onClick={() => handleNav('/chat')}
              className="p-2 text-white/90 hover:text-white rounded-lg hover:bg-orange-700/50 transition-colors relative"
              aria-label="Chat"
            >
              <MessageSquare className="w-5 h-5" />
            </button>

            <button
              id="mobile-header-profile-btn"
              onClick={() => handleNav(user ? '/profile' : '/login')}
              className="p-1.5 text-white/90 hover:text-white rounded-lg hover:bg-orange-700/50 transition-colors"
              aria-label="Profile"
            >
              {user ? (
                <img
                  src={user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.name)}`}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover border border-white/80"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <UserIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl py-3 px-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            <button
              id="mobile-drawer-home-btn"
              onClick={() => handleNav('/')}
              className={`px-3 py-2.5 rounded-xl text-left text-sm font-semibold flex items-center gap-3 transition-colors ${
                isActive('/') && currentPath === '/' ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="w-5 h-5 text-orange-600" />
              হোম পেজ
            </button>

            <button
              id="mobile-drawer-search-btn"
              onClick={() => handleNav('/search')}
              className={`px-3 py-2.5 rounded-xl text-left text-sm font-semibold flex items-center gap-3 transition-colors ${
                isActive('/search') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Search className="w-5 h-5 text-orange-600" />
              সার্চ ও অনুসন্ধান
            </button>

            <button
              id="mobile-drawer-chat-btn"
              onClick={() => handleNav('/chat')}
              className={`px-3 py-2.5 rounded-xl text-left text-sm font-semibold flex items-center gap-3 transition-colors ${
                isActive('/chat') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5 text-orange-600" />
              মেসেজ ও লাইভ চ্যাট
            </button>

            {user && (
              <button
                id="mobile-drawer-profile-btn"
                onClick={() => handleNav('/profile')}
                className={`px-3 py-2.5 rounded-xl text-left text-sm font-semibold flex items-center gap-3 transition-colors ${
                  isActive('/profile') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <UserIcon className="w-5 h-5 text-orange-600" />
                আমার প্রোফাইল ও বুকমার্ক
              </button>
            )}

            {isAdmin && (
              <button
                id="mobile-drawer-admin-btn"
                onClick={() => handleNav('/adm')}
                className="px-3 py-2.5 rounded-xl text-left text-sm font-bold bg-orange-600 text-white flex items-center gap-3 mt-1 shadow-xs"
              >
                <ShieldCheck className="w-5 h-5 text-amber-300" />
                অ্যাডমিন ড্যাশবোর্ড (/adm)
              </button>
            )}

            <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between">
              {user ? (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.name)}`}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border border-orange-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-gray-900">{user.name}</div>
                      <div className="text-[11px] text-gray-500">{user.phone || user.email}</div>
                    </div>
                  </div>
                  <button
                    id="mobile-drawer-logout-btn"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-semibold flex items-center gap-1"
                  >
                    <LogOut className="w-4 h-4" />
                    লগআউট
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <button
                    id="mobile-drawer-login-btn"
                    onClick={() => handleNav('/login')}
                    className="py-2 text-center text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200"
                  >
                    লগইন
                  </button>
                  <button
                    id="mobile-drawer-reg-btn"
                    onClick={() => handleNav('/register')}
                    className="py-2 text-center text-sm font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700"
                  >
                    রেজিস্টার
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
