import { createContext, useContext, useState } from 'react';

/* 🔹 SINGLE SOURCE OF TRUTH */
export interface Activity {
  id: string;
  description: string;
  category: 'transport' | 'food' | 'energy' | 'waste' | 'shopping' | 'other';
  estimatedEmissionKgCo2: number;
  datetime: string; // ISO string
  source: 'AI' | 'Manual';
}

interface ActivitiesContextType {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  editActivity: (activity: Activity) => void;
}

const ActivitiesContext = createContext<ActivitiesContextType | undefined>(
  undefined
);

export function ActivitiesProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (activity: Activity) => {
    setActivities(prev => [activity, ...prev]);
  };

  const deleteActivity = (id: string) => {
    setActivities(prev => prev.filter(a => a.id !== id));
  };

  const editActivity = (updated: Activity) => {
    setActivities(prev =>
      prev.map(a => (a.id === updated.id ? updated : a))
    );
  };

  return (
    <ActivitiesContext.Provider
      value={{ activities, addActivity, deleteActivity, editActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivitiesContext);
  if (!context) {
    throw new Error('useActivities must be used within ActivitiesProvider');
  }
  return context;
}