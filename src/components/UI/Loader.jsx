import { Spinner } from "flowbite-react";

export default function LoaderPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="text-center">
        {/* Spinner Component */}
        <Spinner aria-label="Loading" size="xl" />

        {/* Optional Loading Text */}
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
