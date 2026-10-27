import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/techelle-technical-documentation/",
  title: "Afyra",
  description: "System design and implementation reference for Afyra",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/techelle-technical-documentation/images/afyra-icon.png",
      },
    ],
    ["meta", { name: "theme-color", content: "#044a36" }],
  ],
  themeConfig: {
    logo: {
      light: "/images/afyra-logo.png",
      dark: "/images/afyra-logo-cream.png",
      alt: "Afyra",
    },
    siteTitle: "Technical documentation",
    outline: { level: [2, 3], label: "On this page" },
    sidebar: [
      { text: "Home", link: "/" },
      { text: "Features", link: "/features/" },
      {
        text: "Architecture",
        items: [
          {
            text: "System Architecture Diagram (SAD)",
            link: "/architecture/sad",
          },
          {
            text: "Secure System Architecture Diagram (SSAD)",
            link: "/architecture/ssad",
          },
          { text: "ERD & Data Models", link: "/architecture/data-models" },
        ],
      },
      {
        text: "Frontend Mobile",
        items: [
          { text: "Overview", link: "/frontend-mobile/" },
          { text: "UI Designs", link: "/frontend-mobile/ui-designs" },
        ],
      },
      {
        text: "Frontend Web",
        items: [
          { text: "Overview", link: "/frontend-web/" },
          { text: "UI Designs", link: "/frontend-web/ui-designs" },
        ],
      },
      {
        text: "Backend",
        items: [
          { text: "Overview", link: "/backend/" },
          { text: "API Documentation", link: "/backend/api-documentation" },
        ],
      },
      { text: "AI", link: "/ai/" },
      {
        text: "Design & Brand Guidelines",
        link: "/design-and-brand-guidelines/",
      },
      { text: "Security", link: "/security/" },
      { text: "QA", link: "/qa/" },
      { text: "Integrations", link: "/integrations/" },
      { text: "Code Standards", link: "/code-standards/" },
      {
        text: "Platform",
        items: [
          { text: "Overview", link: "/platform/" },
          { text: "Pooling Algorithm", link: "/platform/pooling" },
          { text: "Matching Algorithm", link: "/platform/matching" },
          { text: "Pricing Algorithm", link: "/platform/pricing" },
        ],
      },
      { text: "Developer Guide", link: "/developer-guide/" },
    ],
    search: { provider: "local", options: { detailedView: true } },
    docFooter: { prev: "Previous page", next: "Next page" },
    footer: {
      message: "Afyra technical reference",
      copyright: "Afyra Technical Documentation",
    },
  },
});
