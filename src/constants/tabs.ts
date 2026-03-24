export const TABS = [
  { id: 'home', label: 'Home', icon: 'User' },
  { id: 'process', label: 'Process', icon: 'Layers' },
  { id: 'portfolio', label: 'Portfolio', icon: 'Code' },
  { id: 'privacy', label: 'Privacy', icon: 'Shield' }
]

export type TabId = typeof TABS[number]['id'];
