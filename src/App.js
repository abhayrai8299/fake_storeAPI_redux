import './App.css';
import Header from './containers/Header';
import {Routes,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productID' element={<ProductDetail />} /> 
       </Routes>
    </div>
  );
}

export default App;
