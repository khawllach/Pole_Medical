<div align="center">

# 🏥 Pole Medical

**A modern, responsive medical center web application built with React, TypeScript and Vite.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

[Live Demo](#) · [Report a Bug](https://github.com/khawllach/Pole_Medical/issues) · [Request a Feature](https://github.com/khawllach/Pole_Medical/issues)

</div>

---

## 📖 About

**Pole Medical** is the front-end of a medical center web application. It aims to give patients a clear, fast and accessible way to discover the center, its services and its practitioners, on any device.

The project is built with a type-safe, modern toolchain: React 19 and TypeScript for the UI, React Router for multi-page navigation, Tailwind CSS v4 for styling, and Vite for lightning-fast builds.

> ✏️ **Add 2–3 sentences here** describing exactly what Pole Medical offers (appointment booking, doctor profiles, services, patient space, etc.) and who it is for.

## 🖼️ Preview

<!--
Add screenshots here. Tip: create a `screenshots/` folder in the repo, commit your images,
and reference them like this:

![Home page](./screenshots/home.png)
-->

## ✨ Features

- 🧭 **Multi-page navigation** with React Router v7
- 🔒 **Type-safe codebase** thanks to TypeScript
- 🎨 **Modern, utility-first styling** with Tailwind CSS v4
- 📱 **Responsive design** for mobile, tablet and desktop
- ⚡ **Instant dev feedback** with Vite and Hot Module Replacement (HMR)
- 🧹 **Fast linting** with Oxlint

> ✏️ Replace or extend this list with your real features (for example: appointment booking, doctors directory, services pages, contact form, patient dashboard, etc.).

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 8](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Linting | [Oxlint](https://oxc.rs/docs/guide/usage/linter) |

## 📁 Project Structure

```
Pole_Medical/
├── public/                 # Static assets (favicon, images, etc.)
├── src/                    # Application source code
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript config for the app
├── tsconfig.node.json      # TypeScript config for Node tooling
├── .oxlintrc.json          # Oxlint configuration
└── package.json            # Dependencies and scripts
```

> ✏️ Expand the `src/` section with your real folders (for example `components/`, `pages/`, `assets/`, `App.tsx`, `main.tsx`).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20.19 or newer (LTS recommended)
- npm (included with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khawllach/Pole_Medical.git
   cd Pole_Medical
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the local URL shown in your terminal (usually <http://localhost:5173>).

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Type-checks with TypeScript, then creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs Oxlint across the project |

## 🌐 Deployment

Build the project and deploy the generated `dist/` folder to any static hosting provider:

```bash
npm run build
```

Works with [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), [Cloudflare Pages](https://pages.cloudflare.com/) or [GitHub Pages](https://pages.github.com/).

> ⚠️ Because the app uses client-side routing, configure your host to redirect all routes to `index.html` (a "single-page app" rewrite) so that direct links and page refreshes work.

## 🗺️ Roadmap

- [ ] Add a live demo link
- [ ] Connect the app to a backend API
- [ ] Add online appointment booking
- [ ] Add multilingual support (e.g. French / Arabic / English)

> ✏️ Edit this list to match your real plans, or remove the section.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please run `npm run lint` before submitting a PR.

## 📄 License

This project is open source. Add a `LICENSE` file (for example MIT) to the repository and update this section accordingly.

## 👤 Author

**khawllach**

- GitHub: [@khawllach](https://github.com/khawllach)

---

<div align="center">

⭐ If you like this project, give it a star on GitHub!

</div>
