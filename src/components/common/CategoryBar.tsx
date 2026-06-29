interface CategoryBarProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
  "general",
  "technology",
  "business",
  "sports",
  "health",
  "science",
];

function CategoryBar({ category, setCategory }: CategoryBarProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex gap-3 min-w-max justify-start md:justify-center">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`flex-shrink-0 px-5 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              category === item
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}

      </div>
    </div>
  );
}

export default CategoryBar;