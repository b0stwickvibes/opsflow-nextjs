
export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to OpsFlow
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your restaurant operations dashboard
          </p>
        </div>
        <div className="rounded border p-6 text-center">
          Sign-in functionality is not yet configured.
        </div>
      </div>
    </div>
  );
}