const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\adriana_lima\\Documents\\Dev\\Gatsby\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\adriana_lima\\Documents\\Dev\\Gatsby\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\adriana_lima\\Documents\\Dev\\Gatsby\\src\\pages\\index.js"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("C:\\Users\\adriana_lima\\Documents\\Dev\\Gatsby\\src\\templates\\post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("C:\\Users\\adriana_lima\\Documents\\Dev\\Gatsby\\src\\templates\\tag.jsx")))
}

