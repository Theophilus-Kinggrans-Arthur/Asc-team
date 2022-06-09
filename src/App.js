
import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Matches from './components/MatchUpdate/Matches';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <main>
     <Navbar />
     <Header />
     <Features />
     <Matches/>
    </main>
  );
}

export default App;
