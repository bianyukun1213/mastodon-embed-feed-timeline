/**
 * Mastodon embed feed timeline v4.0.0
 * More info at:
 * https://gitlab.com/idotj/mastodon-embed-feed-timeline
 */

/**
 * Timeline settings
 * Adjust these parameters to customize your timeline
 */
export const mtTimelineSettings = {
  // Id of the <div> containing the timeline
  container_id: "mt-embed-timeline",

  // Class name for the loading spinner (also used in CSS file)
  spinner_class: "loading-spinner",

  // Preferred color theme: 'light', 'dark' or 'auto'. Default: auto
  default_theme: "auto",

  // Maximum amount of toots to get. Default: 20
  toots_limit: "20",

  // Hide unlisted toots. Default: don't hide
  hide_unlisted: false,

  // Hide boosted toots. Default: don't hide
  hide_reblog: false,

  // Hide replies toots. Default: don't hide
  hide_replies: false,

  // Hide preview card if toot contains a link, photo or video from a URL. Default: don't hide
  hide_preview_link: false,

  // Hide custom emojis available on the server. Default: don't hide
  hide_emojos: false,

  // Converts Markdown symbol ">" at the beginning of a paragraph into a blockquote HTML tag. Ddefault: don't apply
  markdown_blockquote: false,

  // Hide replies, boosts and favourites toots counter. Default: don't hide
  hide_counter_bar: false,

  // Limit the text content to a maximum number of lines. Default: 0 (unlimited)
  text_max_lines: "0",

  // Customize the text of the link pointing to the Mastodon page (appears after the last toot)
  link_see_more: "See more posts at Mastodon",
};
