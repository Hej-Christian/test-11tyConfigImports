Demonstration repo to show live-reload breaking if shortcodes aren't loaded direct into the `eleventy.config.js` file.

Run Live Server with `npx @11ty/eleventy --serve`

Depending on which approach to shortcode loading you have un-commented, you should be able to edit the shortcode itself, `./11ty/shortcodes/hello.js`, and see any changes on save, or not.

**Update:** Thanks to a user on Discord, I've added a dynamic date variable to the shortcode.

 With the plugin method to load in shortcodes, editing the text string and saving shows the `currentTime` update in the browse, but the text string itself doesn't. So part of it can get process correctly? 😵‍💫 I'm very confused with this one lol.