import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
function App() {
  return (
    <div>
      <Header/>
      <main className='py-100'style={{paddingTop:'90px'}}>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
