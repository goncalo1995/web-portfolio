import { useState } from 'react';
import { Dock } from './components/Dock';
import type { TabId } from './constants/tabs';
import { Identity } from './components/sections/Identity';
import { Architectures } from './components/sections/Architectures';
import { AILab } from './components/sections/AILab';
import { Terminal } from './components/sections/Terminal';
import ButtonCopy from './components/smoothui/button-copy';
import ClipCornersButton from './components/smoothui/clip-corners-button';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand/30 font-sans transition-colors duration-300">
      {/* Contextual Header - Changes based on Tab */}
      <header className="p-6 border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-40">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-muted-foreground">
            STATUS: <span className="text-success font-semibold">ONLINE</span> // SECTION: {activeTab.toUpperCase()}
          </h2>
          <div className="text-xs font-mono text-muted-foreground hidden md:block">
            LOC: LISBON_PT // XP: 6Y+
          </div>
        </div>
      </header>
      
      <main className="pb-32 p-4 md:p-8 max-w-7xl mx-auto pt-8">
        {activeTab === 'profile' && <Identity />}
        {activeTab === 'experience' && <Architectures />}
        {activeTab === 'projects' && <AILab />}
        {activeTab === 'stack' && <Terminal />}
      </main>

      <Dock activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <div className="flex flex-col-reverse md:flex-row items-end md:items-center gap-2 pointer-events-auto">
          <ClipCornersButton 
            className="py-3 px-6 text-sm hover:cursor-pointer shadow-lg"
            onClick={() => window.open("https://goncalocereja.com/cv.pdf", "_blank", "noopener,noreferrer")}
          >
            Download CV
          </ClipCornersButton>
          <div className="relative group">
            <ButtonCopy 
              className="bg-foreground text-background shadow-lg !p-4 border-none hover:bg-foreground/90"
              onCopy={async () => {
                await navigator.clipboard.writeText("cerejagoncalo@gmail.com");
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
