import { getSessionId } from './session';

const LOG_KEY = 'offline_logs';

type LogData = {
  event: string;
  event_category: string;
  event_label: string;
  value: number;
  meta?: Record<string, string>;
};

export async function logEvent(data: LogData) {
  const session_id = getSessionId();
  const logEntry = {
    ...data,
    session_id,
    meta: data.meta ?? {},
  };

  if (navigator.onLine) {
    try {
      const res = await fetch('/api/logging', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logEntry),
      });

      if (!res.ok) throw new Error('Log push failed');
    } catch (err) {
      console.warn('Failed to push log, storing locally:', err);
      storeOfflineLog(logEntry);
    }
  } else {
    storeOfflineLog(logEntry);
  }
}

function storeOfflineLog(logEntry: any) {
  const logs = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
  logs.push(logEntry);
  localStorage.setItem(LOG_KEY, JSON.stringify(logs));
}

export async function pushOfflineLogs() {
  const raw = localStorage.getItem(LOG_KEY);
  if (!raw) return;

  const logs = JSON.parse(raw);
  if (!logs.length) return;

  try {
    const res = await fetch('/api/logging', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logs),
    });

    if (res.ok) {
      localStorage.removeItem(LOG_KEY);
      console.log(' Pushed offline logs');
    }
  } catch (err) {
    console.error('Failed to push offline logs:', err);
  }
}
