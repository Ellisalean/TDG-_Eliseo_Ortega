

import React, { useEffect, useState } from 'react';
import { useLessonStore } from './store/useLessonStore';
import { COUNSELING_LESSON } from './data/lessonContent';
import SlideRenderer from './components/SlideRenderer';
import { 
  ChevronRight, ChevronLeft, Menu, 
  X, PanelLeftClose,
  Home, HelpCircle, Play, Pause,
  Keyboard, MousePointer2, Smartphone, Monitor,
  RefreshCw, Maximize, Laptop, Tablet
} from 'lucide-react';

const App: React.FC = () => {
  const { 
    currentSlideIndex, nextSlide, prevSlide, goToSlide,
    isSidebarOpen, toggleSidebar,
    completedSlides, isPlaying, toggleAutoplay,
    isHelpOpen, toggleHelp,
    isDevicesOpen, toggleDevices
  } = useLessonStore();

  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoplay();
      }
      if (e.key === 'h' || e.key === 'H') toggleHelp();
      if (e.key === 'f' || e.key === 'F') handleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleAutoplay, toggleHelp]);

  useEffect(() => {
    let interval: number | undefined;
    if (isPlaying) {
      interval = window.setInterval(() => {
        if (currentSlideIndex < COUNSELING_LESSON.totalSlides - 1) {
          nextSlide();
        } else {
          toggleAutoplay();
        }
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlideIndex, nextSlide, toggleAutoplay]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error al intentar activar pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const currentSlide = COUNSELING_LESSON.slides[currentSlideIndex];
  const total = COUNSELING_LESSON.totalSlides;

  return (
    <div className="h-screen w-screen bg-[#111111] flex transition-all duration-500 overflow-hidden text-white relative">
      
      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] lg:hidden" onClick={toggleSidebar} />
      )}

      {/* Modal: Ayuda */}
      {isHelpOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={toggleHelp} />
          <div className="relative w-full max-w-4xl bg-[#1a1a1a] rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            <div className="p-10 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-red-600/10 to-transparent">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter text-white leading-none">Guía de Navegación</h2>
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1">Cómo navegar esta lección interactiva</p>
              </div>
              <button onClick={toggleHelp} className="p-3 bg-white/5 rounded-full hover:bg-red-500 transition-all text-white"><X size={24} /></button>
            </div>
            <div className="p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 overflow-y-auto">
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-red-500"><Keyboard size={28} /><h3 className="text-xl font-black uppercase tracking-tight">Teclado</h3></div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { key: '→', label: 'Siguiente' },
                    { key: '←', label: 'Anterior' },
                    { key: 'Espacio', label: 'Play/Pausa' },
                    { key: 'F', label: 'Pantalla Completa' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-xs font-bold opacity-60 uppercase">{item.label}</span>
                      <kbd className="px-3 py-1 bg-red-600 rounded-lg text-[10px] font-black">{item.key}</kbd>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-red-500"><MousePointer2 size={28} /><h3 className="text-xl font-black uppercase tracking-tight">Mouse/Táctil</h3></div>
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all">
                    <Monitor className="shrink-0 text-slate-400" />
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide">Exploración</p>
                      <p className="text-xs opacity-50 font-medium leading-relaxed">Haz clic en los botones de la cabecera para Actualizar, Ampliar o ver Dispositivos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-black/20 flex justify-center">
               <button onClick={toggleHelp} className="px-12 py-5 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all">Entendido</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Dispositivos Activos */}
      {isDevicesOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={toggleDevices} />
          <div className="relative w-full max-w-lg bg-[#1a1a1a] rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Dispositivos en Sesión</h3>
              <button onClick={toggleDevices} className="text-white/40 hover:text-white"><X size={20} /></button>
            </div>
            <div className="p-8 space-y-4">
              {[
                { name: 'Estación Principal (Tú)', type: 'Monitor', status: 'En Línea', icon: <Monitor size={20}/> },
                { name: 'Proyector Aula 4', type: 'Pantalla', status: 'Sincronizado', icon: <Monitor size={20} className="text-green-500"/> },
                { name: 'Tablet Eliseo', type: 'Control', status: 'En Línea', icon: <Tablet size={20} className="text-green-500"/> },
              ].map((dev, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-600/20 text-red-500 rounded-xl">{dev.icon}</div>
                    <div>
                      <p className="text-sm font-bold">{dev.name}</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-40">{dev.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-green-500 uppercase">{dev.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-black/20 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">ID de Sesión: EB-2024-ORTEGA</p>
            </div>
          </div>
        </div>
      )}

      <aside className={`fixed inset-y-0 left-0 z-[70] bg-[#1a1a1a] border-r border-white/5 transition-all duration-500 lg:relative 
        ${isSidebarOpen ? 'w-80 translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isDesktopCollapsed ? 'lg:w-0 lg:border-none' : 'lg:w-80'}
      `}>
        <div className="h-full flex flex-col overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <h4 className="font-black uppercase tracking-tighter text-sm text-red-500">Contenido</h4>
            <button onClick={() => setIsDesktopCollapsed(true)} className="hidden lg:block text-white/60 hover:text-white"><PanelLeftClose size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
            {COUNSELING_LESSON.slides.map((s, idx) => (
              <button key={s.id} onClick={() => { goToSlide(idx); if (window.innerWidth < 1024) toggleSidebar(); }} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left ${currentSlideIndex === idx ? 'bg-red-600 text-white shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white/80'}`}>
                <span className="text-[10px] font-black opacity-30 w-4">{idx + 1}.</span>
                <span className="text-xs font-black uppercase tracking-tight truncate">{s.title}</span>
                {completedSlides.includes(idx) && <div className="ml-auto w-1.5 h-1.5 bg-red-400 rounded-full" />}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full relative bg-[#111111]">
        <header className="h-16 px-4 lg:px-8 flex items-center justify-between border-b border-white/5 bg-[#1a1a1a] z-40 shrink-0">
           <div className="flex items-center gap-4 lg:gap-6">
              <button onClick={() => { if (window.innerWidth >= 1024) setIsDesktopCollapsed(!isDesktopCollapsed); else toggleSidebar(); }} className="text-white/60 hover:text-white p-2">
                <Menu size={20} />
              </button>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <h1 className="hidden md:block text-[10px] font-black uppercase tracking-widest text-white/60 max-w-[200px] truncate">{COUNSELING_LESSON.title}</h1>
           </div>

           {/* Central Progress Info */}
           <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-[10px] font-black tracking-[0.3em] text-red-600">{currentSlideIndex + 1} / {total}</span>
              <div className="flex gap-1 mt-1">
                {Array.from({length: total}).map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i <= currentSlideIndex ? 'w-2 bg-red-600' : 'w-1 bg-white/10'}`} />
                ))}
              </div>
           </div>

           <div className="flex items-center gap-2 lg:gap-4 text-white/60">
              {/* Utility Tools */}
              <div className="flex items-center gap-1 lg:gap-2 mr-2 lg:mr-4 bg-white/5 p-1 rounded-xl border border-white/5">
                <button onClick={handleRefresh} title="Actualizar" className="p-2 hover:text-red-500 hover:bg-white/5 rounded-lg transition-all"><RefreshCw size={18} /></button>
                <button onClick={handleFullscreen} title="Ampliar / Pantalla Completa" className="p-2 hover:text-red-500 hover:bg-white/5 rounded-lg transition-all"><Maximize size={18} /></button>
                <button onClick={toggleDevices} title="Dispositivos Activos" className="p-2 hover:text-red-500 hover:bg-white/5 rounded-lg transition-all relative">
                  <Smartphone size={18} />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full border-2 border-[#1a1a1a]" />
                </button>
              </div>

              {/* Navigation Tools */}
              <div className="hidden sm:flex items-center gap-1 lg:gap-2">
                <button onClick={toggleAutoplay} className={`p-2 transition-all hover:text-red-500 ${isPlaying ? 'text-red-500 scale-110' : ''}`}>{isPlaying ? <Pause size={18} /> : <Play size={18} />}</button>
                <button onClick={toggleHelp} className={`p-2 hover:text-red-500 transition-colors ${isHelpOpen ? 'text-red-500' : ''}`}><HelpCircle size={18} /></button>
              </div>
              
              <div className="h-8 w-px bg-white/10 hidden sm:block mx-2" />

              <div className="flex items-center gap-1">
                <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="p-2 hover:text-red-500 disabled:opacity-10 transition-all"><ChevronLeft size={24} /></button>
                <button onClick={nextSlide} disabled={currentSlideIndex === total - 1} className="p-2 hover:text-red-500 disabled:opacity-10 transition-all"><ChevronRight size={24} /></button>
              </div>
           </div>
        </header>

        <div className="flex-1 relative overflow-hidden">
           <div className={`h-full w-full transition-all duration-700 ease-out transform ${isAnimating ? 'opacity-0 scale-98 translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
              <SlideRenderer slide={currentSlide} />
           </div>
        </div>

        {/* Progress bar subtle bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-40">
           <div className="h-full bg-red-600 transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(239,68,68,0.5)]" style={{ width: `${((currentSlideIndex + 1) / total) * 100}%` }} />
        </div>
      </main>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.25); border-radius: 12px; }
      `}</style>
    </div>
  );
};

export default App;



