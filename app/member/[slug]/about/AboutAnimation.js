

const AboutAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Static Animation Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="w-full h-64 rounded-full bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] animate-pulse shadow-2xl flex items-center justify-center">
          <div className="text-8xl animate-bounce">🚀</div>
        </div>
      </div>
      
      {/* Subtle background glow to match the page theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a29bfe]/5 via-[#fd79a8]/3 to-[#00cec9]/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AboutAnimation; 