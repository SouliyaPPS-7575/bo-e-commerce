import { create } from 'zustand';

interface ImageStore {
  selectImage: string | null;
  setSelectImage: (image: string | null) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  selectImage: null,
  setSelectImage: (image) => set({ selectImage: image }),
}));
