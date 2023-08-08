import { Route,  Routes, useLocation } from 'react-router-dom'
import { Home } from "./pages/Home"
import { SendTestimonials } from './pages/SendTestimonials';
import { SendMessage } from './pages/SendMessage';
import { AdminLogin } from './pages/AdminLogin';
import { AdminNavBar } from "./components/AdminNavBar";

function App() {
  const location = useLocation();
  return (
    
      <div className="bg-white dark:bg-semiDark">
        <div className={`bg-white dark:bg-semiDark py-6 px-4 lg:px-6 fixed w-screen z-10 ${location.pathname === '/' ? 'hidden' : '' }`}>
          <AdminNavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/testimonial' element={<SendTestimonials />} />
          <Route path='/message' element={<SendMessage />} />
          <Route path='/login' element={<AdminLogin />} />
        </Routes>

      </div>
  );
}

export default App;
