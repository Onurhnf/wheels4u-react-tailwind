import Button from "../components/ui/Button.jsx";

function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <>
      <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
        <div className="rounded-md border border-gray-100 bg-white p-10 text-center">
          <p className="text-3xl">Something went wrong </p>
          <p>{error.message}</p>
          <Button variant={"small"} onClick={resetErrorBoundary}>
            Go Dashboard
          </Button>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
