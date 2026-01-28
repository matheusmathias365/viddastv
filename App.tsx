import React from 'react';
import { Header } from './components/Header';
import { BottomBar } from './components/BottomBar';
import { InfoSidebar } from './components/InfoSidebar';
import { ContentCarousel } from './components/ContentCarousel';

const App: React.FC = () => {
  return (
    // Container Principal: 100% Tela Cheia
    <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* FULL WIDTH/HEIGHT APP */}
      <div className="w-full h-full bg-slate-100 flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Header */}
        <Header />

        {/* Middle Section */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Main Content Area */}
          <main className="w-[70%] h-full relative bg-slate-200">
              <ContentCarousel />
          </main>

          {/* Right Sidebar */}
          <aside className="w-[30%] h-full z-20 shadow-2xl relative">
              <InfoSidebar />
          </aside>

        </div>

        {/* Bottom Bar */}
        <BottomBar />

      </div>
    </div>
  );
};

export default App;