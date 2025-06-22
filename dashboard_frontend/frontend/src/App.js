import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './routes';

import Sidebar from './components/layout/Sidebar/Sidebar';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Sidebar/>
        <main className='main-content'>
          <RouterConfig/>
        </main>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
