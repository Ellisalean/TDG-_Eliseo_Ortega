
import React, { useState, useEffect } from 'react';
import { Slide, RevealItem, ChartData } from '../types';
import * as LucideIcons from 'lucide-react';
import { useLessonStore } from '../store/useLessonStore';

interface SlideRendererProps {
  slide: Slide;
}

const InteractivePieChart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  let currentAngle = 0;

  return (
    <div className="relative w-full aspect-square max-w-[280px] lg:max-w-[300px] mx-auto group">
      <div className="absolute inset-4 bg-black/10 rounded-full blur-2xl translate-y-6 scale-90" />
      <svg viewBox="0 0 100 100" className="w-full h-full transform-gpu rotate-[-90deg] transition-transform duration-1000 group-hover:rotate-[-85deg]">
        {data.map((slice, i) => {
          if (slice.value === 0) return null;
          const startAngle = currentAngle;
          const sliceAngle = (slice.value / total) * 360;
          currentAngle += sliceAngle;
          const x1 = 50 + 40 * Math.cos((Math.PI * startAngle) / 180);
          const y1 = 50 + 40 * Math.sin((Math.PI * startAngle) / 180);
          const x2 = 50 + 40 * Math.cos((Math.PI * (startAngle + sliceAngle)) / 180);
          const y2 = 50 + 40 * Math.sin((Math.PI * (startAngle + sliceAngle)) / 180);
          const largeArcFlag = sliceAngle > 180 ? 1 : 0;
          return (
            <path
              key={i}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              fill={slice.color}
              className="transition-all duration-500 hover:scale-105 hover:brightness-110 cursor-pointer drop-shadow-lg"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <title>{`${slice.label}: ${slice.value}%`}</title>
            </path>
          );
        })}
        <circle cx="50" cy="50" r="40" fill="transparent" className="pointer-events-none" />
      </svg>
    </div>
  );
};

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  if (!slide) return null;

  const { markSlideComplete, currentSlideIndex } = useLessonStore();
  const [activeSidePanel, setActiveSidePanel] = useState<number | null>(null);
  const [internalStep, setInternalStep] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<RevealItem | null>(null);
  const [expandedItem, setExpandedItem] = useState<RevealItem | null>(null);
  const [isAppClosing, setIsAppClosing] = useState(false);

  const INSTITUTIONAL_LOGO = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/4145aa75-8804-4b69-be21-6b0d19b112fc_rw_1200.png?h=706056eb9bf36d26c5824fdad34f200c";
  const AUTHOR_PHOTO = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e55dc68e-0118-4ad8-8a09-0fc429596fe9_rw_1200.png?h=83fc3bc4bda6b48dfd55e8691ac9811d";

  useEffect(() => {
    setActiveSidePanel(null);
    setInternalStep(0);
    setActiveHotspot(null);
    setExpandedItem(null);
  }, [currentSlideIndex, slide.id]);

  const renderIcon = (iconName: string, size = 24) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={size} /> : <LucideIcons.Info size={size} />;
  };

  if (slide.type === 'intro') {
    return (
      <div className="w-full h-full flex flex-col lg:flex-row bg-white overflow-hidden animate-in fade-in duration-1000">
         <div className="flex-1 bg-white p-12 lg:p-20 flex flex-col justify-between relative z-10 animate-in slide-in-from-left-20 duration-1000">
            <div className="mb-4"><img src={INSTITUTIONAL_LOGO} alt="UNA" className="h-14 lg:h-18 w-auto object-contain" /></div>
            <div className="space-y-8">
               <div className="space-y-4">
                  <span className="text-red-600 font-black uppercase tracking-[0.6em] text-[10px] lg:text-xs bg-red-600/5 px-3 py-1 rounded-full">{slide.subtitle}</span>
                  <h1 className="text-5xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-slate-900 leading-[0.85] font-outfit">
                    {slide.title.split(':')[0]} <br/>
                    <span className="text-red-600">{slide.title.split(':')[1]?.trim() || ''}</span>
                  </h1>
               </div>
               <div className="max-w-3xl space-y-6"><p className="text-xl lg:text-2xl font-semibold text-slate-600 leading-tight border-l-8 border-red-600 pl-8 py-2">{slide.content}</p></div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-6 text-slate-900">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-50 shadow-lg">
                     <img src={AUTHOR_PHOTO} className="w-full h-full object-cover" alt="Eliseo Ortega" />
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Autor</p>
                     <h4 className="text-lg font-black uppercase leading-none">Eliseo Ortega</h4>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex-[0.8] lg:flex-1 relative animate-in slide-in-from-right-20 duration-1000">
            <img src={slide.visual.source} className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
         </div>
      </div>
    );
  }

  if (slide.type === 'split-interactive-cards' && slide.interaction?.revealItems) {
    return (
      <div className="w-full h-full flex flex-col bg-[#f0f2f5] p-8 lg:p-16 animate-in fade-in duration-700 overflow-hidden relative">
        <div className="max-w-7xl mx-auto w-full mb-8">
           <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs">{slide.subtitle}</span>
           <h2 className="text-4xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none mt-2">{slide.title}</h2>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto relative h-full items-center">
           {slide.interaction.revealItems.map((item, idx) => {
             const isExpanded = activeSidePanel === idx;
             return (
               <div key={idx} className="relative h-full max-h-[500px]">
                  <div className={`w-full h-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex transition-all duration-500 ${isExpanded ? 'opacity-0 scale-95' : 'opacity-100'}`}>
                     <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.text}</p>
                     </div>
                     <button onClick={() => { setActiveSidePanel(idx); markSlideComplete(currentSlideIndex); }} className="w-16 lg:w-24 bg-red-600 hover:bg-red-700 transition-colors flex flex-col items-center justify-center text-white shrink-0">
                        <LucideIcons.HelpCircle size={32} />
                        <span className="text-[10px] font-black uppercase tracking-widest rotate-90 whitespace-nowrap mt-8">VER MÁS</span>
                     </button>
                  </div>
                  <div className={`absolute inset-0 z-20 bg-red-600 rounded-2xl shadow-2xl flex transition-all duration-700 ${isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                     <div className="flex-1 p-10 lg:p-16 flex flex-col text-white overflow-hidden">
                        <div className="p-4 bg-white/20 w-fit rounded-2xl mb-8 shrink-0">{renderIcon('Lightbulb', 32)}</div>
                        <h4 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-6 leading-none shrink-0">{item.title}</h4>
                        <div className="w-16 h-1 bg-white/40 mb-8 rounded-full shrink-0" />
                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 text-white/90">
                           <p className="text-base lg:text-lg font-medium leading-relaxed whitespace-pre-wrap">{item.longContent}</p>
                        </div>
                     </div>
                     <button onClick={() => setActiveSidePanel(null)} className="w-16 lg:w-24 bg-red-700 hover:bg-black transition-colors flex items-center justify-center text-white shrink-0">
                        <LucideIcons.X size={32} />
                     </button>
                  </div>
               </div>
             );
           })}
        </div>
        <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 10px; }`}</style>
      </div>
    );
  }

  // Common Layout for other types
  const isLightLayout = slide.type === 'chart-results' || slide.type === 'hotspot-reveal';
  return (
    <div className={`h-full w-full relative flex flex-col overflow-y-auto custom-scrollbar ${isLightLayout ? 'bg-[#f8fafc]' : 'bg-[#111111]'}`}>
      {slide.visual.position === 'background' && !isLightLayout && (
        <div className="absolute inset-0 z-0"><img src={slide.visual.source} className="w-full h-full object-cover" alt="" /><div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" /></div>
      )}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center p-8 lg:p-12 max-w-7xl mx-auto w-full`}>
        {slide.type === 'visual-info' && (
          <div className="w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-center">
            <div className="flex-1 space-y-10 animate-in slide-in-from-left-12 duration-1000">
               <div className="space-y-4">
                  <span className="text-red-500 font-black uppercase tracking-widest text-xs">{slide.subtitle}</span>
                  <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">{slide.title}</h2>
                  <div className="w-20 h-2 bg-red-600 rounded-full" />
               </div>
               <div className="space-y-6">
                 <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed opacity-90">{slide.content}</p>
                 {slide.bullets && (
                   <ul className="space-y-4">
                     {slide.bullets.map((b, i) => (
                       <li key={i} className="flex items-start gap-4 text-lg lg:text-xl text-white/80"><div className="mt-1.5 shrink-0 w-3 h-3 bg-red-600 rounded-full" />{b}</li>
                     ))}
                   </ul>
                 )}
               </div>
            </div>
            <div className="flex-1 w-full max-w-2xl aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-1000">
               <img src={slide.visual.source} className="w-full h-full object-cover" alt="" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideRenderer;
