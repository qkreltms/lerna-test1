// 주의 style.module.*는 지원하지 않음

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
