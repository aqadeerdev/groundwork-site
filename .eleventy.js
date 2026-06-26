module.exports = function (eleventyConfig) {
  // Copy JS and images straight to _site without processing
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Tell 11ty to rebuild when CSS source changes
  // (PostCSS handles the actual compilation separately)
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
  };
};
