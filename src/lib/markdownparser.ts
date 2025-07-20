// src/lib/markdownparser.ts
// @ts-ignore
import MarkdownIt from 'markdown-it';
// @ts-ignore
import mila from 'markdown-it-link-attributes';
// @ts-ignore
import markdownItAnchor from 'markdown-it-anchor';

export const md = new MarkdownIt({ html: true })
  .use(mila, {
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })
  .use(markdownItAnchor);
