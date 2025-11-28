import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./globals.css";
import I18nProvider from "@/i18n/I18nProvider";
import ToastProvider from "@/components/ToastProvider";
import { createMetadata } from "@/lib/metadata/metadataHelper";

export const metadata = createMetadata(
  "MarketPlace",
  "Your trusted marketplace for buying and selling products."
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <I18nProvider>
          <ToastProvider />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
