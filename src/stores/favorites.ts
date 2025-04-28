import {create} from 'zustand';

export const useStoreBears = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  decreasePopulation: () =>
    set(state => ({
      bears: state.bears > 0 ? state.bears - 1 : 0,
    })),
  removeAllBears: () => set({bears: 0}),
  updateBears: newBears => set({bears: newBears}),
}));
