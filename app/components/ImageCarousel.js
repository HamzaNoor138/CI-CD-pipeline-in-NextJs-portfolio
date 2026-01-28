import Image from 'next/image';

export default function ImageCarousel({ images = [], title = "" }) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">No images available</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Static Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
            {/* Image Counter Overlay */}
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {index + 1} / {images.length}
            </div>
          </div>
        ))}
      </div>
      
      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center mt-4 text-sm text-gray-400">
          Showing {images.length} images
        </div>
      )}
    </div>
  );
} 