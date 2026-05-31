# Elon Zenelaj — Portfolio (Vite + React)

A modern personal portfolio built with **Vite** and **React.js** (plain CSS, no TypeScript, no Tailwind).

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```
Opens at **http://localhost:5173**

### 3. Build for production
```bash
npm run build
```

### 4. Preview the production build
```bash
npm run preview
```

## Project Structure

```
portfolio-vite/
├── index.html
├── vite.config.js
├── package.json
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          ← global styles & CSS variables
    └── components/
        ├── Icons.jsx
        ├── Navbar.jsx     + Navbar.css
        ├── Hero.jsx       + Hero.css
        ├── About.jsx      + About.css
        ├── Skills.jsx     + Skills.css
        ├── Projects.jsx   + Projects.css
        ├── Education.jsx  + Education.css
        ├── Courses.jsx    + Courses.css
        ├── Contact.jsx    + Contact.css
        └── Footer.jsx     + Footer.css
```

## Tech Stack
- **Vite** (build tool)
- **React 18** (functional components + hooks)
- **Plain CSS** (no Tailwind, no TypeScript)
- **Google Fonts**: Syne, DM Sans, DM Mono
