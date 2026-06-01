// Lightweight cookie-consent state shared between the banner, the settings
// page and the analytics loader. Persisted in localStorage; changes are
// broadcast on the same tab via a CustomEvent (and across tabs via "storage")
// so analytics can react live. Read it in components with useConsent().

import { useSyncExternalStore } from "react"

export const CONSENT_KEY = "cookie-consent"
export const CONSENT_EVENT = "cookie-consent-change"

export type ConsentValue = "accepted" | "rejected"

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null
  const value = window.localStorage.getItem(CONSENT_KEY)
  return value === "accepted" || value === "rejected" ? value : null
}

export function setStoredConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return
  window.localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }))
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {}
  window.addEventListener(CONSENT_EVENT, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback)
    window.removeEventListener("storage", callback)
  }
}

/** Subscribe to the current consent value. SSR-safe (returns null on the server). */
export function useConsent(): ConsentValue | null {
  return useSyncExternalStore(subscribe, getStoredConsent, () => null)
}
