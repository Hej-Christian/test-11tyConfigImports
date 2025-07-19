Demonstration repo to show live-reload breaking if shortcodes aren't loaded direct into the `eleventy.config.js` file.

Run Live Server with `npx @11ty/eleventy --serve`

Depending on which approach to shortcode loading you have un-commented, you should be able to edit the shortcode itself, `./11ty/shortcodes/hello.js`, and see any changes on save, or not.