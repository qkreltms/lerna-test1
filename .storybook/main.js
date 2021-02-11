const path = require("path");

module.exports = {
  stories: [
    "../**/stories/**/*.stories.mdx",
    "../**/stories/**/*.stories.@(js|jsx|ts|tsx|scss)",
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
};
