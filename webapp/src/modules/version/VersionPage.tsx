// /version — shows webapp/version.json exactly as written, so anyone can
// check which version is live. Rendered outside the site shell, noindex, and
// left out of the sitemap — this is for checking a deploy, not for readers.
import { siteFacts } from '@data/profile';
import PageMetaPart from '@modules/shared/PageMetaPart';
import version from '../../../version.json';

export default function VersionPage() {
  return (
    <>
      <PageMetaPart title={`Version — ${siteFacts.name}`} description="Build version." noindex />
      <pre>{JSON.stringify(version, null, 2)}</pre>
    </>
  );
}
