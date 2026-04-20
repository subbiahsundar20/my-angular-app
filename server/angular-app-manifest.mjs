
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
    'index.csr.html': {size: 448, hash: '828ee3d3d3df139ac0214102f74f3161eb6ea8d525a7c020d9a7437e4eae94d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: 'aa6d0292b62206532297533e2a1d59a67122eb252506a62a49ed2ffce302efb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5678, hash: '1b8648924269ba41b5a052dd57ada7f2e2222e43e5d4d2aee62d88825f674ae1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
