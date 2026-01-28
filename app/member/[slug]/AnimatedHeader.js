import Image from 'next/image';

export default function AnimatedHeader({ slug }) {
  return (
    <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 animate-fade-in">
      {/* Animated Profile Picture */}
      <div className="relative w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full p-[1px] xs:p-[2px] bg-gradient-to-tr from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] shadow-lg">
        <div className="w-full h-full rounded-full overflow-hidden border-1 xs:border-2 border-[#0f0c29]">
          <Image
            src="/zaid.jpg"
            alt="Profile"
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full"
            priority={true}
            sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 64px"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
      {/* Name, title, and available status */}
      <div className="flex flex-col gap-0.5 xs:gap-1 min-w-0">
        <div className="flex items-center gap-1 xs:gap-2">
          <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-[#a29bfe] capitalize leading-tight truncate">
            {slug.split('-')[0]}
          </span>
          <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-gray-300 leading-tight hidden xs:inline">Portfolio</span>
        </div>
        <span className="bg-[#23234a] px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-semibold text-white shadow-md flex items-center gap-1 xs:gap-2 w-fit">
          <span className="inline-block w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-green-400 animate-pulse shadow" />
          <span className="hidden xs:inline">Available for work</span>
          <span className="inline xs:hidden">Available</span>
        </span>
      </div>
    </div>
  );
} 