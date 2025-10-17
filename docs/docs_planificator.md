# 🧭 Planificator complet – Aplicație Pariuri Inteligente

**Durată totală:** 30 de zile  
**Tehnologii principale:**  
- Backend: Node.js (Express), MongoDB, JWT  
- Frontend: React, TailwindCSS, Axios  
- Deploy:  
  - **Backend:** Render.com *(free tier)*  
  - **Frontend:** Vercel *(free tier)*  
  - **Bază de date:** MongoDB Atlas *(free cluster)*  
- Mobile: PWA + publicare prin **Google Play (Android)** și **Apple App Store** folosind **Capacitor / Expo (free tools)**

---

## ⚙️ Obiectiv general

Dezvoltarea unei aplicații web și mobile pentru generarea și gestionarea biletelor de pariuri inteligente.  
Aplicația va permite autentificarea utilizatorilor, crearea de bilete gratuite sau premium, vizualizarea statisticilor și actualizarea automată a rezultatelor.

---

## 📅 Etape majore de dezvoltare

| Fază | Obiectiv principal | Durată estimată |
|------|--------------------|----------------|
| Faza 1 | Setup infrastructură + autentificare | 4 zile |
| Faza 2 | Baza de date + funcționalități Tickets | 6 zile |
| Faza 3 | Frontend complet + UI/UX | 10 zile |
| Faza 4 | Testare, optimizare, securitate | 7 zile |
| Faza 5 | Deploy final + publicare | 3 zile |

---

## 🧩 Faza 1 – Setup infrastructură (Zilele 1–4)

### Ziua 1 – Configurare proiect
- Instalează:
  - Node.js (LTS)
  - MongoDB local sau [MongoDB Atlas (free)](https://www.mongodb.com/atlas)
  - VSCode, Git
- Creează repo-uri:
  - `app-backend-node`
  - `app-frontend-react`
- Structură backend:
  ```
  /models
  /controllers
  /routes
  /middlewares
  /migrations
  /config
  server.js
  ```

### Ziua 2 – Autentificare
- Creează model `User` cu câmpuri:
  ```
  name, email, password, premium (boolean)
  ```
- Adaugă rute:
  - `POST /register`
  - `POST /login`
  - `GET /me` (JWT)
- Instalează și configurează:  
  `bcrypt`, `jsonwebtoken`, `express-validator`
- Testează cu Postman.

### Ziua 3 – Leagues & Teams
- Creează model `League` + `Team`.
- Migrație: populare manuală sau script JSON local.
- Endpoint-uri:
  - `GET /leagues`
  - `GET /leagues/:id/teams`

### Ziua 4 – Validare și testare
- Testează relația `league -> teams` în Postman.
- Adaugă middleware pentru erori și logging (morgan).

---

## 🎫 Faza 2 – Tickets și logica pariurilor (Zilele 5–10)

### Ziua 5 – Model și relații
- Creează modelul `Ticket`:
  ```
  tip_ticket (free/register/premium)
  date
  matches: [ { sport, league, team1, team2, ora_start, tips, odd, results, win } ]
  total_odd
  money_bit
  win_ticket
  total_money_win
  bank_money
  code_ticket
  userId (ObjectId)
  ```
- Leagă `Ticket` de `User`.

### Ziua 6 – Endpoint-uri Tickets
- `POST /tickets`  
- `GET /tickets`  
- `GET /tickets/:id`  
- `DELETE /tickets/:id`
- Protejează cu JWT.

### Ziua 7 – Calcul automat câștiguri
- Calculează `total_odd`, `total_money_win`, `bank_money`.
- Actualizează `win_ticket` după rezultate.

### Ziua 8 – Filtrare și sortare
- Adaugă query-uri: `?type=premium`, `?date=today`, `?win=1`.
- Adaugă paginare.

### Ziua 9 – Testare logică Tickets
- Simulează bilete generate și validează calcule.

### Ziua 10 – Optimizări backend
- Refactor cod.
- Adaugă rate limiting, CORS, middleware global JWT.

---

## 💻 Faza 3 – Frontend (Zilele 11–20)

### Ziua 11 – Setup React
- Creează proiect `app-frontend-react` cu Vite.
- Instalează: `react-router-dom`, `axios`, `tailwindcss`, `zustand`.

### Ziua 12–13 – Autentificare
- Pagini: `Login`, `Register`, `Profile`.
- Salvează token JWT local (`localStorage`).

### Ziua 14–15 – Pagini Leagues și Teams
- `GET /leagues` + `GET /leagues/:id/teams`.
- Creează UI modern cu Tailwind + animații simple.

### Ziua 16–17 – Tickets
- Pagini: `TicketsList`, `TicketDetails`, `CreateTicket`.
- Integrează logica din backend.

### Ziua 18–19 – Premium Features
- Filtrare bilete premium vs free.
- Buton upgrade premium (simulat).

### Ziua 20 – Optimizări
- Dark mode, responsive design, validare formulare.

---

## 🔍 Faza 4 – Testare și securitate (Zilele 21–27)

### Ziua 21–23 – Teste backend
- Instalează `jest` + `supertest`.
- Scrie teste pentru rutele principale.

### Ziua 24–25 – Teste frontend
- Testare manuală + Lighthouse + React Testing Library.

### Ziua 26 – Securitate
- Validează input-uri (express-validator).
- Adaugă protecție rate limiting, headers.

### Ziua 27 – Optimizare performanță
- Compresie, lazy-loading, code-splitting.

---

## 🚀 Faza 5 – Deploy și publicare (Zilele 28–30)

### Ziua 28 – Deploy Backend
- Creează cont pe [Render.com](https://render.com)
- Adaugă variabile: `MONGO_URI`, `JWT_SECRET`.

### Ziua 29 – Deploy Frontend
- Conectează repo la [Vercel](https://vercel.com)
- Configurează `.env` cu `VITE_API_URL`.

### Ziua 30 – Publicare Mobile
- Folosește **Capacitor** sau **Expo** pentru conversie PWA → app.
- Publică:
  - Android → Google Play Console (free dev tools)
  - iOS → Apple Developer *(prin TestFlight / free test build)*

---

## ✅ Rezultat final
- Aplicație full-stack cu backend Node.js + frontend React.
- Autentificare JWT, gestionare ligii, echipe, bilete.
- Deploy gratuit pe infrastructură complet free.
- Versiune mobilă instalabilă și publicabilă.

