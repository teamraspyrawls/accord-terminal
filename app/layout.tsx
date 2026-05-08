export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}