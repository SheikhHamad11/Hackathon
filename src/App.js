import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Routes from "./pages/Routes"
import AuthContextProvider from './pages/Context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>

<ToastContainer/>
</>
  );
}

export default App;
