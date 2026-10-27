import { projects } from '../data/projects.js';
import { Eyebrow } from './Header.jsx';
import { usePreferences } from '../i18n/Preferences.jsx';

const projectCount = projects.length;
const averageProgress = Math.round(projects.reduce((total, project) => total + project.progress, 0) / projectCount);
const timelineMilestones = 2;

export function ProgressSection() {
  const { t } = usePreferences();

  return (
    <section className="progress-section" id="avances" aria-labelledby="progress-title">
      <div className="page-wrap progress-inner">
        <div className="section-heading progress-heading">
          <div><Eyebrow light>{t('workVisible')}</Eyebrow><h2 id="progress-title">{t('ideasBuilding')}</h2></div>
          <p>{t('progressDescription')}</p>
        </div>
        <div className="metrics" aria-label={t('projectSummary')}>
          <div className="metric"><strong>{String(projectCount).padStart(2, '0')}</strong><span>{t('frontsDefined')}</span></div>
          <div className="metric"><strong>{String(averageProgress).padStart(2, '0')}<small>%</small></strong><span>{t('averageProgress')}</span></div>
          <div className="metric"><strong>{String(timelineMilestones).padStart(2, '0')}</strong><span>{t('timelineMilestones')}</span></div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-name"><h3>{t(project.nameKey)}</h3><span>{t(project.categoryKey)}</span></div>
              <span className="project-status"><i />{t(project.statusKey)}</span>
              <div className="project-progress" aria-label={t('percentComplete').replace('{percent}', project.progress)}>
                <div className="progress-track"><span style={{ width: `${project.progress}%` }} /></div>
                <span>{String(project.progress).padStart(2, '0')}%</span>
              </div>
            </article>
          ))}
        </div>
        <p className="progress-note">{t('timelineCopy')}</p>
      </div>
    </section>
  );
}