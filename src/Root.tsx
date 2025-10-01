import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/Errors/Loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Root = () => {
  const [loading, setLoading] = useState(true);
  const queryClient = new QueryClient();
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
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={AppRouter} />
        </QueryClientProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Root;
