import { create } from 'zustand';
const useThemeStore = create((set) => ({
  // Estado inicial en modo oscuro activo
  background: true, // true = modo oscuro, false = claro
  color: true,      // true = texto claro (modo oscuro), false texto oscuro (modo claro)
  // Método para alternar ambos a la vez
  toggleTheme: () =>
    set((state) => ({
      background: !state.background,
      color: !state.color,
    })),
}));
export default useThemeStore;