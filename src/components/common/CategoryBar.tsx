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
    <div className="flex justify-center gap-3 mt-4 mb-2">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
