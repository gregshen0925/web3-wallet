//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import WelcomeLayout from './Components/PageWelcome';
import SelectActionLayout from './Components/PageSelectAction';
// import ImportWalletLayout from './Components/PageImportWallet';
import CreatePasswordLayout from './Components/PageCreatePassword';
import SeedPhraseLayout from './Components/PageSeedPhrase';
import PageValidateSeedPhrase from './Components/PageValidateSeedPhrase';
// page -> component -> component ->1 state -> 
//                                ->2 function -> 



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomeLayout />} />
        <Route path="/select-action" element={<SelectActionLayout />} />
        {/* <Route path="/import-wallet" element={<ImportWalletLayout />} /> */}
        <Route path="/create-password" element={<CreatePasswordLayout />} />
        <Route path="create-password/seed-phrase" element={<SeedPhraseLayout />} />
        <Route path="create-password/validate-seed-phrase" element={<PageValidateSeedPhrase />} />




      </Routes>

    </BrowserRouter>
  );
}

export default App;
