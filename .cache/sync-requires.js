const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\src\\pages\\index.js"))),
  "component---src-templates-post-post-jsx": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\src\\templates\\Post\\post.jsx"))),
  "component---src-templates-tag-tag-jsx": hot(preferDefault(require("D:\\Documents\\Dev\\Div House Blog\\src\\templates\\Tag\\tag.jsx")))
}

