'use client';
import { useEffect, useRef, useState } from 'react';

interface AnimeInstance {
    play: () => void;
    pause: () => void;
    restart: () => void;
    seek: (time: number) => void;
    [key: string]: any;
}

interface AnimeParams {
    targets: any;
    [key: string]: any;
}

export function useAnime() {
    const [isReady, setIsReady] = useState(false);
    const animeRef = useRef<any>(null);

    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
            // Function to check if anime is loaded
            const checkAnimeLoaded = () => {
                if ((window as any).anime) {
                    animeRef.current = (window as any).anime;
                    setIsReady(true);
                } else {
                    // If not loaded yet, try again in a bit
                    setTimeout(checkAnimeLoaded, 100);
                }
            };

            checkAnimeLoaded();
        }
    }, []);

    const animate = (params: AnimeParams): AnimeInstance | null => {
        if (!isReady || !animeRef.current) return null;
        return animeRef.current(params);
    };

    return { animate, isReady };
}
