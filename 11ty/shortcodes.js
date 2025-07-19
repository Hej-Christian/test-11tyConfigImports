import { hello } from "./shortcodes/hello.js";

// The idea with this file is to group any created shortcodes for a nice structure and cleaner eleventy.config.js. 
// This follows the eleventyConfig.addPlugin approach, detailed here: 
// https://www.trovster.com/blog/2024/08/organising-eleventy-filters-shortcodes-and-more

const shortcodes = {
  hello
};

export default(eleventyConfig) => {
  return Object.keys(shortcodes).forEach((shortcode) => {
    eleventyConfig.addShortcode(shortcode, shortcodes[shortcode]);
  });
}

