import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/techelle-technical-documentation/',
  title: 'Afyra Technical Documentation',
  description: 'Technical documentation for the Afyra crop residue sourcing platform',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'image/png', href: '/afyra-favicon.png' }]],
  themeConfig: {
    logo: { light: '/afyra-logo.png', dark: '/afyra-logo-cream.png', alt: 'Afyra' },
    siteTitle: false,
    nav: [
      { text: 'Start Here', link: '/start-here/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'AI', link: '/ai/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Platform', link: '/platform/' },
      { text: 'Security', link: '/security/' },
      { text: 'Developer Guide', link: '/developer-guide/' },
      { text: 'Reference', link: '/reference/' },
    ],
    sidebar: [
      { text: 'Start Here', items: [
        { text: 'Overview', link: '/start-here/' },
        { text: 'Documentation Guide', link: '/start-here/documentation-guide' },
      ] },
      { text: 'Architecture', items: [
        { text: 'Overview', link: '/architecture/' },
        { text: 'System Context', link: '/architecture/system-context' },
      ] },
      { text: 'Backend', items: [{ text: 'Overview', link: '/backend/' }] },
      { text: 'AI', items: [{ text: 'Overview', link: '/ai/' }] },
      { text: 'Frontend', items: [{ text: 'Overview', link: '/frontend/' }] },
      { text: 'Platform', items: [{ text: 'Overview', link: '/platform/' }] },
      { text: 'Security', items: [{ text: 'Overview', link: '/security/' }] },
      { text: 'Developer Guide', items: [
        { text: 'Overview', link: '/developer-guide/' },
        { text: 'Setup', link: '/developer-guide/setup' },
      ] },
      { text: 'Reference', items: [{ text: 'Overview', link: '/reference/' }] },
    ],
    search: { provider: 'local' },
  },
})