import { create } from 'zustand';
const useThemeStore = create((set) => ({

  background: true, 
  color: true,     
  
  toggleTheme: () =>
    set((state) => ({
      background: !state.background,
      color: !state.color,
    })),
}));
export default useThemeStore;