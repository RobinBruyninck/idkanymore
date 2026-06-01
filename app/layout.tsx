import { AppToaster } from "../components/ui/toast"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalyticsTracker from "../components/GoogleAnalyticsTracker"
import GoogleAnalytics from "../components/GoogleAnalytics"
import CookieConsent from "../components/CookieConsent"
import Footer from "../components/Footer"

import "./globals.css"

export const metadata = {
  title: "Studio Excentriek",
  description: "Portfolio website for Studio Excentriek",
  icons: {
    icon: "/favicon.ico?v=2",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics — only loads after cookie consent */}
        <GoogleAnalytics />
        <GoogleAnalyticsTracker />

        <div>
          {children}
        </div>

        <Footer />
        <CookieConsent />

        <AppToaster />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
