import { writable } from "svelte/store";

function createTouched() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    updateTouched: field =>
      update(n => {
        return { ...n, [field]: true };
      }),
    reset: () => set({})
  };
}

export const touched = createTouched();
