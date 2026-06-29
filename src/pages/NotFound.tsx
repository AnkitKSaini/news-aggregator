import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">

      <div className="text-center">
        <div className="text-8xl mb-6">
    🚀
      </div>

       <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600 animate-bounce">
  404
</h1>

        <h2 className="text-4xl font-bold mt-6">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
        >
          🏠 Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;