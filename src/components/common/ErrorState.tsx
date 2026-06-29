import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

function ErrorState({
  message = "Something went wrong!",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <AlertTriangle
        size={80}
        className="text-red-500 mb-6"
      />

      <h1 className="text-4xl font-bold text-red-600">
        Oops!
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
        {message}
      </p>

      <button
        onClick={onRetry ?? (() => window.location.reload())}
        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
      >
        🔄 Try Again
      </button>
    </div>
  );
}

export default ErrorState;