import SkeletonCard from "./SkeletonCard";

function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>

    </div>
  );
}

export default Loading;