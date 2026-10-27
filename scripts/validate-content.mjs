import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { brand, projectTimeline } from '../src/data/brand.js';
import { philosophy } from '../src/data/filosofia.js';
import { manifesto } from '../src/data/manifesto.js';
import { projects } from '../src/data/projects.js';
import { siteRoutes } from '../src/data/routes.js';

const unique = (values) => new Set(values).size === values.length;
const validSource = (source) => {
  assert.ok(source.id && source.title && source.publisher, 'Cada referencia necesita id, título y editor.');
  assert.ok(/^https:\/\//.test(source.url), `La fuente ${source.id} debe usar HTTPS.`);
};

assert.equal(brand.name, 'Allerihe');
assert.equal(brand.academy.url, 'https://quonceptory.presentto.online');
assert.ok(brand.topics.length >= 6, 'El mapa temático debe cubrir las áreas del proyecto.');
assert.ok(brand.socialProfiles.length > 0);
assert.ok(brand.socialProfiles.every((profile) => new URL(profile.url).protocol === 'https:'));
assert.ok(brand.socialProfiles.every((profile) => new URL(profile.url).pathname.includes('allerihe') || profile.url.includes('@allerihe')));
assert.ok(unique(projectTimeline.map((milestone) => milestone.id)));
assert.ok(unique(siteRoutes.map((route) => route.path)), 'Las rutas deben ser únicas.');
assert.ok(siteRoutes.every((route) => route.title && route.description), 'Cada ruta necesita metadatos propios.');
assert.ok(siteRoutes.some((route) => route.path === '/filosofia'), 'Falta la ruta de Filosofía.');
assert.ok(unique(projects.map((project) => project.id)), 'Los proyectos necesitan identificadores únicos.');

for (const project of projects) {
  assert.ok(Number.isInteger(project.progress) && project.progress >= 0 && project.progress <= 100, `${project.id} tiene un progreso inválido.`);
  assert.ok(Array.isArray(project.sources), `${project.id} necesita una lista de fuentes explícita.`);
  assert.ok(project.progress === 0 || project.updatedAt, `${project.id} requiere fecha de actualización si registra progreso.`);
  assert.ok(project.status !== 'Completado' || project.progress === 100, `${project.id} no puede estar completado con progreso parcial.`);
  project.sources.forEach(validSource);
}

assert.ok(unique(manifesto.chapters.map((chapter) => chapter.id)));
for (const chapter of manifesto.chapters) {
  assert.ok(chapter.title && chapter.contentType && chapter.paragraphs.length > 0);
  assert.ok(Array.isArray(chapter.sources), `${chapter.id} debe declarar sus fuentes, incluso si aún no tiene.`);
  chapter.sources.forEach(validSource);
}

assert.equal(philosophy.contentType, 'editorial-position');
assert.ok(existsSync(resolve(philosophy.source)), `No se encuentra el manuscrito fuente: ${philosophy.source}`);
assert.ok(philosophy.summary && philosophy.editorialNote && philosophy.thesis);
assert.ok(Array.isArray(philosophy.sources), 'La página de filosofía necesita declarar sus fuentes.');
assert.ok(unique(philosophy.glossary.map(([term]) => term)), 'El glosario necesita términos únicos.');
philosophy.sources.forEach(validSource);

console.log(`Contenido válido: ${manifesto.chapters.length} capítulos, ${projects.length} iniciativas, ${brand.topics.length} áreas y ${philosophy.glossary.length} conceptos filosóficos.`);