import Link from 'next/link';
import AnimatedHeader from './AnimatedHeader';
import MemberNav from './MemberNav';
import SocialLinks from './SocialLinks';

export default function SmartHeader({ slug, navItems, contact }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#0f0c29]/95 via-[#302b63]/95 to-[#24243e]/95 backdrop-blur-md border-b border-white/10">
      <div className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2 sm:py-3">
        <div className="flex items-center justify-between max-w-full">
          {/* Profile image + name as link to member home */}
          <Link href={`/member/${slug}`} className="group flex items-center cursor-pointer select-none flex-shrink-0" title="Go to Member Home">
            <span className="transition-transform group-hover:scale-105 group-hover:drop-shadow-lg">
              <AnimatedHeader slug={slug} />
            </span>
          </Link>

          {/* Navigation Buttons - Right Side */}
          <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0 min-w-0">
            {/* Social Links - Compact */}
            {contact && (
              <div className="hidden sm:flex items-center mr-1 xs:mr-2">
                <SocialLinks contact={contact} />
              </div>
            )}
            
            <MemberNav slug={slug} navItems={navItems} />
            
            {/* Static Circle Animation */}
            <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center ml-1 xs:ml-2 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 