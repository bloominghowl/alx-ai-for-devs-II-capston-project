# 🎬 Streaming App (Capstone Project)

## 🔖 Project Title & Description
**Streaming App** is a modern platform for **music streaming, podcast creation, and radio listening**.  
It provides a simple, intuitive, and AI-augmented experience for users to discover, create, and enjoy content.  

- **Who it’s for**: Music lovers, podcasters, and radio listeners.  
- **Why it matters**: Combines multiple content formats (music, podcasts, radio) into one accessible platform, with a modern UI and AI-assisted development.  

---

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router, TypeScript)  
- **UI**: TailwindCSS, shadcn/ui  
- **Auth & Database**: Supabase  
- **Validation**: React Hook Form + Zod  
- **Testing**: Vitest (unit) + Playwright (e2e)  
- **AI Tools**: ChatGPT + Trae (AI-Native IDE) + CodeRabbit  

---

## 🧠 AI Integration Strategy

### Code Generation
- Use **Trae IDE** to scaffold features like auth, forms, database utilities, and middleware.  
- Generate reusable UI components with **shadcn/ui** integration.  

### Testing
- Prompt AI to generate **Vitest unit tests** for utilities and components.  
- Use AI to scaffold **Playwright e2e flows** (auth, navigation, streaming).  

### Documentation
- AI will maintain:
  - **Docstrings & inline comments** (auto-generated and revised with AI).  
  - **README.md** (this file) with updates at major commits.  
  - **11-documentation files** inside `/docs` covering architecture, auth, database, testing, etc.  

### Context-Aware Techniques
- Provide AI with **API specs**, **file trees**, and **diffs** for targeted prompting.  
- Use **CodeRabbit AI reviews** before merging to catch unclear logic and improve code clarity.  
- Label commits with clear types (`feat:`, `fix:`, `docs:`) while letting AI propose messages when needed.  

---

## 🚀 Features
- 🔐 Authentication (signup, login, session management with Supabase)  
- 🎨 Modern UI with shadcn/ui + TailwindCSS  
- 📱 Responsive design with reusable components  
- ✅ Form validation with React Hook Form + Zod  
- 🎥 Media streaming (music, podcasts, radio station support)  
- 🧪 Unit and E2E testing (Vitest + Playwright)  
- ⚡ AI-powered scaffolding, reviews, and documentation  

---

## 📂 Project Structure
--to be updated--

---
app/ # Next.js App Router pages & layouts
components/ui/ # Reusable UI components (shadcn/ui)
lib/supabase/ # Supabase client utilities (server/browser)
tests/ # Unit + e2e tests
docs/ # Project documentation (11 files)
---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/bloominghowl/alx-ai-for-devs-II-capston-project.git
```
### 2. Install Dependencies
```bash
cd streaming-app
```
### 3. Set Up Environment
```bash
npm install
```
### 4. Run the Application
```bash
npm run dev
```
### 🤖 AI Usage Evidence

## Scaffolding: Pages, middleware, Supabase clients, and forms generated via Trae.

## Testing: AI-assisted Vitest + Playwright test writing.

## Docs: README, reflection.md, and 11-documentation maintained with AI.

## Reviews: CodeRabbit AI used for commit messages and PR summaries.

## ✨ Credits

Built by Angela Ayivi

AI partners: ChatGPT + Trae + CodeRabbit

Capstone project for ALX Africa's AI for Devs II course.