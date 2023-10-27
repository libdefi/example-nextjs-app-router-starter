try {
	var url = new URL(process.env.TEST_API_URL);
} catch {}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["zaiste.saleor.cloud"],
	},
};

module.exports = nextConfig;
