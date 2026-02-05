# chipsInput

A lightweight and interactive **Chips Input component built with React**, allowing users to add and remove items dynamically using keyboard input.

This project demonstrates core React concepts such as controlled components, state management with hooks, conditional rendering, and basic UI interactions.

---
<img width="793" height="328" alt="chipsInput" src="https://github.com/user-attachments/assets/3895571f-8b4b-4577-9983-c3e6df1532f9" />

---

## 🔗 Overview

The **chipsInptu** component enables users to:
- Enter text into an input field
- Press **Enter** to convert the text into a chip
- Remove individual chips with a click
- View a placeholder message when no chips are added

It is a common UI pattern used in forms, tag inputs, and multi-select fields.

---

## ✨ Features

- Dynamic chip creation using keyboard input
- Individual chip removal functionality
- Conditional empty-state message
- Simple and responsive layout
- Clean and readable component structure

---

## 🛠️ Technologies Used

- **React**
- **JavaScript (ES6+)**
- **CSS**
- React Hooks (`useState`)

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chipsInptu.git
2. Navigate to the project directory
cd chipsInptu

3. Install dependencies
npm install

4. Start the development server
npm run dev

The application will be available at:
👉 http://localhost:3000
---

📁 Project Structure
src/
├── components/
│   └── ChipsInput.jsx
├── styles/
│   └── styles.css
├── App.js
└── index.js
---

🧠 Component Behavior

The input field is a controlled component

On pressing Enter, the input value is added to state

Chips are rendered dynamically using map

Each chip includes a delete icon to remove it from state

When the list is empty, a default message is displayed
---
🔮 Possible Enhancements

Prevent duplicate chip entries

Trim whitespace from input

Backspace-to-delete last chip

Keyboard accessibility improvements

Animations for chip addition/removal

Package as a reusable component
---
👤 Author

Muhammad Qasim
Frontend Developer | React Enthusiast
