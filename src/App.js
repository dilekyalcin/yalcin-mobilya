
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Koltuk from './components/KoltukTakimi';
import Masa from './components/YemekMasalari';
import TVunitesi from './components/TVunitesi';
import YatakOdasi from './components/YatakOdasi';
import { Route, Routes } from "react-router-dom";
import NewItem from './components/NewItem/NewItem';

function App() {
  return (
    <div className="App">
     <Header/>
     <Product/>
     <NewItem />
     <Routes>
      <Route path="/KoltukTakimi" element={<Koltuk />}/>
      <Route path="/YemekMasalari" element={<Masa />}/>
      <Route path="/TVunitesi" element={<TVunitesi />}/>
      <Route path="/YatakOdasi" element={<YatakOdasi />}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
