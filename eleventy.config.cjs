/** @type {import('@11ty/eleventy').UserConfig} */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
