<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=8GK8R77Bd7g" target="_blank">
      <img src="https://github.com/user-attachments/assets/1c0131c7-9f2d-4e3b-b47c-9679e76d8f9a" alt="Project Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>
 <h3 align="center"> # 🧠 AI_INTERVUE  
INTERVUE: An AI-powered mock interview platform to help you become interview-ready with real-time feedback, voice-based Q&A, and a modern interface.
  </h3>

   
</div>

#🧑‍💻TOO HECTIC TO SETUP CHECK IT OUT LIVE!!!!(BELIEVE ITS MUCH EASIER TO VIEW DEPLOYED VERSION)
🌐 [Live Demo](https://ai-intervue-eight.vercel.app/)  
📂 [GitHub Repo](https://github.com/ContactKushik/AI_INTERVUE)

---

## 📋 Table of Contents

- 🤖 [Introduction](#-introduction)  
- ⚙️ [Tech Stack](#-tech-stack)  
- 🔋 [Features](#-features)  
- 🤸 [Quick Start](#-quick-start)  
- 🕸️ [Snippets (Code to Copy)](#️-snippets-code-to-copy)  
- 🔗 [Assets](#-assets)  
- 🚀 [More](#-more)

---

## 🤖 Introduction

**AI_INTERVUE** is your personal AI interview assistant, combining voice-based AI agents, modern UI, and analytics to simulate real-world interviews. Built using Next.js and powered by Vapi AI and Google Gemini, this platform gives you a true-to-life mock interview experience.

---

## ⚙️ Tech Stack

| Tech           | Purpose                                         |
|----------------|-------------------------------------------------|
| **Next.js**    | React framework with App Router & SSR support   |
| **Firebase**   | Authentication & Firestore database             |
| **Tailwind CSS** | Utility-first styling for custom UI design    |
| **Vapi AI**    | Voice AI for interactive Q&A                    |
| **Google Gemini** | AI model for generating intelligent questions |
| **shadcn/ui**  | Component library for accessible design         |
| **Zod**        | TypeScript-first schema validation              |

---

## 🔋 Features

👉 **Authentication**  
Sign Up and Sign In using Firebase’s secure email/password authentication.

👉 **Create Interviews**  
Generate mock interviews powered by **Vapi voice assistants** and **Google Gemini**. Tailored to job roles and user preferences.

👉 **Get Feedback from AI**  
Engage in a voice-based interview with an AI agent. Receive **real-time feedback** and actionable insights based on your responses.

👉 **Modern UI/UX**  
Built with **shadcn/ui**, **TailwindCSS**, and **Next.js App Router** for a seamless user experience.

👉 **Interview Page**  
Conduct live interviews, view detailed **transcripts**, and track performance metrics.

👉 **Dashboard**  
Easily manage and track all your past interviews with a clean, navigable interface.

👉 **Responsiveness**  
Fully responsive design, ensuring functionality across all devices – mobile, tablet, and desktop.

✨ **And More**  
- Reusable and modular code architecture  
- Clean file and folder structure  
- Type-safe code using Zod  
- Progressive enhancement with SSR

---

## 🤸 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ContactKushik/AI_INTERVUE
cd AI_INTERVUE
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
OPENAI_API_KEY=your_openai_api_key
VAPI_API_KEY=your_vapi_key
GEMINI_API_KEY=your_google_gemini_key
```

### 4️⃣ Run Locally

```bash
npm run dev
# or
yarn dev
```

Now open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🕸️ Snippets (Code to Copy)

### 🔐 Firebase Init (`firebase/config.ts`)
```ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 🧠 Gemini & Vapi Sample Interaction
```ts
const res = await fetch("/api/start-interview", {
  method: "POST",
  body: JSON.stringify({
    role: "Software Developer",
    difficulty: "Medium",
  }),
});

const data = await res.json();
```

---

## 🔗 Assets

### 🧭 Vapi Workflow

The following image represents how the **Vapi Voice Interview Workflow** operates:

> 📷 `vapi_workflow.jpg` (Place this image in the root directory)

```markdown
![Vapi Workflow](./vapi_workflow.jpg)
```

---

## 🚀 More

### 📁 Folder Structure

```
.
├── app/                 # Next.js App Router
├── components/          # UI Components
├── firebase/            # Firebase Setup
├── lib/                 # Helpers and API logic
├── constants/           # App-wide static values
├── types/               # Global TypeScript types
├── public/              # Static assets
├── styles/              # Tailwind CSS config
├── .env.local           # Local environment variables
└── ...
```

### 🙌 Contributing

Have an idea or found a bug? Feel free to:

1. Fork this repo
2. Create a new branch: `git checkout -b feature/yourFeature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push and submit a PR!

### 📜 License

MIT © [Kushik](https://github.com/ContactKushik)