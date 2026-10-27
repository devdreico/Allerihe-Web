import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from './Header.jsx';
import { brand } from '../data/brand.js';
import { usePreferences } from '../i18n/Preferences.jsx';

const principles = [
  ['01', 'principleContext', 'principleContextCopy'],
  ['02', 'principleRigor', 'principleRigorCopy'],
  ['03', 'principleUtility', 'principleUtilityCopy'],
];

export function MissionSection() {
  const { t } = usePreferences();

  return (
    <section className="mission-section page-wrap" id="mision" aria-labelledby="mission-title">
      <div className="mission-lead">
        <Eyebrow>{t('missionNumber')}</Eyebrow>
        <h2 id="mission-title">{t('missionStatement')}</h2>
        <p>{t('missionBody')}</p>
      </div>
      <div className="principle-list">
        {principles.map(([number, titleKey, copyKey]) => (
          <article className="principle" key={number}>
            <span className="principle-number">{number}</span>
            <div><h3>{t(titleKey)}</h3><p>{t(copyKey)}</p></div>
            <span className="principle-mark" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AcademySection() {
  const { t } = usePreferences();

  return (
    <section className="academy-section" id="academia" aria-labelledby="academy-title">
      <div className="page-wrap academy-inner">
        <div className="academy-index"><span>{t('academyDestination')}</span><span>{t('academyLearning')}</span></div>
        <div className="academy-copy">
          <Eyebrow>{t('academyEyebrow')}</Eyebrow>
          <h2 id="academy-title">{t('academyFullName')}</h2>
          <p>{t('academyBody')}</p>
          <a className="academy-link" href="#comunidad">{t('learnCommunity')} <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="academy-seal" aria-hidden="true"><span>{t('academySealName')}</span><strong>R·P</strong><span>{t('academyDescription')}</span></div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  const { t } = usePreferences();

  return (
    <section className="community-section page-wrap" id="comunidad" aria-labelledby="community-title">
      <div className="community-title">
        <Eyebrow>{t('communityEyebrow')}</Eyebrow>
        <h2 id="community-title">{t('communityPageTitle')}</h2>
        <p>{t('communityDescription')}</p>
      </div>
      <div className="social-list" aria-label={t('socialProfiles')}>
        {brand.socialProfiles.map((social, index) => (
          <a href={social.url} key={social.name} target="_blank" rel="noreferrer">
            <span className="social-index">0{index + 1}</span><span>{social.name}</span><span className="social-handle">@allerihe</span><ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}