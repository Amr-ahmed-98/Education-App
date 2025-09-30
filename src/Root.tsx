import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/Errors/Loading';

const Root = () => { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Root;
