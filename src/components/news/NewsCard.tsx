interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  source: string;
  publishedAt: string;
  url: string;
}

function NewsCard({
  title,
  description,
  image,
  source,
  publishedAt,
  url,
}: NewsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* News Image */}
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-6 h-14 overflow-hidden">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 h-20 overflow-hidden">
          {description}
        </p>

        {/* Source */}
        <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          📰 {source}
        </p>
        {/* Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          📅 {new Date(publishedAt).toLocaleDateString()}
        </p>

        {/* Button */}
        <div className="mt-auto pt-5">
          <button
            onClick={() => window.open(url, "_blank")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition duration-300"
          >
            Read Full Article →
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
