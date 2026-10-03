// Open/close state for a header dropdown (theme, language): toggled by its
// button, closed by a click anywhere outside `rootRef` or by Escape.
import { useEffect, useRef, useState } from 'react';

export function useDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return {
    open,
    rootRef,
    toggle: () => setOpen((o) => !o),
    close: () => setOpen(false),
  };
}
