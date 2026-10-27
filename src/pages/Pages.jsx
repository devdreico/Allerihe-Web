import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Header, Eyebrow } from '../components/Header.jsx';
import { Hero } from '../components/Hero.jsx';
import { CommunitySection, MissionSection } from '../components/EditorialSections.jsx';
import { ProgressSection } from '../components/ProgressSection.jsx';
import { ReadingGuide } from '../components/ReadingGuide.jsx';
import { siteRoutes } from '../data/routes.js';
import { usePreferences } from '../i18n/Preferences.jsx';

function PageHeading({ number, labelKey, titleKey, introKey }) {
  const { t } = usePreferences();
  return (
    <section className="page-heading page-wrap">
      <Eyebrow>{number} / {t(labelKey)}</Eyebrow>
      <h1>{t(titleKey)}</h1>
      {introKey && <p>{t(introKey)}</p>}
    </section>
  );
}

function PageLinks() {
  const { t, locale } = usePreferences();
  const links = siteRoutes.filter((route) => route.path !== '/');

  return (
    <section className="home-links page-wrap" aria-label="Explorar Allerihe">
      <div className="home-links-heading"><Eyebrow>{t('exploreAllerihe')}</Eyebrow><span>06 {t('destinations').toLocaleUpperCase(locale)}</span></div>
      <div className="home-links-list">
        {links.map((route, index) => (
          <Link to={route.path} className="home-link-row" key={route.path}>
            <span className="home-link-index">0{index + 1}</span>
            <span className="home-link-copy"><strong>{t(route.labelKey)}</strong><small>{locale === 'en' ? route.homeSummaryEn : route.homeSummary}</small></span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomePage() {
  const { t } = usePreferences();
  return (
    <>
      <a className="skip-hero" href="#contenido-inicio">{t('skipHero')}</a>
      <Hero />
      <Header />
      <main>
        <section className="home-opening page-wrap" id="contenido-inicio" tabIndex={-1}>
          <div className="opening-index"><Eyebrow>{t('homeOpeningLabel')}</Eyebrow><span>01 — 06</span></div>
          <div className="opening-copy">
            <h1>{t('homeOpeningTitle')}</h1>
            <p>{t('homeOpeningCopy')}</p>
            <Link className="opening-link" to="/manifiesto">{t('readManifesto')} <ArrowDownRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>
        <section className="home-pullquote">
          <div className="page-wrap pullquote-inner">
            <Eyebrow>{t('homeQuoteLabel')}</Eyebrow>
            <p>{t('homeQuote')}</p>
            <span>{t('yearLabel')}</span>
          </div>
        </section>
        <PageLinks />
      </main>
      <Footer />
    </>
  );
}

export function ManifestoPage() {
  const { t } = usePreferences();
  return (
    <article className="manifesto-page">
      <PageHeading number="01" labelKey="manifesto" titleKey="manifestoTitle" introKey="manifestoIntro" />
      <div className="manifesto-body page-wrap">
        <section className="manifesto-chapter">
          <span className="chapter-index">{t('chapterLimit')}</span>
          <div><h2>{t('chapterLimitTitle')}</h2><p>{t('chapterLimitOne')}</p><p>{t('chapterLimitTwo')}</p></div>
        </section>
        <section className="manifesto-chapter">
          <span className="chapter-index">{t('chapterDelegation')}</span>
          <div><h2>{t('chapterDelegationTitle')}</h2><p>{t('chapterDelegationOne')}</p><p>{t('chapterDelegationTwo')}</p></div>
        </section>
        <section className="manifesto-chapter">
          <span className="chapter-index">{t('chapterPractice')}</span>
          <div><h2>{t('chapterPracticeTitle')}</h2><p>{t('chapterPracticeOne')}</p><p>{t('chapterPracticeTwo')}</p><Link className="opening-link" to="/mision">{t('learnMission')} <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </section>
      </div>
    </article>
  );
}

export function PhilosophyPage() {
  const [query, setQuery] = useState('');
  const { t } = usePreferences();
  const glossaryKeys = [
    ['glossaryTension', 'glossaryTensionDefinition'],
    ['glossaryWitness', 'glossaryWitnessDefinition'],
    ['glossaryCarrier', 'glossaryCarrierDefinition'],
    ['glossaryDiamond', 'glossaryDiamondDefinition'],
    ['glossaryPresence', 'glossaryPresenceDefinition'],
    ['glossaryPraxis', 'glossaryPraxisDefinition'],
    ['glossaryDimission', 'glossaryDimissionDefinition'],
  ];
  const praxisKeys = [
    { id: 'lucidus', labelKey: 'experiencePriority', nameKey: 'praxisLucidus', descriptionKey: 'lucidDescription', emphasisKey: 'lucidEmphasis' },
    { id: 'inanis', labelKey: 'tensionPriority', nameKey: 'praxisInanis', descriptionKey: 'inanisDescription', emphasisKey: 'inanisEmphasis' },
  ];
  const practiceKeys = [
    ['practiceOneTitle', 'practiceOneCopy'],
    ['practiceTwoTitle', 'practiceTwoCopy'],
    ['practiceThreeTitle', 'practiceThreeCopy'],
  ];
  const visibleTerms = glossaryKeys.filter(([termKey, definitionKey]) =>
    `${t(termKey)} ${t(definitionKey)}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <article className="philosophy-page">
      <PageHeading
        number="02"
        labelKey="philosophyPageLabel"
        titleKey="philosophyPageTitle"
        introKey="philosophySummary"
      />
      <div className="page-wrap">
        <ReadingGuide />
        <aside className="philosophy-notice" role="note">
          <span>{t('editorialFrame')}</span>
          <p>{t('philosophyNotice')}</p>
        </aside>
        <section className="philosophy-thesis">
          <Eyebrow>{t('proposalInOneIdea')}</Eyebrow>
          <p>{t('philosophyThesis')}</p>
          <span>{t('sourceManuscript')}</span>
        </section>
        <section className="philosophy-section" id="arquitectura">
          <div className="philosophy-section-heading">
            <Eyebrow>{t('tensionArchitecture')}</Eyebrow>
            <h2>{t('twoPoles')}</h2>
            <p>{t('architectureCopy')}</p>
          </div>
          <div className="tension-model" aria-label={t('modelDiagramLabel')}>
            <div className="model-node model-witness"><span>{t('activeWitness')}</span><strong>{t('consciousness')}</strong></div>
            <div className="model-node model-subjective"><span>{t('dimension')}</span><strong>{t('subjective')}</strong></div>
            <div className="model-node model-presence"><span>{t('center')}</span><strong>{t('presencePoint')}</strong></div>
            <div className="model-node model-logical"><span>{t('dimension')}</span><strong>{t('logical')}</strong></div>
            <div className="model-node model-carrier"><span>{t('carrier')}</span><strong>{t('body')}</strong></div>
          </div>
          <p className="philosophy-caption">{t('modelDisclaimer')}</p>
        </section>
        <section className="philosophy-section praxis-section" id="praxis">
          <div className="philosophy-section-heading">
            <Eyebrow>{t('twoWays')}</Eyebrow>
            <h2>{t('lucidusInanisTitle')}</h2>
            <p>{t('praxisIntro')}</p>
          </div>
          <div className="praxis-grid">
            {praxisKeys.map((praxis) => (
              <article className={`praxis-panel praxis-${praxis.id}`} key={praxis.id}>
                <span>{t(praxis.labelKey)}</span>
                <h3>{t(praxis.nameKey)}</h3>
                <p>{t(praxis.descriptionKey)}</p>
                <small>{t(praxis.emphasisKey)}</small>
              </article>
            ))}
          </div>
        </section>
        <section className="philosophy-section" id="practica">
          <div className="philosophy-section-heading">
            <Eyebrow>{t('practiceLabel')}</Eyebrow>
            <h2>{t('practiceTitle')}</h2>
          </div>
          <ol className="practice-list">
            {practiceKeys.map(([titleKey, descriptionKey], index) => (
              <li key={titleKey}>
                <span>0{index + 1}</span>
                <div><h3>{t(titleKey)}</h3><p>{t(descriptionKey)}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <section className="philosophy-section glossary-section" id="glosario">
          <div className="philosophy-section-heading">
            <Eyebrow>{t('glossaryLabel')}</Eyebrow>
            <h2>{t('glossaryTitle')}</h2>
          </div>
          <label className="glossary-search">
            <span>{t('searchConcept')}</span>
            <input type="search" aria-label={t('searchConcept')} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('glossaryPlaceholder')} />
          </label>
          <p className="glossary-result-count" aria-live="polite">{visibleTerms.length} {visibleTerms.length === 1 ? t('term') : t('terms')}</p>
          <dl className="philosophy-glossary">
            {visibleTerms.map(([termKey, definitionKey]) => (
              <div key={termKey}><dt>{t(termKey)}</dt><dd>{t(definitionKey)}</dd></div>
            ))}
          </dl>
          {visibleTerms.length === 0 && <p className="glossary-empty">{t('noTerms')}</p>}
        </section>
        <aside className="philosophy-open-questions">
          <Eyebrow>{t('furtherQuestions')}</Eyebrow>
          <p>{t('openQuestionsCopy')}</p>
        </aside>
      </div>
    </article>
  );
}

export function MissionPage() {
  const { t } = usePreferences();
  return (
    <>
      <PageHeading number="02" labelKey="mission" titleKey="missionPageTitle" introKey="missionPageIntro" />
      <MissionSection />
      <section className="mission-fields page-wrap"><Eyebrow>{t('explorationAreas')}</Eyebrow><p>{t('topics')}</p></section>
    </>
  );
}

export function InitiativesPage() {
  return <><PageHeading number="03" labelKey="initiatives" titleKey="initiativesTitle" introKey="initiativesIntro" /><ProgressSection /></>;
}

export function CommunityPage() {
  return <CommunitySection />;
}

export function AcademyPage() {
  const { t } = usePreferences();
  return (
    <article className="academy-page">
      <PageHeading number="05" labelKey="academy" titleKey="academyPageTitle" introKey="academyPageIntro" />
      <section className="academy-detail page-wrap">
        <div className="academy-detail-copy"><Eyebrow>{t('academyLearning')}</Eyebrow><h2>{t('academySubhead')}</h2><p>{t('academyBody')}</p><a className="academy-link" href="https://quonceptory.presentto.online" target="_blank" rel="noreferrer">{t('academyLink')} <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="academy-seal" aria-hidden="true"><span>{t('academySealName')}</span><strong>Q·P</strong><span>{t('academyDescription')}</span></div>
      </section>
      <section className="academy-reference page-wrap"><Eyebrow>{t('academyReference')}</Eyebrow><p>{t('academyFullName')}</p><a href="https://quonceptory.presentto.online" target="_blank" rel="noreferrer">quonceptory.presentto.online <ArrowUpRight size={15} aria-hidden="true" /></a></section>
    </article>
  );
}

export function NotFoundPage() {
  const { t } = usePreferences();
  return <section className="not-found page-wrap"><Eyebrow>{t('notFoundLabel')}</Eyebrow><h1>{t('notFoundTitle')}</h1><Link className="opening-link" to="/">{t('backHome')} <ArrowUpRight size={17} aria-hidden="true" /></Link></section>;
}