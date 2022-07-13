import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import PageSelectAction from './Components/PageSelectAction';
//import PageImportWallet from './Components/PageImportWallet';
//import PageCreateWallet from './Components/PageCreateWallet';
import PageB from './Components/PageSelectAction';



// import your route component


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<PageB />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
