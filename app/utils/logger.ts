const LOG_KEY = 'offline_logs';

export async function logEvent(data: {
  level: 'info' | 'warn' | 'error';
  message: string;
  context?: any;
}) {
  const logEntry = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  if (navigator.onLine) {
    try {
      const res = await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logEntry),
      });

      if (!res.ok) throw new Error('Failed to send log');
    } catch (err) {
      console.warn('Failed to send log, storing locally.');
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
    const res = await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logs),
    });

    if (res.ok) {
      localStorage.removeItem(LOG_KEY);
      console.log('Offline logs pushed.');
    }
  } catch (err) {
    console.error('Failed to push offline logs:', err);
  }
}
