import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function SocialLinks({ contact }) {
  return (
    <div className="flex items-center gap-2">
      {contact.upwork && (
        <a
          href={contact.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600/40 to-teal-700/30 border border-emerald-400/50 backdrop-blur-md hover:bg-emerald-700 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.8)] hover:border-emerald-300 transition-all duration-300 group hover:scale-110 hover:-translate-y-0.5 active:scale-95"
          title="Upwork"
        >
          <FaBriefcase className="w-3 h-3 text-emerald-200 group-hover:text-white transition-colors duration-300" />
        </a>
      )}
    </div>
  );
} 