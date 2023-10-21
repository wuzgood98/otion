import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  replace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  open: () => set({ isOpen: true, url: undefined }),
  close: () => set({ isOpen: false, url: undefined }),
  replace: (url: string) => set({ isOpen: true, url }),
}));
