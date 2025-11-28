"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { commonLabel, getItem } from "@/components/constants/Common";
import { getDefaultPublicRoute } from "@/lib/config/routesConfig";

interface PrivateRouteGuardProps {
  children: React.ReactNode;
}

export default function PrivateRouteGuard({
  children,
}: PrivateRouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = getItem(commonLabel.Token);

    if (!token) {
      router.push(getDefaultPublicRoute());
    }
  }, [router, pathname]);

  if (!getItem(commonLabel.Token)) {
    return null;
  }

  return <>{children}</>;
}
