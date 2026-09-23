import type { NextConfig } from "next";

/**
 * Vanity paths, so a link can be given out as jaishnav.dev/github rather
 * than the full profile URL.
 *
 * These are 307s, not 308s. A permanent redirect is cached by browsers
 * indefinitely and cannot be called back once someone has followed it, and
 * these point at third-party handles that can change. Temporary costs
 * nothing here and stays reversible.
 *
 * Note these are served by the Node runtime, so they work on Vercel but
 * would not survive a switch to `output: "export"`.
 */
const profiles: { path: string; url: string }[] = [
  { path: "/linkedin", url: "https://www.linkedin.com/in/jaishnav-p/" },
  { path: "/github", url: "https://github.com/CyberJalagam/" },
  { path: "/instagram", url: "https://instagram.com/yoimj._" },
];

const nextConfig: NextConfig = {
  redirects() {
    return Promise.resolve(
      profiles.map(({ path, url }) => ({
        source: path,
        destination: url,
        permanent: false,
      })),
    );
  },
};

export default nextConfig;
