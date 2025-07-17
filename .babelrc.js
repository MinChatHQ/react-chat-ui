module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [
    ["babel-plugin-styled-components", { pure: true, ssr: false, displayName: false }]
  ]
};