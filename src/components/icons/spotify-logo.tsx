import * as React from "react"
import type { SVGProps } from "react"

// Updated Spotify Icon SVG Path (more accurate representation)
export const SpotifyLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        height="24" // Adjusted default height
        width="auto" // Maintain aspect ratio
        aria-hidden="true"
        viewBox="0 0 1134 340" // Spotify icon's approximate viewBox
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <title>Spotify icon</title>
        <path d="M8 171c0 92 76 168 168 168s168-76 168-168S268 3 176 3 8 79 8 171zm230 78c-39-24-89-30-147-17-14 3-19-11-8-19 65-21 122-17 168 14 13 9 0 25-13 22zm13-38c-45-28-114-36-167-20-17 5-23-14-10-22 63-26 139-28 191 19 15 14 2 31-14 23zm5-44C268 90 334 89 391 108c18 6 27-16 11-25C346 61 273 59 207 81c-20 7-25 30-6 31z" />
        {/* Note: This path is a simplified representation. For exact match, official assets are needed. */}
    </svg>
)

// Keep the full logo as well, maybe for footer or other places?
export const SpotifyFullLogo = (props: SVGProps<SVGSVGElement>) => (
     <svg
        role="img"
        height="40" // Default height for full logo
        width="auto" // Auto width to maintain aspect ratio
        aria-hidden="true"
        viewBox="0 0 167 50" // Keep original viewBox
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <title>Spotify Logo</title>
        {/* Combining the icon and text might require more complex SVG structure or separate elements */}
        {/* Placeholder representation */}
         <path fill="currentColor" d="M83.96 16.87C50.42 16.87 23.02 44.2 23.02 77.68c0 33.5 27.4 60.8 60.94 60.8 33.5 0 60.94-27.3 60.94-60.8 0-33.48-27.44-60.8-60.94-60.8zm31.8 88.43c-1.96 3.04-6.2 4.03-9.2 2.08-24.66-15.06-55.47-18.48-91.72-10.17-3.6.84-7.2-.9-8-4.5-.8-3.6.9-7.2 4.5-8.02 39.8-9.15 74.16-5.2 102.3 11.74 2.97 1.98 3.97 6.2 2.1 9.17zm8.8-30.7c-2.46 3.84-7.8 5.07-11.6 2.6-27.5-16.5-70.9-21.6-100.5-11.8-4.36 1.4-8.9-.94-10.3-5.3-.93-3.6 1.4-7.4 5.3-8.8 34.6-11.2 83.5-5.3 116.3 13.6 3.77 2.4 4.97 7.8 2.8 11.7zm1.1-31.86c-33.3-19.8-88.6-20.7-120.6-11.4-5.2 1.5-10.6-1.1-12.1-6.3-1.5-5.2 1.1-10.6 6.3-12.1 37.2-10.4 98.6-9.2 138.1 12.7 4.6 2.6 6.1 8.5 3.5 13.1-2.1 4.1-7.7 5.6-12.2 3z"></path>
        {/* Simplified Text Representation */}
        {/* <text x="80" y="35" fontFamily="'Circular Spotify Tx T', 'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="30" fontWeight="bold">Spotify</text> */}
    </svg>
)
