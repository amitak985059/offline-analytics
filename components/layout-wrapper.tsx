'use client';

import { useEffect } from 'react';
import { pushOfflineLogs } from '@/utils/logger';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const pushIfOnline = () => {
      if (navigator.onLine) {
        pushOfflineLogs();
      }
    };

    window.addEventListener('online', pushIfOnline);
    pushIfOnline(); // try once on mount

    return () => {
      window.removeEventListener('online', pushIfOnline);
    };
  }, []);

  return <>{children}</>;
}
