import { StylesProvider } from './styles-provider'
import { TRPCReactProvider } from '~/utils/api'
import './globals.css'

export const metadata = {
  title: 'Dream App - T3 + Solito',
  description: 'Built with T3 Stack, Solito v4, and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <StylesProvider>{children}</StylesProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}