// The profile, assembled per locale: invariant structure from shape.ts merged
// with the translated text for the requested language.
//
// Pages call getProfile(locale) and get back the same shapes they always
// consumed — `site`, `experience`, `skills`, `education`, `achievements`,
// `extras`.
import type { Locale } from '@fx/lib/i18n';
import { ro } from './ro';
import { en } from './en';
import {
  siteFacts,
  roleShapes,
  skillShapes,
  educationShapes,
  achievementShapes,
  extraShapes,
  leadershipStart,
  printStart,
  salesStart,
  type ProfileText,
  type RoleShape,
  type RoleText,
  type SkillShape,
  type SkillText,
  type EducationShape,
  type EducationText,
  type AchievementShape,
  type AchievementText,
  type ExtraShape,
} from './shape';

export type Role = RoleShape & RoleText;
export type SkillCategory = SkillShape & SkillText;
export type Education = EducationShape & EducationText;
export type Achievement = AchievementShape & AchievementText;
export type Extra = ExtraShape & { text: string };
export type Site = typeof siteFacts & ProfileText['site'];

export interface Profile {
  site: Site;
  extras: Extra[];
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
    extras: extraShapes.map((shape) => ({ ...shape, text: text.extras[shape.id] })),
    experience: roleShapes.map((shape) => ({ ...shape, ...text.roles[shape.id] })),
    skills: skillShapes.map((shape) => ({ ...shape, ...text.skills[shape.id] })),
    education: educationShapes.map((shape) => ({ ...shape, ...text.education[shape.id] })),
    achievements: achievementShapes.map((shape) => ({
      ...shape,
      ...text.achievements[shape.id],
    })),
  };
}

/**
 * Whole years since `year`, counted to the build year rather than the clock at
 * render time — the prerendered HTML and the page hydrating it have to agree
 * (ARCHITECTURE.md, "Hydration rule").
 */
export const yearsSince = (year: number) => __BUILD_YEAR__ - year;

/** The tenure figures every page shows, from the start dates in shape.ts. */
export const tenure = {
  get sales() {
    return yearsSince(salesStart);
  },
  get print() {
    return yearsSince(printStart);
  },
  get leadership() {
    return yearsSince(leadershipStart);
  },
};

/** Distinct employers — a promotion is a second role, not a second company. */
export const companyCount = new Set(roleShapes.map((r) => r.company)).size;

/** Locale-independent facts — for the few places that need them before a
    locale is known (canonical URLs, the author meta tag, social links). */
export { siteFacts };
