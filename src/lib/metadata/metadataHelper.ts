import type { Metadata } from "next";

const APP_NAME = "MarketPlace";

export const createMetadata = (
  title: string,
  description: string
): Metadata => ({
  title: `${title} | ${APP_NAME}`,
  description: description,
  robots: {
    index: true,
    follow: true,
  },
});
