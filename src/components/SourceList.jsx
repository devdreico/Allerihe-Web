import { ArrowUpRight } from 'lucide-react';

export function SourceList({ sources }) {
  if (!sources?.length) return null;

  return (
    <aside className="source-list" aria-label="Fuentes y referencias">
      <h3>Fuentes</h3>
      <ol>
        {sources.map((source) => (
          <li key={source.id}>
            <a href={source.url} target="_blank" rel="noreferrer">
              <span>{source.title}</span><ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p>{source.publisher}{source.publishedAt ? ` · ${source.publishedAt}` : ''}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}