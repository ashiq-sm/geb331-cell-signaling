# SM NextGen BioNotes

![GitHub last commit](https://img.shields.io/github/last-commit/ashiq-sm/geb331-cell-signaling?color=10b981&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/ashiq-sm/geb331-cell-signaling?color=10b981&style=for-the-badge)

**SM NextGen BioNotes** is a bilingual (Bengali/English) interactive study hub tailored specifically for GEB (Genetic Engineering and Biotechnology) students. It aims to make complex academic topics approachable, easy to navigate, and extremely accessible.

🌐 **Live Deployment:** [sm-nextgen-bionotes.vercel.app](https://sm-nextgen-bionotes.vercel.app)

---

## 🎯 Features

*   **Bilingual Smart Mix:** Content seamlessly blends English academic terms with Bengali explanations for optimal comprehension.
*   **Interactive Study Notebooks:** Expandable modules, markdown rendering, and Mermaid diagrams for complex biological pathways.
*   **Built-in Accessibility Options:**
    *   Dark / Light Theme Toggle 🌓
    *   Font Size Controls (A- / A+) 🔍
    *   3 Carefully Selected Font Family Choices 🔠
*   **Progress Tracking:** Monitors the topics you have completed and saves your study streak locally.
*   **Export to PDF:** Specifically optimized `@media print` CSS for a distraction-free, print-ready document.
*   **Smart Search:** Search across all modules with real-time text highlighting.
*   **Responsive UI:** Works elegantly on Desktop and Mobile.

---

## 📚 Supported Courses

Currently, the hub focuses on the following Year 3, Semester 2 courses:
*   **GEB 331:** Cell Signaling (Complete)
*   **GEB 335:** Fermentation Technology (Complete)

*Upcoming Courses:* rDNA Technology, Onco Virology, Aqua & Fish Pathology, Bioenergetics, and Bioprocess Engineering.

---

## 🛠️ Project Structure

The deployment directory contains the finalized interactive web application:

```
.
├── index.html                                        # The main Landing Page Hub
├── GEB331_MASTER_EXAM_PREP_INTERACTIVE_v4_FINAL.html # Cell Signaling Study Module
├── GEB335_FERMENTATION_TECH_INTERACTIVE.html         # Fermentation Tech Study Module
├── vercel.json                                       # Vercel deployment configuration
└── data/                                             # Directory containing JS arrays for markdown sets
    ├── geb331_data.js
    ├── geb331_data_part2.js
    ├── geb331_data_part3.js
    ├── geb331_data_part4.js
    └── geb335_data.js
```

---

## 💻 Tech Stack

*   **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6)
*   **Markdown Parsing:** [Marked.js](https://marked.js.org/)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Styling:** Custom CSS Custom Properties (Variables), Flexbox, CSS Grid

---

## 🧑‍💻 Developed By

**SM Ashikur Rahman**
Developed with 💚 for GEB Students.

*   [LinkedIn](https://www.linkedin.com/in/sm-ashikur-rahman/)
*   [YouTube](https://www.youtube.com/@smashiqurrahman8150)
*   [GitHub](https://github.com/ashiq-sm)

*“Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.”* — A.P.J. Abdul Kalam
