
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-angular-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25113, hash: '8f32f283c3ca96ba551d125602a83a10a914ccecd43ffda668292e77174328e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17566, hash: '7367f4c1f6783b56c1866a0b03d6fc800237504d64f833604ae29b9f52856cdf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33981, hash: '9bc0aa564145dab482191a1dfe53b2814d93e638b7a0435783ea88621f32f819', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
