import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EqualizerPage from './pages/equalizerPage/EqualizerPage.jsx';
import CalculatorPage from './pages/tipsCalculator/CalculatorPage.jsx';
import GitHubUserPage from './pages/gitHubUser/GitHubUserPage.jsx';
import ECommercePage from './pages/eCommerce/ECommercePage.jsx';
import Loopstudios from './pages/loopstudios/Loopstudios.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'equalizer',
    element: <EqualizerPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'calculator',
    element: <CalculatorPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'github-user',
    element: <GitHubUserPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'loopstudios',
    element: <Loopstudios />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'e-commerce',
    element: <ECommercePage />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
