import { projects } from '../data/projects.js';
import { Eyebrow } from './Header.jsx';

const projectCount = projects.length;
const averageProgress = Math.round(projects.reduce((total, project) => total + project.progress, 0) / projectCount);
const timelineMilestones = 2;

export function ProgressSection() {
  return (
    <section className="progress-section" id="avances" aria-labelledby="progress-title">
      <div className="page-wrap progress-inner">
        <div className="section-heading progress-heading">
          <div><Eyebrow light>El trabajo, a la vista</Eyebrow><h2 id="progress-title">Ideas en <em>construcción.</em></h2></div>
          <p>Frentes de trabajo abiertos. El progreso se actualiza desde el estado de cada iniciativa.</p>
        </div>
        <div className="metrics" aria-label="Resumen del proyecto">
          <div className="metric"><strong>{String(projectCount).padStart(2, '0')}</strong><span>frentes definidos</span></div>
          <div className="metric"><strong>{String(averageProgress).padStart(2, '0')}<small>%</small></strong><span>avance medio registrado</span></div>
          <div className="metric"><strong>{String(timelineMilestones).padStart(2, '0')}</strong><span>hitos en la cronología</span></div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-name"><h3>{project.name}</h3><span>{project.category}</span></div>
              <span className="project-status"><i />{project.status}</span>
              <div className="project-progress" aria-label={`${project.progress}% completado`}>
                <div className="progress-track"><span style={{ width: `${project.progress}%` }} /></div>
                <span>{String(project.progress).padStart(2, '0')}%</span>
              </div>
            </article>
          ))}
        </div>
        <p className="progress-note">Planificación: febrero de 2025 <span>·</span> Desarrollo formal: octubre de 2026</p>
      </div>
    </section>
  );
}