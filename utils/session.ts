export function getSessionId(): string {
  let sessionId = localStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID(); // or use uuid v4
    localStorage.setItem('session_id', sessionId);
  }
  return sessionId;
}
