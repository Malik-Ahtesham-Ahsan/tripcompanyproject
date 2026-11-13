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

// Stylesheets are declared by each page style's Header component (Header = V1, Header2 = V2).
// Dark is the default theme. Switches to light before the page paints if the visitor chose light.
const themeScript =
  'try{var t=localStorage.getItem("tv-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}';

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Script src="/assets/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
