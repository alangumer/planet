/** @type {import('next').NextConfig} */
const withTranspile = require("next-transpile-modules")(["ol", "rlayers"]);
module.exports = withTranspile({
  experimental: { esmExternals: "loose", reactStrictMode: true },
});

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
