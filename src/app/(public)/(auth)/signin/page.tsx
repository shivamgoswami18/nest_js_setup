import SignIn from "@/components/auth/SignIn";
import { pageTitles } from "@/components/constants/PageTitles";
import { createMetadata } from "@/lib/metadata/metadataHelper";

export const metadata = createMetadata(
  pageTitles.SignInPageTitle,
  "Sign in to your MarketPlace account to access your dashboard and manage your account."
);

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;
