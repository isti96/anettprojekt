import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Chat } from './pages/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header-container'>
          <Header />
        </div>
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/preadopt" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;