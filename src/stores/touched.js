import { writable } from "svelte/store";

function createTouched() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    updateTouched: (field, value = true) =>
      update(n => {
        return { ...n, [field]: value };
      }),
    reset: () => set({})
  };
}

export const touched = createTouched();
