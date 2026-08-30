import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthProvider, useAuth } from './context/AuthContext.js';
import { DataProvider, useData } from './context/DataContext.js';
import { Header } from './components/common/Header.js';
import { Footer } from './components/common/Footer.js';

// Public Pages
import { HomePage } from './pages/HomePage.js';
import { NewsPage } from './pages/NewsPage.js';
import { NumbersPage } from './pages/NumbersPage.js';
import { ServiceDetailPage } from './pages/ServiceDetailPage.js';
import { RestaurantMenuPage } from './pages/RestaurantMenuPage.js';
import { RestaurantsPage } from './pages/RestaurantsPage.js';
import { HandymanPage } from './pages/HandymanPage.js';
import { UpozilaInfoPage } from './pages/UpozilaInfoPage.js';
import { EducationPage } from './pages/EducationPage.js';
import { EmergencyNumbersPage } from './pages/EmergencyNumbersPage.js';
import { ShopPage } from './pages/ShopPage.js';
import { AccountPage } from './pages/AccountPage.js';
import { CategoryPage } from './pages/CategoryPage.js';
import { SubcategoryPage } from './pages/SubcategoryPage.js';
import { ListingDetailPage } from './pages/ListingDetailPage.js';
import { SearchPage } from './pages/SearchPage.js';
import { LoginPage } from './pages/LoginPage.js';
import { RegisterPage } from './pages/RegisterPage.js';
import { ProfilePage } from './pages/ProfilePage.js';
import { ChatPage } from './pages/ChatPage.js';

// Admin Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage.js';
import { AdminLayout } from './pages/admin/AdminLayout.js';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage.js';
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage.js';
import { AdminSubcategoriesPage } from './pages/admin/AdminSubcategoriesPage.js';
import { AdminListingsPage } from './pages/admin/AdminListingsPage.js';
import { AdminListingFormPage } from './pages/admin/AdminListingFormPage.js';
import { AdminUsersPage } from './pages/admin/AdminUsersPage.js';
import { AdminPostsPage } from './pages/admin/AdminPostsPage.js';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage.js';

