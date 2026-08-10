# 🍎 macOS Web Portfolio Clone

A modern, interactive macOS Web Desktop interface built with **React**, **Vite**, and **SCSS**. Featuring floating window management, glassmorphism design, colorful app dock shortcuts, and syntax-highlighted developer notes.

---

## ✨ Features

- 🖥️ **macOS Desktop Experience**: Glassmorphic top navigation menu bar with real-time status clock and apple dropdown menu.
- 🎨 **Vibrant App Dock**: Custom macOS app shortcuts styled with authentic brand gradients and 60fps GPU hardware-accelerated magnification animations.
- 📝 **Color-Highlighted Code Notes**: Interactive developer profile viewer loading `/note.txt` rendered with `react-syntax-highlighter` (Atom One Dark theme).
- 🪟 **Floating Window Manager**: Resizable and draggable terminal windows powered by `react-rnd` with smart responsive initial screen positioning.
- 📱 **Fully Responsive**: Seamlessly adapts across Mobile ($\le 600\text{px}$), Tablet ($\le 768\text{px}$), and Desktop viewports.
- ⚡ **Clean UI Aesthetics**: Zero visible scrollbars with smooth touch scrolling and custom typography.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: SCSS, Modern CSS (Glassmorphism, CSS Gradients, Hardware Acceleration)
- **Components & Libraries**:
  - [`react-syntax-highlighter`](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Syntax highlighting for code notes
  - [`react-rnd`](https://github.com/bmorelli25/react-rnd) - Draggable and resizable window components
  - [`@fortawesome/react-fontawesome`](https://fontawesome.com/) - Vector icons

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DeepakNegi13/MacOs.git
   cd MacOs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Scripts

- `npm run dev` - Launches local Vite development server
- `npm run build` - Builds production bundle into `dist` directory
- `npm run lint` - Runs ESLint code quality checks
- `npm run preview` - Previews production build locally

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
