import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
