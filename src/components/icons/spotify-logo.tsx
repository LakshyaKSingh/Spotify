import * as React from "react"
import type { SVGProps } from "react"

export const SpotifyLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        height="25" // Fixed height as per original Spotify
        width="auto" // Auto width to maintain aspect ratio
        aria-hidden="true"
        viewBox="0 0 167.5 50" // Adjusted viewBox to match typical logo aspect ratio
        fill="currentColor" // Use currentColor to inherit color
        xmlns="http://www.w3.org/2000/svg"
        {...props} // Spread other props like className
    >
        <title>Spotify Logo</title>
        {/* This is a placeholder representation. Replace with the actual Spotify logo SVG path data */}
        <circle cx="25" cy="25" r="24" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M45,15 C50,10 60,10 65,15 S 75,30 70,35 C65,40 55,40 50,35 S 40,20 45,15 Z" fill="currentColor"/>
        <text x="80" y="35" fontFamily="'Circular Spotify Tx T', 'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="30" fontWeight="bold">Spotify</text>
        {/* Note: The above is a generic representation and NOT the actual Spotify logo paths.
             For an exact clone, the actual vector data is required. */}
    </svg>
)
