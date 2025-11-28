import { routePath } from "@/components/constants/RoutePath";

export const publicRoutes = [routePath.SignIn];

export const privateRoutes = [routePath.Dashboard];

export const getDefaultPublicRoute = (): string => {
  return publicRoutes[0] || routePath.SignIn;
};

export const isPublicRoute = (path: string): boolean => {
  return publicRoutes.includes(path);
};

export const isPrivateRoute = (path: string): boolean => {
  return privateRoutes.includes(path);
};
