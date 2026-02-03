import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage, OpportunitiesPage, AboutPage } from './pages';

/**
 * Main App Component
 * Uses React Router for navigation
 * Dark mode handled by DarkModeProvider in main.jsx
 */

export default function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-background text-foreground transition-colors">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Dashboard route - placeholder for future implementation */}
            <Route
              path="/dashboard"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                      Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                      Dashboard will be implemented here
                    </p>
                  </div>
                </div>
              }
            />
            {/* 404 Not Found */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                    <p className="text-xl text-muted-foreground">Page not found</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
