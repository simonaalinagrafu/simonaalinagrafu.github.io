// The profile, assembled per locale: invariant structure from shape.ts merged
// with the translated text for the requested language.
//
// Pages call getProfile(locale) and get back the same shapes they always
// consumed — `site`, `experience`, `skills`, `education`, `achievements`.
import type { Locale } from '@fx/lib/i18n';
import { ro } from './ro';
import { en } from './en';
import {
  siteFacts,
  roleShapes,
  skillShapes,
  educationShapes,
  achievementShapes,
  type ProfileText,
  type RoleShape,
  type RoleText,
  type SkillShape,
  type SkillText,
  type EducationShape,
  type EducationText,
  type AchievementShape,
  type AchievementText,
} from './shape';

export type Role = RoleShape & RoleText;
export type SkillCategory = SkillShape & SkillText;
export type Education = EducationShape & EducationText;
export type Achievement = AchievementShape & AchievementText;
export type Site = typeof siteFacts & ProfileText['site'];

export interface Profile {
  site: Site;
  extras: string[];
  experience: Role[];
  skills: SkillCategory[];
  education: Education[];
  achievements: Achievement[];
}

const texts: Record<Locale, ProfileText> = { ro, en };

export function getProfile(locale: Locale): Profile {
  const text = texts[locale];
  return {
    site: { ...siteFacts, ...text.site },
    extras: text.extras,
    experience: roleShapes.map((shape) => ({ ...shape, ...text.roles[shape.id] })),
    skills: skillShapes.map((shape) => ({ ...shape, ...text.skills[shape.id] })),
    education: educationShapes.map((shape) => ({ ...shape, ...text.education[shape.id] })),
    achievements: achievementShapes.map((shape) => ({
      ...shape,
      ...text.achievements[shape.id],
    })),
  };
}

/** Locale-independent facts — for the few places that need them before a
    locale is known (canonical URLs, the author meta tag, social links). */
export { siteFacts };
