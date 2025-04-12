import markdownItMath from "markdown-it-math";
import temml from "temml";

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("pages");

  eleventyConfig.setLayoutsDirectory("../layouts");
  eleventyConfig.addGlobalData("layout", "base.html");

  eleventyConfig.addPassthroughCopy({ "layouts/style.css": "style.css" });

  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(markdownItMath, {
      inlineRenderer: (src) => temml.renderToString(src),
      blockRenderer: (src) => temml.renderToString(src, { displayStyle: true }),
    })
  );
}
