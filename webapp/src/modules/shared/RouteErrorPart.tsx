// What the router shows when a page fails to render or load, instead of its
// default "Unexpected Application Error!" screen.
import { useRouteError } from 'react-router';
import { siteFacts } from '@data/profile';
import PageMetaPart from './PageMetaPart';
import { useLocale } from './useLocale';

export default function RouteErrorPart() {
  const error = useRouteError();
  const { s, path } = useLocale();
  const message = error instanceof Error ? error.message : String(error);
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <PageMetaPart title={`${s.error.metaTitle} — ${siteFacts.name}`} noindex />
      <h1 className="title-page">{s.error.metaTitle}</h1>
      <p className="text-muted mt-4">{s.error.message}</p>
      <p className="text-faint mt-2 text-sm">{message}</p>
      <a href={path} className="link-accent mt-6 inline-block">
        {s.error.reload}
      </a>
    </div>
  );
}
