import { useState } from 'react';

import type { TabId } from './constants/tabs';
import { Home } from './components/sections/Home';
import { Process } from './components/sections/Process';
import { Portfolio } from './components/sections/Portfolio';
import { Privacy } from './components/sections/Privacy';
import SensitiveText from './components/ui/sensitive-text';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand/30 font-sans transition-colors duration-300">
      {/* Contextual Header - Changes based on Tab */}
      <header className="p-6 border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-40">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <button onClick={() => setActiveTab('home')} className="hover:opacity-80 transition-opacity text-left">
            <SensitiveText children="Gonçalo Cereja" className="text-xl font-mono"/>
          </button>
          
          <a 
            href="mailto:cerejagoncalo@gmail.com"
            className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors text-sm"
          >
            Get in touch
          </a>
        </div>
      </header>
      
      {activeTab === 'home' && <Home onTabChange={setActiveTab} />}
      <main className="mb-24 p-4 md:p-8 max-w-5xl mx-auto pt-8">
        {activeTab === 'process' && <Process />}
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'privacy' && <Privacy />}
      </main>

      {/* Dock has been hidden per request */}
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground bg-surface/30">
        <p>© {new Date().getFullYear()} Gonçalo Cereja. All rights reserved.</p>
        <button onClick={() => setActiveTab('privacy')} className="mt-4 text-xs hover:text-foreground hover:underline transition-colors">Privacy Policy</button>
      </footer>
    </div>
  );
}

export default App;
