import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home';
import Starred from './pages/starred';
import MainLayout from './components/MainLayout';
import Show from './pages/show';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>

          <Route path="/shows/:showId" element={<Show />} />

          <Route path="*" element={<div>Not found</div>} />

          {/*<Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>
    </Route>
    <Route element={<PageLayout />}>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/tos" element={<Tos />} />
    </Route>
  <Route path="contact-us" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
