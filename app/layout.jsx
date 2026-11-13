import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.travelvista.uk"),
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png" }],
    apple: "/assets/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d3a7a",
};

// Dark is the default theme. Switches to light before the page paints if the visitor chose light.
const themeScript =
  'try{var t=localStorage.getItem("tv-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}';

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=IBM+Plex+Mono:wght@500&family=Source+Sans+3:wght@400;600;700&display=swap"
        />
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body>
        {children}
        <Script src="/assets/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
