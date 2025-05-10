
// ShimmerCard.jsx
export default function ShimmerCard() {
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-xl shadow animate-pulse">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-200 rounded mb-4"></div>

      {/* Title Placeholder */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

      {/* Subtitle Placeholder */}
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
