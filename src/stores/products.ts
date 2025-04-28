import {create} from 'zustand';

interface ProductsStore {
  products: number;
  increaseProducts: () => void;
  decreaseProducts: () => void;
  removeAllProducts: () => void;
  updateProducts: (newProducts: number) => void;
}

export const useStoreProducts = create<ProductsStore>(set => ({
  products: 1,
  increaseProducts: () => set(state => ({products: state.products + 1})),
  decreaseProducts: () =>
    set(state => ({
      products: state.products > 1 ? state.products - 1 : 1,
    })),
  removeAllProducts: () => set({products: 1}),
  updateProducts: newProducts =>
    set({products: newProducts < 1 ? 1 : newProducts}),
}));
