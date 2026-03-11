import { useState } from 'react';
import { Dock } from './components/Dock';
import type { TabId } from './constants/tabs';
import { Home } from './components/sections/Home';
import { Process } from './components/sections/Process';
import { Portfolio } from './components/sections/Portfolio';
import SensitiveText from './components/ui/sensitive-text';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand/30 font-sans transition-colors duration-300">
      {/* Contextual Header - Changes based on Tab */}
      <header className="p-6 border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-40">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <SensitiveText children="Gonçalo Cereja Pereira" className="text-xl font-mono"/>
          {/* <TextGenerateEffect words="Gonçalo Cereja Pereira" className="text-md font-mono hidden lg:block"/>
          <TextGenerateEffect words="Gonçalo Lascasas Cereja Ribeiro Pereira" className="text-md font-mono hidden xl:block"/> */}
          
          <h2 className="text-sm font-mono text-muted-foreground">
             <span className="text-success font-semibold">ONLINE</span><br/>
             <span className="text-muted-foreground">Lisbon, PT</span>
          </h2>
        </div>
      </header>
      
        {activeTab === 'home' && <Home onTabChange={setActiveTab} />}
      <main className="mb-24 p-4 md:p-8 max-w-5xl mx-auto pt-8">
        {activeTab === 'process' && <Process />}
        {activeTab === 'portfolio' && <Portfolio />}
      </main>

      <Dock activeTab={activeTab} onTabChange={setActiveTab} />
      
    </div>
  );
}

export default App;
