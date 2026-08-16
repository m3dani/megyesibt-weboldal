"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Bemutatkozás", "#bemutatkozas"],
  ["Termékek", "#termekek"],
  ["Árak", "#arak"],
  ["Szállítás", "#szallitas"],
  ["Rendelés", "#rendeles"],
  ["Kapcsolat", "#kapcsolat"],
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        ref={buttonRef}
        className="mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="mobile-menu-label">Menü</span>
        <span className="hamburger-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Mobil navigáció" hidden={!open}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </div>
  );
}
