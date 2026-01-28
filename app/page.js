import fs from 'fs/promises';
import path from 'path';

async function getTeamData() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'team.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export const metadata = {
  title: 'Muhammad Faiq Portfolio | Full Stack Developer | Crafting Digital Excellence',
  description: 'Award-winning Full Stack & Mobile App Developer specializing in MERN stack, React Native, Flutter, and cross-platform development. Expert in building scalable web applications and mobile apps for iOS and Android.',
};

export default async function Home() {
  try {
    const teamData = await getTeamData();
    


    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
          {/* Floating Elements - Responsive positioning */}
          <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#fd79a8] rounded-full animate-pulse"></div>
          <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-[#00cec9] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 w-2 h-2 bg-[#a29bfe] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-4 h-4 sm:w-5 sm:h-5 bg-[#ffa500] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>

          {/* Main Content */}
          <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
            {/* Main Heading - Enhanced responsive scaling */}
                                      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight animate-slide-up">
               <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text block">
                 Muhammad Faiq
               </span>
               <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white block mt-1 md:mt-2">
                 Full Stack Developer
               </span>
             </h1>

                                      {/* Compelling Subtitle - Enhanced mobile text sizing */}
             <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed animate-slide-up-delay px-1 sm:px-2 md:px-0">
               Innovative Full-Stack Developer with 3+ years of experience delivering high-performance, scalable, and SEO-optimized digital solutions with precision, creativity, and a commitment to excellence.
             </p>

            {/* Key Highlights - Enhanced responsive layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-12 w-full max-w-5xl mx-auto animate-slide-up-delay-2">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl xs:text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-1 sm:mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-xs sm:text-sm">100/100 Lighthouse scores with optimized performance</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl xs:text-2xl sm:text-3xl mb-2 sm:mb-3">🎨</div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-1 sm:mb-2">Beautiful Design</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Stunning UI/UX that captivates and converts</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="text-xl xs:text-2xl sm:text-3xl mb-2 sm:mb-3">🚀</div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-1 sm:mb-2">Scalable Solutions</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Built to grow with your business needs</p>
              </div>
            </div>

            {/* CTA Buttons - Enhanced responsive stacking */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up-delay-3 px-2 xs:px-3 sm:px-0 max-w-md sm:max-w-none mx-auto">
              <a 
                href={`/member/${teamData[0].slug}`}
                className="group bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm xs:text-base sm:text-lg shadow-2xl hover:shadow-[#6c5ce7]/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Portfolio
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a 
                href={`/member/${teamData[0].slug}/contact`}
                className="group border-2 border-[#6c5ce7] px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm xs:text-base sm:text-lg hover:bg-[#6c5ce7]/20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <span className="group-hover:rotate-12 transition-transform">📧</span>
                </span>
              </a>
            </div>

            {/* Scroll Indicator - Hidden on very small screens */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>



        {/* Footer */}
        <footer className="relative py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-8 lg:px-12 border-t border-white/10">
          <div className="w-full max-w-7xl mx-auto text-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
                                            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                 <span className="bg-gradient-to-r from-[#a29bfe] to-[#00cec9] text-transparent bg-clip-text">
                   Ready to Build Something Amazing?
                 </span>
               </h3>
              <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-xs xs:text-sm sm:text-base">
                Let's transform your ideas into stunning digital reality
              </p>
            </div>
            
            <div className="text-gray-400 text-xs sm:text-sm">
              <p className="mb-1 sm:mb-2">Built with ❤️ by Kheej Ch</p>
              <p>© {new Date().getFullYear()} Kheej Ch. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Error Loading Page</h1>
          <p className="text-gray-300 mb-4">Something went wrong. Please try again later.</p>
        </div>
      </main>
    );
  }
}
