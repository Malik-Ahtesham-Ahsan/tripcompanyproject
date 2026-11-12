/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  // `npm run build` writes a fully static site into ./out that works on any host
  // (Hostinger, Cloudflare Pages, Netlify, Vercel). Pages are saved as /page-name.html and served at
  // clean addresses (/page-name) by the included .htaccess (Hostinger/Apache) or vercel.json.
  ...(isDev
    ? {
        // In `npm run dev`, old /page.html links redirect to the clean address, like on the live server.
        async redirects() {
          return [
            { source: "/index.html", destination: "/", permanent: true },
            { source: "/:slug.html", destination: "/:slug", permanent: true },
          ];
        },
      }
    : { output: "export" }),
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
