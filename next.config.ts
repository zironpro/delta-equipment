import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	typedRoutes: true,

	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		qualities: [100, 85, 75, 90],
		minimumCacheTTL: 60,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},

	experimental: {
		serverActions: {
			bodySizeLimit: "2mb",
		},
		// Enable filesystem caching for `next dev`
		turbopackFileSystemCacheForDev: true,
		// Enable filesystem caching for `next build`
		turbopackFileSystemCacheForBuild: true,
	},

	typescript: {
		ignoreBuildErrors: true,
	},

	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

export default nextConfig;
