import { Button } from 'react-bootstrap';
import Footer from './component/layout/js/Footer';
import NavBar from './component/layout/js/NavBar';
import Home from './component/pages/Home';

function App() {
  return (
    <div className='bg-color'>
        <NavBar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
