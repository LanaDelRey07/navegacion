import {Navigation} from '../routes/Navigation'
import { Home } from './Home';
import '../styles/App.css'

function App() {
  return (
    <div className='main-layout'>
      <Navigation />
      <Home/>
    </div>
  );
}

export default App;
