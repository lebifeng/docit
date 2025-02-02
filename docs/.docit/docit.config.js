import { defineConfig } from "../../src/node/index";

const config = defineConfig({
  title: "Docit",
  publicPath: "https://phshy0607.github.io/docit/",
  socials: {
    Github: "https://github.com/phshy0607/docit",
  },
  sidebars: [
    {
      title: "Get Started",
      children: [
        {
          title: "Introduction",
          path: "/get-started/introduction",
        },
      ],
    },
    {
      title: "Document",
      children: [
        {
          title: "MDX",
          path: "/document/MDX",
        },
        {
          title: "Live Block",
          path: "/document/live-block",
        },
        {
          title: "API Generation",
          path: "/document/api-generation",
        },
        {
          title: "Front Matter",
          path: "/document/front-matter",
        },
      ],
    },
    {
      title: "Explaination",
      children: [
        {
          title: "Routes",
          path: "/explaination/routes",
        },
        {
          title: "Title",
          path: "/explaination/title",
        },
      ],
    },
    {
      title: "Configure",
      children: [
        {
          title: "Config File",
          path: "/configure/config-file",
        },
        {
          title: "Sidebar",
          path: "/configure/sidebar",
        },
        {
          title: "Provider",
          path: "/configure/provider",
        },
        {
          title: "Static Resources",
          path: "/configure/static-resources",
        },
        {
          title: "Socials",
          path: "/configure/socials",
        },
      ],
    },
    { title: "Troubleshooting", path: "/troubleshooting" },
  ],
});
export default config;