import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const { toasts, removeToast } = useData();
  const [currentPath, setCurrentPath] = useState<string>(
    (window.location.pathname + window.location.search) || '/'
  );

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname + window.location.search) || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract query params if any
  const urlParams = new URLSearchParams(window.location.search);
  const searchQ = urlParams.get('q') || '';
  const convId = urlParams.get('conv') || '';

  // Render Routes
  const renderRoute = () => {
    const path = currentPath;

    // Admin Routes
    if (path.startsWith('/adm')) {
      if (path === '/adm/login') {
        return <AdminLoginPage navigate={navigate} />;
      }

      // Check admin auth
      if (!authLoading && !isAdmin) {
        return <AdminLoginPage navigate={navigate} />;
      }

      return (
        <AdminLayout currentPath={path} navigate={navigate}>
          {path === '/adm' && <AdminDashboardPage navigate={navigate} />}
          {path === '/adm/categories' && <AdminCategoriesPage />}
          {path === '/adm/subcategories' && <AdminSubcategoriesPage />}
          {path === '/adm/listings' && <AdminListingsPage navigate={navigate} />}
          {path === '/adm/listings/add' && <AdminListingFormPage navigate={navigate} />}
          {path.startsWith('/adm/listings/edit/') && (
            <AdminListingFormPage id={path.split('/adm/listings/edit/')[1]} navigate={navigate} />
          )}
          {path === '/adm/users' && <AdminUsersPage />}
          {path === '/adm/posts' && <AdminPostsPage />}
          {path === '/adm/settings' && <AdminSettingsPage />}
        </AdminLayout>
      );
    }

    // Public Routes
    let pageComponent = null;
    const basePath = path.split('?')[0];

    if (basePath === '/') {
      pageComponent = <HomePage navigate={navigate} />;
    } else if (basePath === '/news' || basePath.startsWith('/news/')) {
      pageComponent = <NewsPage navigate={navigate} />;
    } else if (basePath.startsWith('/numbers/')) {
      const serviceId = basePath.replace('/numbers/', '');
      pageComponent = <ServiceDetailPage serviceId={serviceId} navigate={navigate} />;
    } else if (basePath === '/numbers' || basePath === '/emergency-numbers' || basePath === '/emergency') {
      const sParam = urlParams.get('service');
      if (sParam) {
        pageComponent = <ServiceDetailPage serviceId={sParam} navigate={navigate} />;
      } else {
        pageComponent = <NumbersPage navigate={navigate} />;
      }
    } else if (basePath === '/restaurants' || (basePath === '/restaurant' && !urlParams.get('id'))) {
      pageComponent = <RestaurantsPage navigate={navigate} />;
    } else if (basePath.startsWith('/restaurant/') || basePath.startsWith('/restaurants/') || basePath === '/restaurant-menu' || (basePath === '/restaurant' && urlParams.get('id'))) {
      const resId = basePath.startsWith('/restaurant/') 
        ? basePath.replace('/restaurant/', '') 
        : basePath.startsWith('/restaurants/') 
        ? basePath.replace('/restaurants/', '') 
        : (urlParams.get('id') || undefined);
      pageComponent = <RestaurantMenuPage restaurantId={resId} navigate={navigate} />;
    } else if (basePath === '/handyman') {
      pageComponent = <HandymanPage navigate={navigate} />;
    } else if (basePath === '/upozila-info') {
      pageComponent = <UpozilaInfoPage navigate={navigate} currentPath={path} />;
    } else if (basePath === '/education' || basePath.startsWith('/education')) {
      pageComponent = <EducationPage navigate={navigate} currentPath={path} />;
    } else if (basePath === '/shop') {
      pageComponent = <ShopPage navigate={navigate} />;
    } else if (basePath === '/account') {
      pageComponent = <AccountPage navigate={navigate} />;
    } else if (basePath === '/add-listing') {
      if (isAdmin) {
        navigate('/adm/listings/add');
        return null;
      }
      pageComponent = <AccountPage navigate={navigate} />;
    } else if (basePath === '/search') {
      pageComponent = <SearchPage initialQuery={searchQ} navigate={navigate} />;
    } else if (basePath === '/login') {
      pageComponent = <LoginPage navigate={navigate} />;
    } else if (basePath === '/register') {
      pageComponent = <RegisterPage navigate={navigate} />;
    } else if (basePath === '/profile') {
      pageComponent = <ProfilePage navigate={navigate} />;
    } else if (basePath === '/chat') {
      pageComponent = <ChatPage initialConversationId={convId} navigate={navigate} />;
    } else if (basePath.startsWith('/listing/')) {
      const slug = basePath.replace('/listing/', '');
      pageComponent = <ListingDetailPage slug={slug} navigate={navigate} />;
    } else if (basePath.startsWith('/category/')) {
      const parts = basePath.replace('/category/', '').split('/');
      if (parts.length === 1) {
        pageComponent = <CategoryPage categorySlug={parts[0]} navigate={navigate} />;
      } else {
        pageComponent = (
          <SubcategoryPage
            categorySlug={parts[0]}
            subcategorySlug={parts[1]}
            navigate={navigate}
          />
        );
      }
    } else {
      pageComponent = <HomePage navigate={navigate} />;
    }

    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#F0F2F5] pb-4">
        <Header currentPath={path} navigate={navigate} />
        <main className="flex-1 min-w-0 max-w-5xl mx-auto w-full px-2 sm:px-4 py-3">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={basePath}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="w-full"
            >
              {pageComponent}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer navigate={navigate} />
      </div>
    );
  };

  return (
    <>
      {renderRoute()}

      {/* Global Toast Notification System */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-3.5 rounded-xl shadow-lg border flex items-center justify-between gap-3 text-xs font-bold text-white transition-all animate-in slide-in-from-bottom-3 duration-200 ${
              toast.type === 'success'
                ? 'bg-emerald-600 border-emerald-500'
                : toast.type === 'error'
                ? 'bg-red-600 border-red-500'
                : 'bg-[#1877F2] border-blue-400'
            }`}
          >
            <div className="flex items-center gap-2">
              {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />}
              {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-red-200 shrink-0" />}
              {toast.type === 'info' && <Info className="w-4 h-4 text-blue-200 shrink-0" />}
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/80 hover:text-white p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
