import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { preview } from 'vite';
import { brand } from '../src/data/brand.js';
import { siteRoutes } from '../src/data/routes.js';

const vercel = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
assert.ok(vercel.rewrites?.some((rewrite) => rewrite.source === '/(.*)' && rewrite.destination === '/index.html'), 'Vercel debe enviar rutas profundas a la app.');

const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
for (const route of siteRoutes) {
  assert.ok(sitemap.includes(`<loc>${brand.siteUrl}${route.path === '/' ? '/' : route.path}</loc>`), `El sitemap no incluye ${route.path}.`);
}

const server = await preview({ preview: { host: '127.0.0.1', port: 0 }, logLevel: 'silent' });
try {
  const address = server.httpServer.address();
  assert.ok(address && typeof address === 'object', 'El servidor de preview no quedó disponible.');
  const origin = `http://127.0.0.1:${address.port}`;

  const homepage = await fetch(origin);
  assert.equal(homepage.status, 200);
  const html = await homepage.text();
  assert.match(html, /<div id="root"><\/div>/);
  const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)].map((match) => match[1]);
  assert.ok(assets.some((asset) => asset.endsWith('.js')), 'Falta el bundle JS en el HTML.');
  assert.ok(assets.some((asset) => asset.endsWith('.css')), 'Falta el CSS en el HTML.');

  for (const route of siteRoutes) {
    const response = await fetch(new URL(route.path, origin));
    assert.equal(response.status, 200, `La ruta ${route.path} no responde 200.`);
    assert.match(response.headers.get('content-type') ?? '', /text\/html/, `La ruta ${route.path} no devuelve HTML.`);
  }

  for (const asset of assets) {
    const response = await fetch(new URL(asset, origin));
    assert.equal(response.status, 200, `El asset ${asset} no responde 200.`);
  }
  console.log(`Rutas válidas: ${siteRoutes.length}; assets iniciales válidos: ${assets.length}.`);
} finally {
  await server.close();
}