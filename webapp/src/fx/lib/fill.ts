/** Fills {tokens} in a template. fill('Hi {name}', { name: 'Ana' }) → 'Hi Ana'.
    A token with no value is left as written, so a typo shows on the page. */
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (token, key: string) =>
    key in values ? String(values[key]) : token,
  );
