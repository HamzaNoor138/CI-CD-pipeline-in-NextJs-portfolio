"use client";

import { useState } from 'react';
import { FaTools, FaCode, FaLayerGroup, FaPalette, FaDatabase, FaWrench } from 'react-icons/fa';

export default function SkillsFilter({ skills, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categoryIcons = {
    all: <FaTools className="text-lg" />,
    frontend: <FaCode className="text-lg" />,
    backend: <FaDatabase className="text-lg" />,
    fullstack: <FaLayerGroup className="text-lg" />,
    design: <FaPalette className="text-lg" />,
    other: <FaWrench className="text-lg" />
  };

  const categoryGradients = {
    all: 'from-violet-500 via-purple-500 to-indigo-500',
    frontend: 'from-blue-500 via-cyan-500 to-teal-500',
    backend: 'from-orange-500 via-red-500 to-pink-500',
    fullstack: 'from-green-500 via-emerald-500 to-teal-500',
    design: 'from-pink-500 via-rose-500 to-purple-500',
    other: 'from-gray-500 via-slate-500 to-zinc-500'
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category?.toLowerCase() === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Unique color combinations for each category
  const categoryColors = {
    frontend: { icon: '#00b4d8', progress: 'from-[#00b4d8] to-[#00cec9]', border: '#00b4d8' },
    backend: { icon: '#fd79a8', progress: 'from-[#fd79a8] to-[#fdcb6e]', border: '#fd79a8' },
    devops: { icon: '#6c5ce7', progress: 'from-[#6c5ce7] to-[#a29bfe]', border: '#6c5ce7' },
    design: { icon: '#00cec9', progress: 'from-[#00cec9] to-[#55a3ff]', border: '#00cec9' },
    tools: { icon: '#fdcb6e', progress: 'from-[#fdcb6e] to-[#e17055]', border: '#fdcb6e' },
    default: { icon: '#00b4d8', progress: 'from-[#00b4d8] to-[#00cec9]', border: '#00b4d8' }
  };

  const getCategoryColor = (category) => {
    return categoryColors[category?.toLowerCase()] || categoryColors.default;
  };

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const gradient = categoryGradients[cat] || categoryGradients.other;
          const icon = categoryIcons[cat] || categoryIcons.other;
          
          return (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold shadow-lg border-2 flex items-center gap-2 backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                isActive 
                  ? `bg-gradient-to-r ${gradient} text-white border-transparent shadow-[0_8px_25px_rgba(0,0,0,0.3)]` 
                  : 'bg-white/10 text-gray-300 border-white/20 hover:border-white/40 hover:bg-white/20'
              }`}
              style={{ letterSpacing: '0.04em' }}
            >
              {icon}
              {cat === 'all' ? 'All Skills' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => {
          const colors = getCategoryColor(skill.category);
          return (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 rounded-xl border border-white/20 transition-all duration-200 ease-in-out relative overflow-hidden backdrop-blur-xl shadow-lg min-h-[90px] hover:scale-[1.02] hover:border-[#6c5ce7] hover:shadow-[0_8px_32px_rgba(108,92,231,0.4)]"
              style={{ 
                background: 'linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.9) 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none" />
              <div className="relative z-10 flex items-center w-full">
                <span className="text-3xl md:text-4xl drop-shadow-lg flex-shrink-0 mr-2 md:mr-4" style={{ color: colors.icon }}>{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-base md:text-lg font-extrabold text-white tracking-wide">
                      {skill.name}
                    </h3>
                    <span className="text-xs md:text-sm font-bold" style={{ color: colors.icon }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full rounded-full shadow"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(to right, ${colors.icon}, ${colors.progress.split('to-[')[1].replace(']', '')})`
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                    {skill.category}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
} 