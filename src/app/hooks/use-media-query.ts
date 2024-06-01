"use client";

import { useState, useEffect } from "react";

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (event: any) => setMatches(event.matches);

    // Set the initial state
    setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
