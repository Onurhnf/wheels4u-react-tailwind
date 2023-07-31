import Button from "../components/ui/Button.jsx";
import { useMoveBack } from "./../hooks/useMoveback.js";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-20">
      <div className="relative shrink grow-0 basis-[96rem] rounded-md border border-gray-200 bg-gray-50 p-20 text-center">
        <p className="mb-12 text-3xl font-bold">
          <span className="font-extrabold">404</span> Page not Found
        </p>
        <Button
          className="absolute left-3 top-2"
          onClick={moveBack}
          variant={"small"}
        >
          &larr; Go back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
