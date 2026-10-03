// The site shell around every page: masthead, header, content, footer. Pages
// are lazy chunks, so the Outlet sits inside a Suspense boundary.
import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import FooterPart from './FooterPart';
import HeaderPart from './HeaderPart';
import MastheadPart from './MastheadPart';

export default function BaseLayout() {
  return (
    <>
      <MastheadPart />
      <HeaderPart />
      <main className="mx-auto w-full max-w-7xl grow px-4 pt-7 pb-10 sm:px-6 lg:px-8">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <FooterPart />
      <ScrollRestoration />
    </>
  );
}
