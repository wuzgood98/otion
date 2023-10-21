import { create } from "zustand";

type SearchStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  onOpenChange: () => void;
};

export const useSearch = create<SearchStore>((set, get) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  onOpenChange: () => set({ isOpen: !get().isOpen }),
}));
