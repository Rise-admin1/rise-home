# Installation Guide

## Prerequisites

- Node.js and npm

---

## 1. Clone

```bash
git clone https://github.com/Rise-admin1/rise-home.git
cd rise-home
```

---

## 2. Client (`client/`)

```bash
cd client
npm install
```

Optional (not required for the current codebase — no env vars are read today):

```bash
cp sample.env .env
```

Start the Vite dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Optional production-like local serve:

```bash
npm run build
npm run preview
```

**Note:** API base URLs used by this client are currently hardcoded in source (for example Journal/Funyula endpoints). There is no env-based backend URL configuration yet.
