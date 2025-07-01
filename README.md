# Offline-First User Journey & Analytics Portal

## Overview

This project is an **Offline-First User Journey & Analytics Portal** built using the **MERN stack** with **Next.js** for the frontend. It allows tracking and recording of user activities on a website **regardless of internet connectivity**. The core goal is to ensure that **user activity data is not lost even when offline**, and is reliably synchronized to the server once the internet connection is restored.

## Problem Statement

Modern analytics platforms generally assume a stable internet connection. However, in real-world scenarios—especially in developing regions or during brief outages—users can go offline temporarily. This leads to gaps in tracking user behavior, which is critical for user experience optimization and business insights.

This project solves the problem of **reliable user activity tracking** in both **online and offline** modes:

- When **online**, user events are captured and sent directly to the backend.
- When **offline**, events are stored locally (e.g., in `mongoDb` or `localStorage`) and **automatically synced** to the backend once connectivity is restored.

##  Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **State Management & Storage:** LocalStorage/MongoDb and  API
- **Offline Detection:** Navigator API (`navigator.onLine`), Service Workers

##  Key Features

<!-- image will be added later -->

-  **Offline-first tracking**: Activities are logged even when disconnected.
-  **Automatic syncing**: Local logs sync with the backend when online.
-  **Analytics portal**: View user journey timelines and behavioral stats.
-  **Seamless UX**: No disruption to users during connectivity loss.

##  Key Flow Diagram

##  Example Use Cases
A user clicks through a multi-step form while offline — all steps are stored.

After internet is restored, the steps are automatically synced to the server.

Admins or analysts can view user flows, even if they occurred offline.


## Challenges & Hurdles

 Implementing offline-first analytics is non-trivial due to:

 Lack of standard patterns for local-first analytics workflows.

 Manual implementation of data syncing logic.

 Handling local storage limitations and security concerns.

 Ensuring data integrity and preventing duplication upon sync.

 Most tracking platforms are online-only (e.g., Google Analytics), so this required custom tooling from scratch.


## Future Improvements
Add Service Workers for even more robust offline support.

Support for custom event tagging by developers.

Integrate visual heatmaps and session replays.

Add end-to-end encryption for user data.



<!-- this will be modified later -->
# Clone repository
git clone https://github.com/yourusername/offline-analytics-portal.git

# Navigate to client and install
cd client && npm install

# Navigate to server and install
cd ../server && npm install

# Start development
npm run dev  # From both client and server folders


# 📡 API Documentation

## 🔗 Base URL
http://localhost:5001/api

---

## 📘 Endpoints

### 1. `GET /session`

#### Description:
Returns a list of **unique session IDs** found in the logs.

#### 📤 Response:

```json
[
  "session_abc123",
  "session_def456",
  "session_xyz789"
]
```
### 2. `GET /numberOfSession`

#### Description:
Returns the **number of unique session IDs** found in the logs.

#### Response:

```json
{
  "count": 42
}
```
### 3. `GET /getSessionDuration`

#### Description:
Returns the total duration of each session based on PAGE_DURATION events. Duration is provided in seconds and a human-readable format.

#### Response:

```json
[
  {
    "session_id": "session_abc123",
    "total_duration_seconds": 123.456,
    "readable": "2m 3.46s"
  },
  {
    "session_id": "session_xyz789",
    "total_duration_seconds": 45.789,
    "readable": "0m 45.79s"
  }
]

```
### 4. `GET /formSubmitCount`

#### Description:
Returns the total number of FORM_SUBMIT events recorded.

#### Response:

```json
{
  "event": "FORM_SUBMIT",
  "count": 17
}


```
### 4. `GET /pageViewCount`

#### Description:
Returns a breakdown of the number of times each page (event label) was viewed. Only includes PAGE_VIEW events.

#### Response:

```json
[
  {
    "event_label": "/home",
    "count": 10
  },
  {
    "event_label": "/contact",
    "count": 5
  },
  {
    "event_label": "/about",
    "count": 8
  }
]

```



<!-- this part neeeded to be added
# Clone repository
git clone https://github.com/yourusername/offline-analytics-portal.git

# Navigate to client and install
cd client
npm install

# Navigate to server and install
cd ../server
npm install

# Run both frontend and backend (in separate terminals)
npm run dev     # For Next.js client
npm start       # For Express server
 -->