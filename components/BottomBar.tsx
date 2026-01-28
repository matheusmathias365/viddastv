import React, { useState, useEffect } from 'react';
import { CloudSun, AlertTriangle, Sun, CloudRain, CloudLightning, CloudFog, Cloud } from 'lucide-react';
import { WeatherData } from '../types';

export const BottomBar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Clock Timer
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Weather Fetcher
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-23.76&longitude=-45.41&current=temperature_2m,weather_code&timezone=America%2FSao_Paulo"
        );
        const data = await response.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        let condition = "Ensolarado";
        let icon = "sun";

        if (code === 0) { condition = "Ensolarado"; icon = "sun"; }
        else if (code >= 1 && code <= 3) { condition = "Parcialmente Nublado"; icon = "cloud-sun"; }
        else if (code >= 45 && code <= 48) { condition = "Neblina"; icon = "cloud-fog"; }
        else if (code >= 51 && code <= 67) { condition = "Chuvoso"; icon = "cloud-rain"; }
        else if (code >= 80 && code <= 82) { condition = "Pancadas de Chuva"; icon = "cloud-rain"; }
        else if (code >= 95) { condition = "Tempestade"; icon = "cloud-lightning"; }
        else { condition = "Nublado"; icon = "cloud"; }

        setWeather({ temp, condition, icon });
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeather(null);
      }
    };
    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(weatherTimer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  const getWeatherIcon = (iconName: string) => {
      switch(iconName) {
          case 'sun': return <Sun className="w-[5vh] h-[5vh] text-viddas-accent mr-[1.5vh] relative z-10" />;
          case 'cloud-rain': return <CloudRain className="w-[5vh] h-[5vh] text-viddas-accent mr-[1.5vh] relative z-10" />;
          case 'cloud-lightning': return <CloudLightning className="w-[5vh] h-[5vh] text-viddas-accent mr-[1.5vh] relative z-10" />;
          case 'cloud-fog': return <CloudFog className="w-[5vh] h-[5vh] text-viddas-accent mr-[1.5vh] relative z-10" />;
          case 'cloud': return <Cloud className="w-[5vh] h-[5vh] text-viddas-accent mr-[1.5vh] relative z-10" />;
          default: return <CloudSun className="w-[5vh] h-[5vh] text-viddas-accent mr-[1.5vh] relative z-10" />;
      }
  };

  return (
    <div className="h-[10vh] bg-viddas-blue w-full flex items-stretch shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.3)] z-40 border-t border-viddas-accent/20 flex-shrink-0">
      
      {/* Important Label: Fixed width, no wrap */}
      <div className="bg-viddas-accent text-viddas-blue px-[2vh] flex items-center justify-center font-black uppercase tracking-wider shadow-lg z-10 whitespace-nowrap text-[2.2vh] flex-shrink-0">
        <AlertTriangle className="w-[3.5vh] h-[3.5vh] mr-[1vh] text-viddas-blue fill-current" />
        Informações Importantes
      </div>

      {/* Ticker: Takes remaining space */}
      <div className="flex-1 bg-viddas-blue relative overflow-hidden flex items-center border-r border-viddas-accent/20 min-w-0">
        <div className="ticker-wrap w-full">
            <div className="ticker text-white text-[4vh] font-light tracking-wide leading-none py-1">
                Bem-vindo à <span className="font-bold text-viddas-accent">Clínica Viddas</span>  •  WhatsApp: <span className="font-bold">12 99617-5560</span>  •  Resultados de Imagens: <span className="font-bold text-viddas-accent">entregadeexames.com.br</span>  •  Horário de Atendimento: <span className="font-bold">Segunda a Sexta das 08h às 18h</span>  •  <span className="font-bold text-viddas-accent">Retire sua senha no totem</span> ao chegar  •  Verifique o <span className="font-bold">jejum e preparo</span> dos seus exames  •  Wi-Fi Grátis: <span className="font-bold">Clínica Viddas Cliente</span>  •
            </div>
        </div>
      </div>

      {/* Weather: Fixed width, no wrap, conditional render */}
      {weather && (
        <div className="px-[2.5vh] bg-viddas-blue flex items-center border-r border-viddas-accent/20 justify-center relative group flex-shrink-0 whitespace-nowrap">
            <div className="absolute inset-0 bg-viddas-accent/5"></div>
            {getWeatherIcon(weather.icon)}
            <div className="flex flex-col text-white relative z-10">
                <div className="flex items-center">
                    <span className="text-[7vh] font-bold leading-none mr-[1vh]">{weather.temp}°</span>
                    <div className="flex flex-col border-l border-white/20 pl-[1vh]">
                         <span className="text-[1.8vh] font-bold text-viddas-accent uppercase leading-tight tracking-wider">São Sebastião</span>
                         <span className="text-[1.4vh] text-white/60 uppercase leading-tight tracking-wide">SP</span>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Clock: Fixed width, no wrap */}
      <div className="px-[3vh] bg-white text-viddas-blue flex flex-col items-center justify-center border-l-[0.5vh] border-viddas-accent relative flex-shrink-0 whitespace-nowrap">
        <div className="flex items-center">
            <span className="text-[5.5vh] font-black leading-none tracking-tight -mt-[0.5vh]">{formatTime(time)}</span>
        </div>
        <span className="text-[1.6vh] font-bold uppercase text-viddas-light mt-[0.2vh] tracking-widest">{formatDate(time)}</span>
      </div>
    </div>
  );
};