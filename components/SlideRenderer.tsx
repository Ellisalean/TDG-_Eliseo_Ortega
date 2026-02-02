
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
      {/* 3D-like perspective shadow */}
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
      
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-4">
         {data.map((slice, i) => (
           <div key={i} className="flex items-center gap-2">
             <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: slice.color }} />
             <span className="text-[9px] font-black uppercase text-slate-500">{slice.label}</span>
           </div>
         ))}
      </div>
    </div>
  );
};

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  if (!slide) return null;

  const { markSlideComplete, currentSlideIndex, resetLesson } = useLessonStore();
  const [expandedItem, setExpandedItem] = useState<RevealItem | null>(null);
  
  const [internalStep, setInternalStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<RevealItem | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isAppClosing, setIsAppClosing] = useState(false);
  const [activeSidePanel, setActiveSidePanel] = useState<number | null>(null);

  const INSTITUTIONAL_LOGO = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/4145aa75-8804-4b69-be21-6b0d19b112fc_rw_1200.png?h=706056eb9bf36d26c5824fdad34f200c";
  const AUTHOR_PHOTO = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e55dc68e-0118-4ad8-8a09-0fc429596fe9_rw_1200.png?h=83fc3bc4bda6b48dfd55e8691ac9811d";
  const TUTOR_PHOTO = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c04d7b4f-5d0b-49c6-924f-96644626c51b_rw_1200.png?h=7a5ce7d96efc749143c082ade84e1797"; 

  useEffect(() => {
    setInternalStep(0);
    setActiveTab(0);
    setActiveHotspot(null);
    setExpandedItem(null);
    setFlippedCards({});
    setIsAppClosing(false);
    setActiveSidePanel(null);
  }, [currentSlideIndex, slide.id]);

  const toggleCard = (idx: number) => {
    setFlippedCards(prev => {
      const newState = { ...prev, [idx]: !prev[idx] };
      const flippedCount = Object.values(newState).filter(Boolean).length;
      if (flippedCount >= 1) markSlideComplete(currentSlideIndex);
      return newState;
    });
  };

  const handleAbandon = () => {
    setIsAppClosing(true);
    setTimeout(() => {
      window.location.href = "about:blank";
    }, 800);
  };

  const renderIcon = (iconName: string, size = 24) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent && (typeof IconComponent === 'function' || typeof IconComponent === 'object')) {
      return <IconComponent size={size} />;
    }
    return <LucideIcons.Info size={size} />;
  };

  const isBg = slide.visual.position === 'background';

  if (isAppClosing) {
    return (
      <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
         <div className="w-24 h-24 bg-red-600 rounded-full animate-ping opacity-25 absolute" />
         <p className="text-white font-black uppercase tracking-[0.8em] animate-pulse">Sesión Finalizada</p>
      </div>
    );
  }

  if (slide.id === 'slide-finish' || slide.id === 'slide-29' || slide.id === 'slide-30') {
    const isSlide29 = slide.id === 'slide-29';
    return (
      <div className={`h-full w-full relative flex items-center ${isSlide29 ? 'justify-start px-12 lg:px-32' : 'justify-center'} overflow-hidden bg-[#111111] p-12 lg:p-24`}>
         <div className="absolute inset-0 z-0">
           <img src={slide.visual.source} className="w-full h-full object-cover opacity-30" alt="" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]" />
         </div>
         <div className={`relative z-10 ${isSlide29 ? 'text-left' : 'text-center'} space-y-12 animate-in zoom-in-95 duration-1000 max-w-4xl`}>
            {!isSlide29 && (
              <div className="inline-block p-6 bg-red-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(239,68,68,0.5)] animate-bounce mb-8">
                 {renderIcon('Award', 64)}
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
              <p className="text-xl lg:text-3xl font-bold text-red-500 uppercase tracking-[0.4em]">{slide.subtitle}</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed opacity-90">{slide.content}</p>
            </div>
            {!isSlide29 && (
              <div className="flex flex-wrap justify-center gap-6 pt-10">
                 <button onClick={resetLesson} className="px-12 py-6 bg-white/5 border border-white/10 rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-red-600 transition-all flex items-center gap-3">
                   {renderIcon('RotateCcw', 18)} Reiniciar Presentación
                 </button>
                 <button onClick={handleAbandon} className="px-12 py-6 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.4em] shadow-xl hover:scale-105 transition-all">
                   Salir
                 </button>
              </div>
            )}
         </div>
      </div>
    );
  }

  const isCriticalAnalysis = slide.id === 'slide-23';
  const isLightLayout = slide.type === 'chart-results' || slide.type === 'hotspot-reveal' || slide.type === 'keynotes-grid' || slide.type === 'interactive-reveal';

  return (
    <div className={`h-full w-full relative flex flex-col overflow-y-auto custom-scrollbar ${isLightLayout ? 'bg-[#f8fafc]' : 'bg-[#111111]'}`}>
      {isBg && slide.type !== 'intro' && !isLightLayout && (
        <div className="absolute inset-0 z-0">
          <img src={slide.visual.source} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
        </div>
      )}

      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center ${slide.type === 'intro' || slide.type === 'split-slider' || slide.type === 'image-list-reveal' || slide.type === 'info-menu-reveal' || slide.type === 'tabs-reveal' || slide.type === 'stepped-overlay' || slide.type === 'chart-results' || slide.type === 'interactive-video' || slide.type === 'timeline' || slide.type === 'flashcards' || slide.type === 'split-reveal-cards' || slide.type === 'hotspot-reveal' || slide.type === 'split-interactive-cards' || slide.type === 'keynotes-grid' || slide.type === 'interactive-reveal' ? 'p-0' : 'p-8 lg:p-12 max-w-7xl mx-auto w-full'}`}>
        
        {slide.type === 'intro' && (
          <div className="w-full h-full flex flex-col lg:flex-row bg-white overflow-hidden animate-in fade-in duration-1000">
             <div className="flex-1 bg-white p-12 lg:p-20 flex flex-col justify-between relative z-10 animate-in slide-in-from-left-20 duration-1000">
                <div className="mb-4">
                   <img src={INSTITUTIONAL_LOGO} alt="UNA" className="h-14 lg:h-18 w-auto object-contain" />
                </div>
                <div className="space-y-8">
                   <div className="space-y-4">
                      <span className="text-red-600 font-black uppercase tracking-[0.6em] text-[10px] lg:text-xs bg-red-600/5 px-3 py-1 rounded-full">
                         {slide.subtitle}
                      </span>
                      <h1 className="text-5xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-slate-900 leading-[0.85] font-outfit">
                         Universidad <br/>
                         Nacional <br/>
                         <span className="text-red-600">Abierta</span>
                      </h1>
                   </div>
                   <div className="max-w-3xl space-y-6">
                      <p className="text-xl lg:text-2xl font-semibold text-slate-600 leading-tight border-l-8 border-red-600 pl-8 py-2">
                         {slide.title}
                      </p>
                   </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-6">
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-50 shadow-lg">
                         <img src={AUTHOR_PHOTO} className="w-full h-full object-cover" alt="Eliseo Ortega" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Maestrante / Autor</p>
                         <h4 className="text-lg font-black text-slate-800 uppercase leading-none">Eliseo Ortega</h4>
                         <p className="text-[10px] font-bold text-red-600 uppercase">Maestría en Educación UNA</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-50 shadow-lg">
                         <img src={TUTOR_PHOTO} className="w-full h-full object-cover" alt="Helayne Zuleyma Pérez Bethelmy" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Tutora</p>
                         <h4 className="text-lg font-black text-slate-800 uppercase leading-none">Helayne Zuleyma Pérez Bethelmy</h4>
                         <p className="text-[10px] font-bold text-red-600 uppercase">Asesoría Académica</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex-[0.8] lg:flex-1 relative animate-in slide-in-from-right-20 duration-1000">
                <img src={slide.visual.source} className="absolute inset-0 w-full h-full object-cover" alt="UNA" />
                <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent hidden lg:block" />
                <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Aragua, Venezuela</p>
                   <p className="text-sm font-bold uppercase">2024</p>
                </div>
             </div>
          </div>
        )}

        {slide.type === 'interactive-reveal' && slide.interaction?.type === 'grid-cards' && (
           <div className="w-full h-full flex flex-col p-8 lg:p-20 overflow-y-auto custom-scrollbar-dark animate-in fade-in duration-700">
             <div className="max-w-7xl mx-auto w-full mb-12 space-y-4">
                <p className="text-red-500 font-bold uppercase tracking-widest text-sm">{slide.subtitle}</p>
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                  {slide.title}
                </h2>
             </div>
             <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {slide.interaction.revealItems?.map((item, i) => (
                   <div key={i} className="group relative h-[450px] rounded-[3rem] overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl" onClick={() => { setExpandedItem(item); markSlideComplete(currentSlideIndex); }}>
                      <img src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
                         <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-all shadow-lg">
                            {renderIcon(item.icon, 28)}
                         </div>
                         <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-red-500 transition-colors">{item.title}</h3>
                         <p className="text-white/80 font-medium leading-relaxed">{item.text}</p>
                      </div>
                   </div>
                ))}
             </div>
           </div>
        )}

        {slide.type === 'keynotes-grid' && (
          <div className="h-full w-full bg-[#f8fafc] flex flex-col p-6 lg:p-14 overflow-y-auto custom-scrollbar-dark animate-in fade-in duration-700">
            <div className="max-w-[1250px] mx-auto w-full mb-8 lg:mb-12 space-y-2">
               <p className="text-red-500 font-bold uppercase tracking-[0.35em] text-[10px] lg:text-xs animate-in slide-in-from-left-5 duration-700">
                  {slide.subtitle || 'PLAN DE ACCIÓN FORMAL'}
               </p>
               <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-[#0f172a] leading-[0.85] animate-in slide-in-from-left-8 duration-1000">
                 {slide.title}
               </h2>
            </div>

            <div className="max-w-[1250px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
               {slide.interaction?.revealItems?.map((item, idx) => (
                 <div key={idx} className="bg-white rounded-[1.8rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col transition-all hover:-translate-y-3 hover:shadow-[0_35px_70px_rgba(0,0,0,0.08)] duration-500 group border border-slate-50">
                    <div className="p-8 lg:p-10 flex flex-col items-center text-center gap-6 flex-1">
                       <div className="w-14 h-14 lg:w-18 lg:h-18 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                          {renderIcon(item.icon, 30)}
                       </div>
                       <div className="space-y-3">
                          <h3 className="text-base lg:text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight whitespace-pre-line">
                            {item.title}
                          </h3>
                          <div className="w-8 h-0.5 bg-red-100 mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
                       </div>
                       <p className="text-slate-500 text-[11px] lg:text-[14px] font-medium leading-relaxed opacity-80">
                          {item.text}
                       </p>
                    </div>
                    <button 
                      onClick={() => { setExpandedItem(item); markSlideComplete(currentSlideIndex); }}
                      className="bg-[#0f172a] hover:bg-red-600 py-4 lg:py-5 flex items-center justify-center gap-3 text-white transition-all duration-300 transform active:scale-95"
                    >
                       <LucideIcons.Search size={16} className="opacity-70" />
                       <span className="text-[10px] font-black uppercase tracking-[0.25em]">Ver detalles</span>
                    </button>
                 </div>
               ))}
            </div>
          </div>
        )}

        {slide.type === 'split-interactive-cards' && slide.interaction?.revealItems && (
          <div className="w-full h-full flex flex-col bg-[#f0f2f5] p-8 lg:p-16 animate-in fade-in duration-700 overflow-hidden relative">
            <div className="max-w-7xl mx-auto w-full mb-8">
               <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs">
                  {slide.subtitle}
               </span>
               <h2 className="text-4xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter mt-2">
                  {slide.title}
               </h2>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto h-full items-center">
               {slide.interaction.revealItems.map((item, idx) => {
                 const isExpanded = activeSidePanel === idx;

                 return (
                   <div key={idx} className="relative h-full max-h-[500px]">
                      {/* Main Card View */}
                      <div className={`w-full h-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex transition-all duration-500 ${isExpanded ? 'opacity-0 scale-95' : 'opacity-100'}`}>
                         <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-4">{item.title}</h3>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                               {item.text}
                            </p>
                         </div>
                         <button 
                            onClick={() => { setActiveSidePanel(idx); markSlideComplete(currentSlideIndex); }}
                            className="w-16 lg:w-24 bg-red-600 hover:bg-red-700 transition-colors flex flex-col items-center justify-center text-white shrink-0 group"
                         >
                            <div className="p-3 rounded-full bg-white/10 mb-8 group-hover:scale-110 transition-transform">
                               {renderIcon('HelpCircle', 32)}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest rotate-90 whitespace-nowrap mt-8 opacity-80 group-hover:opacity-100">VER MÁS</span>
                         </button>
                      </div>

                      {/* Expanded View Card / Overlay */}
                      <div className={`absolute inset-0 z-20 bg-red-600 rounded-2xl shadow-2xl flex transition-all duration-700 ${isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                         <div className="flex-1 p-10 lg:p-16 flex flex-col text-white overflow-hidden">
                            <div className="flex items-center gap-6 mb-8 shrink-0">
                               <div className="p-4 bg-white/20 rounded-2xl">
                                  {renderIcon(item.icon || 'FileText', 32)}
                               </div>
                               <h4 className="text-3xl lg:text-4xl font-black uppercase leading-none">{item.title}</h4>
                            </div>
                            <div className="flex-1 overflow-y-auto pr-4 text-white/95 custom-scrollbar-white">
                               <p className="text-base lg:text-xl font-medium leading-relaxed whitespace-pre-wrap">
                                  {item.longContent}
                                </p>
                            </div>
                         </div>
                         <button 
                            onClick={() => setActiveSidePanel(null)}
                            className="w-16 lg:w-24 bg-red-700 hover:bg-black transition-colors flex items-center justify-center text-white shrink-0"
                         >
                            <LucideIcons.X size={32} />
                         </button>
                      </div>
                   </div>
                 );
               })}
            </div>
          </div>
        )}

        {slide.type === 'chart-results' && slide.interaction?.revealItems && (
           <div className="w-full h-full flex items-center justify-center p-4 lg:p-10 bg-[#f8fafc]">
             <div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] lg:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden h-[85vh] lg:h-[650px] flex flex-col">
                <div className="p-4 lg:p-8 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#2a2a2a] relative z-20">
                   <div>
                      <h3 className="text-xl lg:text-3xl font-black uppercase text-white tracking-tighter leading-none">{slide.title}</h3>
                      <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mt-1">{slide.subtitle}</p>
                   </div>
                   {!isCriticalAnalysis && (
                     <div className="flex gap-2 lg:gap-3">
                        <button onClick={() => setInternalStep(Math.max(0, internalStep - 1))} className="p-2 lg:p-3 bg-white/5 rounded-xl text-white/60 hover:bg-red-600 hover:text-white transition-all disabled:opacity-10" disabled={internalStep === 0}>{renderIcon('ChevronLeft', 18)}</button>
                        <button onClick={() => { const n = Math.min(slide.interaction!.revealItems!.length - 1, internalStep + 1); setInternalStep(n); if (n === slide.interaction!.revealItems!.length - 1) markSlideComplete(currentSlideIndex); }} className="p-2 lg:p-3 bg-white/5 rounded-xl text-white/60 hover:bg-red-600 hover:text-white transition-all disabled:opacity-10" disabled={internalStep === slide.interaction.revealItems.length - 1}>{renderIcon('ChevronRight', 18)}</button>
                     </div>
                   )}
                </div>
                
                <div className="flex-1 relative overflow-hidden text-slate-900 flex flex-col bg-slate-50">
                   {isCriticalAnalysis ? (
                     <div className="h-full w-full flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-14 animate-in fade-in duration-700">
                        {/* Left: Interactive Pie Chart */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-10">
                           <div className="w-full">
                              <InteractivePieChart data={[
                                 { label: 'Acciones Liderazgo', value: 25, color: '#ef4444' },
                                 { label: 'Formación Docente', value: 25, color: '#b91c1c' },
                                 { label: 'Motivación Logro', value: 25, color: '#991b1b' },
                                 { label: 'Comunicación', value: 25, color: '#7f1d1d' }
                              ]} />
                           </div>
                           <p className="text-lg lg:text-xl font-black text-slate-800 italic text-center max-w-sm border-l-4 border-red-600 pl-4 bg-red-50 py-3 rounded-r-xl">
                              "Déficits estructurales que impactan la moral institucional"
                           </p>
                        </div>

                        {/* Right: Numbered List */}
                        <div className="flex-[1.2] flex flex-col justify-center gap-4 lg:gap-6 overflow-y-auto custom-scrollbar-dark pr-4">
                           {slide.interaction.revealItems.map((item, idx) => (
                              <button 
                                key={idx} 
                                onClick={() => setExpandedItem(item)}
                                className="group flex items-center gap-6 p-4 lg:p-6 bg-white border border-slate-200 rounded-[1.5rem] lg:rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all text-left"
                              >
                                 <div className="w-12 h-12 lg:w-16 lg:h-16 bg-red-50 text-red-600 rounded-2xl lg:rounded-3xl flex items-center justify-center text-2xl lg:text-4xl font-black shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                                    {idx + 1}
                                 </div>
                                 <div className="space-y-1">
                                    <h4 className="text-sm lg:text-lg font-black text-slate-900 uppercase leading-none group-hover:text-red-600 transition-colors">{item.title}</h4>
                                    <p className="text-xs lg:text-base text-slate-500 font-medium leading-tight opacity-75">{item.text}</p>
                                 </div>
                                 <div className="ml-auto p-2 bg-slate-50 rounded-full text-slate-300 group-hover:text-red-600 transition-all">
                                    {renderIcon('ArrowRight', 18)}
                                 </div>
                              </button>
                           ))}
                        </div>
                     </div>
                   ) : (
                     slide.interaction.revealItems.map((item, i) => (
                        <div key={i} className={`absolute inset-0 p-6 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center overflow-y-auto custom-scrollbar ${i === internalStep ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 z-0 pointer-events-none'}`}>
                            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8 lg:gap-10 animate-in zoom-in-95 duration-1000">
                               {item.chartData && <InteractivePieChart data={item.chartData} />}
                            </div>
                            <div className="flex-1 space-y-4 lg:space-y-6 flex flex-col justify-center text-left">
                               <div className="space-y-2">
                                  <div className="p-3 bg-red-600 w-fit rounded-xl shadow-lg text-white">{renderIcon(item.icon, 24)}</div>
                                  <h4 className="text-xl lg:text-3xl font-black uppercase tracking-tighter text-slate-900 leading-tight">{item.title}</h4>
                               </div>
                               <div className="relative p-4 lg:p-6 rounded-xl lg:rounded-2xl border-l-4 border-red-600 bg-red-50">
                                 <p className="text-base lg:text-xl font-black text-red-600 italic leading-snug">"{item.text}"</p>
                               </div>
                               <p className="text-sm lg:text-lg opacity-80 text-slate-600 font-medium leading-relaxed max-w-2xl whitespace-pre-wrap">{item.longContent}</p>
                               <div className="pt-2 flex items-center gap-3">
                                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">PROGRESO DIMENSIÓN</span>
                                  <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                                     <div className="h-full bg-red-600 transition-all duration-1000" style={{ width: `${((i + 1) / slide.interaction!.revealItems!.length) * 100}%` }} />
                                  </div>
                               </div>
                            </div>
                        </div>
                     ))
                   )}
                </div>
             </div>
           </div>
        )}

        {slide.type === 'hotspot-reveal' && slide.interaction?.revealItems && (
          <div className="w-full h-full flex flex-col lg:flex-row bg-[#f8fafc] animate-in fade-in duration-700 overflow-hidden">
             {/* Left Info Panel */}
             <div className="w-full lg:w-[35%] bg-white p-12 lg:p-20 flex flex-col justify-center relative border-r border-slate-100 z-10">
                <div className="absolute top-0 left-0 w-full h-32 bg-slate-50 overflow-hidden -z-10 opacity-60">
                   <div className="absolute top-0 right-0 w-[200%] h-full bg-slate-100/50 -rotate-[15deg] translate-y-[-20%]" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-slate-50 overflow-hidden -z-10 opacity-60">
                   <div className="absolute top-0 right-0 w-[200%] h-full bg-slate-100/50 rotate-[25deg] translate-y-[40%]" />
                </div>

                <div className="space-y-6 lg:space-y-10 animate-in slide-in-from-left-8 duration-1000">
                   <div className="space-y-2">
                      <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">
                         {slide.subtitle || 'PLAN DE ACCIÓN'}
                      </span>
                      <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                         {slide.title}
                      </h2>
                   </div>
                   <div className="w-20 h-1.5 bg-red-600 rounded-full" />
                   <div className="space-y-6">
                      <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-6">
                         {slide.content}
                      </p>
                   </div>
                </div>
             </div>

             {/* Right Interactive Image Panel */}
             <div className="flex-1 relative bg-slate-200 group overflow-hidden">
                <img src={slide.visual.source} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-slate-900/10" />
                
                {slide.interaction.revealItems.map((item, idx) => (
                   <button 
                      key={idx} 
                      style={{ left: `${item.x}%`, top: `${item.y}%` }} 
                      onClick={() => setActiveHotspot(item)}
                      className="absolute z-20 group/btn -translate-x-1/2 -translate-y-1/2"
                   >
                      <div className="absolute inset-0 bg-white/40 rounded-full animate-ping scale-150" />
                      <div className={`relative w-8 h-8 lg:w-12 lg:h-12 ${activeHotspot === item ? 'bg-red-600 text-white scale-125' : 'bg-slate-900/90 text-white hover:bg-red-600'} rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-2 border-white/20`}>
                         <LucideIcons.Plus size={activeHotspot === item ? 24 : 20} className={`transition-transform duration-300 ${activeHotspot === item ? 'rotate-45' : ''}`} />
                      </div>
                      
                      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10 translate-y-2 group-hover/btn:translate-y-0 transition-transform">
                         {item.title}
                      </div>
                   </button>
                ))}
             </div>

             {activeHotspot && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300">
                   <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={() => setActiveHotspot(null)} />
                   <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden p-8 lg:p-14 flex flex-col gap-6 lg:gap-8 ring-1 ring-black/5">
                      <div className="flex items-start justify-between">
                         <div className="space-y-2">
                            <div className="p-3 bg-red-50 text-red-600 w-fit rounded-2xl mb-4">
                               {renderIcon(activeHotspot.icon || 'CheckCircle2', 32)}
                            </div>
                            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px]">RECOMENDACIÓN DETALLADA</span>
                            <h3 className="text-2xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                               {activeHotspot.title}
                            </h3>
                         </div>
                         <button onClick={() => setActiveHotspot(null)} className="p-2 lg:p-4 bg-slate-100 text-slate-400 rounded-full hover:bg-red-600 hover:text-white transition-all">
                            {renderIcon('X', 20)}
                         </button>
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar-dark px-1">
                         <p className="text-lg lg:text-2xl font-bold text-slate-700 leading-relaxed italic mb-6 border-l-4 border-red-500 pl-6 py-2">
                            {activeHotspot.text}
                         </p>
                         <p className="text-base lg:text-xl text-slate-500 font-medium leading-relaxed whitespace-pre-wrap">
                            {activeHotspot.longContent}
                         </p>
                      </div>
                   </div>
                </div>
             )}
          </div>
        )}

        {slide.type === 'split-reveal-cards' && (
          <div className="w-full h-full flex flex-col lg:flex-row bg-[#111111] animate-in fade-in duration-700">
            <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center gap-10">
               <div className="space-y-4">
                  <span className="text-red-500 font-black uppercase tracking-widest text-xs">{slide.subtitle}</span>
                  <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
                  <div className="w-20 h-2 bg-red-600 rounded-full" />
               </div>
               <div className="space-y-6">
                 <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed opacity-90 italic">
                   {slide.content}
                 </p>
               </div>
            </div>

            <div className="flex-1 p-6 lg:p-12 flex flex-col gap-6 items-stretch justify-center">
               {slide.interaction?.revealItems?.map((item, idx) => (
                 <div key={idx} className="flex-1 perspective-1000 group min-h-[250px] lg:min-h-0">
                    <div onClick={() => toggleCard(idx)} className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${flippedCards[idx] ? 'rotate-y-180' : ''}`}>
                      <div className="absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                         <img src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" alt="" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20" />
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 gap-4">
                            <div className="p-4 bg-red-600/90 rounded-2xl text-white shadow-xl">
                               {renderIcon(item.icon, 32)}
                            </div>
                            <h4 className="text-2xl font-black uppercase text-white drop-shadow-lg">{item.title}</h4>
                         </div>
                      </div>
                      <div className="absolute inset-0 backface-hidden bg-red-600 rounded-[2.5rem] border border-white/20 shadow-2xl rotate-y-180 flex flex-col items-center justify-center p-10 text-center overflow-hidden text-white">
                         <h4 className="text-xs font-black uppercase tracking-[0.4em] opacity-60 mb-6">{item.title}</h4>
                         <p className="text-lg lg:text-2xl font-bold leading-tight drop-shadow-md">
                            {item.longContent}
                         </p>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {slide.type === 'timeline' && slide.interaction?.revealItems && (
          <div className="w-full h-full flex flex-col p-12 lg:p-16">
             <div className="mb-12 text-left shrink-0">
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white">{slide.title}</h2>
                <div className="w-24 h-2 bg-red-600 rounded-full mt-4" />
                <p className="text-xs font-bold text-red-500 uppercase tracking-[0.4em] mt-3">{slide.subtitle}</p>
             </div>
             <div className="flex-1 relative flex flex-col lg:flex-row gap-12 min-h-0">
                <div className="w-full lg:w-1/3 overflow-y-auto pr-4 custom-scrollbar space-y-4">
                   {slide.interaction.revealItems.map((item, idx) => (
                      <button key={idx} onClick={() => { setActiveTab(idx); markSlideComplete(currentSlideIndex); }} className={`w-full p-8 rounded-[2rem] border transition-all duration-500 text-left flex items-start gap-6 group ${activeTab === idx ? 'bg-red-600 text-white shadow-2xl scale-105 z-10' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                         <div className={`p-4 rounded-2xl shrink-0 ${activeTab === idx ? 'bg-white/20' : 'bg-red-600/20 text-red-500'}`}>{renderIcon(item.icon, 24)}</div>
                         <div>
                            <h4 className={`text-xl font-black uppercase tracking-tight ${activeTab === idx ? 'text-white' : 'text-slate-200'}`}>{item.title}</h4>
                         </div>
                      </button>
                   ))}
                </div>
                <div className="flex-1 bg-[#1a1a1a] rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                   <div className="flex-[1.2] p-12 lg:p-20 overflow-y-auto custom-scrollbar flex flex-col gap-10">
                      <div key={activeTab} className="space-y-10 animate-in fade-in duration-500">
                         <div className="space-y-4">
                            <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">{slide.interaction.revealItems[activeTab].title}</h3>
                            <div className="w-16 h-1.5 bg-red-600 rounded-full" />
                         </div>
                         <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed whitespace-pre-wrap opacity-90">{slide.interaction.revealItems[activeTab].longContent}</p>
                      </div>
                   </div>
                   <div className="flex-1 relative min-h-[400px] lg:min-h-full">
                      <img key={activeTab} src={slide.interaction.revealItems[activeTab].image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                   </div>
                </div>
             </div>
          </div>
        )}

        {slide.type === 'tabs-reveal' && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col p-8 lg:p-16">
             <div className="mb-6 text-white shrink-0">
                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-1">{slide.title}</h2>
                <div className="w-16 h-1 bg-red-500 rounded-full" />
                <p className="mt-2 text-[9px] font-black text-red-500 uppercase tracking-[0.5em] opacity-80">{slide.subtitle}</p>
             </div>
             <div className="flex-1 flex flex-col min-h-0">
                <div className="flex flex-wrap gap-1.5 shrink-0 pb-2">
                   {slide.interaction.revealItems.map((item, idx) => (
                      <button key={idx} onClick={() => { setActiveTab(idx); markSlideComplete(currentSlideIndex); }} className={`px-10 py-5 rounded-t-[2rem] font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-500 min-w-[160px] ${activeTab === idx ? 'bg-red-500 text-white shadow-2xl scale-105 origin-bottom' : 'bg-[#222222] text-white/30 hover:bg-[#2a2a2a]'}`}>
                         {item.title}
                      </button>
                   ))}
                </div>
                <div className="flex-1 flex flex-col lg:flex-row bg-[#2a2a2a] rounded-b-[4rem] rounded-tr-[4rem] overflow-hidden shadow-2xl border border-white/5 relative">
                   <div className="flex-[1.2] p-12 lg:p-20 overflow-y-auto custom-scrollbar flex flex-col justify-center gap-10">
                      <div key={activeTab} className="space-y-10 animate-in fade-in duration-500">
                         <div className="space-y-4">
                            <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">{slide.interaction.revealItems[activeTab].title}</h3>
                            <div className="w-16 h-1.5 bg-red-600 rounded-full" />
                         </div>
                         <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed max-w-3xl opacity-90">{slide.interaction.revealItems[activeTab].longContent}</p>
                      </div>
                   </div>
                   <div className="flex-1 relative min-h-[450px] lg:min-h-full">
                      <img key={activeTab} src={slide.interaction.revealItems[activeTab].image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                   </div>
                </div>
             </div>
          </div>
        )}

        {slide.type === 'stepped-overlay' && slide.interaction?.revealItems && (
           <div className="w-full h-full flex items-center justify-center p-4 lg:p-12 bg-[#111111]">
             <div className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden h-[85vh] lg:h-[580px] flex flex-col">
                <div className="p-4 lg:p-6 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#222222]/50">
                   <h3 className="text-lg lg:text-2xl font-black uppercase text-white tracking-tighter">{slide.title}</h3>
                   <div className="flex gap-2 lg:gap-3">
                      <button onClick={() => setInternalStep(Math.max(0, internalStep - 1))} className="p-2 lg:p-3 bg-white/5 rounded-xl text-white hover:bg-red-600 hover:text-white transition-all disabled:opacity-10" disabled={internalStep === 0}>{renderIcon('ChevronLeft', 16)}</button>
                      <button onClick={() => { const n = Math.min(slide.interaction!.revealItems!.length - 1, internalStep + 1); setInternalStep(n); if (n === slide.interaction!.revealItems!.length - 1) markSlideComplete(currentSlideIndex); }} className="p-2 lg:p-3 bg-white/5 rounded-xl text-white hover:bg-red-600 hover:text-white transition-all disabled:opacity-10" disabled={internalStep === slide.interaction.revealItems.length - 1}>{renderIcon('ChevronRight', 16)}</button>
                   </div>
                </div>
                <div className="flex-1 relative overflow-hidden text-white flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#222222]">
                   {slide.interaction.revealItems.map((item, i) => (
                      <div key={i} className={`absolute inset-0 p-6 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10 transition-all duration-700 overflow-y-auto custom-scrollbar ${i === internalStep ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 z-0 pointer-events-none'}`}>
                          <img src={item.image} className="w-full lg:w-[45%] aspect-video object-cover rounded-2xl lg:rounded-3xl shadow-2xl border border-white/5 animate-in zoom-in-95 duration-1000" alt="" />
                          <div className="flex-1 space-y-3 lg:space-y-6 flex flex-col justify-center text-left">
                             <h4 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-white leading-none">{item.title}</h4>
                             <p className="text-sm lg:text-lg opacity-80 text-slate-300 font-light leading-snug max-w-2xl whitespace-pre-wrap">{item.longContent}</p>
                          </div>
                      </div>
                   ))}
                </div>
             </div>
           </div>
        )}

        {slide.type === 'split-slider' && slide.interaction?.revealItems && (
           <div className="w-full h-full flex flex-col bg-white overflow-hidden">
              <div className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden shrink-0">
                 <img key={internalStep} src={slide.interaction.revealItems[internalStep].image || slide.visual.source} className="w-full h-full object-cover animate-in fade-in duration-700" alt="" />
              </div>
              <div className="h-1.5 w-full bg-red-600 shrink-0" />
              <div className="flex-1 relative flex flex-col items-center justify-center p-8 lg:p-12 overflow-hidden bg-white">
                 <div className="w-full max-w-5xl h-full flex flex-col items-center justify-center text-center gap-6 relative">
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6 overflow-y-auto custom-scrollbar-dark px-12">
                       <h3 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-800">{slide.interaction.revealItems[internalStep].title}</h3>
                       <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium">
                         {slide.interaction.revealItems[internalStep].longContent}
                       </p>
                    </div>
                    <div className="flex gap-2 pb-4 shrink-0">
                      {slide.interaction.revealItems.map((_, i) => (
                        <button key={i} onClick={() => setInternalStep(i)} className={`h-2 rounded-full transition-all duration-500 ${i === internalStep ? 'w-10 bg-red-600' : 'w-2 bg-slate-200 hover:bg-red-200'}`} />
                      ))}
                    </div>
                    <div className="absolute inset-y-0 -left-4 lg:left-0 flex items-start pt-12 lg:pt-20">
                       <button onClick={() => setInternalStep(Math.max(0, internalStep - 1))} className="p-4 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-500 shadow-sm transition-all" disabled={internalStep === 0}>{renderIcon('ChevronLeft', 32)}</button>
                    </div>
                    <div className="absolute inset-y-0 -right-4 lg:right-0 flex items-start pt-12 lg:pt-20">
                       <button onClick={() => { const n = Math.min(slide.interaction!.revealItems!.length - 1, internalStep + 1); setInternalStep(n); if (n === slide.interaction!.revealItems!.length - 1) markSlideComplete(currentSlideIndex); }} className="p-4 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-500 shadow-sm transition-all" disabled={internalStep === slide.interaction.revealItems.length - 1}>{renderIcon('ChevronRight', 32)}</button>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {slide.type === 'visual-info' && (
          <div className="w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-center p-12">
            <div className="flex-1 space-y-10 animate-in slide-in-from-left-12 duration-1000">
               <div className="space-y-4">
                  <span className="text-red-500 font-black uppercase tracking-widest text-xs">{slide.subtitle}</span>
                  <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
               </div>
               <div className="space-y-6">
                 <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed opacity-90">{slide.content}</p>
                 {slide.bullets && (
                   <ul className="space-y-4">
                     {slide.bullets.map((b, i) => (
                       <li key={i} className="flex items-start gap-4 text-lg lg:text-xl text-white/80">
                         <div className="mt-1.5 shrink-0 w-3 h-3 bg-red-600 rounded-full" />
                         {b}
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
            </div>
            <div className="flex-1 w-full max-w-2xl aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group animate-in zoom-in-95 duration-1000">
               <img src={slide.visual.source} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
            </div>
          </div>
        )}
      </div>

      {expandedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setExpandedItem(null)} />
          <div className={`relative w-full ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'max-w-6xl' : 'max-w-5xl'} bg-white rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[85vh] border border-white/10 animate-in zoom-in-95 ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'items-stretch' : ''}`}>
              <div className={`flex-1 min-h-[300px] lg:min-h-full ${slide.id === 'slide-28' ? 'hidden lg:block' : ''}`}>
                <img src={expandedItem.image} className="w-full h-full object-cover" />
              </div>
              
              <div className={`flex-1 p-10 lg:p-16 overflow-y-auto text-slate-900 custom-scrollbar bg-white relative ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'flex flex-col' : ''}`}>
                <button onClick={() => setExpandedItem(null)} className="absolute top-6 right-6 p-4 bg-slate-100 rounded-full hover:bg-red-600 hover:text-white transition-all z-20 shadow-md">
                   {renderIcon('X', 24)}
                </button>
                
                <div className={`w-full ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'flex-1 flex flex-col items-center justify-center py-10' : 'space-y-10'}`}>
                  <div className={`w-full ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'max-w-4xl mx-auto flex flex-col items-center gap-10' : 'space-y-8'}`}>
                     <h3 className={`font-black uppercase tracking-tighter text-slate-900 leading-tight whitespace-pre-line break-words ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'text-4xl lg:text-6xl text-center' : 'text-4xl lg:text-5xl'}`}>
                        {expandedItem.title}
                     </h3>
                     
                     {expandedItem.text && (
                       <p className={`font-bold text-red-600 leading-tight italic border-l-4 lg:border-l-8 border-red-600 pl-6 lg:pl-8 bg-red-50 p-6 rounded-2xl ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'text-2xl lg:text-3xl text-center lg:border-l-0 lg:border-t-4' : 'text-xl'}`}>
                         "{expandedItem.text}"
                       </p>
                     )}

                     <div className={`space-y-8 w-full ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'text-center' : ''}`}>
                        {expandedItem.longContent?.split('\n').map((line, lIdx) => {
                           const trimmedLine = line.trim();
                           if (!trimmedLine) return <div key={lIdx} className="h-4" />;

                           const headers = ['OBJETIVO:', 'ESTRATEGIAS:', 'CRONOGRAMA', 'RECURSOS:'];
                           const isHeader = headers.some(h => trimmedLine.startsWith(h));

                           if (isHeader) {
                              return (
                                 <h4 key={lIdx} className={`font-black uppercase tracking-[0.2em] text-red-600 mt-12 mb-6 border-b-2 border-red-100 pb-4 ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'text-2xl lg:text-3xl text-center' : 'text-sm lg:text-base'}`}>
                                    {trimmedLine}
                                 </h4>
                              );
                           }

                           if (trimmedLine.startsWith('•')) {
                              return (
                                 <div key={lIdx} className={`flex items-start gap-6 group ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'justify-center py-3' : 'pl-4'}`}>
                                    <div className={`mt-2.5 shrink-0 bg-red-600 rounded-full group-hover:scale-125 transition-transform ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'w-5 h-5' : 'w-3 h-3'}`} />
                                    <span className={`font-medium leading-relaxed text-slate-700 ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'text-xl lg:text-3xl text-center' : 'text-base lg:text-lg'}`}>
                                       {trimmedLine.replace('•', '').trim()}
                                    </span>
                                 </div>
                              );
                           }

                           return (
                              <p key={lIdx} className={`font-medium opacity-90 leading-relaxed text-slate-600 ${slide.id === 'slide-28' || slide.id === 'slide-23' ? 'text-xl lg:text-3xl text-center py-3' : 'text-base lg:text-lg'}`}>
                                 {trimmedLine}
                              </p>
                           );
                        })}
                     </div>
                     
                     <div className="pt-16">
                        <button onClick={() => { setExpandedItem(null); markSlideComplete(currentSlideIndex); }} className="px-16 py-6 bg-red-600 rounded-full font-black uppercase text-sm tracking-[0.4em] text-white hover:scale-110 transition-transform shadow-2xl">Regresar</button>
                     </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideRenderer;
