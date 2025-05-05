'use client';

import { useState, useEffect } from 'react';

export default function Greeting() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const getCurrentGreeting = () => {
            const currentHour = new Date().getHours();
            if (currentHour < 12) {
                return 'Good morning';
            } else if (currentHour < 18) {
                return 'Good afternoon';
            } else {
                return 'Good evening';
            }
        };
        setGreeting(getCurrentGreeting());

        // Optional: Update greeting if the component stays mounted across time boundaries
        const interval = setInterval(() => {
             setGreeting(getCurrentGreeting());
        }, 60 * 60 * 1000); // Check every hour

        return () => clearInterval(interval);
    }, []);


    // Render null on the server or before hydration to avoid mismatch
    if (!greeting) {
        return <h1 className="text-3xl font-bold text-foreground mb-8">&nbsp;</h1>; // Placeholder to prevent layout shift
    }


    return (
        <h1 className="text-3xl font-bold text-foreground mb-8">{greeting}</h1>
    );
}
