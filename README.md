# CUET ConnectX

<div align="center">
  <img src="src/assets/logos/CUET_Vector_Logo.svg.png" alt="CUET Logo" width="120" />
  
  **Connect with CUETians Worldwide**
  
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.7-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

## 📖 About

CUET ConnectX is a modern web platform designed to connect students and alumni of **Chittagong University of Engineering and Technology (CUET)**. The platform facilitates networking, job opportunities, scholarship discovery, and community building among CUETians worldwide.

### ✨ Key Features

- 🔐 **User Authentication** - Secure login/signup with Student ID verification
- 💼 **Job Board** - Browse and apply to job opportunities shared by the community
- 🎓 **Scholarships** - Discover funding opportunities for academic pursuits
- 👥 **Community Network** - Connect with students and alumni across the globe
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cuet-connectx-react.git
   cd cuet-connectx-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
cuet-connectx-react/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   ├── images/        # Image assets
│   │   └── logos/         # Logo files (CUET logo)
│   ├── components/
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   └── Footer.jsx     # Footer component
│   ├── context/
│   │   ├── AuthContext.jsx    # Authentication state management
│   │   └── ThemeContext.jsx   # Theme (dark/light) management
│   ├── pages/
│   │   ├── Home.jsx       # Landing page
│   │   ├── Jobs.jsx       # Job listings page
│   │   ├── Scholarships.jsx   # Scholarships page
│   │   ├── Community.jsx  # Community members page
│   │   ├── About.jsx      # About page
│   │   ├── FAQ.jsx        # Frequently asked questions
│   │   ├── Login.jsx      # User login page
│   │   ├── Signup.jsx     # User registration page
│   │   └── Profile.jsx    # User profile page
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles & Tailwind config
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 6** | Build Tool & Dev Server |
| **React Router 7** | Client-side Routing |
| **Tailwind CSS 4** | Utility-first CSS Framework |
| **Font Awesome 6** | Icon Library |
| **Google Fonts** | Typography (Inter, Poppins) |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🎨 Features Breakdown

### Authentication
- Student ID-based registration (7-digit format)
- Automatic batch year detection from Student ID
- User type classification (Student/Alumni)
- Persistent login state with localStorage

### Job Board
- Search functionality (by title, company, location)
- Apply tracking per session
- Login redirect for non-authenticated users

### Scholarships
- Visual scholarship cards with provider info
- Deadline tracking with visual indicators
- Apply functionality with status feedback

### Community
- Member profiles with batch and department info
- Connect/Disconnect functionality
- Profile initials avatars with gradient backgrounds

### Theme System
- System-aware dark mode
- Persistent theme preference
- Smooth transition animations

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👏 Acknowledgments

- **CUET** - Chittagong University of Engineering and Technology
- **CUET Alumni Association** - For inspiration and community support
- All contributors and community members

---

<div align="center">
  <p>Made with ❤️ for CUETians</p>
  <p>© 2026 CUET ConnectX. All rights reserved.</p>
</div>
