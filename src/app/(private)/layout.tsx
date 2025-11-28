import PrivateRouteGuard from "@/components/auth/PrivateRouteGuard";
import { createMetadata } from "@/lib/metadata/metadataHelper";
import { pageTitles } from "@/components/constants/PageTitles";

export const metadata = createMetadata(
  pageTitles.DashboardPageTitle,
  "Access your MarketPlace dashboard to manage your account and view your activities."
);

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PrivateRouteGuard>{children}</PrivateRouteGuard>;
}
