import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Category, Subcategory } from '../types.js';
import { api } from '../services/api.js';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface DataContextType {
  categories: Category[];
  subcategories: Subcategory[];
  settings: any;
  loading: boolean;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = `toast_${Date.now()}_${Math.random()}`;
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const refreshData = useCallback(async () => {
    try {
      const [cats, subs, sets] = await Promise.all([
        api.getCategories(),
        api.getSubcategories(),
        api.getSettings(),
      ]);
      setCategories(cats);
      setSubcategories(subs);
      setSettings(sets);
    } catch (err) {
      console.error('Error fetching global portal data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return (
    <DataContext.Provider
      value={{
        categories,
        subcategories,
        settings,
        loading,
        toasts,
        showToast,
        removeToast,
        refreshData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
