interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="flex justify-center my-8">
     <input
  type="text"
  placeholder="🔍 Search News..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full max-w-md p-3 border rounded-xl shadow-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
    </div>
  );
}

export default SearchBar;