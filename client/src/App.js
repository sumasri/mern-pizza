import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Nabar from './components/Navbar'
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
function App() {
  return (
    <div className="App">
      <Nabar/>
      <BrowserRouter>
        
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen}/>
        <Route path="/register" exact component={Registerscreen}/>
        <Route path="/login" exact component={Loginscreen}/>
        <Route path="/orders" exact component={Ordersscreen}/>
        <Route path='/admin' component={Adminscreen}/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
