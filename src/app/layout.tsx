import "./globals.css";
import ClientScripts from "./ClientScripts";

export const metadata = {
  title: "Eser Holding",
  description: "Corporate Holding Website"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientScripts /> {/* Client-only scripts */}
        {children}
      </body>
    </html>
  );
}