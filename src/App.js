import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './containers/Header'
import ProductCardList from './containers/ProductCardList'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     {/* <Route path="/" exact element={<Header/>}/> */}
     <Route path="/" exact element={<ProductCardList/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
