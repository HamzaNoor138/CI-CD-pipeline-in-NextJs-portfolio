"use client";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComments, FaRocket, FaStar, FaTimes, FaCopy, FaCheck } from "react-icons/fa";
import EmailSentAnimation from "./EmailSentAnimation";
import LoadingAnimation from "./LoadingAnimation";

export default function ContactForm({ contactEmail }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show popup instead of submitting
    setShowPopup(true);
  };

  const handleCopyEmail = () => {
    if (contactEmail) {
      navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <div className="relative">
      {/* Beautiful Background Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/20 via-[#fd79a8]/20 to-[#00cec9]/20 rounded-3xl blur-3xl"></div>
      
      {/* Main Form Container */}
      <div className="relative bg-gradient-to-br from-[#18192a]/95 to-[#23234a]/95 backdrop-blur-xl rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-white/20 shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-4 xs:mb-6">
          <div className="relative inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full mb-2 xs:mb-3 shadow-lg">
            <FaRocket className="text-lg xs:text-xl text-white animate-bounce" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] opacity-75 animate-pulse"></div>
          </div>
          <h3 className="text-lg xs:text-xl font-bold text-white mb-1 xs:mb-2 bg-gradient-to-r from-[#a29bfe] to-[#00cec9] bg-clip-text text-transparent">Let's Start a Project</h3>
          <p className="text-gray-300 text-xs">Share your vision and I'll bring it to life</p>
        </div>

        {/* Form Fields */}
        <form className="space-y-4 xs:space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <div className="relative">
                <FaUser className={`text-lg transition-all duration-300 ${
                  focusedField === 'name' ? 'text-[#6c5ce7] scale-110' : 'text-gray-400'
                }`} />
                                 {focusedField === 'name' && (
                   <FaStar className="absolute -top-1 -right-1 text-xs text-[#6c5ce7] animate-pulse" />
                 )}
              </div>
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 
                         focus:outline-none focus:border-[#6c5ce7] focus:bg-gradient-to-r focus:from-white/10 focus:to-white/20 focus:shadow-lg focus:shadow-[#6c5ce7]/30
                         transition-all duration-300 backdrop-blur-sm group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-[#6c5ce7]/20"
              placeholder="Enter your full name"
              required
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6c5ce7]/10 via-[#fd79a8]/5 to-[#00cec9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Email Field */}
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <div className="relative">
                <FaEnvelope className={`text-lg transition-all duration-300 ${
                  focusedField === 'email' ? 'text-[#fd79a8] scale-110' : 'text-gray-400'
                }`} />
                                 {focusedField === 'email' && (
                   <FaStar className="absolute -top-1 -right-1 text-xs text-[#fd79a8] animate-pulse" />
                 )}
              </div>
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 
                         focus:outline-none focus:border-[#fd79a8] focus:bg-gradient-to-r focus:from-white/10 focus:to-white/20 focus:shadow-lg focus:shadow-[#fd79a8]/30
                         transition-all duration-300 backdrop-blur-sm group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-[#fd79a8]/20"
              placeholder="your.email@example.com"
              required
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fd79a8]/10 via-[#6c5ce7]/5 to-[#00cec9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#fd79a8] via-[#6c5ce7] to-[#00cec9] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Message Field */}
          <div className="group relative">
            <div className="absolute top-4 left-4 flex items-center pointer-events-none">
              <div className="relative">
                <FaComments className={`text-lg transition-all duration-300 ${
                  focusedField === 'message' ? 'text-[#00cec9] scale-110' : 'text-gray-400'
                }`} />
                                 {focusedField === 'message' && (
                   <FaStar className="absolute -top-1 -right-1 text-xs text-[#00cec9] animate-pulse" />
                 )}
              </div>
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 
                         focus:outline-none focus:border-[#00cec9] focus:bg-gradient-to-r focus:from-white/10 focus:to-white/20 focus:shadow-lg focus:shadow-[#00cec9]/30
                         transition-all duration-300 backdrop-blur-sm resize-none group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-[#00cec9]/20"
              rows={5}
              placeholder="Tell me about your project, goals, and vision..."
              required
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00cec9]/10 via-[#fd79a8]/5 to-[#6c5ce7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00cec9] via-[#fd79a8] to-[#6c5ce7] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] 
                         text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#6c5ce7]/30 
                         transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 
                         focus:outline-none focus:ring-4 focus:ring-[#6c5ce7]/30 disabled:opacity-60 disabled:cursor-not-allowed
                         disabled:transform-none disabled:shadow-lg"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00cec9] via-[#6c5ce7] to-[#fd79a8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg group-hover:animate-bounce" />
                    <span className="text-lg">Send Message</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Result Message */}
          {result && (
            <div className={`text-center py-4 px-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
              result.success 
                ? "bg-green-500/20 border-green-500/30 text-green-300 shadow-lg shadow-green-500/20" 
                : "bg-red-500/20 border-red-500/30 text-red-300 shadow-lg shadow-red-500/20"
            }`}>
              <div className="flex items-center justify-center gap-2">
                <div className={`w-3 h-3 rounded-full ${result.success ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                <span className="font-semibold">{result.message}</span>
              </div>
            </div>
          )}
        </form>

        {/* Enhanced Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#fd79a8] to-[#6c5ce7] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-[#00cec9] to-[#fd79a8] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 -left-1 w-2 h-2 bg-gradient-to-r from-[#fd79a8] to-[#6c5ce7] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Loading Animation */}
      <LoadingAnimation isVisible={loading} />
      
      {/* Email Sent Animation */}
      <EmailSentAnimation 
        isVisible={showAnimation} 
        onComplete={handleAnimationComplete} 
      />

      {/* Server Down Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          {/* Popup Container */}
          <div className="relative w-full max-w-md bg-gradient-to-br from-[#18192a] via-[#23234a] to-[#18192a] rounded-3xl shadow-2xl border border-white/20 overflow-hidden animate-scale-in">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6c5ce7]/20 via-[#fd79a8]/20 to-[#00cec9]/20 animate-pulse"></div>
            
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <FaTimes className="text-white/80 group-hover:text-white transition-colors" />
            </button>

            {/* Content */}
            <div className="relative p-6 xs:p-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <FaEnvelope className="text-3xl text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl xs:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#a29bfe] via-[#fd79a8] to-[#00cec9] bg-clip-text text-transparent">
                Server Currently Down
              </h3>

              {/* Message */}
              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                The email server is currently experiencing issues. Please send your message directly via email.
              </p>

              {/* Email Display */}
              {contactEmail && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Send email to:</label>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/20 rounded-xl p-4 group hover:border-[#6c5ce7]/50 transition-all duration-300">
                    <FaEnvelope className="text-[#6c5ce7] text-lg flex-shrink-0" />
                    <a 
                      href={`mailto:${contactEmail}`}
                      className="flex-1 text-white font-medium hover:text-[#00cec9] transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] rounded-lg hover:scale-110 transition-all duration-300 group/copy"
                      title="Copy email"
                    >
                      {emailCopied ? (
                        <FaCheck className="text-white text-lg" />
                      ) : (
                        <FaCopy className="text-white text-lg group-hover/copy:scale-110 transition-transform" />
                      )}
                    </button>
                  </div>
                  {emailCopied && (
                    <p className="text-green-400 text-sm text-center mt-2 animate-fade-in">
                      Email copied to clipboard!
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${contactEmail}?subject=Contact from Portfolio&body=Hello,%0D%0A%0D%0A${encodeURIComponent(form.message || '')}%0D%0A%0D%0ABest regards,%0D%0A${encodeURIComponent(form.name || '')}`}
                  className="flex-1 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] text-white font-bold py-3 px-6 rounded-xl text-center hover:shadow-lg hover:shadow-[#6c5ce7]/50 transition-all duration-300 transform hover:scale-105"
                >
                  Open Email Client
                </a>
                <button
                  onClick={handleClosePopup}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#fd79a8] to-[#6c5ce7] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-[#00cec9] to-[#fd79a8] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      )}
    </div>
  );
} 