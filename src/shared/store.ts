import { create } from 'zustand';
import type { UIStore } from './types';

export const useUIStore = create<UIStore>(set => ({
  sidebarOpen: false,
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
