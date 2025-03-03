// src/stores/mediaQueryStore.js
import { writable } from 'svelte/store';

/**
 * Creates a store that reflects the state of a media query.
 * @param {string} query - The media query string.
 * @returns {object} - A Svelte store with the current match state.
 */
export function useMediaQuery(query: string) {
  const { subscribe, set } = writable(false);

  if (typeof globalThis === 'undefined') {
    return { subscribe };
  } else {
    const mediaQueryList = globalThis.matchMedia(query);

    const updateMatch = () => set(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', updateMatch);
    updateMatch(); // Set the initial value

    return {
      subscribe,
      destroy: () => mediaQueryList.removeEventListener('change', updateMatch),
    };
  }
}
