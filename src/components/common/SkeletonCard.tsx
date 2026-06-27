function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="h-52 bg-gray-300 dark:bg-gray-700"></div>

      <div className="p-5">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;