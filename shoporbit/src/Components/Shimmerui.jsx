// ShimmerCard.jsx
// FullScreenShimmer.jsx
export default function FullScreenShimmer() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col gap-4 p-6 animate-pulse">
      {/* Header Placeholder */}
      <div className="h-10 w-1/3 bg-gray-200 rounded" />

      {/* Grid of shimmer cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className="h-64 bg-gray-200 rounded-xl shadow" />
        ))}
      </div>
    </div>
  );
}

// ShimmerCard.jsx

