import React, { useState, useEffect } from 'react';
import { SLIDES, EXAMS, CONVENIOS } from '../constants';
import { Slide } from '../types';
import { CheckCircle2, Building2, HeartPulse, Stethoscope, Microscope, Scan } from 'lucide-react';

export const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentSlide = SLIDES[currentIndex];
    const duration = currentSlide.duration * 1000;
    const intervalTime = 50; 

    let elapsed = 0;
    setProgress(0);

    const progressTimer = setInterval(() => {
      elapsed += intervalTime;
      const newProgress = (elapsed / duration) * 100;
      setProgress(newProgress);

      if (elapsed >= duration) {
        clearInterval(progressTimer);
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
      }
    }, intervalTime);

    return () => clearInterval(progressTimer);
  }, [currentIndex]);

  const slide = SLIDES[currentIndex];

  const getIconForCategory = (category: string) => {
    if (category.includes("Imagem")) return <Scan className="w-[5vh] h-[5vh] text-viddas-blue mr-3" />;
    if (category.includes("Diagnósticos")) return <Microscope className="w-[5vh] h-[5vh] text-viddas-blue mr-3" />;
    return <Stethoscope className="w-[5vh] h-[5vh] text-viddas-blue mr-3" />;
  }

  const renderContent = (slide: Slide) => {
    // 1. Nossos Serviços
    if (slide.title === "Nossos Serviços") {
        const imagem = EXAMS[0];
        const diagnosticos = EXAMS[1];
        const especialidades = EXAMS[2];

        return (
            <div className="grid grid-cols-2 gap-[2vh] h-full p-[2vh] bg-slate-100">
                {/* Left Column */}
                <div className="flex flex-col gap-[2vh] h-full">
                    
                    {/* Exames de Imagem */}
                    <div className="bg-white rounded-[2vh] shadow-md border-l-[0.8vh] border-viddas-blue flex flex-col overflow-hidden h-[30%]">
                        <div className="bg-slate-50 px-[2vh] py-[1.5vh] border-b border-slate-200 flex flex-col justify-center shrink-0">
                            <div className="flex items-center">
                                {getIconForCategory(imagem.category)}
                                <h3 className="text-[3.5vh] font-black text-viddas-blue uppercase tracking-tight leading-none">{imagem.category}</h3>
                            </div>
                        </div>
                        <div className="px-[2vh] flex-1 flex flex-col justify-center">
                            <ul className="grid grid-cols-2 gap-x-[1vh] gap-y-[0.5vh]">
                                {imagem.items.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-[1.2vh] h-[1.2vh] rounded-full bg-viddas-accent mr-[1vh] shrink-0"></div>
                                        <span className="font-bold text-slate-700 text-[2.8vh] truncate">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Diagnósticos e Procedimentos */}
                    <div className="bg-white rounded-[2vh] shadow-md border-l-[0.8vh] border-viddas-blue flex flex-col overflow-hidden flex-1">
                        <div className="bg-slate-50 px-[2vh] py-[1.5vh] border-b border-slate-200 flex flex-col justify-center shrink-0">
                            <div className="flex items-center">
                                {getIconForCategory(diagnosticos.category)}
                                <h3 className="text-[3.5vh] font-black text-viddas-blue uppercase tracking-tight leading-none">{diagnosticos.category}</h3>
                            </div>
                        </div>
                        <div className="px-[2vh] flex-1 flex flex-col justify-center">
                            <ul className="grid grid-cols-2 gap-x-[1vh] gap-y-[0.8vh]">
                                {diagnosticos.items.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-[1.2vh] h-[1.2vh] rounded-full bg-viddas-accent mr-[1vh] shrink-0"></div>
                                        <span className="font-bold text-slate-700 text-[2.8vh] truncate">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="h-full">
                    <div className="bg-white rounded-[2vh] shadow-md border-l-[0.8vh] border-viddas-blue flex flex-col overflow-hidden h-full">
                         <div className="bg-slate-50 px-[2vh] py-[2vh] border-b border-slate-200 flex flex-col justify-center shrink-0 min-h-[6vh]">
                             <div className="flex items-center mb-[0.5vh]">
                                {getIconForCategory(especialidades.category)}
                                <h3 className="text-[3.5vh] font-black text-viddas-blue uppercase tracking-tight">{especialidades.category}</h3>
                             </div>
                             <p className="text-[2.2vh] text-viddas-light font-bold ml-[6vh] leading-none">Corpo clínico completo.</p>
                        </div>
                        <div className="px-[2vh] flex-1 flex flex-col justify-center">
                            <ul className="grid grid-cols-2 gap-x-[2vh] gap-y-[1.2vh]">
                                {especialidades.items.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-[1.2vh] h-[1.2vh] rounded-full bg-viddas-accent mr-[1vh] shrink-0"></div>
                                        <span className="font-bold text-slate-700 text-[2.8vh]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 2. Saúde da Mulher
    if (slide.title === "Saúde da Mulher") {
        return (
            <div className="flex h-full bg-slate-50">
                {/* Imagem - Esquerda */}
                <div className="w-[38%] h-full relative overflow-hidden border-r-[0.8vh] border-viddas-accent shadow-xl z-10">
                    <img 
                        src={slide.imageUrl} 
                        alt="Saúde da Mulher" 
                        className="w-full h-full object-cover animate-[kenburns_20s_ease-out_infinite]"
                        style={{ animationName: 'kenburns' }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-viddas-blue/90 via-viddas-blue/20 to-transparent"></div>
                    <div className="absolute bottom-[3vh] left-[2vh] right-[2vh] text-white">
                        <div className="flex items-center mb-[1vh]">
                            <div className="p-[0.8vh] bg-viddas-accent rounded-[1vh] shadow-lg mr-[1vh]">
                                <HeartPulse className="w-[5vh] h-[5vh] text-viddas-blue" />
                            </div>
                        </div>
                        <h2 className="text-[7vh] font-black uppercase leading-none mb-[1vh] drop-shadow-lg tracking-tight">{slide.title}</h2>
                        <p className="text-[3vh] font-bold text-slate-100 border-l-[0.5vh] border-viddas-accent pl-[1vh] leading-snug">{slide.subtitle}</p>
                    </div>
                </div>

                {/* Conteúdo - Direita */}
                <div className="w-[62%] h-full flex flex-col p-[2vh] justify-center relative">
                    {/* Card Principal Branco */}
                    <div className="bg-white rounded-[2vh] p-[2.5vh] shadow-xl border border-slate-100 flex flex-col h-auto max-h-[96%] relative z-0">
                         
                         {/* Header do Card */}
                         <div className="mb-[1.5vh] shrink-0 border-b border-slate-100 pb-[1vh]">
                            <div className="flex items-center">
                                <div className="mr-[1.5vh] shrink-0">
                                    <CheckCircle2 className="w-[6vh] h-[6vh] text-viddas-accent" />
                                </div>
                                <div>
                                    <h3 className="text-[5vh] font-black text-viddas-blue uppercase tracking-tight leading-[0.9] mb-[0.3vh]">
                                        Exames <br/> Especializados
                                    </h3>
                                    <p className="text-slate-500 font-bold text-[3vh]">Cuidado completo para todas as fases.</p>
                                </div>
                            </div>
                         </div>

                         {/* Grid de Exames - Compacto */}
                         <div className="grid grid-cols-2 gap-x-[1vh] gap-y-[1.5vh] content-start overflow-hidden">
                            {slide.content && slide.content.map((item, i) => (
                                <div key={i} className="flex items-center bg-slate-50 p-[1.5vh] rounded-[0.8vh] border border-slate-100 shadow-sm">
                                    <div className="w-[1.2vh] h-[1.2vh] rounded-full bg-viddas-accent mr-[1vh] shrink-0"></div>
                                    <span className="text-[2.8vh] font-bold text-viddas-blue leading-tight truncate">{item}</span>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </div>
        );
    }

    // 3. Convênios
    if (slide.title === "Convênios Atendidos") {
        return (
            <div className="flex flex-col h-full p-[3vh] bg-slate-100">
                <div className="flex items-center justify-between mb-[2vh] shrink-0 bg-white p-[2vh] rounded-[1.5vh] shadow-sm border border-slate-200">
                    <div className="flex items-center">
                        <div className="p-[1vh] bg-viddas-blue/10 rounded-[1vh] mr-[2vh]">
                            <Building2 className="w-[6vh] h-[6vh] text-viddas-blue" />
                        </div>
                        <div>
                            <h2 className="text-[6vh] font-black text-viddas-blue uppercase tracking-tight leading-none">{slide.title}</h2>
                            <p className="text-[3vh] text-slate-500 font-bold mt-[0.5vh]">{slide.subtitle}</p>
                        </div>
                    </div>
                    <div className="text-right px-[1vh]">
                         <span className="text-viddas-accent font-black text-[6vh]">{CONVENIOS.length}+</span>
                         <span className="block text-[2.2vh] font-bold text-slate-400 uppercase tracking-widest">Parceiros</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-4 gap-[2vh] flex-1 content-start">
                    {CONVENIOS.map((c, i) => (
                        <div key={i} className="bg-white px-[1vh] py-[1.5vh] rounded-[1vh] shadow-sm border-l-[0.5vh] border-viddas-accent flex items-center justify-center min-h-[7vh] hover:shadow-md transition-all duration-300">
                            <span className="font-bold text-viddas-blue text-[2.5vh] leading-tight w-full text-center break-words line-clamp-2">
                                {c}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Default Institutional Slide - PADDING ESQUERDO AUMENTADO (20%)
    if (slide.title === "Clínica Viddas") {
        return (
            <div className="flex h-full bg-white relative overflow-hidden">
                 {/* 1. Background Image */}
                <div className="absolute inset-0 z-0">
                    {slide.imageUrl && (
                        <img 
                            src={slide.imageUrl} 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-20"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                 {/* 2. Heart Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
                    <HeartPulse className="w-[70vh] h-[70vh] text-viddas-blue" />
                </div>

                {/* Container Principal */}
                <div className="w-full h-full flex flex-col justify-center pl-[20%] pr-[5%] relative z-10 gap-[3vh]">
                    
                    {/* Bloco de Título */}
                    <div>
                        <h1 className="text-[14vh] font-black text-viddas-blue leading-[0.9] tracking-tighter mb-[2vh] drop-shadow-sm">
                            Clínica <br/> Viddas
                        </h1>
                        
                        <div className="flex items-center">
                            {/* Barra Dourada */}
                            <div className="w-[1.5vh] h-[12vh] bg-viddas-accent mr-[3vh] rounded-full shadow-sm"></div>
                            
                            {/* Subtítulo */}
                            <h2 className="text-[5vh] font-medium text-slate-500 leading-tight">
                                Excelência em <br/>
                                <span className="text-slate-600 font-bold">Diagnóstico e Saúde</span>
                            </h2>
                        </div>
                    </div>

                    {/* Card Flutuante */}
                    <div className="bg-white p-[4vh] rounded-[2vh] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[90%] flex items-center">
                        {/* Ponto Dourado */}
                        <div className="w-[2.5vh] h-[2.5vh] rounded-full bg-viddas-accent mr-[3vh] shrink-0 shadow-md"></div>
                        
                        {/* Texto */}
                        <span className="text-[4vh] font-bold text-viddas-blue leading-[1.1] tracking-tight">
                            Tecnologia de <br/> ponta e <br/> atendimento <br/> humanizado
                        </span>
                    </div>

                </div>
            </div>
        );
    }

    return null; // Fallback
  };

  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden shadow-2xl">
      {renderContent(slide)}
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1vh] bg-slate-200 z-50">
        <div 
            className="h-full bg-gradient-to-r from-viddas-blue to-viddas-accent transition-all duration-75 ease-linear shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};