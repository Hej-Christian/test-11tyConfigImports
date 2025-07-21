/* 
  Direct import & adding of the shortcode function works with live reload, 
  you can edit ./11ty/shortcodes/hello.js and see it live in the browser. (1)

  In an effort to organise the config file a bit more, I've been trying 
  to group filters/shortcodes/etc into their own file, to then load them more neatly.
  
  There are many approaches to this, so far I have tried (Focusing on shortcodes for now):

  - https://github.com/madrilene/eleventy-excellent/blob/main/eleventy.config.js
  - https://github.com/AleksandrHovhannisyan/aleksandrhovhannisyan.com/blob/master/packages/web/.eleventy.js

  and more recently:

  - https://www.trovster.com/blog/2024/08/organising-eleventy-filters-shortcodes-and-more
  
  All three approaches work to get the shortcodes added, BUT, live-reload breaks (for me).
  While the webpage reloads - any changes made to the shortcode function itself don't come through.
  I have to stop and start the server each time. (2)

  Swapping the comments on both import and eleventyConfig.add_ to test.
  To launch the live server: npx @11ty/eleventy --serve
*/

// (1) Works with live-reload
// import { hello } from "./11ty/shortcodes/hello.js";

// (2) Breaks live-reload
import shortcodes from "./11ty/shortcodes.js";

export default async function(eleventyConfig) {

  // (1) Works with live-reload
  // eleventyConfig.addShortcode("hello", hello);

  // (2) Breaks live-reload
  eleventyConfig.addPlugin(shortcodes);

  eleventyConfig.setInputDirectory("_src");
  eleventyConfig.setOutputDirectory("_dist");
};