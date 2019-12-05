import { writable } from "svelte/store";

function createValues() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    updateValue: (field, value = "") =>
      update(n => {
        return { ...n, [field]: value };
      }),
    reset: () => set({})
  };
}

export const values = createValues();
