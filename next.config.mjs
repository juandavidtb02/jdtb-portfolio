/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/jdtb-portfolio",
  assetPrefix: "/jdtb-portfolio/",
  trailingSlash: true,
  distDir: "out",
  // Configuración adicional para GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: "/jdtb-portfolio",
  },
};

export default nextConfig;
