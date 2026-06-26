module.exports = (ctx) => ({
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("autoprefixer"),
    ctx.env === "production" && require("cssnano")({ preset: "default" }),
  ].filter(Boolean),
});
