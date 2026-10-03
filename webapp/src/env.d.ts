// Build-time constants, defined in vite.config.ts.

/** The year of the build — fixed, so prerendered HTML and hydration agree. */
declare const __BUILD_YEAR__: number;

/** Whether public/portrait.jpg existed when the site was built. */
declare const __HAS_PORTRAIT__: boolean;
