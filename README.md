# PCOD Care AI | Women's Health Portal 🌸

PCOD Care AI is a modern React web application designed to help women track, analyze, and manage Polycystic Ovarian Disorder (PCOD) and Polycystic Ovary Syndrome (PCOS). The platform integrates interactive health monitoring, visual symptom assessment, clinical severity grading, diet and exercise guidance, specialist hospital directories, and national healthcare scheme access.

---

## 🌟 Key Features

1. **Interactive Health Dashboard**:
   - **Hydration Tracker**: Log daily water intake (+0.2L glass increments) with real-time goal progress.
   - **Cycle Predictor**: Track menstrual cycle phases and upcoming period predictions.
   - **BMI & Weight Status**: Monitor weight stability and healthy BMI ranges.
   - **Research Highlights & AI Recommendations**: Stay updated with the latest clinical studies and personalized wellness tips.

2. **Visual Symptom Assessment**:
   - Interactive 5-question visual assessment covering period regularity, skin condition, hair loss, hirsutism, and abdominal weight shifts.
   - Intelligent scoring engine evaluating PCOD risk probability.

3. **Clinical Severity Grading**:
   - 3-tier clinical evaluation tool (High, Moderate, Mild Severity).
   - Instant medical suggestions and direct specialist referral links.

4. **Hormone-Balancing Diet Plans**:
   - Low Glycemic Index (GI), high-fiber, and anti-inflammatory meal recommendations.
   - Practical AI nutrition tips to manage insulin resistance.

5. **Yoga & Mindful Movement**:
   - Targeted yoga poses (Baddha Konasana, Bhujangasana, Balasana, Malasana) aimed at pelvic circulation and stress reduction.
   - Daily movement goal guidelines.

6. **Doctor Analysis & Specialist Referrals**:
   - Top-rated gynecologists & reproductive endocrinologists.
   - AI consultation summary covering insulin resistance and hirsutism management.

7. **Specialist Hospital Directory**:
   - Tamil Nadu district selector dropdown (Coimbatore, Chennai, Tiruppur, Madurai, Trichy, Salem, Vellore, etc.).
   - Instant text search across hospital names, specialties, and locations with direct website links.

8. **Govt Schemes & Digital Health ID**:
   - Access to national schemes: Ayushman Bharat (PM-JAY), Adolescent Friendly Health Clinics (AFHCs/RKSK), PMMVY, and NHM Free Diagnostic Services.
   - Direct link to create an ABHA Health ID for digital medical records.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (Plus Jakarta Sans)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd "05 PCOD"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
05 PCOD/
├── public/                # Static assets (images, icons, favicon)
│   ├── acene_oil.webp
│   ├── ai-predictive.jpg
│   └── hair.webp
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Sidebar.jsx    # Modern responsive navigation sidebar
│   ├── pages/             # Core application pages
│   │   ├── Dashboard.jsx
│   │   ├── SymptomAnalysis.jsx
│   │   ├── DietPlans.jsx
│   │   ├── YogaExercise.jsx
│   │   ├── SeverityCheck.jsx
│   │   ├── DoctorAnalysis.jsx
│   │   ├── FindHospital.jsx
│   │   └── GovtSchemes.jsx
│   ├── App.jsx            # Main app container & routing logic
│   ├── main.jsx           # Vite React entry point
│   └── index.css          # Tailwind CSS styles
├── index.html             # HTML entry file
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

---

## 📄 License

This project is built for health awareness and educational purposes.
