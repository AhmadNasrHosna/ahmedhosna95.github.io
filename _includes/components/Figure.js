module.exports = ({ src, alt = '', caption = '', ratio = '16/9' }) => `
  <figure class="u-extend">
    <div style="--aspect-ratio: ${ratio};">
      <img src="../../../static/img/${src}" alt="${alt}" />
    </div>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>
`;
