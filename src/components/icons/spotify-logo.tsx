import * as React from "react"
import type { SVGProps } from "react"

// Updated Spotify Icon SVG Path (more accurate representation)
export const SpotifyLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" width="30" height="30" fill="currentColor" {...props}>
    <path d="M256 32c123.545 0 224 100.455 224 224 0 123.545-100.455 224-224 224-123.545 0-224-100.455-224-224 0-123.545 100.455-224 224-224zM163.7 335.4c6.4 11 16.4 19.6 27.6 25.3 85.9 46.2 191.2-14.8 242.8-94.4 5.1-7.7 5.1-17.3 0-25-50.8-80.8-157.4-130.4-240.4-87.2-10.7 5.9-20.4 14.1-26.6 24.7-7.1 12.1-5.3 27.4 3.9 37.6 6.4 7.3 13.6 14 21.2 20.2 9.1 7.4 22.9 7.7 32.3.7 11.9-8.9 20.1-22.5 21.4-37.2 1.5-16.7-5.6-32.4-19.4-44.6-15.4-13.5-39.4-17.1-60.1-9.7-10.8 3.8-20 9.1-27.3 15.3-7.9 6.6-11.6 16.5-9.7 26.1 1.8 9.6 8.9 18.1 18.1 24.5 22.5 15.6 54.7 11.2 72.5-8.9 12.5-13.8 19.2-32.1 17.7-51.1-1.4-18.4-9.8-35.3-25.2-47.2-16.9-13.1-42.3-15.3-63.4-5.7-8.6 3.9-16.3 9.1-22.2 15.4-6.3 6.6-9.1 16.4-7.3 25.7 1.9 9.2 8.3 17.3 17.1 23.2 19.4 13.3 48.7 10.5 65.6-6.1 12-11.4 18.1-26.4 16.8-41.3-1.4-15.5-8.3-29.8-21-39.8-28.6-21.3-72.7-22.2-102.5-2.3-7.5 5-13.4 11.8-16.9 19.3-3.8 7.9-3.8 17.4 0 25.3 18.5 48.7 63.6 75.1 113.2 76.7 8.4.3 16.8.3 25.1 0 8.6-.3 17-.3 25.4 0 46.2-1.5 89.6-29.1 122.3-75.2 4.1-5.7 6.1-12.5 6.1-19.3 0-6.8-2-13.6-6.1-19.3z" />
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
