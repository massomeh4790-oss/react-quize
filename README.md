# 📝 React Quiz App

An interactive quiz application built with React.js. Users can answer multiple-choice questions, view their final score, and track their progress throughout the quiz.

## ✨ Features

- Step-by-step question display
- Progress tracking (answered questions / total questions)
- Current score and maximum possible score display
- Final result screen after quiz completion
- Correct answer display for incorrect responses (optional)
- Quiz restart functionality
- Fully responsive design for mobile and desktop

## 🛠️ Technologies

- **React 18** - UI development
- **React Hooks** (useState, useEffect, useReducer) - State management
- **CSS Modules / Tailwind CSS** - Styling (adjust based on your project)
- **JavaScript (ES6+)**

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-quiz.git
cd react-quiz
Install dependencies:

bash
npm install
# or
yarn install
Run the development server:

bash
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000

Production Build
bash
npm run build
# or
yarn build
🧩 How to Use
On the start screen, click the Start Quiz button.

Answer each question by selecting one of the options.

After answering, click Next to proceed to the next question.

At the end of the quiz, view your final score.

Click Try Again to restart the quiz.

📦 Questions Data Structure
The questions.json file should follow this format:

json
[
  {
    "id": 1,
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Lisbon"],
    "correctOption": 2,
    "points": 10
  }
]
🎨 Extendable Features
Add a timer for each question

Save scores using localStorage

Add difficulty levels

Connect to an API for dynamic questions

Display performance charts

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License. See the LICENSE file for more information.

📧 Contact
Massomeh - [massomeh4790@gmail.com]

Made with ❤️ and React.