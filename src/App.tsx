import { useState } from 'react';
import { Dock } from './components/Dock';
import type { TabId } from './constants/tabs';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('identity');

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
      <main className="pb-32 p-8 max-w-7xl mx-auto">
        {/* Placeholder for content based on activeTab */}
        <div className="p-8 mt-12 mb-8 bg-surface border border-white/5 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-yellow bg-clip-text text-transparent mb-4">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('_', ' ')}
          </h1>
          <p className="text-primary">Content for {activeTab} will go here.</p>
        </div>
      </main>

      <Dock activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
