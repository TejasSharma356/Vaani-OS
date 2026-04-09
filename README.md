<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=FF6B00&height=200&section=header&text=VAANI&fontSize=90&fontColor=ffffff&descAlignY=70&descAlign=62" width="100%" />

  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=26&duration=3000&pause=1000&color=FF6B00&center=true&vCenter=true&width=600&lines=Voice+AI+for+Every+Indian;Zero+Internet+Required;No+Smartphone+Needed;Dial+*321%23+to+Speak+with+VAANI" alt="Typing SVG" />
  </a>
  
  <p align="center">
    <strong>An AI Operating System designed natively to serve India's 600M+ feature phone users.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  </p>
</div>

<br />

> 🚀 **Mission**: Bring native GenAI conversational capabilities to grassroots populations who have zero internet connectivity and no smart devices. By utilizing edge protocols (USSD, Voice), VAANI operates instantly on network carriers natively.

## ✨ Features
1. **Interactive Demo OS Environment**: Experience the retro-futuristic `*321#` terminal simulator that mimics a non-smartphone interface directly within the web application.
2. **Contact & Feedback Node**: Fully integrated REST API to communicate user queries natively into MongoDB Atlas using MERN protocols.
3. **MERN Separation**: Distinct isolation between the dynamic React/Vite Client frontend and the robust Node/Express Server backend.

---

## 🛠 Framework & Architecture

The migration splits the original monolithic HTML architecture into a sophisticated MERN stack layout optimized for highly scalable deployment on infrastructures like Vercel and Heroku.

```plaintext
vaani-mern/
├── frontend/             # ⚛️ React UI via Vite (Deployed perfectly on Vercel)
│   ├── src/
│   │   ├── components/   # React components (LiveDemo, ContactModal)
│   │   ├── index.css     # Dark Mode/Grid Noise Visual Identity
│   │   └── App.jsx       # Root layout assembly
│   └── package.json
└── backend/              # ⚙️ Node + Express Application API (Endpoints & Models)
    ├── server.js         # API endpoint architecture
    ├── .env              # Secrets and Mongo URI
    └── package.json
```

## ⚙️ Quick Start Installation

Clone the repository and install the Node.js application dependencies. You will need `npm` installed.

### 1️⃣ Database Config
Create a `.env` file in the `backend/` directory replacing the filler URI string with your active MongoDB Atlas connection:
```env
MONGODB_URI=mongodb+srv://<USER>:<PASS>@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```

### 2️⃣ Run the backend
```bash
cd backend
npm install
npm start
```

### 3️⃣ Run the frontend
Open a completely new terminal and navigate to your `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```
> The application will instantly boot up with Auto-Reload capabilities at **`http://localhost:5173`**.

---

<div align="center">
  <i>Designed with immense persistence for the grassroots of India 🇮🇳 </i>
  <br/><br/>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=FF6B00&height=100&section=footer" width="100%" />
</div>
