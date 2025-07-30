import './globals.css'

export const metadata = {
  title: 'Friseur Salon - Moderne Schnitte & Natürliche Farben',
  description: 'Dein Friseur für moderne Schnitte & natürliche Farben. Erstklassige Haarschnitte und Farbservices seit 2020.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  )
} 