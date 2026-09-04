// The profile, assembled per locale: invariant structure from shape.ts merged
// with the translated text for the requested language.
//
// Pages call getProfile(locale) and get back the same shapes they always
// consumed — `site`, `experience`, `skills`, `education`, `projects`.
import type { Locale } from '@fx/lib/i18n';
import { ro } from './ro';
import { en } from './en';
import {
  siteFacts,
  roleShapes,
  skillShapes,
  educationShapes,
  projectShapes,
  type ProfileText,
  type RoleShape,
  type RoleText,
  type SkillShape,
  type SkillText,
  type EducationShape,
  type EducationText,
  type ProjectShape,
  type ProjectText,
} from './shape';

export type Role = RoleShape & RoleText;
export type SkillCategory = SkillShape & SkillText;
export type Education = EducationShape & EducationText;
export type Project = ProjectShape & ProjectText;
export type Site = typeof siteFacts & ProfileText['site'];

export interface Profile {
  site: Site;
  experience: Role[];
  skills: SkillCategory[];
  education: Education[];
  projects: Project[];
}

const texts: Record<Locale, ProfileText> = { ro, en };

export function getProfile(locale: Locale): Profile {
  const text = texts[locale];
  return {
    site: { ...siteFacts, ...text.site },
    experience: roleShapes.map((shape) => ({ ...shape, ...text.roles[shape.id] })),
    skills: skillShapes.map((shape) => ({ ...shape, ...text.skills[shape.id] })),
    education: educationShapes.map((shape) => ({ ...shape, ...text.education[shape.id] })),
    projects: projectShapes.map((shape) => ({ ...shape, ...text.projects[shape.id] })),
  };
}

/** Locale-independent facts — for the few places that need them before a
    locale is known (canonical URLs, the author meta tag, social links). */
export { siteFacts };
