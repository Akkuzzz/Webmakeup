import type { KeyboardEvent } from "react";

/** Roving-focus keyboard behavior for ARIA tabs, including wraparound navigation. */
export function handleTabListKeyDown(event: KeyboardEvent<HTMLElement>) {
  const { key } = event;
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;

  const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  if (!tabs.length) return;

  const index = tabs.indexOf(event.target as HTMLButtonElement);
  if (index < 0) return;

  const nextIndex = key === "Home"
    ? 0
    : key === "End"
      ? tabs.length - 1
      : key === "ArrowRight"
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;

  event.preventDefault();
  tabs[nextIndex].focus();
  tabs[nextIndex].click();
}
