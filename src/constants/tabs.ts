export const TABS = [
  { id: 'identity', label: 'Identity', icon: 'User' },
  { id: 'architectures', label: 'Architectures', icon: 'Layers' },
  { id: 'ai_lab', label: 'AI Lab', icon: 'Cpu' },
  { id: 'terminal', label: 'Terminal', icon: 'SquareTerminal' },
] as const;

export type TabId = typeof TABS[number]['id'];
