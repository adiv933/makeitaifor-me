/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you want to use MDXComponents from a custom file
    // provider you can pass the path to that file here:  
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
