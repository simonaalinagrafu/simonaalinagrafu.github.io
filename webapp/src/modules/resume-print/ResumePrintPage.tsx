// Print source for the CV PDFs, rendered entirely from src/data/profile/.
// One page per locale: /resume-print    → public/cv-ro.pdf,
//                      /en/resume-print → public/cv-en.pdf
// Regenerate both after any profile change with:  npm run build && npm run cv
// This page renders outside the site shell, is noindex, and stays out of the sitemap.
import { Fragment } from 'react';
import { getProfile } from '@data/profile';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';
import './resume-print.css';

/** Bullets are written as "Lead-in: detail" — split so the lead-in can be bold. */
function splitBullet(b: string) {
  const i = b.indexOf(': ');
  return i > 0 ? { title: b.slice(0, i), rest: b.slice(i + 2) } : { title: null, rest: b };
}

export default function ResumePrintPage() {
  const { locale, s } = useLocale();
  const { site, experience, skills, education, achievements, extras } = getProfile(locale);

  const keyAchievement = achievements[0];

  const linkedinLabel = site.linkedin.replace('https://www.', '');
  const siteLabel = site.url.replace('https://', '');
  const telHref = `tel:${site.phone.replace(/\s/g, '')}`;

  return (
    <div className="resume-print">
      <PageMetaPart title={`${site.name} — ${s.career.metaTitle}`} noindex />

      <header>
        <h1>{site.name}</h1>
        <div className="subtitle">{site.title}</div>
        <div className="contact">
          <span>{site.location}</span>
          <span>
            <a href={telHref}>{site.phone}</a>
          </span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
          <span>
            <a href={site.linkedin}>{linkedinLabel}</a>
          </span>
          <span>
            <a href={site.url}>{siteLabel}</a>
          </span>
        </div>
      </header>

      <h2>{s.resume.summary}</h2>
      <p>{site.intro}</p>

      <div className="highlights">
        {s.resume.highlights.map((h) => (
          <div key={h}>{h}</div>
        ))}
      </div>

      <h2>{s.resume.skills}</h2>
      <div className="skills">
        {skills.map((skill) => (
          <p key={skill.id}>
            <b>{skill.group}:</b> {skill.items.join(', ')}
          </p>
        ))}
      </div>

      <h2>{s.resume.experience}</h2>
      {experience.map((role) => {
        // The Career page carries every bullet; the PDF takes the leading few
        // when a role sets pdfBullets, which caps how long the resume can grow.
        const bullets = role.pdfBullets ? role.bullets.slice(0, role.pdfBullets) : role.bullets;
        return (
          <div key={role.id} className={bullets.length > 5 ? 'role allow-break' : 'role'}>
            <div className="role-head">
              <h3>
                {role.position} · {role.company}, {role.location}
              </h3>
              <span className="period">{role.period}</span>
            </div>
            {role.aboutShort && <p className="about">{role.aboutShort}</p>}
            {role.summary && <p className="summary">{role.summary}</p>}
            <ul>
              {bullets.map((b) => {
                const { title, rest } = splitBullet(b);
                return (
                  <li key={b}>
                    {title ? (
                      <Fragment>
                        <b>{title}:</b> {rest}
                      </Fragment>
                    ) : (
                      b
                    )}
                  </li>
                );
              })}
            </ul>
            {role.focus && (
              <p className="tech">
                <span className="tech-label">{s.resume.focus}</span>
                {role.focus.join(' · ')}
              </p>
            )}
          </div>
        );
      })}

      <h2>{s.resume.keyAchievement}</h2>
      <div className="role">
        <div className="role-head">
          <h3>{keyAchievement.title}</h3>
          <span className="period">{keyAchievement.role}</span>
        </div>
        <p className="summary">{keyAchievement.description}</p>
      </div>

      <h2>{s.resume.education}</h2>
      {education.map((entry) => (
        <div key={entry.id} className="edu">
          <b>{entry.degree}</b> — {entry.school}
          {entry.period && <span className="period"> ({entry.period})</span>}
        </div>
      ))}

      {extras.length > 0 && (
        <>
          <h2>{s.resume.other}</h2>
          <p className="extras">{extras.join(' · ')}</p>
        </>
      )}
    </div>
  );
}
