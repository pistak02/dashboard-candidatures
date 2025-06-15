import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routes';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className='app-container glass'>
      <Header/>
      <BrowserRouter>
        <main className='main-content'>
          <RouterConfig/>
        </main>
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
