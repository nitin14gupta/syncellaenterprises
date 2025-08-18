'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function AnimejsScript() {
    const [loaded, setLoaded] = useState(false);

    // When the script loads, set the global anime variable
    const handleLoad = () => {
        setLoaded(true);
        console.log('Anime.js script loaded successfully');
    };

    return (
        <Script
            id="animejs-script"
            src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
            onLoad={handleLoad}
            strategy="beforeInteractive"
        />
    );
}
