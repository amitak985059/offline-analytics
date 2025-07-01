import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5001/api'; // can be taken from dotenv hardoded for simplicity

function Home() {
  const [data, setData] = useState({
    uniqueSessions: [],
    uniqueUserCount: 0,
    pageViewCount: {},
    formSubmitCount: 0,
    sessionDurations: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          uniqueSessionsRes,
          uniqueUserCountRes,
          formSubmitCountRes,
          pageViewCountRes,
          sessionDurationsRes,
        ] = await Promise.all([
          axios.get(`${API_BASE}/session`),            
          axios.get(`${API_BASE}/numberOfSession`),   
          axios.get(`${API_BASE}/formSubmitCount`),    
          axios.get(`${API_BASE}/pageViewCount`),      
          axios.get(`${API_BASE}/getSessionDuration`),
        ]);

        setData({
          uniqueSessions: uniqueSessionsRes.data,
          uniqueUserCount: uniqueUserCountRes.data.count,
          pageViewCount: pageViewCountRes.data,
          formSubmitCount: formSubmitCountRes.data.count,
          sessionDurations: sessionDurationsRes.data,
        });

        setLoading(false);
      } catch (err) {
        console.error('Error fetching analytics:', err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">📊 Analytics Dashboard</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
       
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card title="👤 Unique Users" value={data.uniqueUserCount} />
            <Card title="📝 Form Submits" value={data.formSubmitCount} />
          
          </div>

          {Array.isArray(data.pageViewCount) && data.pageViewCount.length > 0 ? (
            <table className="w-full text-left border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Page</th>
                  <th className="p-2">Count</th>
                </tr>
              </thead>
              <tbody>
                {data.pageViewCount.map((s) => (
                  <tr key={s.event_label} className="border-t">
                    <td className="p-2 text-sm break-all">{s.event_label}</td>
                    <td className="p-2">{s.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No session durations available.</p>
          )}
          {Array.isArray(data.sessionDurations) && data.sessionDurations.length > 0 ? (
            <table className="w-full text-left border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Session ID</th>
                  <th className="p-2">Duration</th>
                  <th className="p-2">Seconds</th>
                </tr>
              </thead>
              <tbody>
                {data.sessionDurations.map((s) => (
                  <tr key={s.session_id} className="border-t">
                    <td className="p-2 text-sm break-all">{s.session_id}</td>
                    <td className="p-2">{s.readable}</td>
                    <td className="p-2">{s.total_duration_seconds}s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No session durations available.</p>
          )}

        </div>
      )}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-4 text-center">
      <div className="text-gray-600 text-sm">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

export default Home;
