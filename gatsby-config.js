const { readdirSync } = require("fs");
const path = require("path");

function filesOf(dir) {
  return readdirSync(path.join("content", dir)).map((file) =>
    path.join(dir, file.split(".").shift())
  );
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        algoliaApiKey: "Hmmmm",
        algoliaIndexName: "ibl-docs",
        siteName: "Infinity Docs",
        description: "Official Documentation for the Infinity Bot List Website and API",
        githubRepo: "ChillCordDev/API-Docs",
        baseUrl: "https://docs.botlist.site",
        sidebarCategories: {
        // null: ["getting-started"],
           api: filesOf("api"),
        },
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
