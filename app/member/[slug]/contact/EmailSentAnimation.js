"use client";

import dynamic from 'next/dynamic';
import emailSentAnimationData from '/public/animations/Email Sent.json';

// Dynamically import Lottie to reduce bundle size
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-full bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] animate-pulse shadow-2xl flex items-center justify-center">
      <div className="text-8xl animate-bounce">✅</div>
    </div>
  )
});

const EmailSentAnimation = ({ isVisible, onComplete }) => {
  if (!isVisible) {
    return null;
  }

  // Auto-hide after 3 seconds
  setTimeout(() => {
    onComplete();
  }, 3000);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full mx-4">
        {/* Email Sent Lottie Animation */}
        <div className="w-full h-64 flex items-center justify-center">
          <Lottie
            animationData={emailSentAnimationData}
            loop={false}
            autoplay={true}
            className="w-full h-full"
            style={{ backgroundColor: 'transparent' }}
            onComplete={onComplete}
          />
        </div>
        
        {/* Success Message */}
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] text-transparent bg-clip-text">
              Email Sent Successfully!
            </span>
          </h3>
          <p className="text-gray-300 text-sm">
            Thank you for your message. I'll get back to you soon!
          </p>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl" 
             style={{
               background: 'linear-gradient(120deg,rgba(162,155,254,0.1) 0%,rgba(0,206,201,0.08) 100%)',
               zIndex: -1
             }} />
      </div>
    </div>
  );
};

export default EmailSentAnimation; 