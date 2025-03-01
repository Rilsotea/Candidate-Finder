import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Nav />
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <CandidateSearch /> },
      { path: 'saved', element: <SavedCandidates /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  import('react-dom/client').then((ReactDOM) =>
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />)
  );
}
