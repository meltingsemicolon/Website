# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects and professional information.

🌐 **Live Site:** [shakyaabhishek.com.np](https://shakyaabhishek.com.np)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and professional interface
- **Project Showcase** - Display of featured projects and work
- **Contact Form** - Integrated email functionality using EmailJS
- **Fast Performance** - Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** CSS3
- **Email Service:** EmailJS
- **Linting:** ESLint

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
Website/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/       # Images and media files
│   ├── App.jsx       # Main application component
│   ├── App.css       # Global styles
│   ├── main.jsx      # Application entry point
│   └── index.css     # Base styles
├── index.html        # HTML template
├── package.json      # Project dependencies
└── vite.config.js    # Vite configuration
```

## 🔧 Configuration

### EmailJS Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Configure your template
4. Update the EmailJS credentials in the Contact component

## 🚢 Deployment

The website can be deployed to various platforms:

- **Netlify:** Connect your repository and deploy automatically
- **Vercel:** Import your project for instant deployment
- **GitHub Pages:** Use the build output for static hosting

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist` directory.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhishek Shakya**

- Website: [shakyaabhishek.com.np](https://shakyaabhishek.com.np)

---

⭐ If you found this project helpful, please consider giving it a star!
