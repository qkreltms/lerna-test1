// style.module.* is not supported

module.exports = {
  stories: [
    "../**/stories/**/*.stories.mdx",
    "../**/stories/**/*.stories.@(js|jsx|ts|tsx|scss)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
};
