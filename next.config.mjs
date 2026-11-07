/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  // `npm run build` writes a fully static site into ./out that works on any host
  // (Hostinger, Cloudflare Pages, Netlify, Vercel). Pages are saved as /page-name.html,
  // matching the site's links and canonical URLs.
  ...(isDev
    ? {
        // In `npm run dev`, let the same /page-name.html links open the pages.
        async rewrites() {
          return [
            { source: "/index.html", destination: "/" },
            { source: "/:slug.html", destination: "/:slug" },
          ];
        },
      }
    : { output: "export" }),
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
