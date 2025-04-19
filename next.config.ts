import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "export",
	basePath: "/create-website-with-bolt",
	images: { unoptimized: true },
};

export default nextConfig;
