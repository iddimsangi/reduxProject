import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './containers/Header'
import ProductCardList from './containers/ProductCardList'
import CardProfile from './containers/cardProfile'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" exact element={<ProductCardList/>}/>
       <Route path="/profile/:id" exact element={<CardProfile/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
