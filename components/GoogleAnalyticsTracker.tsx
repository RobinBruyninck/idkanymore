'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function GoogleAnalyticsTracker() {
  const pathname = usePathname()
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!measurementId) {
      return
    }

    if (typeof window.gtag === 'function') {
      window.gtag('config', measurementId, {
        page_path: pathname,
      })
    }
  }, [pathname, measurementId])

  return null
}
