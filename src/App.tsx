import { useState } from 'react';
import { Dock } from './components/Dock';
import type { TabId } from './constants/tabs';
import { Identity } from './components/sections/Identity';
import { Architectures } from './components/sections/Architectures';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('identity');

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
      {/* Contextual Header - Changes based on Tab */}
      <header className="p-6 border-b border-gray-800 bg-[#161b22]/50 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-mono text-gray-400">
            STATUS: <span className="text-green-500">ONLINE</span> // SECTION: {activeTab.toUpperCase()}
          </h2>
          <div className="text-xs font-mono text-gray-500">
            LOC: LISBON_PT // XP: 6Y+
          </div>
        </div>
      </header>
      
      <main className="pb-32 p-8 max-w-7xl mx-auto">
        {activeTab === 'identity' && <Identity />}
        {activeTab === 'architectures' && <Architectures />}
        {activeTab === 'ai_lab' && (
          <div className="p-8 mt-12 mb-8 bg-surface border border-white/5 rounded-3xl shadow-2xl">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-yellow bg-clip-text text-transparent mb-4">AI Lab</h1>
            <p className="text-primary">Content for AI Lab will go here.</p>
          </div>
        )}
        {activeTab === 'terminal' && (
          <div className="p-8 mt-12 mb-8 bg-surface border border-white/5 rounded-3xl shadow-2xl">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-yellow bg-clip-text text-transparent mb-4">Terminal</h1>
            <p className="text-primary">Content for Terminal will go here.</p>
          </div>
        )}
      </main>

      <Dock activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
