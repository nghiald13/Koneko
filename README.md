Plaintext
# Koneko Frontend

![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_API-2.5_Flash-orange?style=for-the-badge&logo=google-gemini&logoColor=white)

The modern, responsive, and high-performance user interface for the Koneko landing page. Integrated with real-time AI Chat Agent for product consultation. Built with **Next.js (v16)** and **TypeScript**.

## Getting Started

Follow these steps to set up and run the Koneko Frontend development server locally on your machine.

### Prerequisites

Before installation, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended, fully optimized for modern runtimes)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- Valid API Key from [Google AI Studio](https://aistudio.google.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd Koneko
   ```

2. **Install project dependencies:**
```bash
npm install
```

3. **Configure Environment Variables:**
Create a .env.local file in the root directory of your project:

```Bash
touch .env.local
```
Open the .env.local file and configure your keys according to the provided template:

```bash
# Backend Config
BACKEND_URL=
SUBSCRIBE_API=

# Gemini Config
GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Running the Application**
Manage the application lifecycle using the standard predefined scripts:

**Development Mode** (Runs local environment with hot-module replacement):

```bash
npm run dev
```
Once running, open http://localhost:3000 in your browser to view the application.

**Production Build** (Compiles and creates an optimized production-ready bundle):

```bash
npm run build
```
**Production Start** (Launches the server with the pre-compiled build assets):

```bash
npm run start
```

📂 Project Directory Structure
```bash
src/
├── app/               # Next.js App Router (Pages, layouts, global styles, and layout wrappers)
├── components/        # Reusable UI structures & specific module features (chatbot, landing-page, animate)
├── lib/               # Shared utility functions and core helpers (e.g., tailwind-merge utilities)
└── utils/             # Business & Data Processing Logic (Server Actions, Gemini API communication)
```