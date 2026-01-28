export default function GetInTouchButton() {
  return (
    <div className="mt-8">
      <a
        href="#contact-section"
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(108,92,231,0.6)] transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-[#6c5ce9]/50 cursor-pointer"
      >
        <span className="text-2xl">💬</span>
        Get In Touch
        <span className="text-2xl">→</span>
      </a>
    </div>
  );
}
