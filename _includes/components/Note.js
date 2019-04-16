const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

module.exports = ({ a, b }) => `
  <figure class="c-quote">
    <p>${markdown.renderInline(a)}</p>
    ${b ? `<figcaption class="c-quote__cite">${markdown.renderInline(b)}</figcaption>` : ''}
  </figure>
`;