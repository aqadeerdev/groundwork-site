const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "jpeg"],
    widths: [400, 800, 1200, "auto"],
    outputDir: "./_site/images/",
    urlPath: "/images/",
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "100vw",
    },
    filenameFormat(id, src, width, format) {
      const path = require("path");
      const name = path.basename(src, path.extname(src));
      const dir = path.basename(path.dirname(src));
      const prefix = dir !== "images" ? `${dir}-` : "";
      return `${prefix}${name}-${width}w.${format}`;
    },
  });

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
