import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Animal } from '@/lib/data';

interface AppState {
  favorites: string[];
  recentlyViewed: Animal[];
  theme: 'light' | 'dark';
  toggleFavorite: (id: string) => void;
  addRecentlyViewed: (animal: Animal) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      favorites: [],
      recentlyViewed: [],
      theme: 'light',
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),
      addRecentlyViewed: (animal) =>
        set((state) => {
          const filtered = state.recentlyViewed.filter((a) => a.id !== animal.id);
          return { recentlyViewed: [animal, ...filtered].slice(0, 10) }; // Keep last 10
        }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    { name: 'encyclopedia-storage' }
  )
);