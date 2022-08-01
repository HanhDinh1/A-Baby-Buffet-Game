import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhraseListPage from "./pages/PhraseListPage";
import TranslatedPhrasesPage from "./pages/TranslatedPhrasesPage";
import EditPhrasePage from "./pages/EditPhrasePage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
    <h1>Hello</h1>
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/phrases"
          element={ <IsPrivate> <PhraseListPage /> </IsPrivate> } 
        />

        <Route
          path="/phrases/:phraseId"
          element={ <IsPrivate> <TranslatedPhrasesPage /> </IsPrivate> }
        />

        <Route
          path="/phrases/edit/:phraseId"
          element={ <IsPrivate> <EditPhrasePage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
