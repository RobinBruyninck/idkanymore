'use client'

import Script from "next/script"
import { useConsent } from "@/lib/consent"

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * Loads Google Analytics (which sets cookies) ONLY after the visitor has
 * explicitly accepted cookies. Reacts live to consent changes so analytics
 * starts the moment the user clicks "Accept" — no reload needed.
 */
export default function GoogleAnalytics() {
  const consent = useConsent()

  if (!measurementId || consent !== "accepted") {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
