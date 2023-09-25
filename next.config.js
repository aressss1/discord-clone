/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    webpack: (config) => {
      config.externals.push({
        "utf-8-validate": "commonjs utf-8-validate",
        bufferutil: "commonjs bufferutil",
      });

      return config;
    },
    domains: ["uploadthing.com", "utfs.io"],
  },
};

module.exports = nextConfig;
