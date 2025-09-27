
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center dashboard-section-bg">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="enterprise-headline text-2xl">
            Welcome to OpsFlow
          </h1>
          <p className="text-sm dashboard-text-secondary">
            Sign in to your restaurant operations dashboard
          </p>
        </div>
        <div className="enterprise-card p-6">
          <SignIn 
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            afterSignInUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: "clerk-cta-primary",
                card: "enterprise-card border-0 shadow-none",
                headerTitle: "dashboard-text-primary",
                headerSubtitle: "dashboard-text-secondary",
                socialButtonsBlockButton: "clerk-cta-ghost",
                formFieldInput: "enterprise-card",
                footerActionLink: "text-primary hover:text-primary/80"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}