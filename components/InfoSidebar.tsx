import React from 'react';
import { Ticket, AlertCircle, Clock, FileText } from 'lucide-react';

export const InfoSidebar: React.FC = () => {
  return (
    <div className="w-full h-full bg-white border-l border-viddas-light/20 flex flex-col shadow-2xl relative z-20">
      
      {/* Header Pattern */}
      <div className="h-[0.8vh] w-full bg-gradient-to-r from-viddas-blue via-viddas-accent to-viddas-blue shrink-0"></div>

      {/* 1. ANTECEDÊNCIA */}
      <div className="bg-viddas-blue px-[2vh] py-[1.5vh] shrink-0 text-white shadow-lg border-b-[0.4vh] border-viddas-accent relative overflow-hidden">
        <div className="flex items-center relative z-10">
            <div className="p-[0.5vh] border-2 border-viddas-accent rounded-full mr-[1.2vh] shrink-0">
                <Clock className="w-[5vh] h-[5vh] text-viddas-accent" />
            </div>
            <div>
                <h3 className="text-viddas-accent font-black text-[3.5vh] uppercase leading-none mb-[0.2vh] tracking-wider">Chegue Cedo</h3>
                <p className="text-white/90 font-medium text-[2.8vh] leading-tight">
                    Chegue com <span className="text-viddas-accent font-bold underline">15 min</span> de antecedência.
                </p>
            </div>
        </div>
      </div>

      {/* 2. Operational Info - Ajustado para justify-evenly */}
      <div className="flex-1 px-[2vh] py-[1vh] flex flex-col justify-evenly min-h-0 bg-slate-50 overflow-hidden">
        
        {/* Senhas */}
        <div className="flex items-center p-[2vh] bg-white rounded-[1.2vh] border-l-[0.8vh] border-viddas-blue shadow-sm">
            <Ticket className="w-[6vh] h-[6vh] text-viddas-blue/80 mr-[2vh] shrink-0" />
            <div>
                <h4 className="font-black text-viddas-blue text-[3vh] uppercase tracking-wide leading-none mb-[0.5vh]">Retire sua Senha</h4>
                <p className="text-[2.5vh] text-slate-600 font-medium leading-tight">Utilize o totem para atendimento.</p>
            </div>
        </div>

        {/* Resultados */}
        <div className="flex items-center p-[2vh] bg-white rounded-[1.2vh] border-l-[0.8vh] border-viddas-blue shadow-sm">
            <FileText className="w-[6vh] h-[6vh] text-viddas-blue/80 mr-[2vh] shrink-0" />
            <div>
                <h4 className="font-black text-viddas-blue text-[3vh] uppercase tracking-wide leading-none mb-[0.5vh]">Resultados</h4>
                <p className="text-[2.5vh] text-slate-600 font-medium leading-tight">Exames físicos no balcão.</p>
            </div>
        </div>

        {/* Jejum e Preparo */}
        <div className="flex items-center p-[2vh] bg-white rounded-[1.2vh] border-l-[0.8vh] border-viddas-blue shadow-sm">
            <AlertCircle className="w-[6vh] h-[6vh] text-viddas-blue/80 mr-[2vh] shrink-0" />
            <div>
                <h4 className="font-black text-viddas-blue text-[3vh] uppercase tracking-wide leading-none mb-[0.5vh]">Jejum e Preparo</h4>
                <p className="text-[2.5vh] text-slate-600 font-medium leading-tight">Verifique exigências.</p>
            </div>
        </div>

      </div>

      {/* 3. Bottom QR Code */}
      <div className="shrink-0 bg-gradient-to-br from-white to-slate-100 px-[2vh] py-[2vh] border-t-[0.4vh] border-viddas-accent shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex flex-row items-center justify-between gap-[1vh]">
            <div className="bg-white p-[0.5vh] rounded-[0.8vh] shadow-md border border-slate-200 shrink-0">
                <img 
                    src="https://i.postimg.cc/5t4X9hJN/Group-5-(1).png" 
                    alt="Acesse Agora" 
                    className="w-[12vh] h-[12vh] object-contain"
                />
            </div>
            <div className="flex flex-col text-right justify-center flex-1 min-w-0">
                <span className="text-[1.8vh] font-bold text-viddas-light uppercase tracking-[0.2em] mb-[0.5vh]">Acesse Agora</span>
                <span className="text-[3.5vh] font-black text-viddas-blue leading-none mb-[0.5vh]">RETIRE SEU</span>
                <span className="text-[2.5vh] font-bold text-viddas-accent leading-none mb-[0.8vh] uppercase truncate">Exame de Imagem</span>
                <div className="bg-viddas-blue text-white text-[1.6vh] font-bold py-[0.5vh] px-[1.5vh] rounded-full self-end uppercase tracking-wider shadow-sm">
                    clinicaviddas.com.br
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};