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
  experience: Role[];
  skills: SkillCategory[];
  education: Education[];
  achievements: Achievement[];
}

const texts: Record<Locale, ProfileText> = { ro, en };

// --- Placeholder guard ------------------------------------------------------
// Imagined stand-in entries (see shape.ts) must never reach the live site.
// Locally: one warning line per build. Under CI (GitHub Actions sets CI=true):
// refuse to build, unless PLACEHOLDERS_OK=1 is set on purpose.
const placeholders = [
  ...roleShapes.filter((r) => r.placeholder).map((r) => `role "${r.id}"`),
  ...educationShapes.filter((e) => e.placeholder).map((e) => `education "${e.id}"`),
  ...achievementShapes.filter((a) => a.placeholder).map((a) => `achievement "${a.id}"`),
];

let warned = false;
function guardPlaceholders() {
  if (placeholders.length === 0 || warned) return;
  warned = true;
  const list = placeholders.join(', ');
  if (process.env.CI && !process.env.PLACEHOLDERS_OK) {
    throw new Error(
      `Refusing to build for deployment: profile still contains imagined placeholder ` +
        `content (${list}). Replace it with real data in src/data/profile/, or set ` +
        `PLACEHOLDERS_OK=1 to override deliberately.`,
    );
  }
  console.warn(
    `\n[profile] ${placeholders.length} placeholder entries still in the data: ${list}\n`,
  );
}

export function getProfile(locale: Locale): Profile {
  guardPlaceholders();
  const text = texts[locale];
  return {
    site: { ...siteFacts, ...text.site },
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
