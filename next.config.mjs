<<<<<<< HEAD
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

=======
<<<<<<<< HEAD:next.config.js
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
========
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
>>>>>>> 86e1ab788eb32e2642983d6b4c12b7204b940f27
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
<<<<<<< HEAD

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
=======
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
>>>>>>>> 86e1ab788eb32e2642983d6b4c12b7204b940f27:next.config.mjs
>>>>>>> 86e1ab788eb32e2642983d6b4c12b7204b940f27
