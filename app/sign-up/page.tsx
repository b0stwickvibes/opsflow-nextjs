import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your OpsFlow account
          </h1>
          <p className="text-sm text-muted-foreground">
            Start managing your restaurant operations today
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-primary hover:bg-primary/90",
              card: "shadow-none border",
              headerTitle: "hidden",
              headerSubtitle: "hidden"
            }
          }}
        />
      </div>
    </div>
  );
}