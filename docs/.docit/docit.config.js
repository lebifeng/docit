const config = {
  title: "Docit",
  publicPath: "https://phshy0607.github.io/docit/",
  sidebars: [
    { title: "Get Started", path: "/index" },
    {
      title: "Usage",
      children: [
        {
          title: "Syntax",
          path: "/usage/Syntax",
        },
        {
          title: "Sidebars",
          path: "/usage/sidebar",
        },
        { title: "Static Resources", path: "/usage/static-resources" },
      ],
    },
    {
      title: "Config File",
      path: "/Configs",
    },
    { title: "FAQ", path: "/FAQ" },
  ],
};
export default config;
