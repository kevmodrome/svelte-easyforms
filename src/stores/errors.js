import { writable } from "svelte/store";

function createErrors() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    updateError: (field, value = "") =>
      update(n => {
        return { ...n, [field]: value };
      }),
    reset: () => set({})
  };
}

export const errors = createErrors();
