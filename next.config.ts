import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = withPWA({
  // Your Next.js config
  reactStrictMode: true, // Example config option
});

export default nextConfig;
