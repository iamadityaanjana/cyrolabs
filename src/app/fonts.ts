// Instead of using local fonts that we don't have, use Inter from Google Fonts
// which is somewhat similar to the clean, modern look of Rany
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
