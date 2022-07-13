//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import PageSelectAction from './Components/PageSelectAction';
//import PageImportWallet from './Components/PageImportWallet';
//import PageCreateWallet from './Components/PageCreateWallet';
import PageSelectAction from './Components/PageSelectAction';
import WelcomeLayout from './Components/PageWelcome';



// import your route component


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectAction />} />
        <Route index element={<WelcomeLayout />} />
        <Route path="/select-action" element={<PageSelectAction />} />
        <Route path="/import-wallet" element={<PageSelectAction />} />
        <Route path="/create-action" element={<PageSelectAction />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
