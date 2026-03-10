export const TABS = [
  { id: 'profile', label: 'Profile', icon: 'User' },
  { id: 'experience', label: 'Experience', icon: 'Briefcase' },
  { id: 'projects', label: 'Projects', icon: 'Code' },
  { id: 'stack', label: 'Stack', icon: 'Terminal' }
]

export type TabId = typeof TABS[number]['id'];
