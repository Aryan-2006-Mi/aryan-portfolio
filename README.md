# Aryan Mishra — Portfolio

A responsive React + Vite portfolio site with a professional dark visual style.

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Extract this project and open its folder in VS Code.
3. Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Before publishing

- Profile photo is stored in `public/profile.jpg`; replace it with another image using the same filename if you want to update it.
- Your Gear and Time & Task Management repository/demo links are connected. Add the Number Detection Neural Network and Food Product History URLs in the `projects` array in `src/main.jsx` when available.
- Confirm that your phone number should be public before publishing; it is intentionally not displayed on the page right now.
- Review all skills and project descriptions to make sure they accurately reflect your current experience.

## Build for deployment

```bash
npm run build
```

The production site is generated in `dist/`. You can deploy it to Vercel, Netlify, or another static hosting service.
